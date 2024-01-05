import { useState , useEffect } from "react";


function Meals() {

    const [loadedMeals , setLoadedMeals] = useState([]);

    useEffect(()=>{
        async function fetchMeals(){
            const response = await fetch("http://localhost:3000/meals")
            const meals = await response.json();
            setLoadedMeals(meals);
        }
        fetchMeals();
    },[]);
    
  return <ul id="meals">
    {loadedMeals.map((meal) => 
        <li key={meal.id}>
            <div>{meal.name}</div>
        </li>
    )}
  </ul>
}

export default Meals