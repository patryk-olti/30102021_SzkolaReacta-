import React, { useState, useEffect } from 'react';

import DialogWindow from '../../Containers/DialogWindow/DialogWindow';
import Button from '../../Components/utilis/Button';
import SnackBar from '../../Containers/SnackBar/SnackBar';
import AbsoluteButton from '../../Components/utilis/AbsoluteButton';
import Menu from '../../Containers/Menu/Menu';

const View = () => {

    const [ activeSnackBar, setActiveSnackBar ] = useState(false);
    const timeForShowing = 5000;

    const [ isActiveMenu, setIsActiveMenu ] = useState(false);
    const toggleIsActiveMenu = () => setIsActiveMenu( prev => !prev);

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
            <DialogWindow />
            <Button content='snackbar' handleClick={toggleActiveSnackBar} />
            {activeSnackBar ? <SnackBar /> : null}
            <AbsoluteButton text="menu" top="10" right="10" handleClick={toggleIsActiveMenu} />
            <Menu isActive={isActiveMenu} />
        </div>
    )
}

export default View;