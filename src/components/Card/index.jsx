import React from 'react'
import './Card.css'

export const Card = ({ data }) => {

    // 1-case

    // if (data.color) {
    // return <div style={{ background: data.color }} className="card">
    {/* {data.title} */ }
    {/* </div> */ }
    // } else {
    // return <div style={{ backgroundImage: `url(${data.img})` }} className="card">
    {/* <p>здесь должен быть рисунок</p> */ }
    {/* {data.title} */ }
    {/* </div> */ }
    // }

    // 2-case

    // switch (data.color) {
    // case null:
    // return <div style={{ backgroundImage: `url(${data.img})` }} className="card">
    {/* <p>здесь должен быть рисунок</p> */ }
    {/* {data.title} */ }
    {/* </div> */ }

    // default:
    // return <div style={{ background: data.color }} className="card">
    {/* {data.title} */ }
    {/* </div> */ }
    // }

    // 3-case
    // return <>
    {/* { */ }
    // data.color
    // ? <div style={{ background: data.color }} className="card">
    {/* {data.title} */ }
    {/* </div> */ }
    // : <div style={{ backgroundImage: `url(${data.img})` }} className="card">
    {/* <p>здесь должен быть рисунок</p> */ }
    {/* {data.title} */ }
    {/* </div> */ }
    // }
    {/* </> */ }

    // 4-case

    return <>
        {
            data.color && <div style={{ background: data.color }} className="card">
                {data.title}
            </div>
        }
        {
            data.color === null && <div style={{ backgroundImage: `url(${data.img})` }} className="card">
                <p>здесь должен быть рисунок</p>
                {data.title}
            </div>
        }
    </>
}