function Validation(){
    let name=document.getElementById("name").value;
    let pass=document.getElementById("pass").value;
        if(name.trim()=="" || pass.trim()==""){
            alert('Please fill all inputs')
            return false
        }   
        else if(name.length<5){
            document.getElementById('namep').innerHTML="Name must contain 5 letters"
            return false
        }
        if(pass.length<8){
            document.getElementById('passp').innerHTML="Password must contain 8 letters"
            return false
        }

        
        else{
           return true;
        }


}
document.addEventListener('input',()=>
{
    let name=document.getElementById("name").value;
    if(name.length>=5){
        document.getElementById('namep').innerHTML=""
    }
}
)
document.addEventListener('input',()=>{
    let pass=document.getElementById("pass").value;
    if(pass.length>=8){
        document.getElementById('passp').innerHTML=""
    }
}
)