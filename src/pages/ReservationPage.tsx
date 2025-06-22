import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Phone, User } from 'lucide-react'
import { supabase, Reservation } from '../lib/supabase'

export default function ReservationPage() {
  const [formData, setFormData] = useState<Partial<Reservation>>({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 2
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { error } = await supabase
        .from('reservations')
        .insert([formData])

      if (error) throw error

      setIsSuccess(true)
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: 2
      })
    } catch (error) {
      console.error('Error creating reservation:', error)
      alert('Erreur lors de la réservation. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof Reservation, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="text-green-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Réservation Confirmée!
          </h2>
          <p className="text-gray-600 mb-6">
            Merci pour votre réservation. Nous vous appellerons sous peu pour confirmer les détails.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Nouvelle Réservation
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Réservation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Réservez votre table pour une expérience culinaire inoubliable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline mr-2" size={16} />
                  Nom complet *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline mr-2" size={16} />
                  Téléphone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone || ''}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline mr-2" size={16} />
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date || ''}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="inline mr-2" size={16} />
                    Heure *
                  </label>
                  <select
                    required
                    value={formData.time || ''}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Choisir l'heure</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="inline mr-2" size={16} />
                  Nombre de personnes *
                </label>
                <select
                  required
                  value={formData.guests || 2}
                  onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>
                      {num} personne{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Réservation en cours...</span>
                  </>
                ) : (
                  <>
                    <Calendar size={20} />
                    <span>Réserver</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Restaurant Image */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop)'
                }}
              >
                <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Ambiance Raffinée</h3>
                    <p className="text-gray-200">
                      Un cadre élégant pour vos repas en famille ou entre amis
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="text-red-600" size={24} />
                  <h3 className="font-semibold text-lg">Horaires d'ouverture</h3>
                </div>
                <div className="text-gray-600 space-y-1">
                  <p>Mardi - Dimanche</p>
                  <p>Déjeuner: 12h00 - 14h30</p>
                  <p>Dîner: 19h00 - 22h30</p>
                  <p className="text-red-600 font-medium">Fermé le lundi</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Phone className="text-red-600" size={24} />
                  <h3 className="font-semibold text-lg">Contact</h3>
                </div>
                <div className="text-gray-600">
                  <p>Pour toute question ou modification :</p>
                  <a 
                    href="tel:+33123456789" 
                    className="text-red-600 font-semibold hover:text-red-700 transition-colors"
                  >
                    01 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-6 border border-red-100">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  Informations importantes
                </h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Réservation recommandée le week-end</li>
                  <li>• Tables disponibles pour 1 à 10 personnes</li>
                  <li>• Confirmation par téléphone sous 24h</li>
                  <li>• Annulation gratuite jusqu'à 2h avant</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}