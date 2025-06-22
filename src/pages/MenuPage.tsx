import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase, MenuItem } from '../lib/supabase'

const categories = ['Entrées', 'Plats', 'Desserts', 'Boissons']

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState('Entrées')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMenuItems()
  }, [])

  const fetchMenuItems = async () => {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .order('category', { ascending: true })
        .order('name', { ascending: true })

      if (error) throw error
      setMenuItems(data || [])
    } catch (error) {
      console.error('Error fetching menu items:', error)
      // Mock data for development
      setMenuItems([
        {
          id: '1',
          category: 'Entrées',
          name: 'Raviolis aux crevettes',
          description: 'Délicieux raviolis vapeur garnis de crevettes fraîches et légumes',
          price: 12.50,
          image_url: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          id: '2',
          category: 'Entrées', 
          name: 'Nems aux légumes',
          description: 'Rouleaux croustillants aux légumes frais, sauce aigre douce',
          price: 8.90,
          image_url: 'https://images.pexels.com/photos/4113884/pexels-photo-4113884.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          id: '3',
          category: 'Plats',
          name: 'Canard laqué de Pékin',
          description: 'Canard traditionnel servi avec crêpes, concombre et sauce hoisin',
          price: 28.90,
          image_url: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          id: '4',
          category: 'Plats',
          name: 'Porc au caramel',
          description: 'Porc mijoté dans une sauce caramel parfumée aux épices',
          price: 18.50,
          image_url: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          id: '5',
          category: 'Desserts',
          name: 'Beignets de sésame',
          description: 'Beignets dorés au sésame avec pâte de haricots rouges',
          price: 6.50,
          image_url: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          id: '6',
          category: 'Boissons',
          name: 'Thé au jasmin',
          description: 'Thé vert parfumé aux fleurs de jasmin',
          price: 4.50,
          image_url: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const filteredItems = menuItems.filter(item => item.category === selectedCategory)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre Menu
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos spécialités chinoises préparées avec passion et authenticité
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-semibold">
                  {item.price.toFixed(2)}€
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">Aucun plat disponible dans cette catégorie pour le moment.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}