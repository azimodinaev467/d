import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hom from './pages/Hom'
import SK from './pages/SK'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hom />} />
        <Route path="/product" element={<SK />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
