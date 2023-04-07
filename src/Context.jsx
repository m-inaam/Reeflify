import { createContext, useContext, useEffect, useState } from "react"

const Context = createContext();


export function useData() {
    return useContext(Context)
}



export function ContextProvider({ children }) {

    const [allcorals, setAllCorals] = useState([])
    const [corals, setCorals] = useState([])
    const [hCorals, setHCorals] = useState([])
    const [mCorals, setMCorals] = useState([])
    const [lCorals, setLCorals] = useState([])
    const [nCorals, setNCorals] = useState([])
    const [pending, setPending] = useState(true)



    const GetCorals = async () => {
        try {
            const response = await fetch('https://reeflify-backend.onrender.com/api/v1/corals');
            const data = await response.json();
            console.log(data.data.corals);
            setCorals(data.data.corals);
            const HIGH = data.data.corals.filter(item => item.bleachingSeverity === 'HIGH');
            const MEDIUM = data.data.corals.filter(item => item.bleachingSeverity === 'Medium');
            const LOW = data.data.corals.filter(item => item.bleachingSeverity === 'Low');
            const NO = data.data.corals.filter(item => item.bleachingSeverity === "No Bleaching");
            setPending(false)
            setHCorals(HIGH)
            setMCorals(MEDIUM)
            setLCorals(LOW)
            setNCorals(NO)
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    const handleDisplayH = () => {
        setCorals(hCorals)
    }
    
    const handleDisplayM = () => {
        setCorals(mCorals)
    }
    
    const handleDisplayL = () => {
        setCorals(lCorals)
    }
    const handleDisplayN = () => {
        setCorals(nCorals)
    }

    useEffect(() => {
        GetCorals();
   
    }, [])


    const value = {
        corals,
        hCorals,
        handleDisplayH,
        handleDisplayM,
        handleDisplayL,
        handleDisplayN
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