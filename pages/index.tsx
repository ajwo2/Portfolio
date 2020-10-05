import Link from 'next/link';
import Nav from '../components/nav';

const Top = () => (
  <div>
      <Nav/>

  
    <Link href="/about">About</Link>

    <Link href="/projects">Projects</Link>
    <Link href="/contact">Contact</Link>
    <h1 className="topnav">Home Page</h1>
    <div>Welcome...</div>
  </div>
)

export default Top;