import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './style.module.scss'

const Item = ({text,to,svg,open}) => {

    return (
        <NavLink className={open ? style.linkOpen : style.normal} to={to}>
            <div>
                {svg}
            </div>
            {open ? <p>{text}</p> : null}
        </NavLink>
    )
}

export default Item