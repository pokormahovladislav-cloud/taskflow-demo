<template>
  <div class="task-card">
    <div class="task-card-header">
      <span class="task-status" :class="'status-' + task.status">
        {{ statusLabels[task.status] }}
      </span>

      <span class="task-priority" :class="'priority-' + task.priority">
        {{ priorityLabels[task.priority] }}
      </span>
    </div>

    <h3 class="task-title">{{ task.title }}</h3>
    <p class="task-description">{{ task.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const statusLabels = {
  todo: 'Заплановано',
  progress: 'У роботі',
  done: 'Виконано',
};

const priorityLabels = {
  low: 'Низький',
  medium: 'Середній',
  high: 'Високий',
};
</script>