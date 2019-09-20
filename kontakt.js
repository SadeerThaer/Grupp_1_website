function getAlla(){
    var klaga = document.getElementById('meddelande').value;    
    var fnamn = document.getElementById('fnamn').value;  
    var enamn = document.getElementById('enamn').value;  
    var telefon = parseInt(document.getElementById('telefon').value, 10);  
    var email = document.getElementById('email').value;
    
    var hela = klaga+fnamn+enamn+telefon+email;
    document.getElementById('testatext').innerHTML= hela;
    inteTom(email);
}

function inteTom(email){
    var valid = /[a]/.test(email);
    //var valid = /^\s*$/.test(email);
    //var valid = /[^@]+@[^@]+/.test(email);
    if(valid){
    alert("Mail is right");
}
    else{
        alert("wrong");
    }

}
    

