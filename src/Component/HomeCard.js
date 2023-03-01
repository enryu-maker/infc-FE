import React from 'react'
import { COLORS, SIZES, FONTS} from '../theme/Theme'

export default function HomeCard({
    name,
    count,
    total,
    setData,
    data,
    setShow,
    pattern
}) {
    
  return (
    <button style={{
        display: "flex",
        flexDirection: "column",
        width: 350,
        backgroundColor: COLORS.white,
        borderRadius:SIZES.radius,
        marginBlock: 10,
        marginInline: 10,
        border:"none",
        boxShadow: "1px 3px 1px #9E9E9E",
    }}
    onClick={() => {
        setShow(true)
        setData(data)
    }}
    >
        <p style={{
            ...FONTS.body1,
            marginBlock: 0,
            color: COLORS.black
        }}>
            Class : {name}
        </p>
        <p style={{
            ...FONTS.body2,
            marginBlock: 0,
            color: COLORS.black

        }}>
            Student : {count} / {total}
        </p>
        <p style={{
            ...FONTS.body2,
            marginBlock: 0,
            color: COLORS.black

        }}>
            Patt : {pattern}
        </p>

    </button>
  )
}
