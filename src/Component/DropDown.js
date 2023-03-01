import React from 'react'
import Select from 'react-select';
import './Drop.css'
import { COLORS, SIZES, FONTS } from '../theme/Theme';
export default function DropDown({
    label,
    options,
    defaultOption,
    inputContainerStyle,
    prepandcomponent,
    containerStyle,
    onPress,
    value,
    setValue
}) {
    const style1 = {
        control: (base, state) => ({
          ...base,
          border: "0 !important",
          height:50,
          boxShadow: "1px 3px 1px #9E9E9E",
          borderRadius:SIZES.radius,
          paddingLeft: 10,
          ...FONTS.body3

        })
      };
    return (
        <div
            style={{
                ...containerStyle,
                justifyContent: "center",
                alignSelf: "center",
                display: "flex",
                flexFlow: "column",
                marginBottom: 30
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
                <text style={{ color: COLORS.black, ...FONTS.body5 }}>{label}</text>
            </div>
            <div
                style={{
                    display: "flex",
                    flexFlow: "row",
                    height: 50,
                    backgroundColor: COLORS.white,
                    borderRadius: SIZES.radius,
                    background: 'none',
                    borderTop: 'none',
                    borderInline: 'none',
                    width: 300,
                    alignSelf: "center",
                    ...FONTS.body3,
                    outline: "none",
                }}>
                {
                    prepandcomponent
                }
                <div style={{
                    flex: 1,
                    justifyContent: "center",
                    alignSelf: "center",
                }}>
                    <Select
                        styles={style1}
                        value={value}
                        onChange={onPress}
                        placeholder={value}
                        options={options}
                    />
                </div>


            </div>
        </div>
    )
}