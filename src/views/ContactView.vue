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
import '../assets/css/contact.css'
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


