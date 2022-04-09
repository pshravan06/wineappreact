import './App.css';
import React from 'react';
// import Menu from './Menu';
import api from './api/wines'
import { useState, useEffect } from 'react';
import Table from './Table';
import Form from './Form';

//comments
function App() { 
  
  const [wines, setWines] = useState([]);
  let [color, setColor] = useState();
  let [taste, setTaste] = useState('Sweet or Dry')
  // let [country, setCountry] = useState("From Any Country");
  // let [body, setBody] = useState("Any Wine Body");
  // const [reqType, setReqType] = useState("")

  
  //defining wines and their properties. This is used for the filterData algorithm below
var wineData = {

  redWines : [
    {name: "Pinot Noir", body: "Light", taste:"Dry"},
    {name: "Cabernet Sauvignon", body: "Full", taste:"Dry"},
    {name: "Malbec", body: "Full", taste:"Dry"},
    {name:"Zinfadel",body:"Medium",taste:""},
    {name: "Montepulciano", body: "Medium", taste:"Dry"},
    {name: "Merlot", body: "Medium", taste:"Dry"},
  ],

whiteWines : [
  {name: "Chardonnay", body: "Full", taste:"Dry"},
  {name: "Pinot Grigio", body: "Light", taste:"Dry"},
  {name: "Moscato", body: "Light", taste:"Semi-Sweet"},
  {name:"Sauvignon Blanc",body:"Light",taste:"Dry"},
  {name: "Riesling", body: "Light", taste:"Semi-Sweet"},
  {name: "White Zinfadel", body: "", taste:"Sweet"},
]

}
//loads table at start of app
  useEffect (() =>{
    const fetchWines = async () =>{
      try{
        const response = await api.get('./wines')
        setWines(response.data);
        console.log(response.data);
        console.log(wineData.whiteWines);
        
        


      } catch(err){
        if (err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers)
        }else{
          console.log(`error: ${err.message}`)
        }

      }
    }
    fetchWines();
  },[])

//array created for populating "tastes" dropdown menu. Will return to this later. 
  
  // wine taste section
//   let tastes = [
//     {label: "Sweet"},
//     {label:"Semi-Sweet / Off-Dry"},
//     {label: "Dry"}
// ]

//function used for when taste filter buttons are clicked
const handleTasteChange = (taste) => {
  setTaste(taste)
};

//array created for populating "wines" dropdown menu. Will return to this later. 

 //wine color section
//  let colors = [
//   {label:"Red"},
//   {label:"white"}
// ]

//function used for when color filter buttons are clicked

const handleColorChange = (color) =>{
setColor(color)
// console.log(color)
};

//mapping the wineData object and converting to lower case. Used for filter matching algorithm in filterData function below
const wine_names = {
  red: wineData.redWines.map(({ name }) => name.toLowerCase()),
  white: wineData.whiteWines.map(({ name }) => name.toLowerCase()),
  sweet: wineData.redWines.map(({taste})=> taste.toLowerCase()),
  sweet: wineData.whiteWines.map(({taste})=> taste.toLowerCase())

};
//filter functions which are called once filter buttons in `Form` component are clicked

const filterData = (wines,color,taste)=>{
  if(!color) return wines;
  return wines.filter(
    (wine) => wine_names[color].some(
      (name) => wine.field2.toLowerCase().includes(name)
      ) 
      ,

      //testing how to insert multiple filter algorithms
      (wine) => wine_names[color].some(
        (name) => wine.field2.toLowerCase().includes(name && wineData.taste === "sweet"),
        )
      
      
      ) 
    

    }
//testing function
    const filterTasteData = (wines,taste)=>{
      if(!taste) return wines;
      return wines.filter(
          
          (wine) => wine_names[color].some(
            (name) => wine.field2.toLowerCase().includes(name) && wineData.taste === "sweet"),
            )
      

    }


console.log(filterData(wines, 'red'));
console.log(filterData(wines, 'white'));
// console.log(filterData(wines, 'sweet'));
//wine country section

// let countries = [
//   {label:"Argentina"},
//   {label:"California"},
//   {label:"Chile"},
//   {label:"France"},
//   {label:"Italy"},
//   {label:"New York"},
//   {label:"Oregon"},
//   {label:"Portugal"},
//   {label:"Spain"},
// ]


// const handleCountryChange = (e) =>{
//   setCountry(e.target.value)
// };

// wine body section for dropdown

let bodies = [
  {label:"Light"},
  {label:"Medium"},
  {label:"Full"},
]


// const handleBodyChange = (e) =>{
//   setBody(e.target.value)

// }
// console.log(body);
// console.log(taste)
// console.log(color);
// console.log(reqType);


  return (
   <>
  
  <Form 
  handleColorChange={handleColorChange}
  handleTasteChange={handleTasteChange}
  
  color={color}
  taste={taste}
  setTaste={setTaste}
  setColor={setColor}
/>
  <Table wines={filterData(wines,color,taste)}
  
  // wines={filterTasteData(wines,taste)}
  
  />
  </>
  )
  
}

export default App;