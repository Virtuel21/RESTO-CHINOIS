import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail, Car, CreditCard } from 'lucide-react'

export default function PracticalInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Informations Pratiques
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir pour votre visite au Dragon Doré
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact & Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-red-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-600">
                      123 Rue de la Paix<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-red-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Téléphone</h3>
                    <a 
                      href="tel:+33123456789"
                      className="text-red-600 hover:text-red-700 transition-colors font-medium"
                    >
                      01 23 45 67 89
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Cliquez pour appeler directement
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-red-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a 
                      href="mailto:contact@ledragonore.fr"
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      contact@ledragonore.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                <Clock className="inline mr-3 text-red-600" size={28} />
                Horaires d'ouverture
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-red-600 font-medium">Lundi</span>
                  <span className="text-gray-900 font-semibold">Fermé</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-700">Mardi - Jeudi</span>
                  <div className="text-right">
                    <div>12h00 - 14h30</div>
                    <div>19h00 - 22h30</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-700">Vendredi - Samedi</span>
                  <div className="text-right">
                    <div>12h00 - 14h30</div>
                    <div>19h00 - 23h00</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-700">Dimanche</span>
                  <div className="text-right">
                    <div>12h00 - 14h30</div>
                    <div>19h00 - 22h00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations utiles</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Car className="text-red-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Parking</h3>
                    <p className="text-gray-600">
                      Parking public Vendôme à 200m<br />
                      Places de stationnement payant dans la rue
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CreditCard className="text-red-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Moyens de paiement</h3>
                    <p className="text-gray-600">
                      Cartes bancaires, espèces, chèques restaurant,<br />
                      tickets restaurant acceptés
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Google Maps Embed */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Localisation</h2>
                <p className="text-gray-600 mt-2">
                  Nous situer facilement dans le 1er arrondissement de Paris
                </p>
              </div>
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441511848!2d2.3278141156743703!3d48.86667507928776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sPlace%20Vend%C3%B4me%2C%2075001%20Paris!5e0!3m2!1sfr!2sfr!4v1647875632846!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Le Dragon Doré"
                ></iframe>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Comment venir</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">🚇 Métro</h3>
                  <p className="text-blue-800">
                    Ligne 1, 7, 14 - Station Châtelet<br />
                    Ligne 1, 7 - Station Palais-Royal
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">🚌 Bus</h3>
                  <p className="text-green-800">
                    Lignes 21, 27, 39, 48, 95<br />
                    Arrêt Louvre - Rivoli
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">🚲 Vélib'</h3>
                  <p className="text-yellow-800">
                    Station Vélib' Place du Palais Royal<br />
                    À 3 minutes à pied du restaurant
                  </p>
                </div>
              </div>
            </div>

            {/* Special Services */}
            <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl shadow-lg p-8 border border-red-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Services spéciaux</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🎉</div>
                  <h3 className="font-semibold text-gray-900">Événements</h3>
                  <p className="text-sm text-gray-600">Anniversaires, repas d'affaires</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🥡</div>
                  <h3 className="font-semibold text-gray-900">À emporter</h3>
                  <p className="text-sm text-gray-600">Commande et retrait</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">♿</div>
                  <h3 className="font-semibold text-gray-900">Accessible</h3>
                  <p className="text-sm text-gray-600">PMR et poussettes</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">📶</div>
                  <h3 className="font-semibold text-gray-900">WiFi gratuit</h3>
                  <p className="text-sm text-gray-600">Pour nos clients</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}