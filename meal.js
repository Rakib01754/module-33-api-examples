const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchkey = searchField.value;
    getData(searchkey);

}



const getData = (searchkey) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchkey}`)
        .then(res => res.json())
        .then(meals => displayData(meals.meals))
}
const displayData = (meals) => {
    const mealContainer = document.getElementById('meals-container')
    mealContainer.innerHTML = '';
    meals.map(meal => {
        const newDiv = document.createElement('div');
        console.log(newDiv)
        newDiv.classList.add('col')
        newDiv.innerHTML = `
        <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
    </div>
</div>
        `
        mealContainer.appendChild(newDiv)

    })
}
getData();
