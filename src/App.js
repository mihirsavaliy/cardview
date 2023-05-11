// import React, { createContext } from 'react'
// import Header from './ContextAPI/Header';
// import Reducer from './ContextAPI/Reducer'
import React from 'react'
// import Memoization from './ContextAPI/Memo/Memoization'
// import CallBackEx from './UseCallBack/CallBackEx'
import List from './List'

// const Menus = createContext();
// const Comp = createContext();
function App() {
  // let obj = [{name : 'Raj', age : 18},{name : 'Dev', age : '20'}]
  return (
    <>
        {/* <Menus.Provider value={"home"}>
          <Comp.Provider value={obj}>
            <Header/>
          </Comp.Provider>
        </Menus.Provider> */}
        {/* <Reducer /> */}
        {/* <Memoization /> */}
        {/* <CallBackEx /> */}
        <List />
    </>
  )
}
// export {Menus, Comp};
export default App;
