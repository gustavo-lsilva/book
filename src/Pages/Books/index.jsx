import "./booklist.css"

export function Books(props) {
    return (
        <div className="Conteiner">
            <ul className="list">
                <li 
                    style={
                        {background: props.cor}}
                >
                    <h1>{props.nome}</h1>
                </li>
                <li>
                    <h4>{props.author}</h4>
                </li>
                <li>
                    <p>{props.description}</p>
                </li>
                <li>
                    <span>{props.ano}</span>
                </li>
            </ul>   
        </div>
    )
}