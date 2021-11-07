import React, { useState, useEffect } from 'react';

import Button from '../Components/utilis/Button';
import SnackBar from '../Containers/SnackBar/SnackBar';

import '../styles/styles.scss';

const DialogPage = () => {

    const [ activeSnackBar, setActiveSnackBar ] = useState(false);
    const timeForShowing = 5000;

    const toggleActiveSnackBar = () => setActiveSnackBar( prev => !prev );

    useEffect( () => {
        if( activeSnackBar ){
            setTimeout( () => setActiveSnackBar(false) , timeForShowing)
        }

    }, [ activeSnackBar ])

    return(
        <div className='container'>
            <Button content='snackbar' handleClick={toggleActiveSnackBar} />
            {activeSnackBar ? <SnackBar /> : null}
        </div>
    )
}

export default DialogPage;