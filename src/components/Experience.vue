<template>
  <section id="experience" class="py-24">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Section header -->
      <div class="mb-16" data-aos="fade-up">
        <p class="section-label">Where I've Worked</p>
        <h2 class="section-title">Work <span class="text-jade-400">Experience</span></h2>
        <div class="mt-4 h-px w-16 bg-jade-400/40" />
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-jade-400/60 via-jade-400/20 to-transparent -translate-x-1/2 hidden md:block" />
        <div class="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-jade-400/60 via-jade-400/20 to-transparent md:hidden" />

        <div class="space-y-12">
          <div
            v-for="(job, index) in data"
            :key="job.id"
            class="relative"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-delay="index * 80"
          >
            <!-- Mobile / left-aligned layout -->
            <div class="md:hidden pl-16">
              <!-- Dot -->
              <div class="absolute left-6 top-2 -translate-x-1/2 flex items-center justify-center">
                <div class="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                  :class="job.current ? 'border-jade-400 bg-jade-400/20' : 'border-carbon-600 bg-carbon-800'">
                  <div v-if="job.current" class="w-1.5 h-1.5 rounded-full bg-jade-400 animate-ping" />
                </div>
              </div>
              <JobCard :job="job" />
            </div>

            <!-- Desktop alternating layout -->
            <div class="hidden md:grid md:grid-cols-2 md:gap-12 items-start">
              <!-- Left side (even) -->
              <div :class="index % 2 === 0 ? 'pr-8' : 'col-start-2 pl-8'">
                <JobCard :job="job" />
              </div>

              <!-- Center dot -->
              <div class="absolute left-1/2 top-6 -translate-x-1/2 z-10">
                <div class="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                  :class="job.current ? 'border-jade-400 bg-carbon-900' : 'border-carbon-600 bg-carbon-800'">
                  <div v-if="job.current" class="w-1.5 h-1.5 rounded-full bg-jade-400" />
                </div>
              </div>

              <!-- Right side (odd) fills the empty col -->
              <div v-if="index % 2 !== 0" class="col-start-1 row-start-1 flex flex-col items-end justify-start pr-8 pt-6">
                <div class="text-right">
                  <span v-if="job.current" class="inline-flex items-center gap-1.5 text-xs font-mono text-jade-400 mb-1">
                    <span class="relative flex h-1.5 w-1.5">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-jade-400 opacity-75" />
                      <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-jade-500" />
                    </span>
                    Current
                  </span>
                  <p class="font-mono text-sm text-slate-500">{{ job.period }}</p>
                </div>
              </div>
              <div v-else class="col-start-2 row-start-1 flex flex-col items-start justify-start pl-8 pt-6">
                <div>
                  <span v-if="job.current" class="inline-flex items-center gap-1.5 text-xs font-mono text-jade-400 mb-1">
                    <span class="relative flex h-1.5 w-1.5">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-jade-400 opacity-75" />
                      <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-jade-500" />
                    </span>
                    Current
                  </span>
                  <p class="font-mono text-sm text-slate-500">{{ job.period }}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import JobCard from './JobCard.vue'

defineProps({
  data: { type: Array, required: true },
})
</script>
