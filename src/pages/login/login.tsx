import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login() {
  const navigate = useNavigate()

  const [usuario, setUsuario] = useState("")
  const [contrasena, setContrasena] = useState("")

  const iniciarSesion = () => {
    if (!usuario || !contrasena) {
      alert("Por favor ingresa usuario y contraseña")
      return
    }

    navigate("/home")
  }

  return (
    <div className="min-h-screen bg-[#f5f6fa] flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 border border-gray-100">
        <div className="flex justify-center mb-5">
          <img
            src="./public/logo alfa.png"
            alt="Logo Alfa"
            className="w-20 h-20 object-contain"
          />
        </div>

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Comestibles Alfa
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Sistema de preventa y gestión comercial
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Usuario</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese su usuario"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Contraseña</label>
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese su contraseña"
            />
          </div>

          <button
            onClick={iniciarSesion}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg text-lg font-medium mt-4"
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login