import Card from "../card/Card"
import style from "./landing.module.css"
import { cardInfoDB } from "./cardDB/cardDb.js"
import { useCallback, useEffect, useState } from "react"
export default function Landing({ totalCart, setTotalCart, setShowCart, showCart, products }) {

    const totalPrice = useCallback(() => {
        return totalCart.reduce((accumulator, currentValue) => {
            if (currentValue) {
                let productCost = parseInt(currentValue.amount) * parseInt(currentValue.price)
                return accumulator + parseInt(productCost);
            }
            return accumulator; // Es importante incluir un valor de retorno aquí si currentValue no cumple la condición.
        }, 0); // 0 es el valor inicial del acumulador
    }, [totalCart]);

    return (
        <section className={style.landing}>
            <div className={style.cardsContainer}>
                {cardInfoDB.map((cardInfo, index) => {
                    return (
                        <Card key={index} id={index} title={cardInfo.title} price={cardInfo.price} amount={"1"} img={cardInfo.img} setTotalCart={setTotalCart} totalCart={totalCart} />
                    )
                })}
            </div>
            {
                showCart && <>
                    <div className={style.cart}>
                        <div className={style.titles}>
                            {products() > 0 ?
                                <>
                                    <h3>Products on Cart:</h3>
                                    <h3>{`Total Price: ${totalPrice()}$`}</h3></>
                                :
                                <>
                                    <h3>Your cart is currently empty </h3>
                                    {/* <h3>Add some items to your cart and check out.</h3> */}
                                </>
                            }
                        </div>
                        <ul>
                            {totalCart.map((card, index) => {
                                if (card) {
                                    return (
                                        <li key={index}>
                                            <div className={style.cartInfo}>
                                                <span>
                                                    {`${card.title}`}
                                                </span>
                                                <span>
                                                    {`Quantity: "${card.amount}"`}
                                                </span>
                                                <span>
                                                    {`Unit Price: ${card.price}$`}
                                                </span>
                                            </div>
                                            <div className={style.imgContainer}><img src={card.img} alt={card.title} /></div>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                        <button onClick={() => setShowCart(false)}>{products() > 0 ? "Checkout" : "Add items"}</button>
                    </div>
                    <div className={style.filtro} onClick={() => setShowCart(false)}></div>
                </>
            }
        </section>
    )
}