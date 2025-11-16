import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
<header>
    <nav>
        <Link href='/'>
        <Image src ='/icons/logo.png' alt='logo' height={24} width={24} />
        <p>DevEvent</p>
        </Link>

        <ul>
        <Link href='/'>Home</Link>
        <Link href ='/'>Events</Link>
        <Link href='/'>Create Event</Link>
        </ul>
    </nav>
</header>
  )
}

export default Navbar


// import Link from "next/link";
// import Image from 'next/image';

// const Navbar = () =>{
// return(

// <header>
// <nav>
// <Link href='/'>
// <Image src = '/icons/logo.png' alt= 'logo' height={24} weight= {24}/>
// <p>DevEvent</p>
// <Link>

// <ul>
// <Link href ='/'>Home</Link>
// <Link href ='/'>Event</Link>
// <Link href ='/'>Create Event</Link>
// </ul>

// </nav>


// </header>



// )
// }

// export default Navbar;