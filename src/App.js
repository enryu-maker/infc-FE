import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Init } from './Store/actions';
import Loading from './Component/Loading';
import Login from './Login/Login';
import Header from './Component/Header';
import { COLORS, SIZES } from './theme/Theme';
import { AiOutlineMenu } from "react-icons/ai";
import { SideNavModal } from './Component/SideNavModel';
import { Main } from './Main';

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(true);
  const [show, setShow] = React.useState(false)
  const [Name, setName] = React.useState("Home")
  const [head, setHead] = React.useState("INFC")
  const [Comp, setComp] = React.useState(React.lazy(() => import("./Home/Home")))
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  };
  React.useEffect(() => {
    init();
  }, [])
  const access = useSelector(state => state.Reducers.authToken)

  if (loading) {
    return (
      <div style={{ flex: 1, justifyContent: 'center' }}>
        <Loading />
      </div>
    )
  }
  else {
    return (
      <>
        <div style={{
          display: "flex",
          // height: "100vh",
          width: '100vw',
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.Primary1,
        }}>
          {
            access === null || access === "" ?
              <Login />
              :
              <>
                {
                  show && <SideNavModal setHead={setHead} modalIsOpen={show} Name={Name} setName={setName} setIsOpen={setShow} setComp={setComp} />
                }
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
                        setShow(true)
                      }}
                    >
                      <AiOutlineMenu size={32} color={COLORS.black} />
                    </button>
                  }
                  label={head}
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
                      <AiOutlineMenu size={32} color={COLORS.Primary2} />
                    </div>

                  }
                />
                <Main
                  Comp={Comp}
                />
              </>
          }
        </div>

      </>

    );
  }
}

export default App;