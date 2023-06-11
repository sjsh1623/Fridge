import Login from "../screens/Login";

const Message = {
    wrongEmail : 'Email 형식이 올바르지 않습니다',
    emptyPassword : '비밀번호를 입력해주세요',
    loginFail : '아이디 또는 비밀번호가 일치하지 않습니다. \n 다시 시도해주세요'
}

const WarningMessage = (err = 'wrongEmail') => {
    return Message[err];
}

export default WarningMessage;
