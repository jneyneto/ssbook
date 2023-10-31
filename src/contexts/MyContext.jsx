import { createContext } from 'react';

export const MyContext = createContext();

export function ContextProvider(props) {
    return (
        <MyContext.Provider value={{}}>
            {props.children}
        </MyContext.Provider>
    );
}
