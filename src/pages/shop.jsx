import React from "react";

export function Shop(){
    const items = [

        {name: "cutting board", price: "$65.00"},
        {name: "wooden candle sconces", price: "$35.00"},
        {name: "towel rack",price: "$35.00"},
    ];
    return(
        <div>
            <h1>Shop</h1>

        <div className="items">
            {items.map(item => (
                <div className="item" key={item.name}>
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                </div>
            ))}
            

        </div>
            
        



        </div>
    )
}

export default Shop;