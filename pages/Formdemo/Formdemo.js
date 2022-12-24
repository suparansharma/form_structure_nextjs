import React, { useState } from 'react';
import { Container, IconButton, TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
const Formdemo = () => {

    const [inputField, setInputField] = useState([]);
    const [val, setVal] = useState([]);
  
    const handleAdd = () => {
      const abc = [...val, []];
      setVal(abc);
    };
  
    const handleDelete = (i) => {
      const deletValues = [...val];
      deletVal.splice(i, 1);
    // deletValues.splice(
    //     deletValues.findIndex((deletValue) => deletValue.i === i),
    //     1
    //   );
      
      setVal(deletValues);
    };
  
    const handleInputChange = () => {
      const { name, value } = e.target;
      const list = [...inputField];
      list[index][name] = value;
      setInputField(list);
    };
  
    const handleAddUser = () => {
      setInputField(...inputField);
    };
  
    const [inputFields, setInputFields] = useState([
      { id: uuidv4(), firstName: "", lastName: "" },
    ]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("InputFields", inputFields);
    };
  
    const handleChangeInput = (id, event) => {
      const newInputFields = inputFields.map((i) => {
        if (id === i.id) {
          i[event.target.name] = event.target.value;
        }
        return i;
      });
  
      setInputFields(newInputFields);
    };
  
    const handleAddFields = () => {
      setInputFields([
        ...inputFields,
        { id: uuidv4(), firstName: "", lastName: "" },
      ]);
    };
  
    const handleRemoveFields = (id) => {
      const values = [...inputFields];
      values.splice(
        values.findIndex((value) => value.id === id),
        1
      );
      setInputFields(values);
    };
  
    return (
        <div>
        <div className="question_form">
          <br />
          <div className="section">
            <div className="question_title_section">
              <div className="question_form_top">
                <input
                  type="text"
                  className="question_form_top_name"
                  style={{ color: "black" }}
                  placeholder="Enter the form name "
                />
                <input
                  type="text"
                  className="question_form_top_desc"
                  style={{ color: "black" }}
                  placeholder="Form Description"
                />
              </div>
            </div>
          </div>
        </div>
  
        <div key={val.i} className="question_form">
          <br />
          <div className="section">
            <div className="question_title_section">
              <button onClick={() => handleAdd()}>Add</button>
              {val.map((data, i) => (
                <div key={val.i} className="question_form_top">
                  <Container>
                    <div class="row">
                      <div class="col-8">
                        {" "}
                        <input
                          type="text"
                          className="question_form_top_name"
                          style={{ color: "black", fontSize: "15px" }}
                          name="question"
                          defaultValue="Enter Your Question"
                        />
                      </div>
                      <div class="col-2"> 
                      <IconButton onClick={() => handleAdd()}>+</IconButton>
                      <IconButton onClick={()=>handleDelete(i)}>x</IconButton>
                      </div>
                      <div class="col">
                      <select
                              class="form-select form-select-sm"
                              aria-label=".form-select-sm example"
                              // onChange={getSelectValue}
                              // id="selected_area"
                            >
                              <option selected>Open this select menu</option>
                              <option value="paragraph">Paragraph</option>
                              <option value="checkbox">Checkbox</option>
                              <option value="radio">Radio</option>
                            </select>
                      </div>
                    </div>
  
                    <form onSubmit={handleSubmit}>
                      {inputFields.map((inputField) => (
                        <div key={inputField.id}>
                          <TextField
                            name="firstName"
                            label="First Name"
                            variant="filled"
                            value={inputField.firstName}
                            onChange={(event) =>
                              handleChangeInput(inputField.id, event)
                            }
                          />
                          <TextField
                            name="lastName"
                            label="Last Name"
                            variant="filled"
                            value={inputField.lastName}
                            onChange={(event) =>
                              handleChangeInput(inputField.id, event)
                            }
                          />
                          <IconButton
                            disabled={inputFields.length === 1}
                            onClick={() => handleRemoveFields(inputField.id)}
                          >
                            <Button>-</Button>
                          </IconButton>
                          <IconButton onClick={handleAddFields}>
                            <Button>+</Button>
                          </IconButton>
                        </div>
                      ))}
                      <Button
                        // className={classes.button}
                        variant="contained"
                        color="primary"
                        type="submit"
                        // endIcon={<Icon>send</Icon>}
                        onClick={handleSubmit}
                      >
                        Send
                      </Button>
                    </form>
                  </Container>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Formdemo;