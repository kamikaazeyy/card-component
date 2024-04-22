import React from 'react'

 function List() {

    const fruits =[
        {id:1,name:"apple", calories:95},
        {id:2,name:"banana", calories:100}, 
        {id:3,name:"Pineapple", calories:50}, 
        {id:4,name:"coconut", calories:125}, 
        {id:5,name:"Orange", calories:69}, 
        {id:6,name:"Kiwi", calories:95}
    ]
    //fruits.sort((a,b)=>a.name.localeCompare(b.name) ) //Alphabetical/ Ascending order Order
    //fruits.sort((a,b)=>b.name.localeCompare(a.name) ) // Descending order
    //fruits.sort((a,b)=> a.calories-b.calories) // sort by calories in ascending order
    //fruits.sort((a,b)=> b.calories-a.calories) // sort by calories in descending order

    //const lowCalFruits= fruits.filter(fruit=>fruit.calories<100) // filtering fruits wth calories less than 100
    const HighCalFruits= fruits.filter(fruit=>fruit.calories>=100) // filtering fruits with calories greater than 100

    const listItems= fruits.map(fruit=> <li key={fruit.id}>
                                                {fruit.name}: &nbsp;
                                                <b>{fruit.calories}</b></li>)
  return (
    <ol>{listItems}</ol>
  )
}
export default List