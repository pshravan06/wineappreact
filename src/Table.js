import React from 'react'
import Row from './Row'
 
const Table = ({ wines }) => {
  return (
        <table >
            <tbody >
            {wines.map((wine, key) =>(
                    <Row wine={wine} key={key}/>
                ))}

            </tbody>
        </table>
  )
}

export default Table