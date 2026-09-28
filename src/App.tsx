import { BrowserRouter, Routes, Route } from "react-router-dom"


import Login from "./pages/login/login"

import Home from "./Home/Home"

import MainLayout from "../src/Layouts/MainLayout/MainLayout"


import Dashboard from "./pages/Dashboard/Dashboard"

import Clientes from "./pages/Clientes/clientes"

import Productos from "./pages/Productos/productos"

import Pedidos from "./pages/Pedidos/pedidos"

import Rutas from "./pages/Rutas/rutas"

function Cartera() {
  return (
    <div className="text-2xl font-semibold text-gray-700">
      Módulo Cartera
    </div>
  )
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* INICIO TIPO APP */}
        <Route path="/home" element={<Home />} />

        {/* MÓDULOS */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/rutas" element={<Rutas />} />
          <Route path="/cartera" element={<Cartera />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter