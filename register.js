let nameError = document.getElementById('name-error');
let numError = document.getElementById('num-error');
let dateError = document.getElementById('dob-error');
let mailError = document.getElementById('mail-error');
let submitError = document.getElementById('submit-error');
function validate_Name()
{
    let name = document.getElementById('full_name').value;
    let patt = /\D/;
    if(!name.match(patt))
    {
        nameError.innerHTML= 'Invalid';
        nameError.style.color = "#ff0000";
        return false;
    }
    if(name.length == 0)
    {
        nameError.innerHTML = 'required';
        nameError.style.color = "ff0000";
        return false;
    } 
    nameError.innerHTML= 'valid';
    nameError.style.color = "#008000";
    return true;

}

function validate_Mail(){
    let mailid =  document.getElementById('mail').value;
    let pattern =/^[a-zA-Z0-9_.]+@[a-zA-Z0-9._]$/;
    if(mailid.match(pattern))
    {
        mailError.innerHTML = "valid";
        return true;
    }
    if(mailid.length == 0)
    {
        mailError.innerHTML = 'required';
        mailError.style.color = "#ff0000";
        return false;
    }
    mailError.innerHTML = "valid";
    mailError.style.color = "#008000";
        return true;

}

function validate_Phone()
{
    let number = document.getElementById('num').value;
    let pattern = /^\d{10}$/;
    if(number.match(pattern))
    {
        numError.innerHTML = "valid";
        numError.style.color = "#008000";
        return true;
    }
    if(number.length == 0)
    {
        numError.innerHTML = 'required';
        nameError.style.color = "#ff0000";
        return false;
    } 
        numError.style.color = "#ff0000";
        numError.innerHTML = "Invalid";
        return false;
}

function validate_Date()
{
    let dat = document.getElementById("date").value;
    if(dat == '')
    {
        dateError.innerHTML = "required";
        dateError.style.color = "#ff0000";
        return false;
    }
    dateError.innerHTML = "valid";
    dateError.style.color = "#008000";
    return true;
}

function validate_Data()
{
    if(!validate_Name() || !validate_Mail() || !validate_Date() || !validate_Phone())
    {
        submitError.innerHTML = "Please fix requirements for submit";
        submitError.style.color = "#ff0000";
        return false;
    }
    submitError.innerHTML = "";
    refresh();
}

function refresh()
{
    document.getElementById("full_name").value = '';
    document.getElementById("mail").value = '';
    document.getElementById("num").value = '';
    document.getElementById("date").value = '';
}