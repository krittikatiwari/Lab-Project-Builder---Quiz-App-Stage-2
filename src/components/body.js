import React,{useState} from "react";
export default function (props) {

    const [value,change] = useState(0);

    const next=()=>{
        if(value<14){
        change(value+1);
        }
        else{
            change(14)
        }
    }
    
    const prev=()=>{
        if(value>0){
            change(value-1);
        }
        else{
            change(0)
        }
    }

    const quit=()=>{
        let get=window.confirm("Are you sure you want to Quit the test?");
        if(get){
            change(0)
        }
    }

    let set=props.abc[value];
    

    return(
        <div className="border">
            <div  className="top" >
                <h1>Question</h1>
            </div>
            <div className="left">
                {value+1} of 15 
            </div>
            <div className="ques">
                {set.question}
            </div>
            <div className="grid">
                <div className="option">{set.optionA}</div>
                <div className="option">{set.optionB}</div>
                <div className="option">{set.optionC}</div>
                <div className="option">{set.optionD}</div>
            </div>
            <div>
                <button className="prev" onClick={()=>prev()}>Previous</button>
                <button className="next" onClick={()=>next()}>Next</button>
                <button className="quit" onClick={()=>quit()}>Quit</button>
            </div>
        </div>
    )
}