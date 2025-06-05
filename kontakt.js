let Name = document.getElementById('name');
let Email = document.getElementById('email');
let Betreff = document.getElementById('betreff');
let Message = document.getElementById('message');
const sendMessageBtn = document.getElementById('sendMessage');

let validator = false;
let check = 0;

sendMessageBtn.addEventListener('click', function(event) {
    name_user = Name.value
    email_user = Email.value
    betreff_user = Betreff.value
    message_user = Message.value
    valideName(name_user);
    valideEmail(email_user);
    valideBetreff(betreff_user);
    valideMessage(message_user)

    console.log(valideEmail);

    if(validator == true && check >= 3) {
        sendMail(event)
    }
    else{
        alert("Bitte füllen Sie alle Felder aus");
    }

});

function sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target.form);

    fetch("https://formspree.io/f/xeokjyyp", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}


function valideName(name){
    if(name.length<2 || name.length< 0){
        Name.classList.add('notvalideinput');
        validator = false;
    }else{
        Name.classList.add('valideinput');
        validator = true;
        check+=1;
    
    }
}
function valideMessage(message){
    if(message.length<2 || message.length< 0){
        Message.classList.add('notvalideinput');
        validator = false;
    }else{
        Message.classList.add('valideinput');
        validator = true;
        check+=1;
    
    }
}
function valideBetreff(betreff){
    if(betreff.length<2 || betreff.length< 0){
        Betreff.classList.add('notvalideinput');
        validator = false;

    }else{
        Betreff.classList.add('valideinput');
        validator = true;
        check+=1;
    }
}


function valideEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(email)){
    Email.classList.add('valideinput')
    validator = true;
    check+=1;
    }else {
        Email.classList.add('notvalideinput');
        validator = false;
    }
}





