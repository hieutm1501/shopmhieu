var address = document.getElementById('address');
var note = document.getElementById('note');
var flag = true;

function validate(){
    if(address.value=="" && note.value==""){
        alert('Please enter your Address and problem');
        flag = false
    }else{
        if(address.value==""){
            alert("Please enter your Address");
            flag= false;
        }else if(note.value==""){
            alert('please enter your problem');
            flag= false;
        }
    }

    if(address.value!="" && note.value!=""){
        alert('Thanks Bro');
        address.value="";
        note.value="";

    }
    return flag;
}