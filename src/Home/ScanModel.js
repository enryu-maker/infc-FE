import React from 'react'
import Modal from 'react-modal';
import { COLORS, FONTS, SIZES } from '../theme/Theme';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import '../Component/constant.css'
import Header from '../Component/Header';
import useMediaQuery from '../Component/useMediaQuery';
import { baseURL } from '../utils/helper';
export default function ScanModel({
    modalIsOpen,
    setIsOpen,
    data
}) {
    const isMobile = useMediaQuery('(min-width:600px)')
    let subtitle;
    function afterOpenModal() {
        subtitle.style.color = COLORS.Primary1;
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            ariaHideApp={false}
            style={{
                overlay: {
                    backgroundColor: COLORS.Primary1,
                    zIndex: 1000
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: COLORS.Primary1,
                    border: 'none',
                    width: !isMobile ? "100%" : "100%",
                    height: !isMobile ? "100%" : "100%",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 0,
                    // borderRadius: 10
                }
            }}

        >
            <Header
                prepand={
                    <button
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 40,
                            width: 40,
                            marginInline: 10,
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
                        <MdOutlineKeyboardArrowLeft size={36} color={COLORS.black} />
                    </button>
                }
                label={"Student"}
                append={
                    <div
                        style={{
                            height: 40,
                            width: 40,
                            marginInline: 10,

                        }}
                    ></div>
                }
            />
            <div
                style={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    width:isMobile?"40%": "88%",
                    backgroundColor: COLORS.white,
                    borderRadius: 10,
                    padding: 10,
                    marginBlockStart: 80,
                    overflow: "auto"
                }}
            >
                <p style={{marginBlock:0, ...FONTS.body3,letterSpacing:3 }}>Name:{data.name}</p>
                <p style={{marginBlock:0, ...FONTS.body3,letterSpacing:3 }}>Prn:{data.prn}</p>
                <p style={{marginBlock:0, ...FONTS.body3,letterSpacing:3 }}>Year:{data.year}</p>
                <p style={{marginBlock:0, ...FONTS.body3,letterSpacing:3 }}>Department:{data.department}</p>

            </div>
            <img 
            src={ baseURL + data.hallticket}
            style={{
                display: "flex",
                    flexFlow: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width:isMobile?"40%": "88%",
                    backgroundColor: COLORS.white,
                    borderRadius: 10,
                    padding: 10,
                    marginBlockStart:5,
                    overflow: "auto"
            }}
            />

        </Modal >
    )
}
