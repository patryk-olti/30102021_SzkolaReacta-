import React, { useState, useEffect } from 'react';

import DialogWindow from '../../Containers/DialogWindow/DialogWindow';
import Button from '../../Components/utilis/Button';
import SnackBar from '../../Containers/SnackBar/SnackBar';

const View = () => {

    const [ activeSnackBar, setActiveSnackBar ] = useState(false);
    const timeForShowing = 5000;

    const toggleActiveSnackBar = () => setActiveSnackBar( prev => !prev );

    const styles = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    useEffect( () => {
        if( activeSnackBar ){
            setTimeout( () => setActiveSnackBar(false) , timeForShowing)
        }

    }, [ activeSnackBar ])


    return(
        <div style={styles}>
            <DialogWindow />
            <Button content='snackbar' handleClick={toggleActiveSnackBar} />
            {activeSnackBar ? <SnackBar /> : null}
        </div>
    )
}

export default View;