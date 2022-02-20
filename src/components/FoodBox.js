import { Card, Col, Button } from 'antd';

const FoodBox = (props) => {

    console.log('this is food from foodBox', props.foods)

   

    return (
    

        <>

            {props.foods.filter(food => food.name.toLowerCase().includes(props.query.toLowerCase()))
            .map(food => {

                const totalCal = food.calories * food.quantity
                return <div key={food.name} className="card-container">
                    <Col>
                        <Card title={food.name}
                        style={{ width: 230, height: 300, margin: 10 }}
  >
                        <img src={food.image} height={60} alt={food.name}/>


                           
                            <p> {food.calories}</p>
                            <p> {food.quantity}</p>
                            <p> total calories: {totalCal}</p>
                            <Button> Delete </Button>
                        </Card>
                    </Col>
                </div>
            })}
        </>

    )
}

export default FoodBox;