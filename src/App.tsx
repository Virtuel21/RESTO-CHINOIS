import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import TakeawayPage from './pages/TakeawayPage'
import ReservationPage from './pages/ReservationPage'
import PracticalInfoPage from './pages/PracticalInfoPage'
import AdminPage from './pages/AdminPage'
import BlogPage from './pages/BlogPage'
import BlogArticlePage from './pages/BlogArticlePage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/takeaway" element={<TakeawayPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/info" element={<PracticalInfoPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/plats-chinois" element={<BlogArticlePage />} />
          <Route path="/legal" element={<LegalPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Informations légales</h2>
              <p>
                <strong>Raison sociale :</strong> Le Dragon Doré SARL<br />
                <strong>Adresse :</strong> 123 Rue de la Paix, 75001 Paris, France<br />
                <strong>Téléphone :</strong> 01 23 45 67 89<br />
                <strong>Email :</strong> contact@ledragonore.fr<br />
                <strong>SIRET :</strong> 123 456 789 00012<br />
                <strong>Capital social :</strong> 10 000 €
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Hébergement</h2>
              <p>
                Ce site est hébergé par :<br />
                <strong>OVH SAS</strong><br />
                2 rue Kellermann, 59100 Roubaix, France<br />
                Téléphone : 09 72 10 10 07
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Protection des données</h2>
              <p>
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au RGPD,
                vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
                Pour exercer ces droits, contactez-nous à l'adresse : contact@ledragonore.fr
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h2>
              <p>
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement.
                Aucun cookie de traçage n'est utilisé sans votre consentement.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

