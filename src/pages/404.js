import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from '@/styles/404.module.css'
const PageNotFound = () => {
    const [seconds, setSeconds] = useState(4);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/')
        }, 4000)

        const interval = setInterval(() => {
            setSeconds((prevState) => --prevState);
        }, 1000)

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    },[])


    return (
        <div className="not-found"> 
            <h1>Ups..</h1>
            <h2>There is no such page!</h2>
            <p>Going to <Link href={'/'}>Home Page</Link> in <span className={styles.seconds}>{seconds}</span> seconds</p>
        </div>
    )
}

export default PageNotFound;