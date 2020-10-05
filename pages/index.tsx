import Link from 'next/link';
import './main.css';

const Top = () => (
  <div>
    <div className="topnav">
      <Link href="/about">About</Link>
    </div>
    <Link href="/projects">Projects</Link>
    <Link href="/contact">Contact</Link>
    <h1 className="topnav">Home Page</h1>
    <div>Welcome...</div>
  </div>
)

export default Top;