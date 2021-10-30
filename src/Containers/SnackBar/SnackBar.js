import React from "react";

import Background from "./Background";
import Div from "./Div";
import Span from "../../Components/utilis/Span";

const SnackBar = () => {

    return(
        <Background>
            <Div>
                <Span fontSize="30"> hello I'm SnackBar </Span>
            </Div>
        </Background>
    )
}

export default SnackBar;