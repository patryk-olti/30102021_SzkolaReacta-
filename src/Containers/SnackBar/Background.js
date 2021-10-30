import React from "react";

const Background = ({ children }) => {

    const styles = {
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(200,200,200,0.3)'
    }

    return(
        <div style={styles} >
            {children}
        </div>
    )
}

export default Background;