import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Calendar, Menu } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">龍</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Le Dragon Doré
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Découvrez l'authentique cuisine chinoise dans un cadre raffiné
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/menu"
              className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <Menu size={20} />
              <span>Voir le Menu</span>
            </Link>
            <Link
              to="/takeaway"
              className="group bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <ShoppingBag size={20} />
              <span>Commander</span>
            </Link>
            <Link
              to="/reservation"
              className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <Calendar size={20} />
              <span>Réserver</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Une Expérience Culinaire Unique
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plongez dans l'art culinaire chinois avec nos plats traditionnels préparés avec passion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cuisine Authentique",
                description: "Recettes traditionnelles transmises de génération en génération",
                image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              },
              {
                title: "Ingrédients Frais",
                description: "Sélection quotidienne des meilleurs produits du marché",
                image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              },
              {
                title: "Ambiance Raffinée",
                description: "Un cadre élégant alliant tradition et modernité",
                image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${feature.image})` }}>
                    <div className="h-full bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}