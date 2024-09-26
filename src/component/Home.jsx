import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";
import { useState } from "react";

const Home = () => {
    const [listaProductos, setListaProductos] = useState(pizzas);
    return (
        <>
            <Header />
            {listaProductos.map(pizzas => 
            <CardPizza 
            key={pizzas.id} 
            name={pizzas.name}
            price={pizzas.price} 
            ingredients={pizzas.ingredients} 
            img={pizzas.img}  
            />)}
        </>
    )
}

export default Home; 