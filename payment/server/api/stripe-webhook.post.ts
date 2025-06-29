
import Stripe from 'stripe'
import { readRawBody, defineEventHandler, getHeader, setResponseStatus } from 'h3'
import getRawBody from 'raw-body'
import type { IncomingMessage } from 'http'
import { buffer } from 'micro'
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const stripe = new Stripe(process.stripesk, {
    apiVersion: '2024-04-10'
  })


const sig = getHeader(event, 'stripe-signature');
const req = event.node.req;
const rawBody = await buffer(req);
const jsonString = JSON.stringify(rawBody);

const body = Buffer.from(jsonString, 'utf-8');

console.log('📦 Raw body received from Stripe:',)
// console.log(body,"___",rawBody);

  try {
    const webhookEvent = stripe.webhooks.constructEvent(
    rawBody! ,
      sig!,
      process.webhooksinginkey
    )
   
    // Handle the event
    console.log(webhookEvent.type);
    if (webhookEvent.type === 'checkout.session.completed') {
      console.log('✅ Payment successful')

    }

    return { received: true }
  } catch (err: any) {
    console.error('❌ Webhook Error:', err.message)
    return { error: 'Invalid webhook signature' }
  }
})
