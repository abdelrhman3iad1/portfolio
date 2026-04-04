<template>
  <section id="education" class="py-24 bg-carbon-900/40">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Education -->
      <div class="mb-20">
        <div class="mb-12" data-aos="fade-up">
          <p class="section-label">Academic Background</p>
          <h2 class="section-title">Education</h2>
          <div class="mt-4 h-px w-16 bg-jade-400/40" />
        </div>

        <div
          v-for="edu in data"
          :key="edu.institution"
          class="card-base relative overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <!-- Decorative corner -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-jade-400/5 rounded-full blur-2xl pointer-events-none" />

          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="flex items-start gap-5">
              <!-- Icon -->
              <div class="w-12 h-12 rounded-xl bg-jade-400/10 border border-jade-400/20 flex items-center justify-center flex-shrink-0 text-xl">
                🎓
              </div>
              <div>
                <h3 class="font-display font-bold text-white text-lg mb-1">{{ edu.degree }}</h3>
                <p class="font-mono text-jade-400 text-sm mb-1">{{ edu.institution }}</p>
                <p class="font-mono text-slate-500 text-xs">{{ edu.period }}</p>
              </div>
            </div>
            <div class="flex-shrink-0 text-center md:text-right">
              <p class="font-mono text-xs text-slate-500 mb-1">GPA</p>
              <p class="font-display font-bold text-2xl text-jade-400">{{ edu.gpa.split(' ')[0] }}</p>
              <p class="font-mono text-xs text-slate-500">{{ edu.gpa.split(' ').slice(1).join(' ') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div data-aos="fade-up">
        <div class="relative rounded-3xl overflow-hidden border border-carbon-600 bg-carbon-800 p-10 md:p-14 text-center">
          <!-- Glow background -->
          <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-jade-400/8 rounded-full blur-3xl" />
          </div>

          <div class="relative">
            <p class="section-label justify-center mb-4">What's Next?</p>
            <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Build Something <span class="text-jade-400">Together</span>
            </h2>
            <p class="text-slate-400 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              I'm currently open to new opportunities. Whether you have a question, a project in mind,
              or just want to say hi — my inbox is always open.
            </p>

            <div class="flex flex-wrap gap-4 justify-center">
              <a :href="'mailto:' + personal.email" class="btn-primary text-base px-8 py-3.5">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Say Hello
              </a>
              <a :href="personal.linkedin" target="_blank" rel="noopener" class="btn-outline text-base px-8 py-3.5">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>

            <!-- Contact details -->
            <div class="mt-10 pt-8 border-t border-carbon-600 flex flex-wrap gap-6 justify-center">
              <a :href="'tel:' + personal.phone" class="flex items-center gap-2 text-slate-500 hover:text-jade-400 transition-colors text-sm font-mono">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {{ personal.phone }}
              </a>
              <a :href="'mailto:' + personal.email" class="flex items-center gap-2 text-slate-500 hover:text-jade-400 transition-colors text-sm font-mono">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {{ personal.email }}
              </a>
              <span class="flex items-center gap-2 text-slate-500 text-sm font-mono">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {{ personal.location }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  data: { type: Array, required: true },
  personal: { type: Object, required: true },
})
</script>
