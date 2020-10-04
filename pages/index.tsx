import Link from 'next/link'

const Top = () => (
  <div>
    <Link href="/about">About</Link>
    <Link href="/projects">Projects</Link>
    <Link href="/contact">Contact</Link>
    <div>Welcome...</div>
  </div>
)

export default Top;