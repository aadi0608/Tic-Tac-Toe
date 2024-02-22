import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import crose_icon from "../Assests/x_image.png"
import circle_icon from "../Assests/o_image.png"
// import userEvent from '@testing-library/user-event';

let data = ["", "", "", "", "", "", "", "", ""];



const TicTacToe = () => {
    const formRef = useRef(null);
    let [count, setCouont] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    // let box_array = [box1.box2, box3, box4, box5, box6, box7, box8, box9]



    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${crose_icon}'>`
            data[num] = "X";
            setCouont(++count);
            // alert(count)
            console.log("count in ifffff :", count);
            console.log("data[num}}.............if", data[num]);
        }
        else {
            e.target.innerHTML = `<img src='${circle_icon}'>`
            data[num] = "O";
            setCouont(++count);
            console.log("count in elseeeeee :", count);
            console.log("data[num}}.............else", data[num]);

        }
        checkWin();
    }

    const won = (winner) => {
        setLock(true);
        // alert(winner)
        // console.log("winmer0", winner);
        // if (winner == "x") {
        //     titleRef.current.innerHTML = `Congratulations! You Win! <img src=${crose_icon}>`;
        //     alert("in side if loop..........")

        // }
        // else {
        //     titleRef.current.innerHTML = `Congratulations! You Win! <img src=${circle_icon}>`;
        //     alert("in side else loop..........")
        // }
        if (winner === "X") {
            titleRef.current.innerHTML = `Congratulations!! You Win! <img src=${crose_icon}>`
        }
        else {
            titleRef.current.innerHTML = `Congratulations!! You Win! <img src=${circle_icon}>`
        }
    }

    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5]);
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6]);
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7]);
        }

        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6]);
        }
    }
    const reset = () => {

        formRef.current.reset();
    }

    return (

        <div className='container'>
            <form ref={formRef} >
                <h1 className="title" ref={titleRef}>Tic Tac Toe Game in <span>React</span></h1>
                <div className="board">

                    <div className="row1">
                        <div className="Boxes" ref={box1} onClick={(e) => toggle(e, 0)}></div>
                        <div className="Boxes" ref={box2} onClick={(e) => toggle(e, 1)}></div>
                        <div className="Boxes" ref={box3} onClick={(e) => toggle(e, 2)}></div>
                    </div>
                    <div className="row2">
                        <div className="Boxes" ref={box4} onClick={(e) => toggle(e, 3)}></div>
                        <div className="Boxes" ref={box5} onClick={(e) => toggle(e, 4)}></div>
                        <div className="Boxes" ref={box6} onClick={(e) => toggle(e, 5)}></div>
                    </div>
                    <div className="row3">
                        <div className="Boxes" ref={box7} onClick={(e) => toggle(e, 6)}></div>
                        <div className="Boxes" ref={box8} onClick={(e) => toggle(e, 7)}></div>
                        <div className="Boxes" ref={box9} onClick={(e) => toggle(e, 8)}></div>
                    </div>

                </div>
                <button className="reset" onClick={reset} >Reset</button>
            </form>
        </div>
    )

}
export default TicTacToe;