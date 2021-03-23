import React from 'react'
import './Iconos.css'

const Iconos = ({Icon,selected,title}) => {
    return (
        <div className={`icono_container ${selected && "selected"}`}>
            <Icon className="icono"/>
            <h2 className="icono_title">{title}</h2>
        </div>
    )
}

export default Iconos
