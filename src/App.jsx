import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import GuessTheColor from './pages/GuessTheColor'
import DebouceInput from './pages/DebounceInput'
import Synonyms from './pages/Synonyms'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="guess-the-color" element={<GuessTheColor />} />
      <Route path="debounce-input" element={<DebouceInput />} />
      <Route path="synonyms" element={<Synonyms />} />
    </Routes>
  )
}

export default App
