import Link from 'next/link'

const Top = () => (
  <div>
    <Link href="/about">About</Link>
    <span>  </span>
    <Link href="/projects">Projects</Link>
    <Link href="/contact">Contact</Link>
    <h1>Home Page</h1>
    <div>Welcome...</div>
  </div>
)

export default Top;