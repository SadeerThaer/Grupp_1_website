
function boxValid(valdBox) {

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
            valid = /^([a-zA-Zåäö0-9.!?, ]{3,})*$/.test(box);
            return valid;
    }
}

function boxTom(valdBox) {
    var box = document.getElementById(valdBox).value;
    var tom = /^\s*$/.test(box);
    return tom;
    console.log(tom);

}

function boxColor(valdBox) {
    var boxEmpty = boxTom(valdBox);
    if (!boxEmpty) {
        var valid = false;
        valid = boxValid(valdBox);
        if (valid) {
            boxColorGreen(valdBox);
        }
        else {
            boxColorRed(valdBox);
        }
    }
    else {
        boxColorVit(valdBox);
    }
}

function boxColorRed(valdBox) {
    $('#' + valdBox).css("border-color", "crimson");
}

function boxColorGreen(valdBox) {
    $('#' + valdBox).css("border-color", "green");
}

function boxColorVit(valdBox) {
    $('#' + valdBox).css("border-color", "");
}


function userKlar() {

    var boxFel = true;
    var boxar = ["fnamn", "enamn", "telefon", "email", "meddelande"];
    var uiBoxnamn = ["Förnamn", "Efternamn", "Telefon", "E-mail", "Synpunkter"];
    var i;
    for (i = 0; i < 5; i++) {
        var boxEmpty = boxTom(boxar[i]);
        if (boxEmpty) {
            alert(uiBoxnamn[i] + " måste vara ifyllt!");
            boxFel = false;
            break;
        }
        var boxOk = boxValid(boxar[i]);
        if (!boxOk) {
            alert("Fältet " + uiBoxnamn[i] + " måste skrivas korrekt!")
            boxFel = false;
            break;
        }
    }
    if (boxFel) {
        console.log("Allt stämmer!")
        alert("Allt stämmer!");
        dataTillJSON();
    }
}

function dataTillJSON() {
    var boxar = ["fnamn", "enamn", "telefon", "email", "meddelande"];
    var box = []
    for (i = 0; i < 5; i++) {
        var valdBox = boxar[i];
        box.push(document.getElementById(valdBox).value);


    }
    var jsonBox = { firstname: box[0], surname: box[1], phone: box[2], email: box[3], med: box[4] };
    var jsonConvert = JSON.stringify(jsonBox);
    localStorage.setItem("kontaktJ.json", jsonConvert);
    clearBoxar();

    console.log(box[4]);

}

function getJSONdata() {

    var dataJSON = JSON.parse(localStorage.getItem("kontaktJ.json"));
    document.getElementById("fnamn").value = dataJSON.firstname;
    document.getElementById("enamn").value = dataJSON.surname;
    document.getElementById("telefon").value = dataJSON.phone;
    document.getElementById("email").value = dataJSON.email;
    document.getElementById("meddelande").value = dataJSON.med;
}

function clearBoxar() {
    document.getElementById("fnamn").value = "";
    document.getElementById("enamn").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("email").value = "";
    document.getElementById("meddelande").value = "";

    $('#fnamn').css("border-color", "");
    $('#enamn').css("border-color", "");
    $('#telefon').css("border-color", "");
    $('#email').css("border-color", "");
    $('#meddelande').css("border-color", "");
}