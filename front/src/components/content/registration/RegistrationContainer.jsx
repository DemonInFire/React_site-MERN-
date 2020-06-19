import RegistrationForm from './Registration'
import {connect} from 'react-redux'
import axios from 'axios'

const validateData = (data) => {
    debugger
    if(data.formState.info && data.formState.username && data.formState.password === data.formState.confirmPassword){
        return true
    } else {
        return false
    }
}

export const userData = (data) => {
    const info = validateData(data)

    if (info) {
        let reqUserInfo

        axios.post('https://af54bf1b983f.ngrok.io/registration/save', data) // asynh
            .then(userInfo => {
                reqUserInfo = userInfo.data
            })

            .catch((err) => {
                reqUserInfo = err
            })

        return reqUserInfo
    } else {
        return 'Введена не вся информация'
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)

export default RegistrationContainer