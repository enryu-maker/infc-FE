import React from 'react'
import AddCard from '../Component/AddCard'
import { COLORS } from '../theme/Theme'
import { FiUser, FiUsers } from "react-icons/fi";
import useMediaQuery from '../Component/useMediaQuery';
import SingleModel from './AddModel/Single';
import MultipleModel from './AddModel/Multiple';
export default function Add() {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const [show2, setShow2] = React.useState(false)
  const [show1, setShow1] = React.useState(false)

  const data = [
    {
      name: "Add Single Student",
      icon: require('../assets/Image/user.png'),
      id: 1
    },
    {
      name: "Add Multiple Student",
      icon: require('../assets/Image/users.png'),
      id: 2
    },
  ]

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        backgroundColor: COLORS.Primary1,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: '100vw',
      }}
    >
      {
        show1 && <SingleModel setIsOpen={setShow1} modalIsOpen={show1} />
      }
      {
        show2 && <MultipleModel setIsOpen={setShow2} modalIsOpen={show2} />
      }
      {
        data.map((item, index) => {
          return (
            <AddCard
              key={index}
              name={item.name}
              icon={item.icon}
              setShow1={setShow1}
              setShow2={setShow2}
              id={item.id}
            />
          )
        })
      }

    </div>
  )
}
