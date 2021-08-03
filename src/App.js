import './App.css';
import Axios from "axios";
import { useState } from "react";
import RecipeTile from './RecipeTile';

function App() {
  const [query , setQuery] = useState("");
  const [recipes, setRecipes] = useState([])
  const [healthLabel, sethealthLabel] = useState("vegan")

  var url = `https://api.edamam.com/search?q=${query}&app_id=a67242a1&app_key=d0ce39c13ac9b80799d1300c55832e3b&&health=alcohol-free&health=${healthLabel}`;

  async function getRecipes(){
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
     <h1 >Food Recipe Plaza 🍔</h1>
     <form className="app__searchForm" onSubmit={onSubmit}>
       <input type="text" className="app__input" placeholder="enter ingridient" value={query} onChange={(e) => setQuery(e.target.value)}/>
        <input type="submit" className="app__submit" value="Search" />
        <select className="app__healthLabels">
        <option onClick={() => sethealthLabel("vegan")}>vegan</option>
        <option onClick={() => sethealthLabel("vegetarian")}>vegetarian</option>
        <option onClick={() => sethealthLabel("paleo")}>paleo</option>
        <option onClick={() => sethealthLabel("dairy-free")}>dairy-free</option>
        <option onClick={() => sethealthLabel("gluten-free")}>gluten-free</option>
        <option onClick={() => sethealthLabel("wheat-free")}>wheat-free</option>
        <option onClick={() => sethealthLabel("egg-free")}>egg-free</option>
        <option onClick={() => sethealthLabel("peanut-free")}>peanut-free</option>
        <option onClick={() => sethealthLabel("tree-nut-free")}>tree-nut-free</option>
        <option onClick={() => sethealthLabel("soy-free")}>soy-free</option>
        <option onClick={() => sethealthLabel("fish-free")}>fish-free</option>
        <option onClick={() => sethealthLabel("shellfish-free")}>shellfish-free</option>
        </select>
     </form>
     <div className="app__recipes">
     {recipes.map((recipes) => {
      return <RecipeTile recipes={recipes} />
     })}
     </div>
     </div>
  );
}

export default App;
