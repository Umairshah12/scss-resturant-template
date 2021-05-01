import React from "react";

function Menu() {
  const menues = [
    {
      id: 1,
      name: "breakfase",
      itemName: [
        { name: "French Slam", price: 14 },
        { name: "kiwi Slam", price: 10 },
        { name: "Vegetarian Breakfast", price: 20 },
        { name: "Hearty Breakfast", price: 15 },
        { name: "Vegitable Omlate", price: 15 },
      ],
    },
    {
      id: 2,
      name: "lunch",
      itemName: [
        { name: "Creamy Chiken", price: 20 },
        { name: "Mushroom Chicken", price: 7.5 },
        { name: "Lamb", price: 30 },
        { name: "Vegitable Korma", price: 15 },
        { name: "Mutton Paneer", price: 12.5 },
      ],
    },
    {
      id: 3,
      name: "dinner",
      itemName: [
        { name: "French Bread Pizza", price: 20 },
        { name: "Baked Chicken Drumsticks", price: 15 },
        { name: "Wiskey Beef Ribs", price: 14.5 },
        { name: "Sliced Pork Lion", price: 9.5 },
        { name: "Chiken Fried Steak", price: 10.5 },
      ],
    },
  ];
  return (
    <div id="menu" className="food-menu">
      <div className="container">
        <h2 className="heading text-center">Our Menu</h2>
        <div className="row mt">
          {menues.map((item) => {
            return (
              <>
                <div className="col-md-4">
                  <h3 className="menu-heading">{item.name}</h3>
                  {item.itemName.map((listName) => {
                    return (
                      <ul className="menu">
                        <li className="menu-list">
                          {listName.name}
                          <span className="menu-price">${listName.price}</span>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
