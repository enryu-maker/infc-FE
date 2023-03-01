import React from 'react'
import ReactLoading from 'react-loading';
import { COLORS,SIZES } from '../theme/Theme';
export default function Loading() {
  return (
    <>
      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: SIZES.radius,
        borderWidth: 0,
        height: 50,
      }}>
        <ReactLoading type={"spin"} color={COLORS.Primary2} height={50} width={50}  />
      </div>
    </>
  )
}