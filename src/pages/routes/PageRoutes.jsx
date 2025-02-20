import { Navigate, Route, Routes } from "react-router-dom"
import { Inicio } from "../Inicio/Inicio"
import { Cafeteria } from "../cafeteria/Cafeteria"


export const PageRoutes = () => {
  return (
    <Routes>

      <Route path="/inicio" element={<Inicio/>}/>
      <Route path="/cafeteria" element={<Cafeteria/>}/>
      

      <Route path="/" element={<Navigate to ="/inicio"/>}/>
      <Route path="*" element={<Navigate to ="/inicio"/>}/>
    </Routes>
  )
}
