export const checkValidateData = (email , password, name) =>{
 
    const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);

    if (!isEmailValid) return "Email ID is not valid ";
    if (!isPasswordValid) return "Password is not valid";
    if(!isNameValid) return "Name is not valid" ;



    return null ;
}