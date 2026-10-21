<template>
  <f7-page>
    <f7-navbar title="TaskFlow" />

    <div class="home-page">
      <div class="welcome-section">
        <h1>Мої завдання</h1>
        <p>Керуй своїми завданнями разом із TaskFlow</p>
      </div>

      <div class="tasks-summary">
        <h2>Прогрес виконання</h2>
        <p>Виконано {{ completedCount }} із {{ tasks.length }} завдань</p>
      </div>

      <div class="tasks-section">
        <h2>Список завдань</h2>

        <TaskCard
          v-for="task in tasks"
          :key="task.id"
          :task="task"
        />
      </div>

      <f7-button fill href="/about/" class="about-button">
        Про застосунок
      </f7-button>
    </div>
  </f7-page>
</template>

<script setup>
import { computed } from 'vue';
import TaskCard from '../components/TaskCard.vue';
import { tasks } from '../data/tasks.js';

const completedCount = computed(() => {
  return tasks.filter(task => task.status === 'done').length;
});
</script>