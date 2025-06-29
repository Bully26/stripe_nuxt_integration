import Stripe from 'stripe'
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-04-10',
  })

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: , 
        quantity: 1,
      },
    ],
    mode:, 
    success_url: , 
    cancel_url: ,   
  })

  console.log(session.url)
  return { id: session.id }
})
