

// creating some header navbar


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