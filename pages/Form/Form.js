import {
  Button,
  Container,
  Icon,
  IconButton,
  Input,
  makeStyles,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
const Form = () => {
  // const [inputFields, setInputFields] = useState([
  //   { id: uuidv4(), question: '', firstName: '', lastName: '' },
  // ]);


  const [inputFields, setInputFields] = useState([{ paragraph: "" }]);
  const [checkInputFields, setCheckInputFields] = useState([]);

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

  // const handleChangeCheckInput = (id, event) => {
  //   const newCheckInputFields = checkInputFields.map((i) => {
  //     if (id === i.id) {
  //       i[event.target.name] = event.target.value;
  //     }
  //     return i;
  //   });

  //   setCheckInputFields(newCheckInputFields);
  // };

  
  // const [selectItem,setSelectItem] = useState("")
  // const handleAddCheckFields = () => {
  //   setCheckInputFields([
  //     ...checkInputFields,

  //   ]);
  // };


  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      // { id: uuidv4(), firstName: '', lastName: '' },
      { paragraph: "" },
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

  //  console.log(document.getElementById('selected_area').value)
  //  if (selected_area == 'paragraph') {
  //  document.getElementById('paragraph_area').style.display = "block";
  //  document.getElementById('checkbox_area').style.display = "none";
  //  document.getElementById('radio_area').style.display = "none";
  //  }

  const getSelectValue = () => {
    var selected_area = document.getElementById("selected_area").value;
    console.log(selected_area);
    if (selected_area == "paragraph") {
      document.getElementById("paragraph_area").style.display = "block";
      document.getElementById("checkbox_area").style.display = "none";
       document.getElementById('radio_area').style.display = "none";
    }
    else if(selected_area == "checkbox"){
      document.getElementById("paragraph_area").style.display = "none";
      document.getElementById("checkbox_area").style.display = "block";
       document.getElementById('radio_area').style.display = "none";
    }
    else if(selected_area == "radio"){
      document.getElementById("paragraph_area").style.display = "none";
      document.getElementById("checkbox_area").style.display = "none";
       document.getElementById('radio_area').style.display = "block";
    }
    // else{
    //   document.getElementById("paragraph_area").style.display = "none";
    //   document.getElementById("checkbox_area").style.display = "none";
    //    document.getElementById('radio_area').style.display = "none";
    // }
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
                placeholder="unititeld document"
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

      <div className="question_form">
        <br />
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <Container>
                <form onSubmit={handleSubmit}>
                  {inputFields.map((inputField) => (
                    <div key={inputField.id}>
                      <div className="row">
                        <div className="col-8">
                          <input
                            type="text"
                            className="question_form_top_name"
                            style={{ color: "black",fontSize:"15px" }}
                            name="question"
                            defaultValue="Enter Your Question"
                          />
                        </div>

                        <div className="col-2">
                          <select
                            class="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            onChange={getSelectValue}
                            id="selected_area"
                          >
                            <option selected>Open this select menu</option>
                            <option value="paragraph">Paragraph</option>
                            <option value="checkbox">Checkbox</option>
                            <option value="radio">Radio</option>
                          </select>
                        </div>

                        <div className="icon_section  col-2">
                          <IconButton
                            disabled={inputFields.length === 1}
                            onClick={() => handleRemoveFields(inputField.id)}
                          >
                            -
                          </IconButton>
                          <IconButton onClick={handleAddFields}>+</IconButton>
                        </div>
                      </div>

                      {/* <Input   name="question" defaultValue="Enter Your Question"  /> */}
                      <br />

                      <div
                        className="option_part_paragraph"
                        id="paragraph_area"
                      >
                        <TextField
                          name="paragraph"
                          label="Write your answer"
                          variant="filled"
                          value={inputField.paragraph}
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                        />
                        {/* <TextField
                          name="lastName"
                          label="Last Name"
                          variant="filled"
                          value={inputField.lastName}
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                        /> */}
                      </div>

                      <div id="checkbox_area">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Default checkbox
                          </label>
                        </div>
                      </div>

                      <div id="radio_area">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Default radio
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    //   endIcon={<Icon>send</Icon>}
                    onClick={handleSubmit}
                  >
                    Send
                  </Button>
                </form>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
