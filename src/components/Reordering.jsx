import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable'
import { v4 as idUnique } from 'uuid'

export default function Reordering() {
    const [datas] = useState([
        {id : idUnique(), club : "Tottenham"},
        {id : idUnique(), club : "Chelsea"},
        {id : idUnique(), club : "Arsenal"},
        {id : idUnique(), club : "MU"},
    ])

    useEffect(() => { 
    },[datas])

  return (
            <React.Fragment>
                <Draggable>
                <select className='h-20 w-20 bg-zinc-100 hover:bg-slate-400' name="selectValue">
                    <option value="idk" hidden>Choose one</option>
                    {
                        datas.map(club => (
                    <option key={club?.id} className="text-extralight" value={club?.club}>{club?.club}</option>
                    ))
                    }
                </select>
                </Draggable>
            </React.Fragment>
  )
}
