function dis(a)
{	
	document.getElementById("oprasi").value+=a;//input angka
}
function hitung(){
    var res = [];
    var answer;
    
    if(document.getElementById("oprasi").value.includes("+")){
    res = document.getElementById("oprasi").value.split('+');
    return parseInt(res[0]) + parseInt(res[1]);
    }
    
    else if(document.getElementById("oprasi").value.includes("-")){
    res = document.getElementById("oprasi").value.split('-');
    return parseInt(res[0]) - parseInt(res[1]);
    }
    
    else if(document.getElementById("oprasi").value.includes("/")){
    res = document.getElementById("oprasi").value.split('/');
    return parseInt(res[0]) / parseInt(res[1]);
    }
    
    else{
    res = document.getElementById("oprasi").value.split('*');
    return answer= parseInt(res[0]) * parseInt(res[1]);
    }
}
function solve(){	
    var a = hitung()
    if (a==Infinity ||a==-Infinity){ // deteksi pembagian 0 
        document.getElementById("oprasi").value = "Error";
        const message = document.getElementById("errmsg")
        message.innerHTML = ""
        //error message
        try {
            if(document.getElementById("oprasi").value=="Error") {
                throw "Cannot Divided By Zero" ;
            }
        }
        catch(err){ 
            message.innerHTML =err;
        }
    }
    else if(isNaN(a)){
        document.getElementById("oprasi").value = "Error";
        const message = document.getElementById("errmsg")
        message.innerHTML = ""
        //error message
        try {
            if(document.getElementById("oprasi").value=="Error") {
                throw "Operasi sing salah, lebokake sing bener" ;
            }
        }
        catch(err){ 
            message.innerHTML =err;
        }

    }
    else {
        document.getElementById("oprasi").value =a;
        }
    }

    function clr(){
            document.getElementById('oprasi').value=" ";
            const message = document.getElementById("errmsg");
            message.innerHTML ="";
        }