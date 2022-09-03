import React, { useState, useContext } from "react"
import Draggable from "react-draggable"
import { Button } from "@mui/material"
import EditSelector from "./EditSelector"
import { SelectorContext } from "../context/SelectorContext"


const Selector = ({selector}) => {

    const [show, setShow] = useState(false)

    const {deleteSelectors} = useContext(SelectorContext)


    const handleOnClose = () => setShow(false)
    return (
        <>
            <Draggable>
            <div className="group inline-block">
                <Button variant="contained">
                    {selector.title}
                </Button>
            <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                <li className="">
                    <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-6 block whitespace-no-wrap"
                    onClick={() => setShow(true)}
                    >Edit</a>
                </li>
                <li className="">
                    <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-6 block whitespace-no-wrap"
                    onClick={() => deleteSelectors(selector?.id)}
                    >Delete</a
                    >
                </li>
            </ul>
            </div>
            </Draggable>
            <EditSelector 
            visible={show} 
            onClose={handleOnClose}
            theSelector={selector}/>
        </>
    )
}

export default Selector