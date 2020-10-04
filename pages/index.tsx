import Link from 'next/link'

const Top = () => (
  <div>
    <div className="topnav">
      <Link href="/about">About</Link>
    </div>
    <Link href="/projects">Projects</Link>
    <Link href="/contact">Contact</Link>
    <h1>Home Page</h1>
    <div>Welcome...</div>
  </div>
)

export default Top;