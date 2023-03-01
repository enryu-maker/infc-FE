import React from 'react'
import { COLORS, FONTS, SIZES } from '../theme/Theme'
import TextInput from './TextInput'
import useMediaQuery from './useMediaQuery'
import { AiOutlineSearch, AiOutlineFilter } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { TbNfc, TbNfcOff } from "react-icons/tb";
export default function DisplayCard({
    mainContainer,
    setIsOpen,
    data
}) {
    const isMobile = useMediaQuery('(max-width: 600px)')
    const [search, setSearch] = React.useState("")
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: COLORS.Primary1,
                // justifyContent: "center",
                alignItems: "center",
                height: !isMobile ? 650 : "100vh",
                width: !isMobile ? 550 : "100vw",
                boxShadow: "1px 3px 1px #9E9E9E",
                ...mainContainer
            }}
        >
            <div
                style={{
                    display: "flex",
                    position: "fixed",
                    top: 0,
                    right: 0,
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    height: 60,
                    width: "100%",
                    backgroundColor: COLORS.Primary2,
                    boxShadow: "1px 3px 1px #9E9E9E",
                }}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <TextInput
                        containerStyle={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 40,
                            marginBottom: 0
                        }}
                        inputStyle={{
                            height: 40,
                        }}
                        inputContainerStyle={{
                            height: 40,
                        }}
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <button
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 40,
                        width: 40,
                        backgroundColor: COLORS.white,
                        border: "none",
                        borderRadius: SIZES.radius,
                        color: COLORS.black,
                        boxShadow: "1px 3px 1px #9E9E9E",
                    }}
                    onClick={() => {
                        setIsOpen(false)
                    }}
                >
                    <RxCross1 size={32} color={COLORS.black} />
                </button>

            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "center",
                    alignItems: "center",
                    marginTop: 70,
                    width: "100%",
                    height: "100%",
                }}
            >
                {
                    data?.map((item, index) => {
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "88%",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    backgroundColor: COLORS.white,
                                    borderRadius: SIZES.radius,
                                    marginBlock: 10,
                                    padding: 10,
                                    // marginInline: 10,
                                    border: "none",
                                    boxShadow: "1px 3px 1px #9E9E9E",
                                }}
                                key={index}
                            >
                                <div>
                                    <p style={{
                                        ...FONTS.body3,
                                        marginBlock: 0,
                                        color: COLORS.black
                                    }}>
                                        Name : {item.name}
                                    </p>
                                    <p style={{
                                        ...FONTS.body3,
                                        marginBlock: 0,
                                        color: COLORS.black
                                    }}>
                                        iprn : {item.iprn}
                                    </p>
                                    <p style={{
                                        ...FONTS.body3,
                                        marginBlock: 0,
                                        color: COLORS.black
                                    }}>
                                        prn : {item.prn}
                                    </p>
                                    <p style={{
                                        ...FONTS.body3,
                                        marginBlock: 0,
                                        color: COLORS.black
                                    }}>
                                        Dept : {item.department}
                                    </p>
                                    <p style={{
                                        ...FONTS.body3,
                                        marginBlock: 0,
                                        color: COLORS.black
                                    }}>
                                        Patt : {item.pattern}
                                    </p>
                                </div>
                                <div style={{
                                    height: "88%",
                                    width: 2,
                                    backgroundColor: COLORS.layout,
                                }} />
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <button
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            height: 80,
                                            width: 80,
                                            border: "none",
                                            backgroundColor: COLORS.transparent

                                        }}
                                    >
                                        {
                                            item.tag ? <TbNfc size={50} color={COLORS.green} /> : <TbNfcOff size={50} color={COLORS.red} />
                                        }
                                    </button>
                                    <button
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            border: "none",
                                            backgroundColor: COLORS.transparent
                                        }}
                                    >
                                        {
                                            item.tag ? <p style={{
                                                ...FONTS.body3,
                                                marginBlock: 0,
                                                color: COLORS.green
                                            }}>Update Tag</p>
                                                :
                                                <p style={{
                                                    ...FONTS.body3,
                                                    marginBlock: 0,
                                                    color: COLORS.red
                                                }}>Add Tag</p>
                                        }
                                    </button>
                                </div>

                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}
