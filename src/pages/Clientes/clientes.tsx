import { useState } from "react"



type Cliente = {

  codigo: string
  nombre: string
  telefono: string
  ciudad: string
  estado: string

}




function Clientes(){


  const [modal, setModal] = useState(false)


  const [modalEditar, setModalEditar] = useState(false)



  const [busqueda, setBusqueda] = useState("")



  const [clienteSeleccionado, setClienteSeleccionado] = useState<Cliente | null>(null)



  const [clienteEditando, setClienteEditando] = useState<Cliente | null>(null)





  const [clientes, setClientes] = useState<Cliente[]>([


    {

      codigo:"001",

      nombre:"Tienda Alfa",

      telefono:"3001234567",

      ciudad:"Bogotá",

      estado:"Activo"

    },


    {

      codigo:"002",

      nombre:"Supermercado Central",

      telefono:"3019876543",

      ciudad:"Soacha",

      estado:"Activo"

    }


  ])





  const [nuevoCliente, setNuevoCliente] = useState({

    nombre:"",

    telefono:"",

    ciudad:""

  })








  const clientesFiltrados = clientes.filter((cliente)=>

    cliente.nombre

    .toLowerCase()

    .includes(busqueda.toLowerCase())

  )







  const guardarCliente = ()=>{


    const clienteNuevo:Cliente={


      codigo:String(clientes.length + 1).padStart(3,"0"),


      nombre:nuevoCliente.nombre,


      telefono:nuevoCliente.telefono,


      ciudad:nuevoCliente.ciudad,


      estado:"Activo"


    }





    setClientes([

      ...clientes,

      clienteNuevo

    ])




    setModal(false)



    setNuevoCliente({

      nombre:"",

      telefono:"",

      ciudad:""

    })


  }








  const eliminarCliente = (codigo:string)=>{


    setClientes(

      clientes.filter(

        (cliente)=>cliente.codigo !== codigo

      )

    )


  }









  const guardarEdicion = ()=>{


    if(!clienteEditando){

      return

    }



    setClientes(

      clientes.map((cliente)=>

        cliente.codigo === clienteEditando.codigo

        ? clienteEditando

        : cliente

      )

    )



    setClienteEditando(null)

    setModalEditar(false)


  }







return (

<div>



{/* ENCABEZADO */}


<div className="flex justify-between items-center mb-8">


<div>

<h1 className="text-3xl font-bold text-gray-800">
Clientes
</h1>


<p className="text-gray-500 mt-2">
Administración de clientes Comestibles Alfa
</p>


</div>




<button

onClick={()=>setModal(true)}

className="bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800"

>

+ Nuevo Cliente

</button>


</div>








{/* TABLA CLIENTES */}



<div className="bg-white rounded-xl shadow p-6">



<input

type="text"

value={busqueda}

onChange={(e)=>setBusqueda(e.target.value)}

placeholder="Buscar cliente..."

className="w-full border rounded-lg px-4 py-3 mb-6"

/>





<table className="w-full">


<thead>

<tr className="border-b bg-gray-50">


<th className="text-left p-3">
Código
</th>


<th className="text-left p-3">
Cliente
</th>


<th className="text-left p-3">
Teléfono
</th>


<th className="text-left p-3">
Ciudad
</th>


<th className="text-left p-3">
Estado
</th>


<th className="text-left p-3">
Acciones
</th>


</tr>

</thead>




<tbody>


{

clientesFiltrados.map((cliente)=>(


<tr

key={cliente.codigo}

className="border-b hover:bg-gray-50"

>


<td className="p-3">
{cliente.codigo}
</td>



<td className="p-3">
{cliente.nombre}
</td>



<td className="p-3">
{cliente.telefono}
</td>



<td className="p-3">
{cliente.ciudad}
</td>



<td className="p-3 text-green-600">
{cliente.estado}
</td>



<td className="p-3 flex gap-3">



<button

onClick={()=>setClienteSeleccionado(cliente)}

className="text-blue-700 hover:underline"

>

Ver

</button>




<button

onClick={()=>{

setClienteEditando(cliente)

setModalEditar(true)

}}

className="text-yellow-600 hover:underline"

>

Editar

</button>




<button

onClick={()=>eliminarCliente(cliente.codigo)}

className="text-red-600 hover:underline"

>

Eliminar

</button>



</td>



</tr>


))


}


</tbody>


</table>


</div>




{/* MODAL NUEVO CLIENTE */}



{

modal && (


<div className="fixed inset-0 bg-black/40 flex items-center justify-center p-5">


<div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-8 max-h-[90vh] overflow-y-auto">



<div className="flex justify-between items-center mb-6">


<h2 className="text-2xl font-bold text-gray-800">

Nuevo Cliente

</h2>



<button

onClick={()=>setModal(false)}

className="text-gray-500 text-xl"

>

✕

</button>


</div>






<div className="grid grid-cols-1 md:grid-cols-2 gap-5">






{/* INFORMACIÓN GENERAL */}



<h3 className="md:col-span-2 text-lg font-bold text-blue-700 border-b pb-2">

Información general

</h3>






<div>

<label>
Tipo identificación
</label>


<select className="w-full border rounded-lg p-3 mt-1">


<option>
Seleccione
</option>


<option>
NIT
</option>


<option>
Cédula
</option>


</select>


</div>






<div>

<label>
Número identificación
</label>


<input

className="w-full border rounded-lg p-3 mt-1"

/>


</div>







<div>

<label>
Razón social
</label>


<input


value={nuevoCliente.nombre}


onChange={(e)=>setNuevoCliente({

...nuevoCliente,

nombre:e.target.value

})}


className="w-full border rounded-lg p-3 mt-1"


/>


</div>






<div>

<label>
Nombre comercial
</label>


<input

className="w-full border rounded-lg p-3 mt-1"

/>


</div>









{/* UBICACIÓN */}





<h3 className="md:col-span-2 text-lg font-bold text-blue-700 border-b pb-2 mt-5">

Ubicación

</h3>






<div>

<label>
Área
</label>


<input

className="w-full border rounded-lg p-3 mt-1"

/>


</div>






<div>

<label>
Sub área
</label>


<input

className="w-full border rounded-lg p-3 mt-1"

/>


</div>






<div>

<label>
Dirección
</label>


<input

className="w-full border rounded-lg p-3 mt-1"

/>


</div>






<div>

<label>
Ciudad
</label>


<input


value={nuevoCliente.ciudad}


onChange={(e)=>setNuevoCliente({

...nuevoCliente,

ciudad:e.target.value

})}



className="w-full border rounded-lg p-3 mt-1"


/>


</div>






<div>

<label>
Teléfono
</label>


<input


value={nuevoCliente.telefono}


onChange={(e)=>setNuevoCliente({

...nuevoCliente,

telefono:e.target.value

})}



className="w-full border rounded-lg p-3 mt-1"


/>


</div>









{/* INFORMACIÓN COMERCIAL */}





<h3 className="md:col-span-2 text-lg font-bold text-blue-700 border-b pb-2 mt-5">

Información comercial

</h3>






<div>

<label>
Tipo cliente
</label>


<select className="w-full border rounded-lg p-3 mt-1">


<option>
Seleccione
</option>


<option>
Tienda
</option>


<option>
Mayorista
</option>


</select>


</div>






<div>

<label>
Tipo venta
</label>


<select className="w-full border rounded-lg p-3 mt-1">


<option>
Contado
</option>


<option>
Crédito
</option>


</select>


</div>







<div>

<label>
Lista de precios
</label>


<select className="w-full border rounded-lg p-3 mt-1">


<option>
Precio estándar
</option>


</select>


</div>







<div>

<label>
Cupo disponible
</label>


<input

type="number"

className="w-full border rounded-lg p-3 mt-1"


/>


</div>





</div>






<button

onClick={guardarCliente}

className="mt-8 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800"

>

Guardar Cliente

</button>






</div>


</div>


)

}





{/* MODAL VER CLIENTE */}



{

clienteSeleccionado && (


<div className="fixed inset-0 bg-black/40 flex items-center justify-center p-5">


<div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">


<div className="flex justify-between items-center mb-6">


<h2 className="text-2xl font-bold text-gray-800">

Detalle del Cliente

</h2>



<button

onClick={()=>setClienteSeleccionado(null)}

className="text-gray-500 text-xl"

>

✕

</button>


</div>






<div className="space-y-4">


<div>

<p className="text-gray-500">
Código
</p>

<p className="font-semibold">
{clienteSeleccionado.codigo}
</p>

</div>





<div>

<p className="text-gray-500">
Nombre
</p>

<p className="font-semibold">
{clienteSeleccionado.nombre}
</p>

</div>





<div>

<p className="text-gray-500">
Teléfono
</p>

<p className="font-semibold">
{clienteSeleccionado.telefono}
</p>

</div>





<div>

<p className="text-gray-500">
Ciudad
</p>

<p className="font-semibold">
{clienteSeleccionado.ciudad}
</p>

</div>





<div>

<p className="text-gray-500">
Estado
</p>

<p className="font-semibold text-green-600">
{clienteSeleccionado.estado}
</p>

</div>



</div>







<button

onClick={()=>setClienteSeleccionado(null)}

className="mt-8 w-full bg-blue-700 text-white py-3 rounded-lg"

>

Cerrar

</button>




</div>


</div>


)

}









{/* MODAL EDITAR CLIENTE */}





{

modalEditar && clienteEditando && (



<div className="fixed inset-0 bg-black/40 flex items-center justify-center p-5">


<div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">



<div className="flex justify-between items-center mb-6">


<h2 className="text-2xl font-bold">

Editar Cliente

</h2>




<button

onClick={()=>setModalEditar(false)}

className="text-gray-500 text-xl"

>

✕

</button>


</div>







<label>
Nombre
</label>


<input


value={clienteEditando.nombre}


onChange={(e)=>setClienteEditando({

...clienteEditando,

nombre:e.target.value

})}


className="w-full border rounded-lg p-3 mb-4 mt-1"


/>








<label>
Teléfono
</label>


<input


value={clienteEditando.telefono}


onChange={(e)=>setClienteEditando({

...clienteEditando,

telefono:e.target.value

})}


className="w-full border rounded-lg p-3 mb-4 mt-1"


/>







<label>
Ciudad
</label>


<input


value={clienteEditando.ciudad}


onChange={(e)=>setClienteEditando({

...clienteEditando,

ciudad:e.target.value

})}


className="w-full border rounded-lg p-3 mb-4 mt-1"


/>









<button

onClick={guardarEdicion}

className="w-full bg-blue-700 text-white py-3 rounded-lg"

>

Guardar cambios

</button>






<button

onClick={()=>setModalEditar(false)}

className="w-full mt-3 border py-3 rounded-lg"

>

Cancelar

</button>






</div>


</div>



)

}






</div>

)

}



export default Clientes