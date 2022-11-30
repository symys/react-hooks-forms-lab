import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onChangeItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem, setSearchedItems] = useState("")

  const addNewItem = (value) => {
    onChangeItems(value)
  }
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event){
    setSearchedItems(event.target.value)
  }

  /*const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    //else if(selectedCategory === item.category && searchedItem === "")return item;
    //else if(selectedCategory !== item.category || (item.name.toLowerCase().includes(searchedItem.toLowerCase())))return item
    return item.category === selectedCategory;
  });*/

  const searchResults = items.filter((item) => {
    if(selectedCategory === "All" && searchedItem === "") return true
    else if(selectedCategory === "All" && item.name.toLowerCase().includes(searchedItem.toLowerCase())) return item
    else if(item.category === selectedCategory) return item
    

  })
  
  

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={addNewItem}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={searchedItem} />
      <ul className="Items">
        {searchResults.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
