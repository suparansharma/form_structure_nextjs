import { Accordion, AccordionSummary, Button, FormControlLabel, Typography } from '@mui/material';
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