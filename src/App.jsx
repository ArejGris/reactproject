import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './login/Login'
import SignUp from './signup/SignUp'
import NavBar from './navbar/NavBar'
import HomePage from './home/HomePage'
import ContactUs from './contactus/ContactUs'
import PaymentPage from './pay/PaymentPage'
import Payment from './upi/Payment'
import About from './about/About'
import MobileSign from './signup/MobileSign'
import MobileNav from './navbar/MobileNav'
import HomeMobile from './home/HomeMobile'
import { MyProvider } from './MyProvider'
function App() {
  
  const width=window.innerWidth
  const isMobile=width<=600
  return (
       <div className="app">
       <BrowserRouter>
       
    <MyProvider>
      {isMobile? <MobileNav/>: <NavBar/>}
   <Routes>
    <Route path='/' element={isMobile?<HomeMobile/> :<HomePage/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/sign' element={isMobile?<MobileSign/> :<SignUp/>} />
    <Route path='/contact' element={<ContactUs/>} />
    <Route path='/pay' element={<PaymentPage/>}/>
    <Route path='/payui' element={<Payment/>} />
    <Route path='/about' element={<About/>}/>
   </Routes>
   
   </MyProvider>
   </BrowserRouter>
    </div>

   
  )
}
export default App
