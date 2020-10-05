import Nav from "./nav";


const Layout = (props) => {
    return (
        <div className="mainText">
            { props.children }
            <style>
                {`
                    .mainText {
                        text-align: center;
                        padding: 5px;
                        font-size: 60px;
                        font-family: courier;
                        font-weight: regular;
                        height: 100vh;
                        margin-top: 20%;
                    }
                
                `}
            </style>
        </div>
    )
}

export default Layout;