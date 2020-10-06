import Column from "./column";

const Row = () => (
    <div className="row">
       <Column>
       <img src="https://i.ibb.co/yq1Ftx7/Rectangle-3-1.png" alt=""/>
       </Column>
       <Column>
           
            <h1>Aileloreuan Joel Wellington Ohiwerei II</h1>
            
            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </p>
            </div>
       </Column>
        <style>
            {`
            .row{
                display: flex;
                justify-content:space-around;
                font-family: courier;
            }
            h1 {
                margin: 25px 100px 25px 500px;
                text-align: right;
              
                
            }
            p {
                margin: 25px 100px;
                text-align: right;
            }
            `}
        </style>
    </div>
)

export default Row