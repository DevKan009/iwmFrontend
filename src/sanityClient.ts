// src/sanityClient.ts
import { createClient } from '@sanity/client'

export const client = createClient({
  // projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  projectId: "4xwbv2kr",

  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
})
