import React from 'react'
import AddCard from '../Component/AddCard'
import { COLORS } from '../theme/Theme'
import { FiUser,FiUsers } from "react-icons/fi";
import useMediaQuery from '../Component/useMediaQuery';
export default function Add() {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const data = [
    {
      name: "Add Single Student",
      icon: require('../assets/Image/user.png')
    },
    {
      name: "Add Multiple Student",
      icon: require('../assets/Image/users.png')
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
        data.map((item, index) => {
          return (
            <AddCard
              key={index}
              name={item.name}
              icon={item.icon}
            />
          )
        })
      }

    </div>
  )
}
