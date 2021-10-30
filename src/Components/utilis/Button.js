import React from "react";

const Button = ({ content, handleClick }) => {

    const styles = {
        padding: '10px 30px',
        margin: '30px',
        border: '1px solid black',
        borderRadius: '10px',
        boxShadow: `2px 2px 3px 0px rgba(0,0,0,0.75)`,
        backgroundColor: 'white',
        cursor: 'pointer',
        fontSize: '16px'
    }

    return(
        <div>
            <button style={styles} onClick={handleClick} >
                {content}
            </button>
        </div>
    )
}

export default Button;