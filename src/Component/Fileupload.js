import React from 'react'
import { COLORS, FONTS, SIZES } from '../theme/Theme'

export default function Fileupload() {
  return (
    <div
    style={{
        display: "flex",
        height: 100,
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:COLORS.white,
        boxShadow: "1px 3px 1px #9E9E9E",
        borderRadius:SIZES.radius,
        border:"none",
        ...FONTS.body3
    }}
    >
        <input type="file" 
        style={{
            // alignSelf:"center",
            justifyContent:"center",
            width: 280,
            letterSpacing: 1,
            ...FONTS.body3,
            backgroundColor:COLORS.white,
        }}
        placeholder="Upload File"

        />
    </div>
  )
}
