import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import CanvasPage from './pages/Canvas'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/canvas" element={<CanvasPage />} />
      </Routes>
    </Router>
  )
}

export default App
