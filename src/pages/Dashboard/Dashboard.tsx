function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-gray-800">
        Dashboard Comestibles Alfa
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold">
            Clientes
          </h2>
          <p className="text-gray-500">
            Gestión de clientes
          </p>
        </div>


        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold">
            Pedidos
          </h2>
          <p className="text-gray-500">
            Control de preventa
          </p>
        </div>


        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold">
            Inventario
          </h2>
          <p className="text-gray-500">
            Existencias
          </p>
        </div>


      </div>

    </div>
  )
}

export default Dashboard