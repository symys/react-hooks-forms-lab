import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, handleNameChange] = useState("")
  const [itemCategory, handleCategoryChange] = useState("Produce")

  function handleName(event){
    const handledName = event.target.value
    handleNameChange(handledName)
  }

  function handleCategory(event) {
    const handledCategory = event.target.value
    handleCategoryChange(handledCategory)
  }

  function handleSubmit(event){
    event.preventDefault();
    const formData = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }
    onItemFormSubmit(formData)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
