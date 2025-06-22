import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type MenuItem = {
  id: string
  category: string
  name: string
  description: string
  price: number
  image_url: string
}

export type Reservation = {
  id?: string
  name: string
  phone: string
  date: string
  time: string
  guests: number
  created_at?: string
}