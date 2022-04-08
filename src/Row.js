import React from 'react'
import Cell from './Cell'

const Row = ({ wine }) => {
  return (
   <tr>
       {Object.entries(wine).map(([key, value]) => {
           return (
               <Cell key={key} cellData={JSON.stringify(value)}/>
           )

        } ) }
   </tr>
  )
}

export default Row