import imgFundo from '../../images/img_fundo.webp';
import './style.css'

function Apresentacao(){
    return  <section className="Features" id='apresentacao'>
    <div className='frase'>
      <h1>Somos a solução ideal para suas necessidades</h1>

      <h3>Proporcionamos automações mais eficientes, otimização de processos, insights em 
      tempo real e decisões mais precisas com nossas IAs.</h3>
    </div>
      <img src={imgFundo} alt="" />
  </section>
}
export default Apresentacao;