import Nav from "./nav";


const Layout = (props) => {
    return (
        <div>
            { props.children }
            <style>
                {`
                    div {
                        text-align: center;
                        padding: 5px;
                        font-size: 60px;
                        font-family: courier;
                        font-weight: regular;
                        height: 100vh;
                    }
                
                `}
            </style>
        </div>
    )
}

export default Layout;