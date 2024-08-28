import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import SignIn from "./pages/Signup/Login"


const App = ()=>{
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<SignIn/>} />
      </Routes>
    </div>
  )
}

export default App