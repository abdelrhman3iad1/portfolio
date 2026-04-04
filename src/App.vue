<template>
  <div class="noise-bg min-h-screen relative">
    <!-- Ambient background blobs -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div class="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-jade-500/5 blur-3xl animate-pulse-slow" />
      <div class="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-jade-400/3 blur-3xl animate-pulse-slow" style="animation-delay: 1.5s" />
      <div class="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-jade-500/4 blur-3xl animate-pulse-slow" style="animation-delay: 3s" />
    </div>

    <!-- Navigation -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="scrolled ? 'bg-carbon-950/90 backdrop-blur-md border-b border-carbon-700/60' : 'bg-transparent'"
    >
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <!-- Logo -->
        <a href="#hero" class="font-mono text-jade-400 text-sm font-medium tracking-wider hover:text-jade-300 transition-colors">
          AA<span class="text-slate-500">.</span>dev
        </a>

        <!-- Desktop links -->
        <div class="hidden md:flex items-center gap-8">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav-link group">
            <span class="text-jade-400/60 mr-1 group-hover:text-jade-400 transition-colors">0{{ link.num }}.</span>
            {{ link.label }}
          </a>
          <a :href="'mailto:' + cv.personal.email" class="btn-primary text-xs py-2 px-4">
            Hire Me
          </a>
        </div>

        <!-- Mobile menu toggle -->
        <button @click="mobileOpen = !mobileOpen" class="md:hidden p-2 text-slate-400 hover:text-jade-400 transition-colors">
          <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition name="mobile-menu">
        <div v-if="mobileOpen" class="md:hidden bg-carbon-900/95 backdrop-blur-md border-b border-carbon-700/60 px-6 py-4 flex flex-col gap-4">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="nav-link"
            @click="mobileOpen = false"
          >
            <span class="text-jade-400/60 mr-1">0{{ link.num }}.</span>{{ link.label }}
          </a>
          <a :href="'mailto:' + cv.personal.email" class="btn-primary w-fit text-xs py-2 px-4">Hire Me</a>
        </div>
      </Transition>
    </nav>

    <!-- Main content -->
    <main class="relative z-10">
      <Hero :data="cv.personal" />
      <Experience :data="cv.experience" />
      <Projects :data="cv.projects" />
      <Skills :data="cv.skills" />
      <Education :data="cv.education" :personal="cv.personal" />
    </main>

    <!-- Footer -->
    <footer class="relative z-10 border-t border-carbon-700/40 py-8">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="font-mono text-xs text-slate-500">
          Built with Vue 3 + Vite + Tailwind CSS
        </p>
        <p class="font-mono text-xs text-slate-500">
          © 2025 <span class="text-jade-400">Abdelrhman Aiiad</span>. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { cvData } from './cvData.js'
import Hero from './components/Hero.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Education from './components/Education.vue'
import AOS from 'aos'

const cv = cvData
const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { num: 1, label: 'Experience', href: '#experience' },
  { num: 2, label: 'Projects', href: '#projects' },
  { num: 3, label: 'Skills', href: '#skills' },
  { num: 4, label: 'Education', href: '#education' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.25s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
