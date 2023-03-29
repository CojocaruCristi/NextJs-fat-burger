
import {FaHamburger} from 'react-icons/fa'
import Link from 'next/link';

const Header = () => {
    return(
        <header>
            <div>
                <FaHamburger />
            </div>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/aboutUs'} >About Us</Link>
                <Link href={'/reviews'} >Reviews</Link>
                <Link href={'/burgers'}>Burgers</Link>
            </nav>
        </header>
    )
}


export default Header;