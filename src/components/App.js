import { useState, createContext, useEffect } from 'react'
import RecipeList from "./RecipeList";
import '../css/app.css'
import { v4 as uuid } from 'uuid'
import RecipeEdit from './RecipeEdit';

export const RecipeContext = createContext()
const LOCAL_STRORAGE_KEY = 'cookingWithReact.recipes'

export default function App(){
 const [recipes, setRecipes] = useState(sampleRecipes)
 const [selectedRecipeId, setSelectedRecipeId] = useState()

 const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

 useEffect(() => {
  const recipeJSON = localStorage.getItem(LOCAL_STRORAGE_KEY)
  if(recipeJSON) setRecipes(JSON.parse(recipeJSON))
 }, [])

 useEffect(() => {
   localStorage.setItem(LOCAL_STRORAGE_KEY, JSON.stringify(recipes))
 }, [recipes])

 const recipeContextValue = {
  handleRecipeAdd,
  handleRecipeDelete,
  handleRecipeSelect,
  handleRecipeChange
 }

 function handleRecipeAdd(){
  const newRecipe = {
   id: uuid(),
   name: '',
   servings: 1,
   cookTime: '',
   instructions: '',
   ingredients: [
    { id: uuid(), name: '', amount: ''}
   ]
  }
  setSelectedRecipeId(newRecipe.id)
  setRecipes([...recipes, newRecipe])
 }

 function handleRecipeDelete(id){
  if(selectedRecipeId !== null && selectedRecipeId === id){
   selectedRecipeId(undefined)
  }
  setRecipes(prevRecipes => {
    return prevRecipes.filter(recipe => recipe.id !== id)
  })
 }

 function handleRecipeSelect(id){
  setSelectedRecipeId(id)
 }

function handleRecipeChange(id, recipe){
 const newRecipes = [...recipes]
 const index = newRecipes.findIndex(r => r.id === id)
 newRecipes[index] = recipe
 setRecipes(newRecipes)
}

 return (
  <RecipeContext.Provider value={recipeContextValue}>
   <RecipeList 
    recipes={recipes}
    />
    {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
  </RecipeContext.Provider>
 )
}


const sampleRecipes = [
 {
  id: 1,
  name: 'Plain Chicken',
  servings: 3, 
  cookTime: '1:15',
  instructions: "1. Put salt on Chicken\n2. Put chicken in oven\n3. Eat the chicken",
  ingredients: [
   {
    id: 1,
    name: 'Chicken',
    amount: '1kg'
   },
   {
    id: 2,
    name: 'Salt',
    amount: '2 Tbs'
   }
  ]
 },
 {
  id: 2,
  name: 'Plain Beef',
  servings: 3,
  cookTime: '1:15',
  instructions: "1. Put paprika on the beef\n2. Put beef in oven\n3. Eat the beef",
  ingredients: [
   {
    id: 1,
    name: 'Beef',
    amount: '500g'
   },
   {
    id: 2,
    name: 'Salt',
    amount: '1 Tbs'
   }
  ]
 }
]
