import React from 'react'
import { COLORS } from '../theme/Theme'
import TextButton from '../Component/TextButton';
import ScanModel from './ScanModel';
import axiosIns from '../utils/helper';
export default function Scan() {
  const [show, setShow] = React.useState(false)
  const [data,setData]=React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const handleScan = () => {
    setLoading(true)
    axiosIns.get('/device/operate/').then((res) => {
      setData(res.data)
      setShow(true)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: COLORS.Primary1,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: '100vw',
      }}
    >
      {
        show && <ScanModel modalIsOpen={show} setIsOpen={setShow} data={data}/>
      }
      <img
        src={require('../assets/Image/nfc.png')}
        alt="nfc"
        style={{
          height: 250,
          width: 250,
        }}
      />
      <TextButton
        label={"Scan"}
        buttonContainerStyle={{
          backgroundColor: COLORS.Primary2,
          marginTop: 50
        }}
        onPress={() => {
          handleScan()
          // setShow(true)
        }}

      />
    </div>
  )
}
