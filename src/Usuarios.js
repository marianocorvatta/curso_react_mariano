import React from "react"
import ListadoUsuarios from "./ListadoUsuarios"

// traer la prop del metodo 
const Usuarios = ({nombre,apellido,usuarios,manejarElSubmit,manejarCambioNombre,manejarCambioApellido,handleEditAndDelete,handleChangeDataForm}) => 
    <>
        <form onSubmit={manejarElSubmit}>
            <div>
                <input onChange={(e)=>handleChangeDataForm(e,"nombre")} type="text" placeholder="Nombre" value={nombre}/>
            </div>
            <div>
                <input onChange={(e)=>handleChangeDataForm(e,"apellido")} type="text" placeholder="Apellido" value={apellido}/>
            </div>
            <button>Guardar</button>
        </form>
        <ListadoUsuarios 
            usuarios={usuarios}
            handleEditAndDelete={handleEditAndDelete}
        />
    </>

export default Usuarios