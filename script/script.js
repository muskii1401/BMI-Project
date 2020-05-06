let height='';
let weight='';
let result='';

const commentField=document.querySelector(".comment-field")

const updateComment=(number)=>{
    let msg=''
    if(number<18.5){
        msg="You are underweight"
    }
    else if(number>=18.5 && number<25){
        msg="You are normal"
    }
    else if(number>=25 && number<30){
        msg="You are overweight"
    }
    else if(number>=30 && number<40){
        msg="You are obese"
    }
    else{
        msg="Please enter both height and weight"
    }
    commentField.value=msg
    console.log("Comment updated")
}

const resultField=document.querySelector(".result-field")

const updateResult=(number)=>{
    resultField.value=number
}

const computeBMI=()=>{
    console.log("Computing Result");
    getHeight()
    getWeight()
    if(height==='' && weight===''){
        updateComment()
    }
    else{
        height=parseFloat(height)
        weight=parseFloat(weight)
        result=weight/(height*height)*10000;
        result=result.toFixed(1)
        updateResult(result)
        updateComment(result)
    }
}

const getHeight=()=>{
    height=document.getElementById("height").value;
    console.log("Height saved");
}

const getWeight=()=>{
    weight=document.getElementById("weight").value
    console.log("Weight Saved")
}

const compute= document.querySelector(".result-btn")

compute.addEventListener("click",()=>{
    computeBMI()
    console.log("Compute button pressed")
    console.log("height is : "+height)
    console.log("weight is : "+weight)
    console.log("bmi is : "+result)
})