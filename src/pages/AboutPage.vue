<template>
  <f7-page>
    <f7-navbar
      title="Про застосунок"
      back-link="Назад"
    />

    <div class="about-page">
      <h1>TaskFlow</h1>

      <p>
        TaskFlow — це мобільний вебзастосунок
        для перегляду та організації завдань.
      </p>

      <h2>Використані технології</h2>

      <f7-list>
        <f7-list-item
          title="Vue 3"
          subtitle="Створення інтерфейсу застосунку"
        />

        <f7-list-item
          title="Framework7"
          subtitle="Мобільні компоненти інтерфейсу"
        />

        <f7-list-item
          title="Vite"
          subtitle="Розробка та збірка проєкту"
        />

        <f7-list-item
          title="PWA"
          subtitle="Можливість встановлення застосунку"
        />

        <f7-list-item
          title="Cloudflare Workers"
          subtitle="Розгортання вебзастосунку"
        />
      </f7-list>

      <f7-button fill href="/" class="back-button">
        На головну
      </f7-button>
    </div>
  </f7-page>
</template>