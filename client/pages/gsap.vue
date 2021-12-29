<template>
  <div>
    <h1 to="/about" class="title">Custom Title</h1>
    <p class="text">Custom text...</p>
    <p
      v-gsap.fromTo="[
      { opacity: 0, y: -350 },
      { opacity: 1, y: 0, duration: 3 }
    ]"
    >
      NUXT GSAP
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$gsap.to('.title', { x: 100, ease: 'myEase' })
    this.$gsap.to('.text', { y: 100, ease: 'ease.2' })
  }
}
</script>
