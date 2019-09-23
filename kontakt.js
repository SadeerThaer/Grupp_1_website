
function boxValid(valdBox){
    
    var box = document.getElementById(valdBox).value;  
    var valid = false;
   
    switch (valdBox) {
        case 'fnamn':
        valid = /^([a-zA-Zåäö]{3,})*$/.test(box);
           return valid;
        case 'enamn':
            valid = /^([a-zA-Zåäö]{3,})*$/.test(box);
            return valid;
        case 'telefon':
            valid = /^([0-9]{3,})*$/.test(box);
            return valid;
        case 'email':
            valid = /[^@]+@[^@]+/.test(box);
            return valid;
        case 'meddelande':
            valid = /^([a-zA-Zåäö0-9.!?,]{3,})*$/.test(box);
            return valid;
      }
}



function boxColor(valdBox){
    var valid = false;
   valid =  boxValid(valdBox);
    if(valid){
        boxColorGreen(valdBox);

    }
    else{
        boxColorRed(valdBox);
    }

}

function boxColorRed(valdBox){

    $('#' + valdBox).css("border-color", "crimson");
}

function boxColorGreen(valdBox){

    $('#' + valdBox).css("border-color", "green");
}

function clearBoxar(){
    document.getElementById("fnamn").value=""; 
    document.getElementById("enamn").value=""; 
    document.getElementById("telefon").value=""; 
    document.getElementById("email").value=""; 
    document.getElementById("meddelande").value=""; 

    $('#fnamn').css("border-color", "");
    $('#enamn').css("border-color", "");
    $('#telefon').css("border-color", "");
    $('#email').css("border-color", "");
    $('#meddelande').css("border-color", "");
}