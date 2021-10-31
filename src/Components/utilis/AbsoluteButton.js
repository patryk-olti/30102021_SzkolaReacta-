import React from 'react';

const AbsoluteButton = ({ text, top, bottom, left, right, handleClick }) => {

    const styles = {
        position: 'absolute',
        top: top ? `${top}px` : null,
        bottom: bottom ? `${bottom}px` : null,
        left: left ? `${left}px` : null,
        right: right ? `${right}px` : null,

        padding: '10px',
        border: '2px solid black',
        borderRadius: '5px',
        backgroundColor: 'white',
        cursor: 'pointer'
    }


    return(
        <button style={styles} onClick={handleClick} >
            { text }
        </button>
    )
}

export default AbsoluteButton;