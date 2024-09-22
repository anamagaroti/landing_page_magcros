import './style.css';
import medalha from '../../images/medalha.webp';
function Garantia(){
    return <section className='sessao-garantia' id='garantia'>
        <div className='garantia'>
            <img src={medalha} alt="medalha de prata com os escritos 30 dias" />
            <p>GARANTIA</p>
        </div>
        <div className='info'>
            <h1>Teste a Magcros por 30 dias Sem compromisso</h1>
            <p>Se você não estiver completamente satisfeito com a sua experiência 
                como participante do nosso ecossistema, nós também não estaremos.</p>
            <p>Por isso, oferecemos uma garantia de reembolso integral em até 30 dias após a compra. 
                Basta solicitar e devolveremos seu dinheiro sem complicações.</p>
        </div>
    </section>
}
export default Garantia;