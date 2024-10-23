import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Shared/Header'
import Footer from './Shared/Footer'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div>
      <Header></Header>
      <div className='max-w-screen-xl mx-auto  px-4 lg:px-0' >
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  )
}

export default App
