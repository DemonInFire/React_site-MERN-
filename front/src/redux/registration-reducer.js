const ADD_MEMBER_INFO = 'ADD-MEMBER-INFO'
const UPDATE_USER_INFO_TEXT = 'UPDATE-USER-INFO-TEXT'
const UPDATE_USERNAME_TEXT = 'UPDATE-USERNAME-TEXT'
const UPDATE_USER_PASSWORD_TEXT = 'UPDATE-USER-PASSWORD-TEXT'
const UPDATE_USER_CONFIRM_PASSWORD_TEXT = 'UPDATE-USER-CONFIRM-PASSWORD-TEXT'

let initialState = {
    registrationInfo: [{}, {}],
    newUserInfoText: '',
    newUsernameText: '',
    newUserPasswordText: '',
    newUserConfirmPasswordText: ''
}

const registrationReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case ADD_MEMBER_INFO:
            let newUser = {
                info: state.newUserInfoText,
                username: state.newUsernameText,
                password: state.newUserPasswordText
            }
            stateCopy = { ...state, 
                registrationInfo: [...state.registration, newUser],
                newUsernameText:'',
                newUserInfoText:'',
                newUserPasswordText:'',
                newUserConfirmPasswordText:'' 
            }
            return stateCopy
        case UPDATE_USER_INFO_TEXT:
            stateCopy = { ...state, newUserInfoText:action.newText }
            return stateCopy

        case UPDATE_USERNAME_TEXT:
            stateCopy = { ...state, newUsernameText:action.newText }
            return stateCopy

        case UPDATE_USER_PASSWORD_TEXT:
            stateCopy = { ...state, newUserPasswordText:action.newText}
            return stateCopy

        case UPDATE_USER_CONFIRM_PASSWORD_TEXT:
            stateCopy = { ...state, newUserConfirmPasswordText:action.newText}
            return stateCopy

        default:
            return state
    }

}

export const addRegistrationInformationActionCreator = () => ({ type: ADD_MEMBER_INFO })
export const onUserNameChangeActionCreator = (text) => ({ type: UPDATE_USERNAME_TEXT, newText: text })
export const onUserInfoChangeActionCreator = (text) => ({ type: UPDATE_USER_INFO_TEXT, newText: text })
export const onUserPasswordChangeActionCreator = (text) => ({ type: UPDATE_USER_PASSWORD_TEXT, newText: text })
export const onUserConfirmPasswordChangeActionCreator = (text) =>
    ({ type: UPDATE_USER_CONFIRM_PASSWORD_TEXT, newText: text })


export default registrationReducer