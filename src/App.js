import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Components/About/About';
import { FAQ } from './Pages/FAQ';
import { Contact } from './Pages/Contact';
import { Subscribe } from './Pages/Subscribe';
import { LoginSignup } from './Pages/LoginSignup';
import { Question } from './Components/Question/Question';
import { Answer } from './Components/Answer/Answer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/faq' element={<FAQ/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/subscribe' element={<Subscribe/>}></Route>
          <Route path="login" element={<LoginSignup/>}></Route>
          <Route path="/" exact element={<Question/>}></Route>
          <Route path="/answer" exact element={<Answer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
