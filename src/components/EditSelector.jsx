import React, { useState,useContext } from 'react';
import { FormControl, InputLabel, FormHelperText, Input,Button } from '@mui/material'
import { SelectorContext } from '../context/SelectorContext';

export default function EditSelector({visible, onClose, theSelector}) {
    
    const [title, setTitle] = useState(theSelector.title)
    const id = theSelector?.id
    console.log(id);

    const {updateSelectors} = useContext(SelectorContext)
    const updatedSelectors = {id, title}

    if(!visible) return null

    const handleSubmit = (e) => {
        e.preventDefault()
        updateSelectors(id, updatedSelectors)
    }
  return (
    <div className="fixed inset-0 bg-zinc-200 bg-opacity-10 backdrop-blur-sm
    flex justify-center items-center">
        <div className="bg-zinc-200 font-mono font-black w-96 h-96 rounded">
            <p className='text-3xl ml-40 absolute top-40'>Edit</p>
            <p className='text-3xl text-red-900 cursor-pointer flex justify-end items-end'
             onClick={onClose}>
                X
            </p>
            <div className="flex mt-12 ml-28">
                <FormControl>
                    <InputLabel htmlFor="my-input">
                        Edit Title
                    </InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text"
                     type='text'
                     name="title"
                     value={title}
                     onChange={(e)=> setTitle(e.target.value)}
                     required/>
                    <FormHelperText id="my-helper-text">
                        Come on you spurs.
                    </FormHelperText>
                    <Button variant="outlined"
                    onClick={handleSubmit}
                    type="submit">
                        Update
                    </Button>
                </FormControl>
            </div>
        </div>
    </div>
  )
}
