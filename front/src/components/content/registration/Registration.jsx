import React, { useState } from 'react'
import { Form, Col, Button} from 'react-bootstrap'
import s from './Registration.module.css'
import {userData} from './RegistrationContainer'
// import RegistrationInfo from './RegistrationInfo/RegistrationInfo'
// import { Field, reduxForm } from 'redux-form'
// import { required, lengthCreator, requiredMail } from './../../../valid/validators'
// import { Input } from './../../common/inputStyleForForms'

// const requiredUsername = required('Incorrect username')
// const requiredPassword = required('Incorrect password')
// const requiredConfirm = required('Incorrect confirm')
// const lengthCreatorMax40 = lengthCreator(40)
// const lengthCreatorMax25Min4 = lengthCreator(25, 4)
// const lengthCreatorMax20Min6 = lengthCreator(20, 6)



const RegistrationForm = () => {

    const initialFormState = {
        info: '',
        username: '',
        password: '',
        confirmPassword: ''
    }
    
    const [formState, setFormState] = useState(initialFormState)
    const [userInfo,setUserInfo] = useState(null)
    
        const handleFormState = (e) => {
            const fieldName = e.target.name
            const fieldValue = e.target.value
            setFormState({
                ...formState,
                [fieldName]: fieldValue
            })
        }
    
        const handleSubmit = (e) => {
            e.preventDefault()
            const userInformation = userData({
                formState
            })

            setUserInfo(userInformation)
        }
    
    return (
        <Form className={s.FormStyle} onSubmit={handleSubmit}>
            <Form.Row>
            <Col xs={{ offset: 4 }}>
                <Form.Label>
                    <p>Email address or phone number</p>
                </Form.Label>
            </Col>
        </Form.Row>
        <Form.Row>
            <Col xs={{ span: 4, offset: 4 }} >
                <Form.Control
                    onChange={handleFormState}
                    type='text'
                    value={formState.info}
                    name='info'
                    placeholder="Exemple:+375445869386 or albert@gmail.com"
                // component={<Input handleFormState={handleFormState}}
                // name={'info'}
                // validate={[requiredMail, lengthCreatorMax40]}
                />
            </Col>
        </Form.Row>
            <Form.Row>
                <Col xs={{ span: 4, offset: 4 }}>
                    <Form.Label>
                        <p>Username</p>
                    </Form.Label>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col xs={{ span: 4, offset: 4 }}>
                    <Form.Control
                        onChange={handleFormState} 
                        type='text' 
                        value={formState.username}
                        name='username'
                        placeholder="Enter username(Between 4 and 25 symbols)"
                        // component={<Input handleFormState={handleFormState} />}
                        // name={'username'}
                        // validate={[requiredUsername, lengthCreatorMax25Min4]}
                    />
                </Col>
            </Form.Row>
            <Form.Row>
                <Col xs={{ span: 4, offset: 4 }}>
                    <Form.Label>
                        <p>Password</p>
                    </Form.Label>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col xs={{ span: 4, offset: 4 }}>
                    <Form.Control
                        onChange={handleFormState} 
                        type='password' 
                        value={formState.password}
                        name='password'
                        placeholder="Enter password(Between 6 and 20 symbols)"
                        // component={<Input handleFormState={handleFormState} />}
                        // name={'password'}
                        // type={'password'}
                        // validate={[requiredPassword, lengthCreatorMax20Min6]}
                    />
                </Col>
            </Form.Row>
            <Form.Row>
                <Col xs={{ span: 4, offset: 4 }}>
                    <Form.Label>
                        <p>Confirm password</p>
                    </Form.Label>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col xs={{ span: 4, offset: 4 }}>
                    <Form.Control 
                        onChange={handleFormState} 
                        type='password' 
                        value={formState.confirmPassword}
                        name='confirmPassword'
                        placeholder="Enter password to confirm(Repeat password)" 
                        // component={<Input handleFormState={handleFormState} />} 
                        // name={'confirmPassword'}
                        // type={'password'} validate={[requiredConfirm]}
                    />
                </Col>
            </Form.Row>
            {userInfo && <p>{userInfo}</p>}
            <Form.Row>
                <Col xs={{ span: 4, offset: 4 }}>
                    <Button className={s.Button}
                        type='submit' >Confirm</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default RegistrationForm