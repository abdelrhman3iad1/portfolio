<template>
  <div class="card-base group">
    <!-- Header -->
    <div class="mb-4">
      <div class="flex items-start justify-between gap-4 mb-1">
        <h3 class="font-display font-semibold text-white text-base leading-snug">{{ job.role }}</h3>
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <span class="font-mono text-jade-400 text-sm font-medium">{{ job.company }}</span>
        <span v-if="job.project" class="text-slate-600">·</span>
        <span v-if="job.project" class="font-mono text-xs text-slate-500 italic">{{ job.project }}</span>
      </div>
      <!-- Mobile period -->
      <p class="md:hidden font-mono text-xs text-slate-500 mt-1">{{ job.period }}</p>
    </div>

    <!-- Bullets -->
    <ul class="space-y-2 mb-5">
      <li
        v-for="(bullet, i) in job.bullets"
        :key="i"
        class="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed"
      >
        <svg class="w-3.5 h-3.5 text-jade-400/70 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        {{ bullet }}
      </li>
    </ul>

    <!-- Stack tags -->
    <div class="flex flex-wrap gap-1.5">
      <span v-for="tech in job.stack" :key="tech" class="tag text-jade-400/70 border-jade-400/10 bg-jade-400/5">{{ tech }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  job: { type: Object, required: true },
})
</script>
