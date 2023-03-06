import React from 'react'
import { useDispatch } from 'react-redux'
import DropDown from '../Component/DropDown'
import TextButton from '../Component/TextButton'
import TextInput from '../Component/TextInput'
import { Login_Function } from '../Store/actions'
import { COLORS, FONTS } from '../theme/Theme'

export default function Login() {
    const dispatch = useDispatch()
    const [email, setEmail] = React.useState('')
    const [pass,setPass] = React.useState('')
    const [dept,setDept] = React.useState('')
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
            marginBlockStart:0
        }}
        >
            INFC
        </p>
        <TextInput
        label="Email"
        placeholder="Enter your email"
        />
        <TextInput
        label="Password"
        placeholder="Enter your password"
        />
        <DropDown
        label="Department"
        options={[
            {label: 'CSE', value: 'CSE'},
            {label: 'ECE', value: 'ECE'},
            {label: 'EEE', value: 'EEE'},
            {label: 'MECH', value: 'MECH'},
            {label: 'CIVIL', value: 'CIVIL'},
            {label: 'IT', value: 'IT'},
        ]}
        />
        <TextButton
            label={"Login"}
            buttonContainerStyle={{
                backgroundColor: COLORS.Primary2,
            }}
            onPress={()=>{
                dispatch(Login_Function("suckk my dick"))
            }}
            />
    </div>
  )
}
