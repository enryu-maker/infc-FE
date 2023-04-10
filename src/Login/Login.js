import React from 'react'
import { useDispatch } from 'react-redux'
import TextButton from '../Component/TextButton'
import TextInput from '../Component/TextInput'
import { Login_Function } from '../Store/actions'
import { COLORS, FONTS } from '../theme/Theme'
import axios from 'axios'
import { baseURL } from '../utils/helper'

export default function Login() {
    const dispatch = useDispatch()
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    function handleLogin() {
        axios.post(baseURL + '/api/user/login/', {
            email: email,
            password: pass,
        }
        ).then((res) => {
            dispatch(Login_Function(res.data.token.access))
        }
        ).catch((err) => {
            console.log(err.request)
        }
        )
    }
    return (
        <div
            style={{
                backgroundColor: COLORS.Primary1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
            }}
        >
            <p
                style={{
                    ...FONTS.largeTitle,
                    color: COLORS.black,
                    marginBlockStart: 0
                }}
            >
                INFC
            </p>
            <TextInput
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}

            />
            <TextInput
                label="Password"
                placeholder="Enter your password"
                value={pass}
                onChange={(e) => {
                    setPass(e.target.value)
                }}
                secureTextEntry={true}
            />
            <TextButton
                label={"Login"}
                buttonContainerStyle={{
                    backgroundColor: COLORS.Primary2,
                }}
                onPress={() => {
                    handleLogin()
                }}
            />
        </div>
    )
}
