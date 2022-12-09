import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

function Menu(props) {
  return (
    <nav className='menu'>
        <NavLink to='/' className='menu__item'>Главная</NavLink>
        <NavLink to='/drift' className='menu__item'>Дрифт-такси</NavLink>
        <NavLink to='/timeattack' className='menu__item'>Time Attack</NavLink>
        <NavLink to='/forza' className='menu__item'>Forza Karting</NavLink>
    </nav>
  )
}

Menu.propTypes = {
    props: PropTypes.any,
}

export default Menu
