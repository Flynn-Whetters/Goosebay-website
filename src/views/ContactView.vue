<template>
  <div class="contact">
    <!-- Header -->
    <section class="page-header">
      <div class="container text-center">
        <h1 class="accent">Contact</h1>
        <hr class="divider" />
        <p style="margin-top: 1rem; opacity: 0.8;">
          Bookings, collabs, or just wanna say g'day? Hit us up.
        </p>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="section">
      <div class="container contact__grid">
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <select id="subject" v-model="form.subject">
              <option value="general">General Enquiry</option>
              <option value="booking">Booking / Gig</option>
              <option value="press">Press / Media</option>
              <option value="collab">Collaboration</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              placeholder="What's on your mind?"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn btn--filled" :disabled="submitted">
            {{ submitted ? 'Sent ✓' : 'Send Message' }}
          </button>

          <p v-if="submitted" class="form-success">
            Thanks for reaching out! We'll get back to you soon.
          </p>
        </form>

        <div class="contact__sidebar">
          <div class="contact__card">
            <h3>Get in Touch</h3>
            <p>
              <strong>Email:</strong><br />
              <a href="mailto:hello@goosebay.band">hello@goosebay.band</a>
            </p>
            <p style="margin-top: 1rem;">
              <strong>Socials:</strong><br />
              <a
                href="https://www.instagram.com/goosebay.band/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram →
              </a>
            </p>
          </div>

          <div class="contact__card">
            <h3>Booking</h3>
            <p>
              For live shows and booking enquiries, flick us an email or DM us
              on Instagram. We're keen to play.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: 'general',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  // TODO: Wire up to a backend (Node.js API, Formspree, Netlify Forms, etc.)
  // For now, just show a success state.
  console.log('Form submitted:', { ...form })
  submitted.value = true

  // Reset after 4 seconds
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.subject = 'general'
    form.message = ''
  }, 4000)
}
</script>

<style scoped>
.page-header {
  padding: calc(var(--space-xl) + 2rem) 0 var(--space-md);
}

.contact__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--space-lg);
  align-items: start;
}

/* ---------- Form ---------- */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: white;
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: 6px 6px 0 var(--color-purple);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-purple);
  font-weight: 700;
}

.form-group input,
.form-group select,
.form-group textarea {
  background: var(--color-cream);
  border: 2px solid rgba(123, 63, 191, 0.2);
  border-radius: var(--radius-sm);
  padding: 0.75rem 1rem;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-off-black);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--color-off-black);
  opacity: 0.35;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-purple);
  box-shadow: 0 0 0 3px rgba(123, 63, 191, 0.15);
}

.form-group select {
  cursor: pointer;
}

.form-group select option {
  background: white;
  color: var(--color-off-black);
}

.form-success {
  color: var(--color-purple);
  font-weight: 700;
  margin-top: 0.5rem;
}

/* ---------- Sidebar ---------- */
.contact__sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact__card {
  background: white;
  border: none;
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact__card:hover {
  transform: translateY(-4px);
  box-shadow: 5px 5px 0 var(--color-orange);
}

.contact__card h3 {
  font-family: var(--font-display);
  color: var(--color-purple);
  margin-bottom: 0.75rem;
  font-size: 1.15rem;
}

.contact__card p {
  font-size: 0.95rem;
  opacity: 0.85;
}

.contact__card a {
  color: var(--color-orange);
  font-weight: 700;
}

@media (max-width: 768px) {
  .contact__grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
}
</style>
