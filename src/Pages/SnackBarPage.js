import React, { useState, useEffect } from 'react';

import Button from '../Components/utilis/Button';
import SnackBar from '../Containers/SnackBar/SnackBar';

const DialogPage = () => {

    const [ activeSnackBar, setActiveSnackBar ] = useState(false);
    const timeForShowing = 5000;

    const toggleActiveSnackBar = () => setActiveSnackBar( prev => !prev );

    const styles = {
        position: 'relative',
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
            <Button content='snackbar' handleClick={toggleActiveSnackBar} />
            {activeSnackBar ? <SnackBar /> : null}
        </div>
    )
}

export default DialogPage;