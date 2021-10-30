import React, { useState } from "react";

import ActiveWindow from "./ActiveWindow";
import DisactiveWindow from "./DisactiveWindow";

const DialogWindow = () => {

    const styles = {
        width: '20em',
        padding: '20px',
        border: '1px solid black',
        borderRadius: '10px',
        boxShadow: `4px 4px 5px 0px rgba(0,0,0,0.75)`
    }

    const [ active, setActive ] = useState(false);

    const toggleActive = () => setActive( prev => !prev );

    const window = active ? <ActiveWindow /> : <DisactiveWindow handleClick={toggleActive} />;

    return(
        <div style={styles}>
            {window}
        </div>
    )
}

export default DialogWindow;