import React from "react";

const Button = ({ content, handleClick, value }) => {

    const styles = {
        padding: '5px 20px',
        margin: '10px',
        border: '1px solid black',
        borderRadius: '10px',
        boxShadow: `2px 2px 3px 0px rgba(0,0,0,0.75)`,
        backgroundColor: 'white',
        cursor: 'pointer',
        fontSize: '16px'
    }

    const handleOnClick = () => {
        if(value){
            handleClick(value);
        }else
        { 
            handleClick();
        }
    }

    return(
        <div>
            <button style={styles} onClick={handleOnClick} >
                {content}
            </button>
        </div>
    )
}

export default Button;