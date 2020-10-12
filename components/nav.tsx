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
                    -webkit-transition: color 0.7s;
                    -moz-transition:    color 0.7s;
                    -ms-transition:     color 0.7s;
                    -o-transition:      color 0.7s;
                    transition:         color 0.7s;
                    
                }

                a:hover {
                    color: 	#a17f1a;
                }
            
            `}
        </style>
    </div>
);

export default Nav;