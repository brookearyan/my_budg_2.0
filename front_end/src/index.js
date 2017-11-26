document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('user-form');
  const userDiv = document.getElementById('render-user');


  form.addEventListener('submit', function(ev) {
    ev.preventDefault();

    let userName = document.getElementById('name').value;
    let userZip = document.getElementById('zipcode').value;
    let userIncome = document.getElementById('income').value;
    const user = { userName, userZip, userIncome }
    console.log(user);

    fetch("http://localhost:9393", {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: user
    });

    myForm();

    function myForm() {
      if(form.name.value==""){
        alert("please enter your name");
     }
     if (form.zipcode.value==""){
         alert("please enter a zipcode");
     }
     if(form.income.value==""){
         alert("please enter your annual income");
     } else {
         let n = document.createElement('h2');
         n.innerHTML=userName;
         let p1 = document.createElement('p')
         p1.innerHTML=`zipcode: ${userZip}`;
         let p2 = document.createElement('p')
         p2.innerHTML=`annual income: ${userIncome}`;
         userDiv.appendChild(n);
         n.appendChild(p1);
         p1.appendChild(p2);
         form.reset();
       }
     }
 })


})
