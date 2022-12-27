import {
  AddCircleOutline,
  CheckBox,
  Close,
  CropOriginal,
  Delete,
  FilterNone,
  MoreVert,
  OndemandVideo,
  Radio,
  ShortText,
  Subject,
  TextFields,

} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControlLabel,
  IconButton,
  MenuItem,
  Select,
  Switch,
  Typography,
} from "@mui/material";
import { fontSize } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
import uuid from "react-uuid";

const AddForm = () => {
  // const[open,setOpen]=(true);
  const id = uuid();
  // console.log(id);

  const [questions, setQuestions] = useState([
    {
      questionText: "which is the capital city of bangladesh?",
      questionType: "radio",
      options: [
        { optionText: "Dhaka" },
        { optionText: "CTG" },
        { optionText: "Khulna" },
        { optionText: "Borisal" },
      ],
      open: true,
      required: false,
    },
  ]);


  function changeQuestion(text,i){
    var newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
    console.log(newQuestion)
  }

  function addQuestionType(i,type){
    let qs =[...questions];
    console.log(type);
    qs[i].questionType = type;
    setQuestions(qs);
    console.log("click")
  }

  function questionUI() {
    return questions.map((ques, i) => (
      <div key={i}>
        <Accordion
          expanded={questions[i].open}
          className={questions[i].open ? "add border" : ""}
        >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            elevation={1}
            style={{ width: "100%" }}
          >
            {questions[i].open ? (
              <div className="saved_questions">
                <Typography
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    letterSpacing: ".1px",
                    lineHeight: "24px",
                    paddingBottom: "8px",
                  }}
                >
                  {i + 1}.{questions[i].questionText}
                </Typography>

                {ques.options.map((op, j) => (
                  <div key={j} style={{ display: "flex" }}>
                    <FormControlLabel
                      style={{ marginLeft: "5px", marginBottom: "5px" }}
                      disabled
                      control={
                        <input
                          type={ques.questionType}
                          color="primary"
                          style={{ marginRight: "3px" }}
                          required={ques.type}
                        />
                      }
                      label={
                        <Typography
                          style={{
                            fontFamily: "Roboto,Arial,sans-serif",
                            fontSize: "13px",
                            fontWeight: "400",
                            letterSpacing: ".2px",
                            lineHeight: "20px",
                            color: "#202124",
                          }}
                        >
                          {ques.options[j].optionText}
                        </Typography>
                      }
                    />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </AccordionSummary>

          <div className="question_boxes">
            <AccordionDetails className="add_question">
              <div className="add_question_top">
                <input
                  type="text"
                  className="question"
                  name=""
                  value={ques.questionText}
                  placeholder="Question"
                  onChange={(e)=>{changeQuestion(e.target.value,i)}}
                />
                <CropOriginal style={{ color: "#5f6368" }} />
                <Select
                  className="select"
                  style={{ color:"#5f6368", fontSize: "13px" }}
                >
                  <MenuItem id="text" value="text" onCLick={()=>{addQuestionType(i,"text")}}>
                    <Subject style={{ marginRight: "10px" }}  /> Paragraph
                  </MenuItem>
                  <MenuItem id="checkbox" value="Checkbox" onCLick={()=>{addQuestionType(i,"checkbox")}}>
                    <CheckBox
                      style={{ marginRight: "10px", color: "#70757a" }}
                      
                      checked
                    />{" "}
                    CheckBox
                  </MenuItem>
                  <MenuItem id="radio" value="Radio" onCLick={()=>{addQuestionType(i,"radio")}}>
                    <Radio
                      style={{ marginRight: "10px", color: "#70757a" }}
                      
                      checked
                    />{" "}
                    Multiple Choice
                  </MenuItem>
                </Select>
              </div>

              {ques.options.map((op, j) => (
                <div className="add_question_body" key={j}>
                  {(ques.questionType != "text") ? 
                    <input
                      type={ques.questionType}
                      style={{ marginRight: "10px" }}
                    />
                   : 
                    <ShortText style={{ marginRight: "10px" }} />
                  }

                  <div>
                    <input
                    // value={ques.option[j].optionText} 
                      type="text"
                      className="text_input"
                      placeholder="option"
                    />
                  </div>
                  <CropOriginal style={{ color: "#5f6368" }} />
                  <IconButton aria-label="delete">
                    <Close />
                  </IconButton>
                </div>
              ))}



              {ques.options.length < 5 ? (
                  <div className="add_question_body">
                    <FormControlLabel disabled control={
                        (ques.questionType!="text")?
                        <input type={ques.questionType} color="primary" inputProps={{'aria-label':'secondary checkbox'}}
                        style={{marginLeft:"10px",marginRight:"10px"}} disabled/> :
                        <ShortText style={{marginRight:"10px"}}/>
                    }label={
                            <div>
                                <input type="text" className="text_input" style={{fontSize:"13px",width:"60px"}} placeholder="Add other"/>
                               <Button size="small" style={{textTransform:"none",color:'#4285f4',fontSize:"600"}}>Add option</Button>
                            </div>
                        }/>

                   </div>
                     ): ""}
                    
                    

               

              <div className="add_footer">
                <div className="add_question_bottom_left">
                    <Button size="small" style={{ textTransform:'none' ,color:"#4285f4", fontSize:"13px",fontWeight:"600" }}>
                        Answer key
                    </Button>
                </div>

                <div className="add_question_bottom">
                    <IconButton aria-label="copy">
                        <FilterNone/>
                    </IconButton>

                    <IconButton aria-label="delete">
                        <Delete/>
                    </IconButton>
                    <span style={{ color:"#5f6368",fontSize:"13px" }}>Required</span><Switch name="checked" color="primary" checked/>
                   <IconButton>
                    <MoreVert/>
                    </IconButton> 
                </div>
              </div>
            </AccordionDetails>
            
            <div className="question_edit">
              <AddCircleOutline className="edit"/>
              <OndemandVideo className="edit"/>
              <CropOriginal className="edit"/>
              <TextFields className="edit"/>
            </div>
          </div>
        </Accordion>
      </div>
    ));
  }
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
          {questionUI()}
        </div>
      </div>
    </div>
  );
};

export default AddForm;
