import Styles from './Car.module.css'
// import { User } from './User/User'
function CarDisplay({id,name,type,year,price,image,handleBuy}){
    return(
        <>
            <div>
                <div className={Styles.carDisplay}>
                    <div>
                        <img src={image} />
                    </div>
                    <div>
                        <h3>{name}</h3>
                        <div>
                            <h5>{type}</h5>
                            <h5>{year}</h5>
                        </div>
                        <h3>{price}</h3>
                        <button onClick={()=>{handleBuy(id,name,price)}}>Buy Now</button>
                        {/* <p>{price}</p>
                        <button onClick={()=>{handleBuy(id)}}>Buy Now</button> */}
                    </div>
                </div>
                <div>
                    {/* <User/> */}
                </div>
            </div>
        </>
    )
}

export {CarDisplay}