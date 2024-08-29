const btn1 = document.getElementById("bt1");
const formu1 = document.getElementById("form1");
const formu2 = document.getElementById("form2");

btn1.addEventListener("click",(event)=>{
    
    event.preventDefault()
    
    formu1.classList.toggle("desactivado");
    setTimeout(()=>{
        formu2.classList.remove("desactivado");        
    },1);
    


});