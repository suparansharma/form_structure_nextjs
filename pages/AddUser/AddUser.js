import React, { useState } from "react";

const AddUser = () => {

    const [inputField,setInputField] = useState("");

    const handleInputChange =(e)=>{
        const {name,value} = e.target;
        const list =[...inputField];
        // list[index][name]=value;
        // setInputField(list);
        console.log(name);
    }

    const handleAddUser =()=>{
        setInputField(...inputField);
    }

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="name" onChange={e=>handleInputChange(e)} required />
        <br />
        <input type="text" name="email" placeholder="email" required />
        <br />
        <input type="submit" value="Add user" />
      </form>
    </div>
  );
};

export default AddUser;
