import React, { useState } from 'react';

const QuestionForm = () => {
    const [questions,setQuestions] = useState(
        [{questionText:"Which is capital ? ",
        questionType:"radio",
        options: [
            {optionText:"Dhaka"},
            {optionText:"Khulna"},
            {optionText:"Ctg"},
            {optionText:"Kushtia"},
            
        ],
        open:true,
        required:false
    }]
    )
    return (
        <div>
            
        </div>
    );
};

export default QuestionForm;