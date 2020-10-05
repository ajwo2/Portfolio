import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="">
            <a className ="home">Home</a>
        </Link>
        <Link href="/about">
            <a className="about">About</a>
        </Link>
    </div>
);

export default Nav;