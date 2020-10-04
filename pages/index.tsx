import Link from 'next/link'

const Top = () => (
  <div>
    <Link href="/about">About</Link>
    <Link href="/projects">Projects</Link>
    <Link href="/contact">Contact</Link>
    <h1 style="color:Tomato; font-family:courier">Home Page</h1>
    <div>Welcome...</div>
  </div>
)

export default Top;