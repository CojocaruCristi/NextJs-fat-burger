import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/Burgers.module.css'

const Burger = (props) => {
    const {
        id,
        image,
        name,
        desc
    } = props

    return (
        <Link href={`/burgers/${id}`} key={id} className={styles.burgerCard}>
            <div className={styles.imageContainer}>
              <Image 
                src={`${image}`} 
                alt={`${name}`} 
                width={200} 
                height={200}
                layout="responsive" 
                objectFit="cover"
              />
            </div>
            <div>
              <h3>{ name }</h3>
              <p>{ desc }</p>
            </div>
        </Link>
    )
}

export default Burger;