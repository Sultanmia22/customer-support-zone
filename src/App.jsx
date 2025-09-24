
import { Suspense } from 'react'
import './App.css'
import Countbox from './Components/Countbox'
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

      <Countbox></Countbox>

    <Suspense>
        <IssueManagement 
        fetchPromise={fetchPromise}
      ></IssueManagement>
    </Suspense>

      <Footer></Footer>  
    </div>
  )
}

export default App
