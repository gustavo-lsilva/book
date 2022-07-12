import './style.css'

export function Login() {
    function handleSubmit() {
        localStorage.setItem('user', 'nome do usuario')
        window.location.reload();
    }

    return (
        <div class="fundo">
            <div class="meio"> 
                <form id="for" className="formula01">
                    <label>E-mail</label>
                    <input id="email" type="text" />
                    <label>Senha</label>
                    <input id="senha" type="password" />
                    <button onClick={handleSubmit} type="button" id="button" className='button'>Acessar</button>
                </form>
            </div>
        </div>
    )
}