import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ResearchPage from './pages/ResearchPage'
import ResearchDetailPage from './pages/ResearchDetailPage'
import WritingPage from './pages/WritingPage'
import ArticleDetailPage from './pages/ArticleDetailPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  const theme = 'dark'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('mihret-theme', theme)
  }, [])

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
      <Layout theme={theme} onToggleTheme={() => {}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectName" element={<ProjectDetailPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/:researchProjectName" element={<ResearchDetailPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/writing/:articleName" element={<ArticleDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
