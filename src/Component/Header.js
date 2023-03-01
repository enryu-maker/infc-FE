import React from 'react'
import { COLORS, FONTS } from '../theme/Theme'

export default function Header({
    prepand,
    label,
    append
}) {
  return (
    <div
    style={{
        display:"flex",
        position:"fixed",
        top:0,
        right:0,
        backgroundColor:COLORS.Primary2,
        justifyContent:"space-between",
        alignItems:"center",
        height:60,
        width:"100vw",
        boxShadow: "1px 3px 1px #9E9E9E",
    }}
    >
        {
            prepand
        }
        <p style={{
            ...FONTS.body1,
            marginBlock:0
            // color:COLORS.black
        }}>
            {label}
        </p>

        {
            append
        }
    </div>
  )
}
