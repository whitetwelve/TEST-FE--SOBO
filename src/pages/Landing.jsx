import React, { useState, useRef, useContext } from 'react';
import { Container, Card, Button } from '@mui/material';
import "../../src/index.css"
import Draggable from 'react-draggable';
import { SelectorContext } from '../context/SelectorContext';
import Selector from '../components/Selector';



const Landing = () => {

    const [options, setOptions] = useState("Acep")
    const [options2, setOptions2] = useState("Adam")
    const [options3, setOptions3] = useState("Adi")

    const handleChange = e => {
        console.log(e.target.value)
        setOptions(e.target.value)
    }

    const handleChange2 = e => {
        console.log(e.target.value)
        setOptions2(e.target.value)
    }

    const handleChange3 = e => {
        console.log(e.target.value)
        setOptions3(e.target.value)
    }

    const {selectors} = useContext(SelectorContext)


    const dragItem = useRef();
    const dragOverItem = useRef();

    // DUMMIES
    const [list, setList] = useState(['My Button', 'My Clicked', "My Bad"]);
   
    // LOKASI KAN ITEM YANG DI DRAG
    const dragStart = (e, position) => {
      dragItem.current = position;
      console.log(position);
      console.log(e.target.innerHTML);
    };
   
    // // TRACK ITEM YANG DI DRAG
    const dragEnter = (e, position) => {
      dragOverItem.current = position;
      console.log(e.target.innerHTML);
    };

    // // MENGATUR KEMBALI ITEM YANG TELAH DIDRAG
    const drop = (e) => {
        e.preventDefault()
        const copyListItems = [...list];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems);
      };

    return (
        <React.Fragment>
        <Container className="my-10 mt-10">
            <div className="flex flex-row">
               <Card className="w-screen h-screen width shadow-lg">
                <p className='font-mono font-black ml-10 mt-10'>Available to edit</p>
               {
                 selectors.map(selector => (
                    <div className="mt-10 ml-10 w-30" key={selector?.id}>
                        <Selector className="cursor-pointer" selector={selector}/>
                    </div>
                        ))
                    }
                <div className="border-gray-200 h-full absolute border-2
                    top-10 left-80"/>
                </Card>
                <div className="w-3/12 h-screen bg-gray-100 px-5 flex" >
                    <div className="header text-slate-900 font-mono font-black mt-10 text-center mb-10 text-lg w-24 absolute">
                        TASK
                    </div>
                <div className="absolute top-32">        
                {
                list&&
                    list.map((item, index) => (
                    <Button className="w-10 h-16" variant="outlined"
                        onDragStart={(e) => dragStart(e, index)}
                        onDragEnter={(e) => dragEnter(e, index)}
                        onDragEnd={drop}
                        key={index}
                        draggable>
                        {item}
                    </Button>
                ))}
                
                </div>
                    <Draggable>
                        <select className='h-10 bg-zinc-200' >
                            <option className='py-5 px-4' onChange={handleChange} value={options} >
                                {options}
                            </option>
                            <option className='py-5 px-4' onChange={handleChange} value={options2} >
                                {options2}
                            </option>
                            <option className='py-5 px-4' onChange={handleChange} value={options3} >
                                {options3}
                            </option>
                        </select>   
                    </Draggable>
                        <input className="h-16 absolute top-56" type="text" onChange={handleChange} value={options}/>
                        <input className="h-16 absolute top-72 mt-1" type="text" onChange={handleChange2} value={options2}/>
                        <input className="h-16 absolute top-80 mt-10" type="text" onChange={handleChange3} value={options3}/>
                    <hr className='w-48 mt-40 border-2 border-zinc-600 absolute'/>
                </div>
            </div>
        </Container>
        </React.Fragment>
    )
}

export default Landing