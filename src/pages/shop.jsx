import React from "react";
import cuttingBoard from "../pictures/Cutting-Board.jpg"
import candleSconces from "../pictures/candle-sconces.jpg"
import towelRack    from   "../pictures/towel-rack.jpg"
import BuyButton from "../components/buybutton"
export function Shop(){
    const items = [

        {name: "cutting board", price: "$65.00", imageURL: cuttingBoard },
        {name: "wooden candle sconces", price: "$35.00", imageURL: candleSconces},
        {name: "towel rack",price: "$35.00", imageURL: towelRack},
    ];
    return(
        <div>
            <h1>Shop</h1>

        <div className="items">
            {items.map(item => (
                <div className="item" key={item.name}>
                    <h2>{item.name}</h2>
                    <img src={item.imageURL} alt={item.name} style={{ 
                                height: (item.name === "wooden candle sconces" || item.name === "towel rack") ? "500px" : "auto" }} />
                    <h3>{item.price}</h3> 
                   
                   <BuyButton/>

                   
                    
                </div>
                
            ))}
            

        </div>
            
        



        </div>
    )
}

export default Shop;