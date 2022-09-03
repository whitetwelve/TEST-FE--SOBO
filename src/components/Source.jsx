import React, { useState } from 'react'
import Draggable from 'react-draggable'
import Select from 'react-select'

export default function Source() {
  const datas = [
    { value : 1, label : "Tottenham" },
    { value : 2, label : "Chelsea" },
    { value : 3, label : "MU" },
    { value : 4, label : "Arsenal" },
  ]

  const [result, ddlvalue] = useState(datas.label)

  const ddlHandler = e => {
    ddlvalue(e.label)
  }

  return (
    <React.Fragment>
      <Draggable>
        <div className="flex flex-row">
        <div className="w-96">
          <Select options={datas} onChange={ddlHandler}/>
        </div>
        </div>
      </Draggable>
        <center>
          <h1>{result}</h1>
        </center>

    </React.Fragment>
  )
}
