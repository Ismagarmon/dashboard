import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './style.module.scss'
import './style.css'

const Item = ({text,to,svg,open,index}) => {

    return (
        <NavLink className={open ? style.linkOpen : style.normal} to={to}>
            <div>
                {svg}
            </div>
            {open ? <p className='m-reform'>{text}</p> : null}
        </NavLink>
    )
}

export default Item