import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import burgerPic from './../../public/fatburger.png';
const inter = Inter({ subsets: ['latin'] })






export default function Home() {
  return (
    <>
    <Head>
      <title>Fat Burgers | Home</title>
    </Head>
    <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>Home Page</h1>
        <div className={styles.mainImage} >
          <Image src={burgerPic} alt={'fat burger'} width={400} height={300} />
        </div>
        <p className={styles.text}>What is the perfect burger? Fresh lettuce, soft buns, juicy meat. You can argue about other components of the filling, because this is a matter of taste.</p>
        <p className={styles.text}>There are a couple of other factors that affect appetite: prices, quality of service, the right atmosphere of the establishment.</p>
        <Link href={"/burgers/"} className={styles.btn}>
          All burgers
        </Link>
    </div>
    </>
  )
}
