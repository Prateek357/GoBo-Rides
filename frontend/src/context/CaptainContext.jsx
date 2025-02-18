import React, { createContext, useState, useContext } from 'react'

export const CaptainDataContext = createContext()

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null),
        [isLoading, setIsLoading] = useState(false),
        [error, setError] = useState(null);

        const updateCaptain = (captainData) => {
            setCaptain(captainData);
        }

        const value = {
            captain,
            setCaptain,
            isLoading,
            setIsLoading,
            error,
            setError,
            updateCaptain,
        };

    return (
        <CaptainDataContext.Provider value={{ captain, setCaptain }}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default CaptainContext
