import React from "react";
import { COLORS, SIZES, FONTS } from "../theme/Theme";
import useMediaQuery from "./useMediaQuery";
export default function TextInput({
  containerStyle,
  inputContainerStyle,
  label,
  placeholder,
  inputStyle,
  value = "",
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "none",
  errorMsg,
  maxLength,
  keytype = "",
  onPressIn,
  type,
}) {


  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)') 
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          alignSelf: "center",
          display: "flex",
          flexFlow: "column",
          marginBottom: 30,
          borderWidth: 0,
          ...containerStyle,

        }}
      >
        <div
          style={{
            width: 284,
            justifyContent: "space-between",
            display: "flex",
            flexFlow: "row",
            alignSelf: "center",
            height: 20,
          }}
        >
          {
            mobile ? matches ? <text style={{ color: COLORS.black, ...FONTS.body4 }}>{label}</text> : 
            <text style={{ color: COLORS.black, ...FONTS.body4 }}>{label}</text>: 
            <text style={{ color: COLORS.black, ...FONTS.body5 }}>{label}</text>
          }
          <text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</text>
        </div>
        <div
          style={{
            display: "inline-flex",
            flexFlow: "row",
            height: 50,
            paddingHorizontal: SIZES.padding,
            // marginTop: 5,
            borderRadius: SIZES.radius,
            boxShadow: "1px 3px 1px #9E9E9E",

            width: 300,
            alignSelf: "center",
            ...inputContainerStyle,
          }}>

          {prependComponent}
          <input
            style={{
              flex: 1,
              width: "100%",
              backgroundColor: COLORS.white,
              borderRadius: SIZES.radius,
              height: 45,
              alignSelf: "center",
              paddingLeft: 20,
              ...FONTS.body3,
              outline:"none",
              border:"none",
              ...inputStyle,

            }}
            value={value}
            placeholder={placeholder}
            color={COLORS.black}
            type={type}
            onChange={onChange}
          />
          {appendComponent}
        </div>
      </div>
    </>
  );
}