import { useGlobalState } from 'state-pool'
import SSR from './ssr';


function lastUpdateLocation() {
    if (typeof window !== 'undefined') {
        return "client side";
    }
    return "server side"
}

SSR.initializeStore((store) => {
    store.setState("state", {
        "count": 0,
        "lastUpdateLocation": lastUpdateLocation()
    });
});


function Counter() {
    const [state, setState] = useGlobalState("state");

    const setCount = (count) => {
        setState({
            "count": count,
            "lastUpdateLocation": lastUpdateLocation()
        })
    }

    return (
        <center>
            <br /><br />
            <br /><br />
            {state.count}
            <br /><br />
            <button onClick={() => setCount(state.count - 1)}>Decrement</button>
            &#160;--&#160;
            <button onClick={() => setCount(state.count + 1)}>Increment</button>
            <br /><br />
            Last updated on {state.lastUpdateLocation}
        </center>
    )
}


export default function Home() {
    return (
        <SSR.Provider >
            <Counter />
        </SSR.Provider>
    )
}

