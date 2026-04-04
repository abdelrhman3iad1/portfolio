<template>
  <section id="skills" class="py-24">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Section header -->
      <div class="mb-16" data-aos="fade-up">
        <p class="section-label">My Toolkit</p>
        <h2 class="section-title">Technical <span class="text-jade-400">Skills</span></h2>
        <div class="mt-4 h-px w-16 bg-jade-400/40" />
      </div>

      <!-- Skills grid -->
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div
          v-for="(skills, category, index) in data"
          :key="category"
          class="card-base"
          data-aos="fade-up"
          :data-aos-delay="index * 80"
        >
          <!-- Category header -->
          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center text-base"
              :class="categoryColors[category]?.bg || 'bg-carbon-700'">
              {{ categoryIcons[category] || '⚙️' }}
            </div>
            <div>
              <h3 class="font-display font-semibold text-white text-sm">{{ category }}</h3>
              <p class="font-mono text-xs text-slate-500">{{ skills.length }} skills</p>
            </div>
          </div>

          <!-- Skill bars -->
          <div class="space-y-4">
            <div v-for="skill in skills" :key="skill.name">
              <div class="flex items-center justify-between mb-1.5">
                <span class="font-mono text-xs text-slate-300">{{ skill.name }}</span>
                <span class="font-mono text-xs text-jade-400">{{ skill.level }}%</span>
              </div>
              <div class="h-1.5 bg-carbon-700 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 ease-out skill-bar"
                  :class="categoryColors[category]?.bar || 'bg-jade-500'"
                  :style="{ width: animated ? skill.level + '%' : '0%' }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Soft skills row -->
      <div class="mt-8" data-aos="fade-up">
        <div class="card-base">
          <p class="section-label mb-5">Soft Skills</p>
          <div class="flex flex-wrap gap-3">
            <div
              v-for="(soft, i) in softSkills"
              :key="soft"
              class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-carbon-700 border border-carbon-600 hover:border-jade-400/30 transition-colors"
            >
              <span class="text-sm">{{ softIcons[i] }}</span>
              <span class="font-display text-sm text-slate-300">{{ soft }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  data: { type: Object, required: true },
})

const animated = ref(false)

const categoryIcons = {
  'Backend': '⚡',
  'Frontend': '🎨',
  'Databases': '🗄️',
  'DevOps & Tools': '🔧',
  'Concepts': '🧠',
}

const categoryColors = {
  'Backend': { bg: 'bg-jade-400/10', bar: 'bg-jade-500' },
  'Frontend': { bg: 'bg-blue-400/10', bar: 'bg-blue-500' },
  'Databases': { bg: 'bg-purple-400/10', bar: 'bg-purple-500' },
  'DevOps & Tools': { bg: 'bg-orange-400/10', bar: 'bg-orange-500' },
  'Concepts': { bg: 'bg-pink-400/10', bar: 'bg-pink-500' },
}

const softSkills = ['Problem Solving', 'Communication', 'Time Management', 'Self-learning', 'Flexibility']
const softIcons = ['🧩', '💬', '⏱️', '📚', '🔄']

onMounted(() => {
  // Trigger bar animations after brief delay
  setTimeout(() => {
    animated.value = true
  }, 300)
})
</script>

<style scoped>
.skill-bar {
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
