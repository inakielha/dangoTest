import { useEffect, useState } from "react"
import dangoLogo from "../../assets/logo-violeta.png"
import style from "./Navbar.module.css"
import { AiOutlineShoppingCart } from "react-icons/ai"


export default function Navbar({setShowCart, showCart, products}) {
    const [scroll, setScroll] = useState(false)
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setScroll(true)
            } else setScroll(false)
        })
    }, [])

    return (
        <>
            <nav className={style.nav} style={scroll ? { backgroundColor: "#ffffff", boxShadow: "0px 2px 4px #5c1dff" } : {}}>
                <div className={style.infoContainer}>
                    <div className={style.logoContainer}><img src={dangoLogo} alt="logoDango" /></div>
                    <div className={style.iconContainer}>
                        {
                            products() > 0 && <span>{products()}</span>
                        }
                        <AiOutlineShoppingCart onClick={()=> setShowCart(!showCart)} style={{ cursor: "pointer" }} size={"2em"} />
                    </div>
                </div>
            </nav>
            <div className={style.navSpace}></div>
        </>
    )
}