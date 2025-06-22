import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function BlogPage() {
  const posts = [
    {
      id: 'plats-chinois',
      title: 'Les Plats Chinois Incontournables',
      excerpt: "Découvrez quelques spécialités chinoises à ne pas manquer lors de votre prochaine visite.",
      image: 'https://images.pexels.com/photos/247466/pexels-photo-247466.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center"
        >
          Blog
        </motion.h1>

        <div className="grid grid-cols-1 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img src={post.image} alt="" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-red-600">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <span className="text-red-600 font-medium mt-4 inline-block">
                  Lire l'article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
