# 💳 Stripe + Nuxt Integration

A simple payment flow using Stripe with complete Nuxt 3 integration . Designed to help developers understand and implement Stripe payment intents in a modern Vue app [for me].

So nuxt 3 server acts as main part
it contain main 2 api end points
1) One that create a payment request to stripe and generate a payment url
2) A webhook called by stripe for payment verification

Some commont problem faces during local testing 
--> while using stripe cli for we get a webhook signin key but it didnt work for me So its better to use port forwarding via github or ngrok
--> when using stripe cli there will 2 key for same webhook point on given by stripe cli and one you can get in stripe dash board both didnt work while local testing 
--> port forwarding was the best solution 



---

## 🛠 Tech Stack

- **Frontend**: Nuxt 3 + Vue 3 + Stripe.js
- **Payments**: Stripe Elements & Payment Intents API

---

## 📁 Project Structure
stripe_nuxt_integration/
├── backend/ # Express server handling Stripe API calls
│ ├── server.js
│ └── .env.example
├── frontend/ # Nuxt 3 frontend
│ ├── components/ # Vue components
│ ├── pages/ # Route pages (e.g. checkout)
│ ├── plugins/ # Stripe plugin
│ ├── nuxt.config.ts
│ └── .env.example
├── README.md
└── package.json



