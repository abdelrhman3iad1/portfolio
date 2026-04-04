<template>
  <section id="projects" class="py-24 bg-carbon-900/40">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Section header -->
      <div class="mb-16" data-aos="fade-up">
        <p class="section-label">What I've Built</p>
        <h2 class="section-title">Featured <span class="text-jade-400">Projects</span></h2>
        <div class="mt-4 h-px w-16 bg-jade-400/40" />
      </div>

      <!-- Featured projects (larger cards) -->
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          class="card-base group flex flex-col relative overflow-hidden"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <!-- Top accent line -->
          <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-jade-400/60 via-jade-400/20 to-transparent" />

          <!-- Featured badge -->
          <div class="absolute top-4 right-4">
            <span class="font-mono text-xs px-2 py-0.5 rounded bg-jade-400/10 text-jade-400 border border-jade-400/20">Featured</span>
          </div>

          <!-- Project number -->
          <p class="font-display text-5xl font-extrabold text-carbon-700 mb-4 leading-none select-none">
            {{ String(index + 1).padStart(2, '0') }}
          </p>

          <!-- Content -->
          <h3 class="font-display font-bold text-white text-xl mb-3 group-hover:text-jade-400 transition-colors leading-snug pr-16">
            {{ project.name }}
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{{ project.description }}</p>

          <!-- Highlights -->
          <ul class="space-y-1.5 mb-6">
            <li
              v-for="h in project.highlights"
              :key="h"
              class="flex items-center gap-2 text-xs text-slate-500"
            >
              <div class="w-1 h-1 rounded-full bg-jade-400/60 flex-shrink-0" />
              {{ h }}
            </li>
          </ul>

          <!-- Footer -->
          <div class="flex items-center justify-between mt-auto pt-5 border-t border-carbon-600">
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tech in project.stack.slice(0, 4)" :key="tech" class="tag">{{ tech }}</span>
              <span v-if="project.stack.length > 4" class="tag text-slate-500">+{{ project.stack.length - 4 }}</span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-jade-400 transition-colors flex-shrink-0 ml-3"
            >
              View
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Other projects grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(project, index) in otherProjects"
          :key="project.id"
          class="card-base group flex flex-col"
          data-aos="fade-up"
          :data-aos-delay="index * 80"
        >
          <!-- Folder icon -->
          <div class="flex items-center justify-between mb-5">
            <svg class="w-8 h-8 text-jade-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7a2 2 0 012-2h3.586a1 1 0 01.707.293L10.707 6.7A1 1 0 0011.414 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener"
              class="text-slate-500 hover:text-jade-400 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <h3 class="font-display font-semibold text-white text-base mb-2 group-hover:text-jade-400 transition-colors">
            {{ project.name }}
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{{ project.description }}</p>

          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span v-for="tech in project.stack" :key="tech" class="tag text-xs">{{ tech }}</span>
          </div>
        </div>
      </div>

      <!-- GitHub CTA -->
      <div class="text-center mt-12" data-aos="fade-up">
        <a
          href="https://github.com/abdelrhman3iad1"
          target="_blank"
          rel="noopener"
          class="btn-outline"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View All Projects on GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: { type: Array, required: true },
})

const featuredProjects = computed(() => props.data.filter(p => p.featured))
const otherProjects = computed(() => props.data.filter(p => !p.featured))
</script>
