import { Routes, Route } from 'react-router'
import Home from './pages/home'
import CoursemapCS from './pages/coursemap-cs'
import CoursemapDS from './pages/coursemap-ds'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coursemap">
        <Route path="cs" element={<CoursemapCS />} />
        <Route path="ds" element={<CoursemapDS />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App