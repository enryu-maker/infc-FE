import React from 'react'
import { COLORS } from '../theme/Theme'
import DropDown from '../Component/DropDown'
import useMediaQuery from '../Component/useMediaQuery'
import Fileupload from '../Component/Fileupload'
import TextButton from '../Component/TextButton'
import axiosIns from '../utils/helper'
export default function Upload() {
    const isMobile = useMediaQuery('(max-width: 600px)')
    const [file, setFile] = React.useState(null)
    const [year, setYear] = React.useState(null)
    const [pattern, setPattern] = React.useState(null)
    
    // const handerFile = () => {
    //     const data = new FormData()
    //     data.append('file', file)
    //     data.append('year', year)
    //     data.append('pattern', pattern)
    //     console.log(data)
    // }
    // axiosIns.post('/api/upload/', data).then((res) => {
    //     console.log(res)
    // }).catch((err) => {
    //     console.log(err)
    // })

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
            {label: 'SE', value: 'SE'},
            {label: 'TE', value: 'TE'},
            {label: 'BE', value: 'BE'},
        ]}
        value={year}
        onChange={(e)=>{
            setYear(e.target.value)
        }
        }
      
        />
        <DropDown
        label="Pattern"
        options={[
            {label: '2019', value: '2019'},
        ]}
        value={pattern}
        onChange={(e)=>{
            setPattern(e.target.value)
        }
        }
        />
        {/* <DropDown
        label="Department"
        options={[
            {label: 'CSE', value: 'CSE'},
            {label: 'ECE', value: 'ECE'},
            {label: 'EEE', value: 'EEE'},
            {label: 'MECH', value: 'MECH'},
            {label: 'CIVIL', value: 'CIVIL'},
            {label: 'IT', value: 'IT'},
        ]}
        /> */}
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
