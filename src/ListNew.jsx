//playing around with the list 
import React from 'react'

 function ListNew() {

    const fruits =[
        {id:1,name:"apple", calories:95},
        {id:2,name:"banana", calories:100}, 
        {id:3,name:"Pineapple", calories:50}, 
        {id:4,name:"coconut", calories:125}, 
        {id:5,name:"Orange", calories:69}, 
        {id:6,name:"Kiwi", calories:95}
    ]
    const lowCalFruits= fruits.filter(fruit=>fruit.calories<100) // filtering fruits wth calories less than 100
    const HighCalFruits= fruits.filter(fruit=>fruit.calories>=100) // filtering fruits with calories greater than 100

    const renderFruits =(Fruits,heading)=>(
        <>
        <h2>{heading}</h2>
        <ol>
            {fruits.map(fruit=>
                <li key= {fruit.id}>{fruit.name} {fruit.calories}</li>)}        
        </ol>
        </> 
    )
       
  return (
   <>
    {renderFruits(lowCalFruits,'These are low calorie fruits')}
    {renderFruits(HighCalFruits,'These are low calorie fruits')}
   </>
  )
}
export default ListNew