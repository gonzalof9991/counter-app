import {useState} from "react";
import PropTypes from "prop-types";

export const Counter = ({value}) => {
    const [counter, setCounter] = useState(value);
    const handleClick = (type) => {
        return () => {
            if (type === 'add') {
                setCounter(counter + 10);
            } else if (type === 'subtract') {
                setCounter(counter - 10);
            } else {
                setCounter(value);
            }
        }
    };
    return (
        <>
            <h1>CounterApp</h1>
            <h2 className={'font-bold my-4 text-indigo-500 text-2xl'}>
                {counter}
            </h2>
            <div className={'flex justify-start items-center gap-3'}>
                <button onClick={
                    handleClick('subtract')
                } type={'button'}
                        className={'bg-red-400  hover:bg-red-700 text-white font-bold py-2 px-4 rounded'}>
                    -10
                </button>
                <button onClick={
                    handleClick('')
                } type={'button'}
                        className={'bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'}>
                    Reset
                </button>
                <button onClick={
                    handleClick('add')
                } type={'button'}
                        className={'bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'}>
                    +10
                </button>
            </div>

        </>
    )
}

Counter.propTypes = {
    value: PropTypes.number
}

Counter.defaultProps = {
    value: 10
}