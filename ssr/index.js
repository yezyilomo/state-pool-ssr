
// SSR.js

import React from 'react';
import { store } from 'state-pool';


const PRELOADED_STATE = '__PRELOADED_STATE__';

function initializeClientStoreByUsingServerState(serverState) {
    for (let key in serverState) {
        store.setState(key, serverState[key]);
    }
}


function initializeStore(initializeStoreNormally) {
    if (typeof window !== 'undefined' && window[PRELOADED_STATE]) {
        // We're on client side and there're states which have been sent from a server
        // So we initialize our store by using server states
        let states = JSON.parse(window[PRELOADED_STATE]);
        initializeClientStoreByUsingServerState(states);
    }
    else {
        // We're on server side or on client side without server state
        // so we initialize the store normally
        initializeStoreNormally(store);
    }
}


function getServerStatesToSendToClient() {
    let states = {}
    for (let key in store.value) {
        states[key] = store.value[key].getValue();
    }
    return JSON.stringify(states);
}


function Provider({ children }) {
    const script = {
        __html: `window.${PRELOADED_STATE} = '${getServerStatesToSendToClient()}';`
    }

    return (
        <>
            <script dangerouslySetInnerHTML={script} />
            {children}
        </>
    );
}


const SSR = {
    Provider: Provider,
    initializeStore: initializeStore
};

export default SSR;

