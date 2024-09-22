import './style.css';
import img1 from "../../images/1.webp";
import img2 from "../../images/2.webp";
import img3 from "../../images/3.webp";
import img4 from "../../images/4.webp";

function Produtos(){
    return <section id='produto'>
        <div className='produto'>
            <h1>PRODUTO</h1> 
            <h3>Experimente o MagChatter e aproveite a inteligência artificial de ponta para 
                transformar e gerenciar seus dados com eficiência.</h3>
            <img src={img1} alt="" />  
        </div>
        <div className='produto-quadro-one'> 
            <div className='produto-conteudo-one'>
                <h1>MagChatter</h1>
                <p>"MagChatter” potenciado pelas mais avançadas tecnologias de IA, como GPT-4 Turbo. 
                    O MagChatter otimiza a gestão de dados e se integra perfeitamente aos seus sistemas 
                    de WhatsApp, Facebook e Instagram, elevando a eficiência e a organização das suas 
                    interações. Além disso, ajuda a impulsionar suas vendas ao identificar oportunidades
                    de recuperação e reengajamento de clientes, maximizando o retorno sobre o 
                    investimento.
                </p>
                
            </div>
            <img src={img2} alt="" />
        </div>
        <div className='produto-quadro'>
            <img src={img3} alt="Tela de envio das mensagens" />
            <div className='produto-conteudo'>
                <h1>O sistema de mensagens "MagChatter"</h1>
                <p>Revoluciona a comunicação em plataformas como WhatsApp, Facebook e 
                    Instagram, oferecendo uma gestão de interações mais eficiente e organizada. 
                    Utilizando tecnologias avançadas de IA, o sistema coleta e organiza todas as 
                    mensagens e dados, fornecendo informações detalhadas que ajudam a otimizar suas 
                    estratégias de comunicação.
                </p>
                <p>Embora a IA não faça a análise direta, ela facilita a coleta e a estruturação das 
                    informações, permitindo que você obtenha insights valiosos e tome decisões mais 
                    informadas. Com funcionalidades exclusivas como pastas e fluxos personalizados.
                </p>
            </div>
        </div>
        <div className='produto-quadro-passo-a-passo'>       
            <div className='produto-conteudo-passo-a-passo'>
                <h1>Veja como nossas funcionalidades principais podem facilitar e otimizar seu trabalho 
                    diário. Nossas soluções são projetadas para serem intuitivas e eficazes.</h1>
            </div>
            <div className='produto-img'>
                <div className='produto-img-passo-a-passo'>
                    <img src={img4} alt="Tela de atendentes" />
                    <div className='produto-texto-passo-a-passo'>
                        <h4>Inicie conversas diretamente do seu painel de controle.</h4>
                        <p>Automatize e gerecie suas interações de forma intuitiva</p>
                    </div>
                </div>
                <div className='produto-img-passo-a-passo'>
                    <img src={img4} alt="Tela de atendentes" />
                    <div className='produto-texto-passo-a-passo'>
                        <h4> Obtenha todos os dados de respostas instantâneas com nossa Inteligência Artifial.</h4>
                        <p>Maximize a eficiência com presets de mensagens pré-configurados.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
}
export default Produtos;