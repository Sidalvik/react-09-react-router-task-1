import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

function Menu(props) {

  const className = ({ isActive }) => isActive ? 'menu__item menu__item-active' : 'menu__item';

  return (
    <nav className='menu'>
        <NavLink to='/' className={className}>Главная</NavLink>
        <NavLink to='/drift' className={className}>Дрифт-такси</NavLink>
        <NavLink to='/timeattack' className={className}>Time Attack</NavLink>
        <NavLink to='/forza' className={className}>Forza Karting</NavLink>
    </nav>
  )
}

Menu.propTypes = {
    props: PropTypes.any,
}

export default Menu
