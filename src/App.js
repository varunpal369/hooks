import React, { createContext } from "react";
import CompA from "./components/CompA";
//import Counter from "./reducer/Counter";
import InputChange from "./reducer/InputChange";
import ComponatReducer from "./data/ComponatReducer";


const FirstName = createContext();
const LastName = createContext();
const CityName = createContext();

function App(){
    return (
        <>
        <h1>This is App Demo</h1>
        <InputChange/>
        {/* <Counter/> */}
        <FirstName.Provider value={"Varun"}>
        <LastName.Provider value={"Pal"}>
        <CityName.Provider value={"Kanpur"}>
        <CompA/>
        </CityName.Provider>
        </LastName.Provider>
        </FirstName.Provider>

        <ComponatReducer/>
        </>
    )
}

export default App;
export { FirstName, LastName, CityName };
