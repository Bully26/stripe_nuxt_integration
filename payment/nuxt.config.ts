// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  runtimeConfig: {
    stripeSecretKey: 
   
    stripeWebhookSecret: 
    ,
    public: {
      supabase: {
        url: ,
        key:
      }
      ,
      stripe:
    }
  },
  // serverMiddleware: [
  //   { path: '/api/stripe-webhook', handler: '~/server/middleware/stripe-webhook.ts' }
  // ],

  modules: ['@nuxtjs/supabase', '@unlok-co/nuxt-stripe']
})