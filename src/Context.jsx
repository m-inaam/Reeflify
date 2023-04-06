import { createContext, useContext, useEffect, useState } from "react"

const Context = createContext();


export function useData() {
    return useContext(Context)
}



export function ContextProvider({ children }) {

    const [corals, setCorals] = useState([])
    const [pending, setPending] = useState(true)



    const GetCorals = async () => {
        try {
            const response = await fetch('https://reeflify-backend.onrender.com/api/v1/corals');
            const data = await response.json();
            console.log(data.data.corals);
            setCorals(data.data.corals);
            setPending(false)
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    useEffect(() => {
        GetCorals();
    }, [])


    const value = {
        corals,
    }

    if (pending) {
        return (
            <div className=" w-full bg-gray h-screen fixed right-0 flex justify-center items-center">
                <p className=" relative w-5 h-5 rounded-full border-[3px] border-dotted  border-primary m-auto animate-spin  "></p>
            </div>
        )
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}