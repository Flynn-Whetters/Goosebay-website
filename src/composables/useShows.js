import { ref, computed } from 'vue'

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQHkbKh6xu3Bf0BJq56DEtTG6ucplRDyKHXoh5hL_FINyl24wLvRRa65hT-Ood8c9u-kSwoRKFyTcY0/pub?output=csv'

function parseDate(str) {
  // YYYY-MM-DD — parse as local time to avoid UTC timezone shift
  const iso = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/)
  if (iso) return new Date(+iso[1], +iso[2] - 1, +iso[3])

  // DD/MM/YYYY — Australian locale export from Google Sheets
  const aus = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  if (aus) return new Date(+aus[3], +aus[2] - 1, +aus[1])

  return null
}

function parseCSVLine(line) {
  const result = []
  let current = ''
  let inQuotes = false
  for (const char of line) {
    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }
  result.push(current.trim().replace(/\r$/, ''))
  return result
}

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/)
  console.log('[useShows] raw CSV first 3 lines:', lines.slice(0, 3))

  return lines.slice(1).flatMap(line => {
    if (!line.trim()) return []
    const [dateStr, venue, location, info, ticketUrl] = parseCSVLine(line)
    if (!dateStr || !venue) return []

    const date = parseDate(dateStr)
    if (!date || isNaN(date.getTime())) {
      console.warn('[useShows] could not parse date:', JSON.stringify(dateStr))
      return []
    }

    return [{
      _date: date,
      day: date.getDate(),
      month: date.toLocaleString('en-AU', { month: 'short' }).toUpperCase(),
      year: date.getFullYear(),
      venue,
      location: location || '',
      info: info || '',
      ticketUrl: ticketUrl || '',
    }]
  })
}

export function useShows() {
  const shows = ref([])
  const loading = ref(true)
  const error = ref(null)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const upcomingShows = computed(() =>
    shows.value
      .filter(s => s._date >= today)
      .sort((a, b) => a._date - b._date)
  )

  const pastShows = computed(() =>
    shows.value
      .filter(s => s._date < today)
      .sort((a, b) => b._date - a._date)
  )

  async function fetchShows() {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(SHEET_URL)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const text = await res.text()
      shows.value = parseCSV(text)
      console.log('[useShows] parsed shows:', shows.value.length, '| upcoming:', upcomingShows.value.length, '| past:', pastShows.value.length)
    } catch (e) {
      console.error('[useShows] fetch error:', e)
      error.value = 'Could not load shows right now.'
    } finally {
      loading.value = false
    }
  }

  fetchShows()

  return { upcomingShows, pastShows, loading, error, refetch: fetchShows }
}
