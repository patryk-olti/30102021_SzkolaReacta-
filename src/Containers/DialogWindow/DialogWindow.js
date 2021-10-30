import React, { useState } from "react";

import ActiveWindow from "./ActiveWindow";
import DisactiveWindow from "./DisactiveWindow";

const DialogWindow = () => {

    const [ active, setActive ] = useState(false);

    const toggleActive = () => setActive( prev => !prev );

    const window = active ? <ActiveWindow /> : <DisactiveWindow />;

    return(
        <div>
            {window}
        </div>
    )
}

export default DialogWindow;