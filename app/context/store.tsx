'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

// interface LoginContext{
//     name: string
//     accountNo: string
//     bank: string
// }


// interface ContextProps {
//     userDetails: LoginContext,
//     setUserDetails: Dispatch<SetStateAction<LoginContext>>,
// }

type DataType = {
    firstName: string
}

interface ContextProps {
    userId: string,
    setUserId: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<any>({
    userDetails : {},
    setUserId: (): any => {},
})

export const GlobalContextProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState({});
    
    return (
        <GlobalContext.Provider value={{ userDetails, setUserDetails }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);