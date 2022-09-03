import { createContext, useEffect, useState } from "react";
import { v4 as uniqueId } from "uuid";

export const SelectorContext = createContext()

const SelectorContextProvider = (selects) => {
    const [selectors, setSelectors] = useState([
        { id: uniqueId(), title: "SELECT"},
        { id: uniqueId(), title: "UPDATE"},
        { id: uniqueId(), title: "INSERT"},
        { id: uniqueId(), title: "DELETE"},
    ])


// CONVERT TO JSON OBJECT AND STORE TO LS
useEffect(() => {
    setSelectors(JSON.parse(localStorage.getItem('selectors')))
},[])

// SET DATA TO LS AND CONVERT TO STRING JSON
useEffect(() => {
    localStorage.setItem('selectors', JSON.stringify(selectors))
},[])

const updateSelectors = (id, updatedSelectors) => {
    setSelectors(selectors.map((selector) => selector.id === id ? updatedSelectors : selector))
}

const deleteSelectors = (id) => {
    setSelectors(selectors.filter(selector => selector.id !== id))
}

return (
    <SelectorContext.Provider value={{updateSelectors, selectors, deleteSelectors}}>
        {selects.children}
    </SelectorContext.Provider>
)
}

export default SelectorContextProvider;