import React from 'react';
import foodList from './foods.json';
import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';


const App = () => {


  const [foods, setFoods] = useState(foodList)

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [query, setQuery] = useState('')


  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleImageChange = (e) => {
    setImage(e.target.value)
  }

  const handleCaloriesChange = (e) => {
    setCalories(e.target.value)
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const addedFood = { name, image, calories, quantity }
    setFoods(foods => [addedFood, ...foods])
    
    setName('')
    setImage('')
    setCalories(0)
    setQuantity(0)
  }

  // console.log('this is food from App.js', foods)


  return (
    <div className="App">

      <h1> Ironnutrition </h1>


      <div className='search'>
        <Search query={setQuery} />
      </div>

      <div className='add-food-container'>


        <AddFood name={name} image={image} calories={calories} quantity={quantity} handleSubmit={handleSubmit}
          handleNameChange={handleNameChange} handleImageChange={handleImageChange} handleCaloriesChange={handleCaloriesChange}
          handleQuantityChange={handleQuantityChange}
        />
      </div>
      <div className='container'>


        <FoodBox foods={foods} query={query} />
      </div>
    </div>
  );
}

export default App;
