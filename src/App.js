import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Quiz from './pages/Quiz'
import Report from './pages/Report'
import PsychologyQuizzes from './pages/PsychologyQuizzes'
import PsychologyQuiz from './pages/PsychologyQuiz'
import Transversal from './pages/Transversal'
import Keys from './pages/Keys'
import { useEffect } from 'react'

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])
  return (
    <div className="page_wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/transversal" element={<Transversal />} />
        <Route path="/keys" element={<Keys />} />
        <Route path="/psychology-quiz" element={<PsychologyQuizzes />} />
        <Route path="/psychology-quiz/:quizDataName" element={<PsychologyQuiz />} />
        <Route path="quiz/:quizName" element={<Quiz />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App