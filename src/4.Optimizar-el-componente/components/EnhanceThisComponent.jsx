import { useEffect, useState } from "react"
import MealItemSearch from "./MealItemSearch"

const EnhanceThisComponent = () => {
    const [meals, setMeals] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [error, setError] = useState()
    const [isloading, setIsloading] = useState(false)
    //Arrabiata

    const fetchSearchResults = async (searchText)=>{
        try{
            setIsloading(true)
        const results = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
                const data = await results.json()
                // setMeals(data?.meals)
                return data
        }catch(error){
            setError('Ha habido un error intentalo de nuevo')                
        }finally{
            setIsloading(false)
        }
            
    }

    useEffect(()=>{
       const getMealsResults = async()=>{
            const result = await fetchSearchResults()
            setMeals(result?.meals)
        }
        getMealsResults() 
       
    },[])
    console.log(meals)

    const handleSearchClick= async()=>{
        const data = await fetchSearchResults(searchValue)
        setMeals(data?.meals)
       
        // const results = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
        // const data = await results.json()
    }
   
   

  return (
    <div style={{width:'100%'}}>
        <h2>EnhanceThisComponent</h2>
        <div style={{ display:'flex', alignItems:'flex-start'}}>

            <input type="text"
            value={searchValue}
            onChange={({ target:{value}})=> setSearchValue(value)}
            style={{width: 250, padding:'10px', marginBottom:'10px' }} />

            <button type="button" style={{marginLeft:'8'}} onClick={handleSearchClick}>
               Search
            </button>

        </div>

          {isloading && <h2>Cargando...</h2>}
          {error && <h2>{error}</h2>}

        <div style={{display:'flex', flexWrap:'wrap' }}>
            {meals?.map((meal) =>
                <MealItemSearch {...meal} key={`meal-item-${meal.strMeal}`}/>

            )}
       
            </div>
        </div>
        )
    }
       
    export default EnhanceThisComponent
                       
                      

                   
