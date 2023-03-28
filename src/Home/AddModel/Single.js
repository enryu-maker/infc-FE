import React from 'react'
import Modal from 'react-modal';
import Header from '../../Component/Header';
import useMediaQuery from '../../Component/useMediaQuery';
import { COLORS, FONTS, SIZES } from '../../theme/Theme'
import { RxCross1 } from "react-icons/rx";
import TextInput from '../../Component/TextInput';
import DropDown from '../../Component/DropDown';
import Fileupload from '../../Component/Fileupload';
export default function SingleModel({
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
    const [iprn, setIprn] = React.useState("")
    const [name, setName] = React.useState("")
    const [prn, setPrn] = React.useState("")

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
                        <RxCross1 size={32} color={COLORS.black} />
                    </button>
                }
                label={"Single"}
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
                    display: "Grid",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    paddingBlock: 80,
                    overflowY:"scroll"

                }}>
                <TextInput
                    label={"IPRN"}
                    placeholder={"IPRN"}
                    type={"text"}
                />
                <TextInput
                    label={"PRN"}
                    placeholder={"PRN"}
                    type={"text"}
                />
                <TextInput
                    label={"NAME"}
                    placeholder={"Name"}
                    type={"text"}
                />
                <DropDown
                    label="Department"
                    options={[
                        { label: 'CSE', value: 'CSE' },
                        { label: 'ECE', value: 'ECE' },
                        { label: 'EEE', value: 'EEE' },
                        { label: 'MECH', value: 'MECH' },
                        { label: 'CIVIL', value: 'CIVIL' },
                        { label: 'IT', value: 'IT' },
                    ]}
                />
                <DropDown
                    label="Department"
                    options={[
                        { label: 'CSE', value: 'CSE' },
                        { label: 'ECE', value: 'ECE' },
                        { label: 'EEE', value: 'EEE' },
                        { label: 'MECH', value: 'MECH' },
                        { label: 'CIVIL', value: 'CIVIL' },
                        { label: 'IT', value: 'IT' },
                    ]}
                />
                <DropDown
                    label="Department"
                    options={[
                        { label: 'CSE', value: 'CSE' },
                        { label: 'ECE', value: 'ECE' },
                        { label: 'EEE', value: 'EEE' },
                        { label: 'MECH', value: 'MECH' },
                        { label: 'CIVIL', value: 'CIVIL' },
                        { label: 'IT', value: 'IT' },
                    ]}
                />
                <Fileupload/>
            </div>
            <button
                style={{
                    display : "flex",
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: isMobile ? 80 : "100%",
                    height: 50,
                    justifyContent : "center",
                    backgroundColor: COLORS.Primary2,
                    boxShadow: "1px 3px 1px #9E9E9E",
                    border: "none",
                }}
                onClick={() => {
                    alert("false")
                }}
            >
                <p style={{ color: COLORS.black, ...FONTS.body2, alignSelf: "center", letterSpacing: 1 }}>
                    ADD
                </p>
            </button>

        </Modal>
    )
}
