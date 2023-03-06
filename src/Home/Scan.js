import React from 'react'
import { COLORS } from '../theme/Theme'
import { FcNfcSign } from "react-icons/fc";
import TextButton from '../Component/TextButton';
import ScanModel from './ScanModel';
export default function Scan() {
  const [show, setShow] = React.useState(false)

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
        show && <ScanModel/>
      }
      <img
        src={require('../assets/Image/nfc.png')}
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
          setShow(true)
        }}

      />
    </div>
  )
}
