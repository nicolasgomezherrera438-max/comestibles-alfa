import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "../src/pages/login/login"
import Dashboard from "../src/pages/Dashboard/Dashboard"
import Clientes from "../src/pages/Clientes/clientes"

import MainLayout from "../src/Layouts/MainLayout/MainLayout"


function AppRouter() {


  return (

    <BrowserRouter>


      <Routes>


        {/* Login */}

        <Route
          path="/"
          element={<Login />}
        />



        {/* Sistema principal */}

        <Route element={<MainLayout />}>



          <Route
            path="/dashboard"
            element={<Dashboard />}
          />



          <Route
            path="/clientes"
            element={<Clientes />}
          />


        </Route>


      </Routes>


    </BrowserRouter>

  )

}


export default AppRouter