
import { Suspense} from 'react'
import './App.css'
 import { ToastContainer} from 'react-toastify';
import Footer from './Components/Footer'
import IssueManagement from './Components/IssueManagement'
import Navbar from './Components/Navbar'

const fetchData = async () => {
  const res = await fetch('/data.json')
  return res.json()
}

function App() {
 const fetchPromise = fetchData()
  
   


  return (

    <div className='bgColor'>
      <Navbar></Navbar>

    <Suspense fallback={<span class="loading loading-spinner loading-xl  "></span>}>
        <IssueManagement 
        fetchPromise={fetchPromise}
      ></IssueManagement>
    </Suspense>

      <Footer></Footer>  

      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
