import React from "react";
import styles from './Product.module.scss';
import iphone from "./assets/iphone.jpg";
import watch from "./assets/watch.jpg";
import nofoto from "./assets/no-foto.jpg";

function Product(props){

    const remove = () => {
        props.onRemove(props.id)
    }

    let image = nofoto;
    if(props.name.toLowerCase() === 'iphone'){image = iphone};
    if(props.name.toLowerCase() === 'watch'){image = watch};
    
    return (
        <div className={styles.product}>
           <div className={styles.img}>
                <img src={image} />
            </div>


            <div className={styles.body}>
                <h1 className={styles.title}>{props.name}</h1>
                <div className={styles.price}>{props.price}</div>
            </div>
            <button onClick={remove} type="button">Remove</button>
        </div>
    )
}

export default Product;