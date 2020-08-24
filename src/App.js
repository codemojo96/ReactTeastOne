import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';

import './App.css';

const App = () => {
 
  const APP_ID='0ffe3d0a';
 const APP_KEY='c9839c408135185255f5d920dd0f6d96';

const [recipes, setRecipes]= useState([]);
const [search, setSearch]= useState('');
const [query, setQuery]=useState('chicken');

useEffect(()=>{
  getRecipes();
}, [query] );

const getRecipes = async ()=>{
const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
const data= await response.json();
setRecipes(data.hits);
console.log(data);
};

const updateSearch= e => {
setSearch(e.target.value);
}

const getSearch =e =>{
e.preventDefault();
setQuery(search);
//getSearch('');
  
};
return (
   <div className="App">
     <h1>winner winner, Chiken dinner</h1>
    <form onSubmit={getSearch} className="search-form">
    
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="serach-button" type="submit">
            search
          </button>     
    </form>
    <div class="recipesD">
   {recipes.map(recipe =>(

<Recipe  title={recipe.recipe.label} calories={recipe.recipe.calories}
image={recipe.recipe.image}  ingredients={recipe.recipe.ingredients}/>
   ))}

  </div> </div>
  );
}

export default App;
