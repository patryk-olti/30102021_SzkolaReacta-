import React from "react";

import { 
            BrowserRouter as Router
        } 
        from "react-router-dom";

import MenuLink from "../../Components/utilis/MenuLink";

const Menu = ({ isActive }) => {

    const linkArray = [
        {
            id: 1,
            path: '/',
            content: 'home'
        },
        {
            id: 2,
            path: 'about',
            content: 'about'
        },
        {
            id: 3,
            path: 'contact',
            content: 'contact'
        },
        {
            id: 4,
            path: 'galery',
            content: 'galery'
        }
    ]

    const translate = isActive ? `translateX(0)` : `translateX(-100%)`;

    const styles = {
        position: 'absolute',
        top: '0px',
        left: '0px',
        transform: `${translate}`,
        padding: '5px 30px 0px 5px',
        height: '100%',
        borderRight: '1px solid black',
        backgroundColor: '#F0F8FF',
        transition: `1s`,
        ul: {
            listStyleType: 'none'
        }   
    }

    const links = linkArray.map( item => 
        <MenuLink 
            key={item.id}
            path={item.path}
            content={item.content}
        />
        )

    return(
        <div style={styles}>
            <Router>
                <ul style={styles.ul}>
                    { links }
                </ul>
            </Router>
        </div>
    )
}

export default Menu;