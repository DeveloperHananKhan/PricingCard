import "./App.css" 
import { UserDetails } from "./components/api/userDetails"
import { UserData } from "./components/api/userList"
import { Routes,Route } from "react-router-dom"

import './App.css'

function App() {
  return (
    <>
    <Routes>
      
      <Route path="/" element={<UserData />} />
      <Route path="/userDetails/:id" element={<UserDetails />} />  

     </Routes>
    </>
  )
}

export default App
