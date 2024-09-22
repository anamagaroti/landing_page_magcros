import Accordion from './components';
import './style.css'

function Faq(){
    return <section id='faq'>
        <div className='body-faq'>
            <div className='faq'>
                <p>FAQ</p>
                <h1>Restou alguma dúvida?</h1>
            </div>
            <div className='body-perguntas'>
                <div className='perguntas'>
                        <Accordion pergunta={'O que é a Magcros?'} resposta={'A Magcros é uma empresa de tecnologia inovadora que se especializa em soluções de inteligência artificial. Desenvolvemos produtos projetados para transformar a gestão de dados e fornecer suporte especializado para o setor jurídico, ajudando a otimizar processos e melhorar a eficiência.'}/>
                        <Accordion pergunta={'Quais são os principais produtos da Magcros?'} resposta={'Oferecemos três produtos principais: Um chat AI geral gratuito para pessoas e empresas, Uma AI personalizável para gestão de dados empresariais e uma AI jurídica que lê, analisa e resume contratos'}/>
                        <Accordion pergunta={'Como o chat AI geral pode beneficiar minha empresa?'} resposta={'Nosso chat AI geral, disponível gratuitamente, melhora a comunicação interna e o atendimento ao cliente, proporcionando suporte automatizado e eficiente sem custos adicionais.'}/>
                        <Accordion pergunta={'O que a AI para gestão de dados empresariais oferece?'} resposta={'Nossa AI para gestão de dados empresariais organiza, analisa e gera insights a partir dos dados da sua empresa, auxiliando na tomada de decisões e na otimização de processos internos.'}/>
                        <Accordion pergunta={'Como funciona a AI jurídica da Magcros?'} resposta={'A AI jurídica da Magcros analisa contratos, resume os principais pontos e responde a perguntas com base nos documentos fornecidos. Isso aumenta a eficiência e facilita o trabalho de advogados e departamentos jurídicos'}/>
                    </div>
                    <div className='perguntas'>
                        <Accordion pergunta={'Posso testar os produtos da Magcros antes de comprar?'} resposta={'Sim, você pode testar todos os nossos produtos por 30 dias de forma gratuita. Aproveite esse período para explorar nossas soluções e ver como elas podem beneficiar sua empresa.'}/>
                        <Accordion pergunta={'E se eu não estiver satisfeito com os produtos?'} resposta={'Garantimos sua satisfação. Se você não estiver satisfeito, poderá solicitar um reembolso integral dentro dos primeiros 30 dias após a compra. Basta entrar em contato com nosso suporte.'}/>
                        <Accordion pergunta={'Os produtos da Magcros são seguros?'} resposta={'Sim, a segurança dos seus dados é uma prioridade para nós. Utilizamos tecnologias avançadas e as melhores práticas de segurança para proteger suas informações.'}/>
                        <Accordion pergunta={'A Magcros oferece suporte ao cliente?'} resposta={'Sim, nossa equipe de suporte está disponível para ajudar com qualquer dúvida ou problema, garantindo que você tire o máximo proveito de nossas soluções.'}/>
                        <Accordion pergunta={'Como posso contratar os serviços da Magcros?'} resposta={'Para contratar nossos serviços, basta visitar nosso site. Lá você encontrará uma visão geral dos nossos produtos e um guia detalhado sobre o processo de contratação. Se precisar de assistência adicional, nossa equipe de suporte está disponível para ajudar.'}/>
                    </div>
            </div>
        </div>
    </section>
}
export default Faq;