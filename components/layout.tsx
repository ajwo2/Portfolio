import Nav from "./nav";


const Layout = (props) => {
    return (
        <div>
        <div className="mainText">
            { props.children }
            <style>
                {`
                    .mainText {
                        text-align: center;
                        padding: 5px;
                        font-size: 60px;
                        height:80vh;
                        font-family: courier;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                       
                    }
                
                `}
            </style>
        </div>
        </div>
    )
}

export default Layout;