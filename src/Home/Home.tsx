import { useNavigate } from "react-router-dom"

import {
  FaBars,
  FaCalendarAlt,
  FaUsers,
  FaWallet,
  FaBoxOpen,
  FaChartLine,
  FaMapMarkedAlt,
  FaCashRegister,
  FaSyncAlt,
  FaShoppingCart,
} from "react-icons/fa"


function Home() {

  const navigate = useNavigate()


  const modulos = [

    {
      nombre: "Rutero",
      icono: <FaCalendarAlt size={42} className="text-sky-500" />,
      ruta: "/rutas",
    },


    {
      nombre: "Clientes",
      icono: <FaUsers size={42} className="text-orange-400" />,
      ruta: "/clientes",
    },


    {
      nombre: "Cartera",
      icono: <FaWallet size={42} className="text-cyan-500" />,
      ruta: "/cartera",
    },


    {
      nombre: "Productos",
      icono: <FaBoxOpen size={42} className="text-amber-400" />,
      ruta: "/productos",
    },


    {
      nombre: "Pedidos",
      icono: <FaShoppingCart size={42} className="text-rose-400" />,
      ruta: "/pedidos",
    },


    {
      nombre: "Power BI",
      icono: <FaChartLine size={42} className="text-red-500" />,
      ruta: "/powerbi",
      proximamente: true,
    },


    {
      nombre: "Enrutamiento",
      icono: <FaMapMarkedAlt size={42} className="text-sky-500" />,
      ruta: "/rutas",
      proximamente: true,
    },


    {
      nombre: "Cuadre caja",
      icono: <FaCashRegister size={42} className="text-emerald-500" />,
      ruta: "/cuadre-caja",
      proximamente: true,
    },


    {
      nombre: "Sincronizar",
      icono: <FaSyncAlt size={42} className="text-cyan-500" />,
      ruta: "/sincronizar",
      proximamente: true,
    },


  ]




  const abrirModulo = (modulo:{
    nombre:string
    ruta:string
    proximamente?:boolean
  })=>{

    if(modulo.proximamente) return

    navigate(modulo.ruta)

  }




  return (

    <div

      className="
      min-h-screen
      bg-[#f8f8f3]
      flex
      justify-center
      py-6
      px-4
      relative
      overflow-hidden
      "

    >



      

      <div

        className="
        absolute
        inset-0
        bg-center
        bg-no-repeat
        pointer-events-none
        "

        style={{

          backgroundImage:"url('/logo alfa.png')",

          backgroundSize:"700px",

          opacity: 10

        }}

      />







      {/* CONTENIDO PRINCIPAL */}


      <div

        className="
        relative
        z-10
        w-full
        max-w-5xl
        bg-white/85
        backdrop-blur-sm
        rounded-2xl
        shadow-lg
        overflow-hidden
        border
        border-gray-200
        "

      >





        {/* HEADER */}


        <div

          className="
          bg-blue-700
          text-white
          px-6
          py-4
          flex
          items-center
          justify-between
          "

        >


          <div className="flex items-center gap-4">


            <div

              className="
              w-16
              h-16
              bg-white
              rounded-2xl
              flex
              items-center
              justify-center
              shadow
              "

            >

              <img

                src="/logo-alfa.png"

                alt="Logo Alfa"

                className="
                w-12
                h-12
                object-contain
                "

              />

            </div>




            <div>

              <h1 className="text-3xl font-semibold">

                Comestibles Alfa

              </h1>


              <p className="text-sm opacity-95 tracking-wide">

                SISTEMA DE PREVENTA

              </p>


            </div>


          </div>





          <button

            className="
            text-white
            text-3xl
            "

          >

            <FaBars />

          </button>



        </div>







        {/* CUERPO */}


        <div className="px-8 py-8">



          <div className="flex justify-between items-center mb-8">


            <div>

              <p className="text-sm text-gray-400">

                Sistema Alfa

              </p>


              <h2 className="text-2xl font-semibold text-gray-700">

                Menú principal

              </h2>


            </div>




            <div>

              <p className="text-gray-500 text-sm">

                Versión 2.1.11

              </p>


            </div>


          </div>







          {/* MODULOS */}



          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">



            {
              modulos.map((modulo)=>(


                <button

                  key={modulo.nombre}

                  onClick={()=>abrirModulo(modulo)}

                  className={`
                  group
                  flex
                  flex-col
                  items-center
                  ${
                    modulo.proximamente
                    ?
                    "opacity-70 cursor-not-allowed"
                    :
                    ""
                  }
                  `}


                >



                  <div

                    className="
                    w-36
                    h-36
                    bg-white
                    border-2
                    border-sky-200
                    rounded-3xl
                    shadow-md
                    flex
                    items-center
                    justify-center
                    transition
                    duration-200
                    group-hover:shadow-xl
                    group-hover:-translate-y-1
                    "

                  >

                    {modulo.icono}


                  </div>




                  <span

                    className="
                    mt-4
                    text-lg
                    text-gray-500
                    font-medium
                    text-center
                    "

                  >

                    {modulo.nombre}

                  </span>





                  {
                    modulo.proximamente && (

                      <span className="mt-1 text-xs text-orange-500">

                        Próximamente

                      </span>

                    )
                  }




                </button>


              ))
            }



          </div>




        </div>





      </div>





    </div>


  )

}



export default Home