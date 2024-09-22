import './style.css';
import imgPolvo from "../../images/polvo.png";
import imgJoao from "../../images/joao.jpg";
import imgPedro from "../../images/pedro.jpg";

function Sobre(){
    return <section id='sobre'>
        
        <div className='body-sobre'>
            <h1>NÓS</h1>
                <div className='images'>
                   <div>
                        <img src={imgJoao} alt="" />
                        <p>João Vitor - CEO</p>
                   </div>
                   <div>
                        <img src={imgPedro} alt="" />
                        <p>Pedro - CEO</p>
                   </div>
                </div>
            <h3>Na Magcros, acreditamos que a inovação e a tecnologia são a chave para o futuro.</h3>
        </div>
        <div className='quadro-sobre-polvo'>
           <div className='img-sobre'>
           <h1>Fle-xi-bi-li-da-de</h1>
           <h2>MAGCROS</h2>
            <img src={imgPolvo} alt="" id='polvo' />
            <p>"A flexibilidade para se adaptar rapidamente e adotar as melhores estratégias é o 
                caminho para o sucesso em qualquer contexto."</p>
           </div>
        </div>
       
    </section>
}
export default Sobre;