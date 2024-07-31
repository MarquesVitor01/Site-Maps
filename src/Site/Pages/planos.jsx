import React from "react";
import './planos.css'

function Planos() {
    return (
            <section id="precos">
            <button className="btn-voltar btn btn-danger" onClick={() => window.history.back()}>Voltar</button>

                {/* <div className="text-center center ">
                    <div className="titulo">
                        <h1>Planos e Preços</h1>
                        <p>Comece sua avaliação.</p>
                    </div>
                </div> */}
                <div className="text-center center line-titulo">
                    <div className="titulo">
                        <h1>Planos de Divulgação</h1>
                        <p>Focado em alavancar a empresa dentro das redes sociais e no Google.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header bg-danger"><h1>Bronze</h1></div>
                                <div className="card-body">
                                    <h2>R$ 199,90</h2>
                                    <h3>Plano Trimestral</h3>
                                    <p>Suporte válido por 3 meses.</p>
                                    <p>Atualização ou criação de perfil na plataforma do Google Maps</p>
                                    <p>Inclusão de 10 fotos e 5 videos mensalmente</p>
                                    <p>Cartão digital interativo</p>
                                    <p>QR Code direcionador</p>
                                    <h3>Bônus</h3>
                                    <p>2 mil seguidores para o instagram</p>
                                    <p>Adesão para criação de um site profissional, pagamento apenas para manutenção/hospedagem de R$49,90 por mês</p>
                                    <a href="https://api.whatsapp.com/send?phone=%2B551139392301&data=ARAwU5wNPENHRSEoQrxiuOptGEaGSyvHLx1rbL6oo9rxeL-bRmHs6SDv4apAQMj6iIVHu2fcKlpHnnOQXcffvgZj_wyYy6xYi7OuCs_a9CEbe8IB8bgURwfxKArHIT76vXqUe5YU_Kyu-QIUrPtZuQXtTw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0hbUkIRI314XbsQeztn2heYCcESqNSllGMVWY1A6J0IdJZZHM5QZ4UeCo_aem_Af3PDQ9_GtWjj5bk1F5Owo_ldXZ2yRAxFv_5u5sijmflPKkkDyFwouBhlYe5mz_5s0mxM2eoLQd0SkF9-DoDRija" className="btn btn-lg btn-outline-primary">Entre em contato <i className="fa-brands fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header bg-secondary"><h1>Prata</h1></div>
                                <div className="card-body">
                                    <h2>R$ 299,90</h2>
                                    <h3>Plano Semestral</h3>
                                    <p>Suporte válido por 6 meses.</p>
                                    <p>Atualização ou criação de perfil na plataforma do Google Maps</p>
                                    <p>Inclusão de 20 fotos e 15 videos mensalmente</p>
                                    <p>Cartão digital interativo</p>
                                    <p>QR Code direcionador</p>
                                    <h3>Bônus</h3>
                                    <p>Uma semana de anuncio com o Google ADS</p>
                                    <p>5 mil seguidores para o instagram</p>
                                    <p>Adesão para criação de um site profissional, pagamento apenas para manutenção/hospedagem de R$49,90 por mês</p>
                                    <a href="https://api.whatsapp.com/send?phone=%2B551139392301&data=ARAwU5wNPENHRSEoQrxiuOptGEaGSyvHLx1rbL6oo9rxeL-bRmHs6SDv4apAQMj6iIVHu2fcKlpHnnOQXcffvgZj_wyYy6xYi7OuCs_a9CEbe8IB8bgURwfxKArHIT76vXqUe5YU_Kyu-QIUrPtZuQXtTw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0hbUkIRI314XbsQeztn2heYCcESqNSllGMVWY1A6J0IdJZZHM5QZ4UeCo_aem_Af3PDQ9_GtWjj5bk1F5Owo_ldXZ2yRAxFv_5u5sijmflPKkkDyFwouBhlYe5mz_5s0mxM2eoLQd0SkF9-DoDRija" className="btn btn-lg btn-outline-primary">Entre em contato <i className="fa-brands fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col lg-4">
                            <div className="card">
                                <div className="card-header bg-warning"><h1>Ouro</h1></div>
                                <div className="card-body">
                                    <h2>R$ 499,90</h2>
                                    <h3>Plano Anual</h3>
                                    <p>Suporte válido por 1 ano.</p>
                                    <p>Atualização ou criação de perfil na plataforma do Google Maps</p>
                                    <p>Inclusão de 40 fotos e 30 videos mensalmente</p>
                                    <p>Cartão digital interativo</p>
                                    <p>QR Code direcionador</p>
                                    <h3>Bônus</h3>
                                    <p>15 dias de anuncio com o Google ADS</p>
                                    <p>10 mil seguidores para o instagram</p>
                                    <p>Adesão para criação de um site profissional, pagamento apenas para manutenção/hospedagem de R$49,90 por mês</p>
                                    <a href="https://api.whatsapp.com/send?phone=%2B551139392301&data=ARAwU5wNPENHRSEoQrxiuOptGEaGSyvHLx1rbL6oo9rxeL-bRmHs6SDv4apAQMj6iIVHu2fcKlpHnnOQXcffvgZj_wyYy6xYi7OuCs_a9CEbe8IB8bgURwfxKArHIT76vXqUe5YU_Kyu-QIUrPtZuQXtTw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0hbUkIRI314XbsQeztn2heYCcESqNSllGMVWY1A6J0IdJZZHM5QZ4UeCo_aem_Af3PDQ9_GtWjj5bk1F5Owo_ldXZ2yRAxFv_5u5sijmflPKkkDyFwouBhlYe5mz_5s0mxM2eoLQd0SkF9-DoDRija" className="btn btn-lg btn-outline-primary">Entre em contato <i className="fa-brands fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center center line-titulo">
                    <div className="titulo">
                        <h1>Site</h1>
                        <p>Tornando sua empresa profissional e competitiva dentro do mercado online.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-4">
                            <div className="card card-site">
                                <div className="card-header bg-success"><h1>Suporte</h1></div>
                                <div className="card-body">
                                    <h1>Desenvolvimento do site</h1>
                                    <h2>R$ 499,90</h2>
                                    <p>Site profissional, conta com todas as informações da sua empresa. O site é composto pela história da empresa, seu portfólio, galerias, postagens e em caso de pedidos, componentes poderão ser adicionados.</p>
                                    <h1>Manutenções</h1>
                                    <h2>R$ 49,90</h2>
                                    <p>Em um prazo rotineiro de 30 a 30 dias será realizada a manutenção de rotina, caso seja necessário pode ser realizado até 3 manutenções mensais.</p>
                                    <a href="https://api.whatsapp.com/send?phone=%2B551139392301&data=ARAwU5wNPENHRSEoQrxiuOptGEaGSyvHLx1rbL6oo9rxeL-bRmHs6SDv4apAQMj6iIVHu2fcKlpHnnOQXcffvgZj_wyYy6xYi7OuCs_a9CEbe8IB8bgURwfxKArHIT76vXqUe5YU_Kyu-QIUrPtZuQXtTw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0hbUkIRI314XbsQeztn2heYCcESqNSllGMVWY1A6J0IdJZZHM5QZ4UeCo_aem_Af3PDQ9_GtWjj5bk1F5Owo_ldXZ2yRAxFv_5u5sijmflPKkkDyFwouBhlYe5mz_5s0mxM2eoLQd0SkF9-DoDRija" className="btn btn-lg btn-outline-primary">Entre em contato <i className="fa-brands fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Planos;