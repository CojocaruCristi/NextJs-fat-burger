import React from "react"
import Head from "next/head";
import Burger from "../../../components/burger";

export const getStaticProps = async (ctx) => {

    const result = await fetch('http://localhost:5000/items');
    const data = await result.json();

    return {
        props:{
            burgers: data
        }
    }
}


const Burgers = ({burgers}) => {
    return (
        <>
            <Head>
                <title>Fat Burgers | Burgers</title>
            </Head>
            <div>
                <h1>
                    All sorts of Burgers
                </h1>
                {
                    burgers.map((burger) => <Burger {...burger} />)
                }
            </div>
        </>
    )
}


export default Burgers;