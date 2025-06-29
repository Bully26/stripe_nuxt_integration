// import Stripe from 'stripe'

// const stripe = new Stripe('sk_test_51RejxWAcowfCPm4r9g49aMh2kI7lncO6T0OYD6hCWiWeN1d778XbGFIePJEe3QqH5SRnLVkZ60Zjj9AxLGw3piil001FjAloYi', {
//   apiVersion: '2024-04-10'
// })

// export default defineEventHandler(async (event) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     mode: 'payment',
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: { name: 'Test Product' },
//           unit_amount: 1000
//         },
//         quantity: 1
//       }
//     ],
//     success_url: 'http://localhost:3000/success',
//     cancel_url: 'http://localhost:3000/cancel',
//     metadata: { userId: 'abc123' } // optional
//   })

//   return { url: session.url }
// })

// // server/api/checkout-session.post.ts
import Stripe from 'stripe'
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const stripe = new Stripe(process.stripesk, {
    apiVersion: '2024-04-10'
  })

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price:**your custom priceid**, quantity: 1 }],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel'
  })

  console.log(session.url);
  return { id: session.id }
})
