import React, { useRef, useState } from 'react';
import './TicTacToe.css';
import crose_icon from "../Assests/x_image.png";
import circle_icon from "../Assests/o_image.png";

const TicTacToe = () => {
    const initialData = ["", "", "", "", "", "", "", "", ""];
    const [data, setData] = useState(initialData);
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);

    const formRef = useRef(null);
    const titleRef = useRef(null);

    const toggle = (e, num) => {
        if (lock || data[num] !== "") return;

        const newData = data.slice();
        newData[num] = count % 2 === 0 ? "X" : "O";
        setData(newData);
        setCount(count + 1);

        e.target.innerHTML = `<img src='${count % 2 === 0 ? crose_icon : circle_icon}'>`;

        checkWin(newData);
    };

    const checkWin = (newData) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const [a, b, c] of winningCombinations) {
            if (newData[a] && newData[a] === newData[b] && newData[a] === newData[c]) {
                won(newData[a]);
                return;
            }
        }
    };

    const won = (winner) => {
        setLock(true);
        titleRef.current.innerHTML = `Congratulations! You Win! <img src=${winner === "X" ? crose_icon : circle_icon}>`;
    };

    const reset = () => {
        setData(initialData);
        setCount(0);
        setLock(false);
        titleRef.current.innerHTML = 'Tic Tac Toe Game in <span>React</span>';
        Array.from(formRef.current.getElementsByClassName('Boxes')).forEach(box => {
            box.innerHTML = '';
        });
    };

    return (
        <div className='container'>
            <div className="row">
                <form ref={formRef}>
                    <h1 className="title" ref={titleRef}>Tic Tac Toe Game in <span>React</span></h1>
                    <div className="board">
                        <div className="row1">
                            <div className="Boxes" onClick={(e) => toggle(e, 0)}></div>
                            <div className="Boxes" onClick={(e) => toggle(e, 1)}></div>
                            <div className="Boxes" onClick={(e) => toggle(e, 2)}></div>
                        </div>
                        <div className="row2">
                            <div className="Boxes" onClick={(e) => toggle(e, 3)}></div>
                            <div className="Boxes" onClick={(e) => toggle(e, 4)}></div>
                            <div className="Boxes" onClick={(e) => toggle(e, 5)}></div>
                        </div>
                        <div className="row3">
                            <div className="Boxes" onClick={(e) => toggle(e, 6)}></div>
                            <div className="Boxes" onClick={(e) => toggle(e, 7)}></div>
                            <div className="Boxes" onClick={(e) => toggle(e, 8)}></div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='row'>
                <button className="reset" onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default TicTacToe;


