import React, { useState } from 'react'
import Squar from './Squar'

const Board = () => {
    const [state, setstate] = useState(Array(9).fill(null));
    const [isXTurn, setisXTurn] = useState(true);


    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {

                return state[a];

            }
        }
        return false;
    };
    const isWinner = checkWinner();

    const handleClick = (index) => {
        if(state[index] !== null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "0";
        setstate(copyState);
        setisXTurn(!isXTurn);
    }
    const handleResat = () => {
        setstate(Array(9).fill(null))
    }
    return (
        <div className='container p-5' >
            <div className="board-container">
                {isWinner ? (
                    <h2>{isWinner} won the game
                        <button className='btn btn-primary m-5' onClick={handleResat}>Try Agan</button>
                    </h2>
                ) : (
                    <>
                        <h4 className='text-center'>Player {isXTurn ? 'X' : '0'} please move</h4>
                        <div className='board-row'>
                            <Squar onClick={() => handleClick(0)} value={state[0]}/>
                            <Squar onClick={() => handleClick(1)} value={state[1]} />
                            <Squar onClick={() => handleClick(2)} value={state[2]} />
                        </div>
                        <div className='board-row'>
                            <Squar onClick={() => handleClick(3)} value={state[3]} />
                            <Squar onClick={() => handleClick(4)} value={state[4]} />
                            <Squar onClick={() => handleClick(5)} value={state[5]} />
                        </div>
                        <div className='board-row'>
                            <Squar onClick={() => handleClick(6)} value={state[6]} />
                            <Squar onClick={() => handleClick(7)} value={state[7]} />
                            <Squar onClick={() => handleClick(8)} value={state[8]} />
                        </div>
                    </>
                )}

            </div>

        </div>
    )
}

export default Board