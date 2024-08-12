

const MealItemSearch = (meal) => {
  return (
       <div>
            {meal.strCategory}
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{width:'100px' }} />
            <h3>{meal.strMeal} </h3>
            <a href={ meal.strYoutube } target="_blank">Link Youtube</a>
      </div>
  )
}

export default MealItemSearch