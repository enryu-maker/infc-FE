import React from 'react'
import { COLORS, SIZES, FONTS } from '../theme/Theme'
export default function AddCard({
    name,
    icon,
}) {
  return (
    <button style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: 350,
        backgroundColor: COLORS.white,
        borderRadius:SIZES.radius,
        marginBlock: 10,
        marginInline: 10,
        alignItems: "center",
        border:"none",
        boxShadow: "1px 3px 1px #9E9E9E",
    }}
    >
        <p style={{
            ...FONTS.body1,
            marginBlock: 0,
            color: COLORS.black
        }}>
            {name}
        </p>
       <img
        src={icon}
        alt="icon"
        style={{
            width: 50,
            height: 50,
            margin: 10,
        }}
        />

    </button>
  )
}
