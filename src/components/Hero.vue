<template>
  <section id="hero" class="relative min-h-screen flex items-center pt-16 overflow-hidden">

    <!-- Grid pattern background -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute inset-0 opacity-[0.03]"
        style="background-image: linear-gradient(#3DFFA0 1px, transparent 1px), linear-gradient(90deg, #3DFFA0 1px, transparent 1px); background-size: 80px 80px;" />
    </div>

    <div class="max-w-6xl mx-auto px-6 py-24 w-full">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Text content -->
        <div>
          <!-- Status badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade-500/10 border border-jade-500/20 mb-8 animate-fade-up">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-jade-400 opacity-75" />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-jade-500" />
            </span>
            <span class="font-mono text-xs text-jade-400">Available for opportunities</span>
          </div>

          <!-- Name -->
          <h1
            class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
            style="animation-delay: 0.1s"
          >
            <span class="animate-fade-up block" style="animation-fill-mode: both; animation-delay: 0.1s">
              {{ firstName }}
            </span>
            <span class="animate-fade-up block text-jade-400" style="animation-fill-mode: both; animation-delay: 0.2s">
              {{ lastName }}
            </span>
          </h1>

          <!-- Role -->
          <div
            class="flex items-center gap-3 mb-6 animate-fade-up"
            style="animation-fill-mode: both; animation-delay: 0.3s"
          >
            <div class="h-px w-8 bg-jade-400" />
            <p class="font-mono text-jade-400/80 text-sm tracking-widest uppercase">{{ data.title }}</p>
          </div>

          <!-- Typewriter tagline -->
          <p
            class="font-display text-lg text-slate-400 leading-relaxed mb-8 max-w-lg animate-fade-up"
            style="animation-fill-mode: both; animation-delay: 0.4s"
          >
            {{ data.summary }}
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-wrap gap-4 mb-10 animate-fade-up"
            style="animation-fill-mode: both; animation-delay: 0.5s"
          >
            <a :href="'mailto:' + data.email" class="btn-primary">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
            <a :href="data.github" target="_blank" rel="noopener" class="btn-outline">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a :href="data.linkedin" target="_blank" rel="noopener" class="btn-outline">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          <!-- Location -->
          <div
            class="flex items-center gap-2 text-slate-500 text-sm animate-fade-up"
            style="animation-fill-mode: both; animation-delay: 0.6s"
          >
            <svg class="w-4 h-4 text-jade-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ data.location }}
          </div>
        </div>

        <!-- Right: Stats card -->
        <div class="hidden lg:block">
          <div class="relative">
            <!-- Main card -->
            <div class="card-base p-8 relative overflow-hidden">
              <!-- Card glow -->
              <div class="absolute -top-20 -right-20 w-64 h-64 bg-jade-500/8 rounded-full blur-3xl pointer-events-none" />

              <p class="section-label mb-6">Quick Overview</p>

              <div class="space-y-5">
                <StatRow icon="💼" label="Current Role" value="Backend Engineer @ Bevatel" />
                <StatRow icon="📍" label="Location" :value="data.location" />
                <StatRow icon="🎓" label="Education" value="B.Sc. IT & Computer Science" />
                <StatRow icon="📧" label="Email" :value="data.email" />
              </div>

              <div class="mt-8 pt-6 border-t border-carbon-600">
                <p class="section-label mb-4">Core Stack</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in coreStack" :key="tech" class="tag">{{ tech }}</span>
                </div>
              </div>
            </div>

            <!-- Decorative floating card -->
            <div class="absolute -bottom-6 -right-6 card-base px-4 py-3 flex items-center gap-3 shadow-xl shadow-black/40 w-48">
              <div class="w-9 h-9 rounded-lg bg-jade-500/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-jade-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p class="font-display text-xs font-semibold text-white">Open to work</p>
                <p class="font-mono text-xs text-slate-500">Full-time roles</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span class="font-mono text-xs text-slate-600">scroll</span>
        <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: { type: Object, required: true },
})

const nameParts = computed(() => props.data.name.split(' '))
const firstName = computed(() => nameParts.value.slice(0, 2).join(' '))
const lastName = computed(() => nameParts.value.slice(2).join(' '))

const coreStack = ['PHP', 'Laravel', 'PostgreSQL', 'Redis', 'Docker', 'WebSockets']
</script>

<!-- StatRow as local component via inline -->
<script>
export default {
  components: {
    StatRow: {
      props: ['icon', 'label', 'value'],
      template: `
        <div class="flex items-start gap-3">
          <span class="text-lg leading-none mt-0.5">{{ icon }}</span>
          <div class="min-w-0">
            <p class="font-mono text-xs text-slate-500 mb-0.5">{{ label }}</p>
            <p class="font-display text-sm text-slate-300 truncate">{{ value }}</p>
          </div>
        </div>
      `,
    },
  },
}
</script>
