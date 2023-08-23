import {useState} from "react";
import {Header} from "./Header.jsx";
import {Counter} from "./Counter.jsx";
// Las funciones se pueden declarar en cualquier parte del código
// No es necesario declararla dentro del functional component
export const App = () => {
    const [counter, setCounter] = useState([]);
    const handleClick = () => {
        setCounter(counter + 1);
    };
    return (
        <>
            <Header title="Soy un Header!"/>
            <main className={'container mx-auto'}>
                <hr className={'my-4'}/>
                <Counter value={500}/>
            </main>

        </>
    )
}