import React from 'react'
import Modal from 'react-modal';
import { COLORS, FONTS } from '../theme/Theme';
import { RxCross1 } from "react-icons/rx";
import '../Component/constant.css'
import DisplayCard from '../Component/DisplayCard';
import useMediaQuery from '../Component/useMediaQuery';
export default function HomeModel({
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
            <DisplayCard setIsOpen={setIsOpen} data={data}/>
        </Modal >
    )
}
