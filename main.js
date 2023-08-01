var question=document.querySelectorAll(".accordques");
//console.log(question);


question.forEach(function(ques){
    //console.log(ques);
    ques.addEventListener("click",function(){
        if(ques.nextElementSibling.classList.contains("active")){
            ques.nextElementSibling.classList.remove("active");
            ques.querySelector("i").style.transform="rotate(180deg)";           
        }


        else{
            ques.nextElementSibling.classList.add("active");
            ques.querySelector("i").style.transform="rotate(0deg)";
        }
    })
})