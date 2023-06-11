
const regex = {
    Email : /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    PasswordLength : /^.{11,}$/, // Over 10 length of string (Email)

}
export const EmailValidation = (userEmail = '') => {
    return regex.Email.test(userEmail)
}

export const PasswordValidation = (userPassword = '') => {
    console.log(userPassword)
    return regex.PasswordLength.test(userPassword)
}

export const LoginValidation = ({userEmail = '', userPassword = ''}) => {
    const isEmailValid = EmailValidation(userEmail);
    const isPwNotEmpty = PasswordValidation(userPassword);
    return isEmailValid && isPwNotEmpty;
}

