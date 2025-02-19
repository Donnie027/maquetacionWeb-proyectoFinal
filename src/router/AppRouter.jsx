import { Route, Routes } from "react-router-dom"
import { PageRoutes } from "../pages/routes/PageRoutes"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<PageRoutes/>}/>
    </Routes>
  )
}
