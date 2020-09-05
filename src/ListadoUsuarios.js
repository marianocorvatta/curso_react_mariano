import React from "react"

const ListadoUsuarios = ({usuarios,handleEditAndDelete}) => 
    <ul>
        {usuarios.length
        ? usuarios.map((usuario,i)=> 
            <li key={i}>
                {usuario.nombre} {usuario.apellido}
                <button onClick={handleEditAndDelete.bind(null,i,"editar",usuario)}>editar</button>
                <button onClick={handleEditAndDelete.bind(null,i,"borrar",usuario)}>borrar</button>
            </li> 
        )
        : <li>No hay usuarios</li> }
    </ul>

export default ListadoUsuarios