import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { AboutPage } from '../pages/AboutPage'
import { CollectionPage } from '../pages/CollectionPage'
import { ContactPage } from '../pages/ContactPage'
import { HomePage } from '../pages/HomePage'

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="manifesto" element={<AboutPage />} />
          <Route path="collection" element={<CollectionPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
