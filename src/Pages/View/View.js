import React from 'react';

import DialogWindow from '../../Containers/DialogWindow/DialogWindow';

const View = () => {

    const styles = {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return(
        <div style={styles}>
            <DialogWindow />
        </div>
    )
}

export default View;