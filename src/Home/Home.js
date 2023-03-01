import React from 'react'
import DisplayCard from '../Component/DisplayCard'
import HomeCard from '../Component/HomeCard'
import { COLORS } from '../theme/Theme'
import useMediaQuery from '../Component/useMediaQuery'
import HomeModel from './HomeModel'
export default function Home() {
    const isMobile = useMediaQuery('(max-width: 600px)')
    const [Data, setData] = React.useState([])
    const [show, setShow] = React.useState(false)
    function closeModal() {
        setShow(false);
    }
    let subtitle;
    function afterOpenModal() {
        subtitle.style.color = COLORS.Primary1;
    }
    const data = [
        {
            id: 1,
            name: "SE",
            count: 10,
            total: 20,
            pattern:2019,
            data: [{
                id: 1,
                name: "Akif",
                prn: 10,
                iprn: 20,
                department: "IT",
                year: "SE",
                pattern:2019,
                tag:false
            },
            {
                id: 2,
                name: "Kaif",
                prn: 10,
                iprn: 20,
                department: "IT",
                year: "SE",
                pattern:2019,
                tag:true
            }]
        },
        {
            id: 2,
            name: "TE",
            count: 10,
            total: 20,
            pattern:2019,

        },
        {
            id: 3,
            name: "BE",
            count: 10,
            total: 20,
            pattern:2019,

        },
    ]
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: COLORS.Primary1,
            justifyContent: "space-evenly",
            // alignItems:"flex-start",
            // height: "100vh",
            width: '100vw',
        }}>
            {
                show && <HomeModel setIsOpen={setShow} modalIsOpen={show} data={Data}/>
            }
            <div
                style={{
                    display: "flex",
                    flexDirection: isMobile?"column": "row",
                    backgroundColor: COLORS.Primary1,
                    // justifyContent: "center",
                    // alignItems: "center",
                }}
            >
                {
                    data.map((item) => {
                        return (
                            <HomeCard
                                key={item.id}
                                name={item.name}
                                count={item.count}
                                total={item.total}
                                setData={setData}
                                data = {item.data}
                                setShow={setShow}
                                pattern={item.pattern}
                            />
                        )
                    }
                    )
                }
            </div>
            </div>
            )
}
