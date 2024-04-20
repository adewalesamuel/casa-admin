import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Routes as AppRoutes }  from './routes'
import { Views } from './views'
 
function App() {
  return (
    <BrowserRouter basename='/admin'>
      <Routes>
        <Route path='*' element={<AppRoutes.MainRoutes />} />
        <Route path='/login' element={<Views.LoginView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
