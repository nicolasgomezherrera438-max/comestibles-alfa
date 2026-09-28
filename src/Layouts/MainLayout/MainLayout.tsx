import { Outlet, Link } from "react-router-dom"


function MainLayout() {

  return (

    <div className="min-h-screen flex bg-gray-100">


      {/* Menú lateral */}

      <aside className="w-64 bg-blue-800 text-white p-5">

        <h1 className="text-2xl font-bold mb-8">
          Alfa
        </h1>


        <nav className="space-y-3">


          <Link 
           to="/home"
          className="block hover:bg-blue-700 p-3 rounded-lg"
          >
          🏠 Inicio
        </Link>


          <Link
            to="/clientes"
            className="block hover:bg-blue-700 p-3 rounded-lg"
          >
            👥 Clientes
          </Link>


          <Link
            to="/productos"
            className="block hover:bg-blue-700 p-3 rounded-lg"
          >
            📦 Productos
          </Link>


          <Link
            to="/pedidos"
            className="block hover:bg-blue-700 p-3 rounded-lg"
          >
            🛒 Pedidos
          </Link>


          <Link
            to="/rutas"
            className="block hover:bg-blue-700 p-3 rounded-lg"
          >
            📍 Rutas
          </Link>


          <Link
            to="/cartera"
            className="block hover:bg-blue-700 p-3 rounded-lg"
          >
            💰 Cartera
          </Link>


          <div
            className="block hover:bg-blue-700 p-3 rounded-lg cursor-pointer"
          >
            📊 Power BI
          </div>


        </nav>


      </aside>



    <main className="flex-1">


  <header className="h-16 bg-white shadow flex items-center justify-between px-8">

    <h2 className="text-xl font-semibold text-gray-800">
      Sistema Comestibles Alfa
    </h2>


    <div className="flex items-center gap-4">

      <span className="text-gray-600">
        Administrador
      </span>


      <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center">
        A
      </div>

    </div>


  </header>



  <section className="p-8">

    <Outlet />

  </section>


</main>

    </div>

  )
}


export default MainLayout