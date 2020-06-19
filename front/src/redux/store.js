// _state:{
//     Registration:[],
//     newUserInfoText:'',
//     newUsernameText:'',
//     newUserPasswordText:'',
//     newUserConfirmPasswordText:''
// },
// _callSubscriber(){},
// getState(){
//     return this._state
// },
// subscribe(observer){
//     this._callSubscriber = observer
// },
// dispatch(action){
//     this._state = registrationReducer(this._state, action)
//     this._callSubscriber(this._state)
// }