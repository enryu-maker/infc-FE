import React from 'react'
import { COLORS } from '../theme/Theme'
import DropDown from '../Component/DropDown'
import useMediaQuery from '../Component/useMediaQuery'
import Fileupload from '../Component/Fileupload'
import TextButton from '../Component/TextButton'
export default function Upload() {
    const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <div
    style={{
        display: "flex",
        flexDirection:"column",
        backgroundColor: COLORS.Primary1,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: '100vw',
    }}
    >
      <DropDown
        label="Year"
        options={[
            {label: 'CSE', value: 'CSE'},
            {label: 'ECE', value: 'ECE'},
            {label: 'EEE', value: 'EEE'},
            {label: 'MECH', value: 'MECH'},
            {label: 'CIVIL', value: 'CIVIL'},
            {label: 'IT', value: 'IT'},
        ]}
        />
        <DropDown
        label="Pattern"
        options={[
            {label: 'CSE', value: 'CSE'},
            {label: 'ECE', value: 'ECE'},
            {label: 'EEE', value: 'EEE'},
            {label: 'MECH', value: 'MECH'},
            {label: 'CIVIL', value: 'CIVIL'},
            {label: 'IT', value: 'IT'},
        ]}
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
        <Fileupload/>
        <TextButton
            label={"Upload"}
            buttonContainerStyle={{
                backgroundColor: COLORS.Primary2,
                marginTop:50
            }}
            onPress={()=>{
            }}
            />
    </div>
  )
}
