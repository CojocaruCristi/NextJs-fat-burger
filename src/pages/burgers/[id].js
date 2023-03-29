import React from "react"
import styles from '@/styles/Burgers.module.css'
import Image from "next/image";
export const getStaticPaths = async () => {

    const result = await fetch('http://localhost:5000/items');
    const data = await result.json();

    const idPaths = data.map((burger) => ({
        params: {id: burger.id},
    }))

    return {
        paths: idPaths,
        fallback:false
    }
}

export const getStaticProps = async (ctx) => {

    const burgerId = ctx.params.id;

    const result = await fetch(`http://localhost:5000/items/${burgerId}`);
    const data = await result.json();

    return {
        props:{
            burger: data
        }
    }
}

const Details = ({ burger }) => {
    return (
        <div className={styles.singleBurger}>
        <h1>{ burger.name }</h1>
          <div className={styles.imageContainer}>
            <Image 
              src={`${burger.image}`} 
              alt={`${burger.name}`} 
              width={200} 
              height={200} 
            />
          </div>
          <div>
            <p>{ burger.desc }</p>
        </div>
      </div>
    )
}


export default Details;