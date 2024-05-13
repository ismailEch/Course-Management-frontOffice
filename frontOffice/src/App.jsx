import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Courses from './pages/Courses';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="container"> 
    < BrowserRouter >
      <Routes>
        <Route path='/home' element={ <Home/>} />
        <Route path='/' element={ <Home/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/Blog' element={ <Blog/>} />
        <Route path='/Courses' element={ <Courses/>} />
        <Route path='/Contact' element={ <ContactUs/>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
