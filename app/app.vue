<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30 font-sans text-primary-900">
    <Nav />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>



<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s ease-out;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}

::selection {
  background-color: rgba(147, 51, 234, 0.2);
  color: primary-900;
}

html {
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
