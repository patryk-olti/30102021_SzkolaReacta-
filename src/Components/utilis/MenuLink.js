import React from "react";

import 'typeface-roboto';

import { NavLink } from "react-router-dom";

const MenuLink = ({ path, content }) => {

    const styles = {
        li:{
            padding: '5px',
        },
        navLink:{
            fontSize: '20px',
            textDecoration: 'none',
            color: 'black',
            fontFamily: 'roboto',
            color: '#A52A2A'
        }
    }

    return(
        <li style={styles.li}>
            <NavLink to={path} style={styles.navLink}>
                { content }
            </NavLink>
        </li>
    )
}

export default MenuLink;