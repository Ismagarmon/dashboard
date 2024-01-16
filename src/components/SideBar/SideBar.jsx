import React, { useState, useEffect } from 'react'
import {Links} from '../../data/Links'
import Item from '../Item/Item'
import style from './style.module.scss'

const SideBar = () => {

    const [open, SetOpen] = useState(true)
    const [isLogged, SetLogged] = useState(false)

    const menuItems = isLogged ? Links.logged : Links.notLogged

    useEffect(() => {
        const storedSession = sessionStorage.getItem('userSession');
        if (storedSession) {
          const userSession = JSON.parse(storedSession);
          SetLogged(userSession.isLogged);
        }
      }, [])

    return (
        <div className={open ? style.sidebarOpen : style.sidebar}>
            <div>
                <svg 
                className={style.hamburger}
                onClick={() => SetOpen(!open)}
                width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                <div>
                    {menuItems.map( ({text,to, svg}, index) => <Item key={index} open={open} to={to} text={text} svg={svg}>{text}</Item>)}
                </div>
            </div>
        </div>
    )
}

export default SideBar