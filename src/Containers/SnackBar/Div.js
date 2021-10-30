import React from "react";

const Div = ({ children }) => {

    const styles = {
        width: '300px',
        height: '300px',
        lineHeight: '300px',
        border: '1px solid black',
        borderRadius: '20px',
        backgroundColor: '#FDFD96'
    }

    return(
        <div style={styles} >
            {children}
        </div>
    )
}

export default Div;