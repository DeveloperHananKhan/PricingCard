import "./App.css" 
import { UserPostDetails } from "./components/postsApi/UsersDetails"
import { Routes,Route } from "react-router-dom"
import './App.css'


function App() {
  return (
    <>
    <Routes>
      
      <Route path="/" element={<UserPostDetails />} />
      

     </Routes>
    </>
  )
}

export default App
