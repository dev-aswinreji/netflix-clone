import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import SignIn from "./pages/Signup/Login"
import Player from "./pages/Player/Player"


const App = ()=>{
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/player/:id" element={<Player/>} />
      </Routes>
    </div>
  )
}

export default App