import React from 'react'
import { COLORS,SIZES,FONTS } from '../theme/Theme'

export default function TextButton({
    disabled,
    label,
    labelStyle,
    onPress,
    icon,
    iconStyle,
    buttonContainerStyle,
    loading,
    border=true
}) {
    
  return (
      <>
        <button onClick={onPress}
        disabled={disabled}
        style={{
            display:"inline-flex",
            justifyContent: 'center',
            backgroundColor: COLORS.white,
            borderRadius:SIZES.radius,
            borderWidth:0,
            height:45,
            width:220,
            alignSelf:'center',
            cursor:"pointer",
            boxShadow: "1px 3px 1px #9E9E9E",
            ...buttonContainerStyle,
        }}
        >
        <p style={{ color: COLORS.black, ...FONTS.body2, ...labelStyle,alignSelf:"center",letterSpacing:1 }}>
        {label}
        </p>
        </button>
    </>
  )
}