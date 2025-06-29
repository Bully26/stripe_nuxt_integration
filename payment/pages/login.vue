<template>
  <div>
    <h1>Buy Product - $10</h1>
    <button @click="checkout">Buy Now</button>
  </div>
</template>

<script setup>
const checkout = async () => {
  const { data } = await $fetch('/api/checkout-session', { method: 'POST' })
  if (data.value?.url) window.location.href = data.value.url
}
</script>
