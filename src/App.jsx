import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './ui/Header';
import Form from './pages/Form';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/login' element={<Form/>}/>
        {/* <Route path='/carrito' element={}/> */}
      </Routes>
    </Router>
  )
}

export default App;
