import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='rodape-principal'>
            <div className='links'>
             <a href='https://www.linkedin.com/in/amanda-laís-757ba9209/'><img src='/imagens/in.png' alt='ícone do linkedin'/></a>    
             <a href='https://www.linkedin.com/in/amanda-laís-757ba9209/'><img src='/imagens/github.png' alt='ícone do github'/></a>    
             <a href='https://www.instagram.com/amnda.lsr/'><img src='/imagens/instagram.png' alt='ícone do instagram'/></a>    
            </div>
            <img src='/imagens/logo.png' alt='logo do Organo.'/>
            <h2>Desenvolvido por Amanda Laís.</h2>
        </footer>
    )
}

export default Rodape;