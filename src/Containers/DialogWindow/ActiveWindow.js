import React from "react";

import Span from "../../Components/utilis/Span";
import Button from "../../Components/utilis/Button";

const ActiveWindow = ({ handleClick }) => {

    return(
        <div>
            <Span>users</Span>
            <Button content="oltix" handleClick={handleClick} value="oltix" />
            <Button content="patryk" handleClick={handleClick} value="patryk" />
            <Button content="mario" handleClick={handleClick} value="mario" />
        </div>
    )
}

export default ActiveWindow;