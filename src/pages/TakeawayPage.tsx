import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plus, Minus, ShoppingCart, Trash2 } from 'lucide-react'
import { supabase, MenuItem } from '../lib/supabase'

interface CartItem extends MenuItem {
  quantity: number
}

export default function TakeawayPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState('Entrées')
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [loading, setLoading] = useState(true)

  const categories = ['Entrées', 'Plats', 'Desserts', 'Boissons']

  useEffect(() => {
    fetchMenuItems()
    loadCartFromStorage()
  }, [])

  useEffect(() => {
    saveCartToStorage()
  }, [cart])

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
          description: 'Délicieux raviolis vapeur garnis de crevettes fraîches',
          price: 12.50,
          image_url: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        },
        {
          id: '2',
          category: 'Entrées',
          name: 'Nems aux légumes',
          description: 'Rouleaux croustillants aux légumes frais',
          price: 8.90,
          image_url: 'https://images.pexels.com/photos/4113884/pexels-photo-4113884.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        },
        {
          id: '3',
          category: 'Plats',
          name: 'Canard laqué de Pékin',
          description: 'Canard traditionnel avec crêpes et sauce hoisin',
          price: 28.90,
          image_url: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        },
        {
          id: '4',
          category: 'Plats',
          name: 'Porc au caramel',
          description: 'Porc mijoté dans une sauce caramel',
          price: 18.50,
          image_url: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const loadCartFromStorage = () => {
    const savedCart = localStorage.getItem('dragon-dore-cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }

  const saveCartToStorage = () => {
    localStorage.setItem('dragon-dore-cart', JSON.stringify(cart))
  }

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      } else {
        return [...prevCart, { ...item, quantity: 1 }]
      }
    })
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== id))
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      )
    }
  }

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Commande à Emporter
          </h1>
          <p className="text-lg text-gray-600">
            Sélectionnez vos plats préférés et passez votre commande
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="flex-1 p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-red-600">
                          {item.price.toFixed(2)}€
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-1"
                        >
                          <Plus size={16} />
                          <span>Ajouter</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6 sticky top-24"
            >
              <div className="flex items-center space-x-2 mb-6">
                <ShoppingCart className="text-red-600" size={24} />
                <h2 className="text-xl font-semibold">
                  Panier ({getTotalItems()})
                </h2>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  Votre panier est vide
                </p>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-red-600 font-semibold">
                            {item.price.toFixed(2)}€
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded bg-gray-200 hover:bg-gray-300"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded bg-gray-200 hover:bg-gray-300"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 text-red-600 hover:text-red-700"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-xl font-bold text-red-600">
                        {getTotalPrice().toFixed(2)}€
                      </span>
                    </div>
                    <button
                      onClick={() => setShowOrderForm(true)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                    >
                      Commander
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Order Form Modal */}
      {showOrderForm && (
        <OrderFormModal
          cart={cart}
          total={getTotalPrice()}
          onClose={() => setShowOrderForm(false)}
          onSuccess={() => {
            setCart([])
            setShowOrderForm(false)
            alert('Commande envoyée avec succès! Nous vous appellerons pour confirmer.')
          }}
        />
      )}
    </div>
  )
}

interface OrderFormModalProps {
  cart: CartItem[]
  total: number
  onClose: () => void
  onSuccess: () => void
}

function OrderFormModal({ cart, total, onClose, onSuccess }: OrderFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupTime: '',
    notes: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the order to your backend
    console.log('Order submitted:', { ...formData, cart, total })
    onSuccess()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-6">Finaliser la commande</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Heure de retrait souhaitée *
            </label>
            <input
              type="time"
              required
              value={formData.pickupTime}
              onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes (optionnel)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Allergies, préférences..."
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Récapitulatif</h3>
            <div className="space-y-1 text-sm">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} x{item.quantity}</span>
                  <span>{(item.price * item.quantity).toFixed(2)}€</span>
                </div>
              ))}
            </div>
            <div className="border-t mt-2 pt-2 font-semibold">
              <div className="flex justify-between">
                <span>Total:</span>
                <span>{total.toFixed(2)}€</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Confirmer
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}