import React from 'react'
import { motion } from 'framer-motion'

export default function BlogArticlePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
        >
          Les Plats Chinois Incontournables
        </motion.h1>
        <div className="space-y-6 text-gray-700">
          <p>
            La cuisine chinoise est réputée pour sa diversité et ses saveurs
            uniques. Parmi les plats les plus célèbres, on retrouve le canard laqué
            de Pékin, les raviolis jiaozi ou encore le porc aigre-doux.
          </p>
          <p>
            Chaque région possède ses spécialités. Dans le Sichuan, les
            préparations épicées dominent, tandis que la cuisine cantonaise met
            l'accent sur la fraîcheur des ingrédients et des cuissons rapides.
          </p>
          <p>
            Au Dragon Doré, nous sélectionnons des recettes emblématiques pour
            vous faire voyager à travers ces traditions culinaires. N'hésitez pas
            à venir les découvrir dans notre restaurant !
          </p>
        </div>
      </div>
    </div>
  )
}
