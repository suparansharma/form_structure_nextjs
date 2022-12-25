import { CheckBox, Close, CropOriginal, Radio, ShortText, Subject } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Button, FormControlLabel, IconButton, MenuItem, Select, Typography } from '@mui/material';
import { fontSize } from '@mui/system';
import Link from 'next/link';
import React, { useState } from 'react';
import uuid from 'react-uuid';

const AddForm = () => {
    // const[open,setOpen]=(true);
    const id = uuid();
    console.log(id);

    const [questions,setQuestions] = useState( [
        {questionText:"which is the capital city of bangladesh?",
    questionType:"radio",
options:[
    {optionText:"Dhaka"},
    {optionText:"CTG"},
    {optionText:"Khulna"},
    {optionText:"Borisal"}
],
open:true,
required:false
}]

)

function questionUI(){
    
    return questions.map((ques,i)=>(
        <div key={i}>
        <Accordion expanded={questions[i].open} className={questions[i].open ?'add border':""} >
        <AccordionSummary
        aria-controls='panel1a-content'
        id="panel1a-header"
        elevation={1} style={{ width:'100%' }}
        >
            
             {
                questions[i].open ? (
                    <div className='saved_questions'>
                        <Typography style={{ fontSize:"15px",fontWeight:"400",letterSpacing:'.1px' ,lineHeight:'24px',paddingBottom:"8px" }}>
                        {i+1}.{questions[i].questionText}
                        </Typography>

                        {ques.options.map((op,j)=>(
                            <div key={j} style={{ display:"flex" }}>
                                <FormControlLabel
                                  style={{marginLeft:"5px",marginBottom:"5px"  }} disabled control={<input type={ques.questionType}
                                  color="primary"style={{ marginRight:'3px' }} required={ques.type}
                                  />}      

                                label={<Typography style={{ fontFamily:'Roboto,Arial,sans-serif',
                                fontSize:'13px',
                                fontWeight:'400',
                                letterSpacing:'.2px',
                                lineHeight:'20px',
                                color:'#202124'
                            }}>
                                {ques.options[j].optionText}

                                </Typography>}
                                />
                            </div>
                        ))}

                    </div>
                ):""
             }
            

        </AccordionSummary>

        <div className='question_boxes'>
             <AccordionDetails className='add_question'>
             <div className='add_question_top'>
                <input type="text" className="question" name="" value={ques.questionText}  placeholder='Question'/>
                <CropOriginal style={{ color:"#5f6368" }}/>
                <Select className='select' style={{ color:"#5f6368" ,fontSize:"13px" }}>
                    <MenuItem id='text' value='text'><Subject style={{ marginRight:"10px" }}/> Paragraph</MenuItem>
                    <MenuItem id='checkbox' value='Checkbox'><CheckBox style={{ marginRight:"10px",color:'#70757a'  }} checked/> CheckBox</MenuItem>
                    <MenuItem id='radio' value='Radio'><Radio style={{ marginRight:"10px",color:'#70757a'  }} checked/> Multiple Choice</MenuItem>


                </Select>
             </div>

             { ques.options.map((op,j)=>(
                    <div className='add_question_body' key={j}>
                        {
                            (ques.questionType!="text") ?
                            <input type={ques.questionType} style={{ marginRight:"10px" }}/>:
                            <ShortText style={{ marginRight:"10px" }}/>
                        }
                        
                      
                     <div  >
                     {/* value={ques.option[j].optionText} */}
                    <input type="text" className="text_input" placeholder="option" />
                    </div>
                    <CropOriginal style={{color:"#5f6368"}}/>
                    <IconButton aria-label='delete'>
                        <Close/>
                    </IconButton>  
                    </div>
                   
 
                ))}


             </AccordionDetails>
        </div>
        </Accordion>
    </div>
    ))

  
}
    return (
        <div>
            <h2>aaaaaaaa</h2>
            <Button>Add from</Button>
             <div className="question_form">
                <br />
                <div className="section">
                    <div className="question_title_section">
                        <div className="question_form_top">
                            <input type="text" className='question_form_top_name' style={{ color:"black" }} placeholder="unititeld document" />
                            <input type="text" className='question_form_top_desc' style={{ color:"black" }} placeholder="Form Description" />
                        </div>
                    </div>
                    {questionUI()}
                </div>
            </div>   
        </div>
    );
};

export default AddForm;