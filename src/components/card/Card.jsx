import { useState } from "react"
import style from "./Card.module.css"

export default function Card({ img, title, price, setTotalCart, id, totalCart }) {
    const [fontSize, setFontSize] = useState(18); // Initial font size
    const [titleState, setTitle] = useState(title)
    let [amount, setAmount] = useState(0)

    const handleFontSizeChange = (newFontSize) => {
        setFontSize(newFontSize);
      };

    const titleStyle = {
      fontSize: `${fontSize}px`,
    };

    function handleInput(e) {
        setTitle(e.target.value)
        let newArr = [...totalCart]
        newArr[id] = {...newArr[id], title: e.target.value, price}
        setTotalCart(newArr)

    }

    function handleAmount(e) {
        let value = e.target.value
        value = value.replace('-', '');
        setAmount(value)
        let newArr = [...totalCart]
        if(value == 0){
            newArr[id] = ""
            
        } else {
            newArr[id] = {title: titleState, amount:value, img, price}
        }
        setTotalCart(newArr)
    }

    function addToCart() {
        let newArr = [...totalCart]
        // newArr[id] = ++amount
        newArr[id] = {title: titleState, amount: ++amount, img, price}

        setTotalCart(newArr)
        setAmount((prevState)=> ++prevState)
    }
    return (
        <div className={style.cardSection}>
            <div className={style.infoContainer}>

                <div className={style.imgContainer}><img src={img} alt="eucalip" /></div>
                <textarea style={titleStyle} spellCheck="false" type="text" className={style.title} value={titleState} onChange={(e) => handleInput(e)} />
                {/* <AiOutlineEdit className={style.icon}/> */}
                <input
                    type="range"
                    min="12"
                    max="36"
                    step="1"
                    value={fontSize}
                    onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}
                />
                <div className={style.cartContainer}>
                    <span className={style.price}>{`$${price}`}</span>
                    <input min="0" type="number" className={style.amount} value={amount} onChange={(e) => handleAmount(e)}/>
                    {/* <span className={style.amount} onChange={(e) => handleAmount(e)}> {amount} </span> */}
                </div>
                <span className={style.description}>Recharge your skin with the super energizing power of finally crushed tourmaline powder blended with natural complexion</span>
                <button onClick={() => addToCart()}>Add to cart</button>
                <span className={style.link}>Learn More</span>
            </div>
        </div>
    )
}