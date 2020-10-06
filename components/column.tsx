const Column = (props) => (
    <div className="column">
       {props.children}
        <style>
            {`
            .column {
                flex: 50%;
            }`}
        </style>
    </div>
)

export default Column