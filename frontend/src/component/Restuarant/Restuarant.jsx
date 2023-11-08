import { useEffect, useState } from "react";
import './Restuarant.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Restuarant(props) {
    const [menuData, setMenuData] = useState({
        flag: false,
        foodData: null,
        drinkData: null
    });

    async function getData() {
        let backend_url = 'http://localhost:3200/data';
        let response = await fetch(backend_url);
        let responseData = await response.json();

        setMenuData({
            flag: true,
            foodData: responseData[0],
            drinkData: responseData[1]
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='pri'>
            <div>
                <h1> Food Menu </h1>
                {
                    (menuData.flag) ?
                        (<div className='food-container'>
                            {
                                menuData.foodData.map(item => {
                                    return <Card className='food-item' style={{ width: '18rem' }} key={item.foodName}>
                                        <Card.Img variant="top" src={'images/food/' + item.foodName + '.jpg'} />
                                        <Card.Body className={(item.catogory == 'veg') ? 'veg' : 'non-veg'}>
                                            <Card.Title>{item.foodName} : {item.price} </Card.Title>
                                            <Card.Text>
                                                {item.foodName} is an amazing Dish. You should try it.
                                            </Card.Text>
                                            <Card.Text>
                                                Catogory: <img src={(item.catogory == 'veg') ? 'images/veg.png' : 'images/non-veg.png'}
                                                    height="30px" width='30px' />
                                            </Card.Text>
                                            <Button varient="primary">Buy Now</Button>
                                        </Card.Body>
                                    </Card>
                                })
                            }
                        </div>)
                        : (<h2>Loading</h2>)
                }

                <h1> Drink Menu </h1>
                {
                    (menuData.flag) ?
                        (<div className='drink-container'>
                            {
                                menuData.drinkData.map(item => {
                                    return <Card className='drink-item' style={{ width: '18rem' }} key={item.drinkName}>
                                        <Card.Img variant="top" src={'images/drink/' + item.drinkName + '.jpg'} />
                                        <Card.Body className={(item.catogory == 'mocktail') ? 'mocktail' : 'cocktail'}>
                                            <Card.Title>{item.drinkName} : {item.price} </Card.Title>
                                            <Card.Text>
                                                {item.drinkName} is an amazing Drink. You should try it.
                                            </Card.Text>
                                            <Card.Text>
                                                Catogory: {item.catogory}
                                            </Card.Text>
                                            <Button varient="primary">Buy Now</Button>
                                        </Card.Body>
                                    </Card>
                                })
                            }
                        </div>)
                        : (<h2>Loading</h2>)
                }
            </div>
        </div>
    );
}
export default Restuarant;