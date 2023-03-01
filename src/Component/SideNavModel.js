import React from 'react'
import Modal from 'react-modal';
import useMediaQuery from './useMediaQuery';
import { COLORS, FONTS, SIZES } from '../theme/Theme';
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { Logout_Function } from '../Store/actions';
import './constant.css'
import Header from './Header';

export const SideNavModal = ({
    setName,
    Name,
    modalIsOpen,
    setIsOpen,
    setComp,
    setHead
}) => {
    const dispatch = useDispatch()
    const mobile = useMediaQuery('(min-width:860px)')
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
                    width: !mobile ? "100%" : "100%",
                    height: !mobile ? "100%" : "100%",
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
                    <button style={{
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
                        marginLeft: 15
                    }}
                        onClick={() => {
                            setIsOpen(false)
                        }}
                    >
                        <RxCross1 size={32} color={COLORS.black} />
                    </button>
                }
                label={"MENU"}
                append={
                    <div
                        style={{
                            backgroundColor: COLORS.Primary2,
                            border: 0,
                            borderRadius: 10,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: 15
                        }}
                    >
                        <RxCross1 size={32} color={COLORS.Primary2} />
                    </div>

                }
            />
            <div style={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: 'center',
                height: "100%",
                width: '100%',
                backgroundColor: COLORS.Primary1,

                // height: '100vh',
            }}>
                <div style={{
                    paddingTop: 80,
                    display: 'flex',
                    flexDirection: "column",
                    // justifyContent: "space-between",
                    // alignItems: 'center',
                    width: '100%',
                    backgroundColor: COLORS.Primary1,

                }}>
                    <button
                        className='button'
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            ...FONTS.body2,
                            paddingInline: 20,
                            letterSpacing: 2,
                            paddingBlock: 5,
                            color: Name === "Home" ? COLORS.black : COLORS.gray,
                            // borderRadius: SIZES.base,
                            width: !mobile ? '68%' : '78%',
                            alignSelf: !mobile ? "flex-start" : "center",
                            marginLeft: !mobile ? 50 : 0
                            // ...FONTS.body2
                        }}
                        onClick={() => {
                            setComp(React.lazy(() => import("../Home/Home")))
                            setName("Home")
                            setIsOpen(false)
                            setHead("INFC")
                        }}
                    >
                        HOME
                    </button>
                    <button
                        className='button'
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            ...FONTS.body2,
                            paddingInline: 20,
                            letterSpacing: 2,
                            paddingBlock: 5,
                            color: Name === "Upload" ? COLORS.black : COLORS.gray,
                            // borderRadius: SIZES.base,
                            width: !mobile ? '68%' : '78%',
                            alignSelf: !mobile ? "flex-start" : "center",
                            marginLeft: !mobile ? 50 : 0
                            // ...FONTS.body2
                        }}
                        onClick={() => {
                            setComp(React.lazy(() => import("../Home/Upload")))
                            setName("Upload")
                            setIsOpen(false)
                            setHead("UPLOAD")
                        }}
                    >
                        UPLOAD
                    </button>
                    <button
                        className='button'
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            ...FONTS.body2,
                            paddingInline: 20,
                            letterSpacing: 2,
                            paddingBlock: 5,
                            color: Name === "Add" ? COLORS.black : COLORS.gray,
                            width: !mobile ? '68%' : '78%',
                            alignSelf: !mobile ? "flex-start" : "center",
                            marginLeft: !mobile ? 50 : 0
                        }}
                        onClick={() => {
                            setComp(React.lazy(() => import("../Home/Add")))
                            setName("Add")
                            setIsOpen(false)
                            setHead("ADD")
                        }}
                    >
                        ADD
                    </button>
                    <button
                        className='button'
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            ...FONTS.body2,
                            paddingInline: 20,
                            letterSpacing: 2,
                            paddingBlock: 5,
                            color: Name === "Scan" ? COLORS.black : COLORS.gray,
                            width: !mobile ? '68%' : '78%',
                            alignSelf: !mobile ? "flex-start" : "center",
                            marginLeft: !mobile ? 50 : 0
                            // ...FONTS.body2
                        }}
                        onClick={() => {
                            setComp(React.lazy(() => import("../Home/Scan")))
                            setName("Scan")
                            setIsOpen(false)
                            setHead("SCAN")
                        }}
                    >
                        SCAN
                    </button>
                </div>
                <button
                    className='button'
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        ...FONTS.body2,
                        paddingInline: 20,
                        letterSpacing: 2,
                        paddingBlock: 5,
                        color: COLORS.red,
                        // borderRadius: SIZES.base,
                        backgroundColor: Name === "Home" ? COLORS.transparentPrimary : COLORS.transparent,
                        width: !mobile ? '68%' : '78%',
                        alignSelf: !mobile ? "flex-start" : "center",
                        marginLeft: !mobile ? 50 : 0,
                        marginBottom: 50
                        // ...FONTS.body2
                    }}
                    onClick={() => {
                        dispatch(Logout_Function())
                    }}
                >
                    LOGOUT
                </button>
            </div>

        </Modal >
    )
}