import {OrbitControls} from "@react-three/drei";
import React, {useRef, useState} from "react";

export const controlContext = React.createContext({});

export default function Controls({ children }) {
    // The "api" contains [enabledState, set], we distribute it by context,
    // so that now children can access the enabled state and change it, too
    const api = useState(true);
    const controls = useRef();

    return (
        <>
            <OrbitControls ref={controls} enabled={api[0]}/>
            <controlContext.Provider value={api}>{children}</controlContext.Provider>
        </>
    );
}
