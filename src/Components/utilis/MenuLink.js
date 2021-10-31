import React from "react";

import 'typeface-roboto';

import { NavLink } from "react-router-dom";

const MenuLink = ({ path, content }) => {

    const styles = {
        li:{
            display: 'flex',
            margin: '10px 0',
        },
        navLink:{
            display: 'block',
            width: '100%',
            fontSize: '20px',
            padding: '0 10px 0 0',
            textDecoration: 'none',
            textAlign: 'left',
            color: '#A52A2A',
            fontFamily: 'roboto',
            borderRight: '5px solid transparent'
        },
        active: {
            borderRight: '5px solid red'
        }
    }

    return(
        <li style={styles.li}>
            <NavLink to={path} style={styles.navLink} exact activeStyle={styles.active}>
                { content }
            </NavLink>
        </li>
    )
}

export default MenuLink;