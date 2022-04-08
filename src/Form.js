import React from 'react'
import Button from './Button'
// import TasteButtons from './TasteButtons'

const Form = ({ handleColorChange,handleTasteChange,color,taste}) => {


  const handleClick = (e) =>{
    const {color}=e.target.dataset;
    handleColorChange(color);
    console.log(color);
   }
   const handleTasteClick = (e) =>{
     const {taste} = e.target.dataset;
     handleTasteChange(taste)
     console.log(taste);
   }
  

  return (
<div>
    {/* <input type="text" value={filteredData} onChange={(e)=>setFilteredData(e.target.value)}></input> */}

    <form onSubmit={(e)=> e.preventDefault()}>

            <Button
            buttonText="Red Wines"
            color="red"
            handleClick={handleClick}
            
           />
              
            <Button
            buttonText="White Wines"
            color="white"
            handleClick={handleClick}

            
           />
          {/* //  <Button
          //  buttonText="Sweet red"
          //  taste="sweet"
          //  color="red"
          //  handleClick={handleClick}
           
          //   */}
           


           <Button
           buttonText="reset"
           color=""
           handleClick={handleClick}
          
           />
          
          {/* <TasteButtons
          buttonText="Sweet Wines (still working on this function)"
          taste="sweet"
          handleTasteClick={handleTasteClick}
          /> */}

    </form>
   </div>
  )
}

export default Form