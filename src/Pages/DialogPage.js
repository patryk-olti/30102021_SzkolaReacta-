import React from 'react';

import DialogWindow from '../Containers/DialogWindow/DialogWindow';

const DialogPage = () => {

    const styles = {
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return(
        <div style={styles}>
            <DialogWindow />
        </div>
    )
}

export default DialogPage;