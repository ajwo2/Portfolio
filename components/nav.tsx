import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/">
            <a className ="home">Home</a>
        </Link>
        <Link href="/about">
            <a className="about">About</a>
        </Link>
        <Link href="/projects">
            <a className="projects">Projects</a>
        </Link>
        <Link href="/contact">
            <a className="contact">Contact</a>
        </Link>

        <style>
            {`
                div{
                    text-align: center;
                    padding: 5px;
                }
                a {
                    color: black;
                    color: black;
                    font-family: courier;
                    font-weight: bold;
                    font-size: 24px;
                    text-decoration: none;
                    padding: 10px 20px;
                    display: inline-block;
                    text-align: center;
                    
                }
            
            `}
        </style>
    </div>
);

export default Nav;