

// creating some header navbar


// writing the callback function of the input field form

const formVissible = () => {
    let logIn = document.querySelector('.container_signup');
    logIn.style.display = 'block';

}


// craeting a registering input fieled

let register;

const RegisterLogin = () =>{
    if(register){
        return;
    }

    register = document.createElement('div');
    register.className = 'center_field';

    const FormField = document.createElement('form');
    FormField.className = 'form_field';
    

    const inputField = document.createElement('input');
    inputField.className = 'InputField';
    inputField.type = 'phone';
    inputField.placeholder = '(+234) 000 000 0000';

    const Break = document.createElement('br');

    const inputField2 = document.createElement('input');
    inputField2.className = 'InputField';
    inputField2.type = 'text';
    inputField2.placeholder = 'User full Name ....';

    const Break2 = document.createElement('br');

    const password = document.createElement('input');
    password.className = 'InputField';
    password.type = 'password';
    password.minLength = '2';
    password.maxLength = '20';
    password.placeholder= 'enter password';

    const Break3 = document.createElement('br');


    const confirmPassword = document.createElement('input');
    confirmPassword.className = 'password';
    confirmPassword.type = 'password';
    confirmPassword.placeholder = 'Confirm password';
    confirmPassword.minLength = '2';
    confirmPassword.maxLength = '20';







    
    register.append(FormField);
    register.append(inputField)
    register.append(Break);
    register.append(inputField2);
    register.append(Break2);
    register.append(password)
    register.append(Break3);
    document.body.append(register);
}

let Bgd;
const generateLink = () => {
   if(Bgd){
    return;
   }

   Bgd = document.createElement('li');
   Bgd.className = 'AnchorLink';


   const ugut = document.createElement('a');
   ugut.className = 'contribute';
   ugut.href = './team.htnl';
   ugut.textContent = 'Learn';
   Bgd.append(ugut);
   document.body.append(Bgd);

}



/*
 function passwordValidate(){
    let userPassword = document.getElementById('password-input').value;
      if(userPassword.length <= 9){
          password.innerHTML = "password must be greater then 6 characters";
          return false
      } 
       if(!userPassword.match(/^[0-9]{10}$/)){
          password.innerHTML = '10 digit is required';
          return false
      } 
          password.innerHTML = "<i class='bx bxs-check-circle'></i>"
          return true
      
}
*/