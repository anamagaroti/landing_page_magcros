import React from 'react';
import Logo from '../../images/logo.svg';
import './style.css'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { MdEmail} from 'react-icons/md';
// import { HashLink as Link } from 'react-router-hash-link;

function Rodape(){
    return <footer>
       <div className='body'>
       <section className='mapa'>
            <h2>Mapa</h2>
            <div className='links'>
                {/* <Link to="#apresentacao" >Apresentação</Link>
                <Link to="#sobre">Sobre</Link>
                <Link to="#produtos">Produtos</Link>
                <Link to="#garantia">Garantia</Link>
                <Link to="#faq">Faq</Link> */}
                <a href='https://google.com'>Apresentação</a>
                <a href='https://google.com'>Sobre</a>
                <a href='https://google.com'>Produtos</a>
                <a href='https://google.com'>Garantia</a>
                <a href='https://google.com'>Faq</a>
            </div>
       </section>
       <section className='redes-sociais'>
            <h2>Redes Sociais</h2>
            <div className='links'>
            <a href="http://facebook.com"> <FaFacebook/> Facebook</a>
            <a href="http://instagram.com"><FaInstagram/> Instagram</a>
            <a href="http://tiktok.com"><FaTiktok/> TikTok</a>
            </div>
       </section>
       <section className='contato'>
            <h2>Fale Conosco</h2>
           <div className='links'>
           <a href="http://email.com"><MdEmail/> duvidas@magcros.com</a>
           <a href="http://whatsapp.com"><FaWhatsapp/> +55 17 99670-0461</a>
           </div>
            <p>Atendimento humanizado, todos os dias da semana, das 09h00 às 17h00.</p>
       </section>
       <section className='info-empresa'>
            <img src={Logo} alt="" />
            <p>CNPJ: </p>
            <p>Rua 12, 306</p>
            <p>Turmalina, São Paulo - SP - CEP: 15755-038</p>
       </section>
       </div>
       <p>&copy; 2024 Magcros</p>
    </footer>
}
export default Rodape;