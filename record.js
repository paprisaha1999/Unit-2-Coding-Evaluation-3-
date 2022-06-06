// fill in javascript code here

document.querySelector("form").addEventListener("submit", myFunction);

function myFunction (event) {
    event.preventDefault();

    var name = document.querySelector ("#name").value;
    var id = document.querySelector ("#employeeID").value;
    var dept = document.querySelector ("#department").value;
    var exp = document.querySelector ("#exp").value;
    var mail = document.querySelector ("#email").value;
    var mbl = document.querySelector ("#mbl").value;

    console.log (name,id,dept,exp,mail,mbl);

    var tr = document.createElement("tr");

    var td1 = document.createElement ("td");
    td1.innerText=name;

    var td2 = document.createElement ("td");
    td2.innerText=id;

    var td3 = document.createElement ("td");
    td3.innerText=dept;

    var td4 = document.createElement ("td");
    td4.innerText=exp;

    var td5 = document.createElement ("td");
    td5.innerText=mail;

    var td6 = document.createElement ("td");
    td6.innerText=mbl;

    var td7 = document.createElement ("td");
    if (exp>5){
        td7.innerText = "Senior"
    } else if (exp>=2 || exp<=5) {
        td7.innerText = "Junior"
    } else if (exp<=1) {
        td7.innerText = "Fresher"
    }
    
    var td8 = document.createElement ("td");
    td8.innerText="DELETE";
    td8.style.backgroundColor="red"
    td8.style.cursor="pointer"
    td8.addEventListener("click",deleteRow);

    tr.append (td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr);
}

function deleteRow (event) {
    event.target.parentNode.remove();
    event.target.parentNode.innerHTML = "";
}