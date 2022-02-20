import { Input } from "antd";

const AddFood = (props) => {

    return (
        <>
        <form onSubmit={props.handleSubmit} className="form">

           <label htmlFor="name">Name</label>
           <Input type="text" value={props.name} onChange={props.handleNameChange}/>
           <label htmlFor="image">Image</label>
           <Input type="text" value={props.image} onChange={props.handleImageChange}/>
           <label htmlFor="calories">Calories</label>
           <Input type="number" value={props.calories} onChange={props.handleCaloriesChange}/>
           <label htmlFor="servings"> Servings</label>
           <Input type="number" value={props.quantity} onChange={props.handleQuantityChange}/>

           <button type="submit">Submit</button>

        </form>

        </>
    )
}

export default AddFood;