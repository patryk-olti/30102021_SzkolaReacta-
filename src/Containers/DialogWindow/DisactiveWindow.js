import React from "react";

import Span from "../../Components/utilis/Span";
import Button from "../../Components/utilis/Button";

const DisactiveWindow = ({ handleClick }) => {

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }

    return(
        <div style={styles}>
            <Span fontSize="20" >actual user</Span>
            <Button content="change" handleClick={handleClick} />
        </div>
    )
}

export default DisactiveWindow;