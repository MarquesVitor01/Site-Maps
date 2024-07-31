import React, { useState } from "react";
import "./sites.css";
import '../Home/briefing.css';
import emailjs from 'emailjs-com';

function Sites() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Configuração para o envio do email usando o serviço de emailjs
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs.send(
            'service_9fer5al',
            'template_omvbb2y',
            templateParams,
            'DkZxCeqcBJqtQF_H_'
        )
            .then(() => {
                setSent(true);
            })
            .catch((err) => console.error('Failed to send email. Error:', err));
    };
    return (
        <section id="sites" className="sites-section">
            <div className="container">
                <button className="btn-voltar btn btn-danger" onClick={() => window.history.back()}>Voltar</button>
                <div className="section-content">
                    <h1 className="section-title">Sites</h1>
                    <p className="section-subtitle">Confira nossos trabalhos, esses são os ultimos sites que acabaram de ser criados. Você pode acessa-los tambem a partir do clique para verificar sua qualidade. Nossa equipe se dedica 100% no desenvolvimento dos projetos, visamos sua felicidade.</p>
                    <div className="gallery">
                        <div className="gallery-item">
                            <img src="../../../img/tela01 (1).png" alt="Imagem 1" className="gallery-image" />
                            <div className="overlay">
                                <h3>Top Veiculos</h3>
                                <a href="https://topveiculos.shop">
                                    <button aria-current="page" className=" btn btn-nav" type="button" id="button-addon2">
                                        <i className="fa-solid fa-share"></i><b> Visitar</b>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src="../../../img/tela01 (2).png" alt="Imagem 2" className="gallery-image" />
                            <div className="overlay">
                                <h3>Baterias Jr</h3>
                                <a href="https://bateriasjr.shop">
                                    <button aria-current="page" className=" btn btn-nav" type="button" id="button-addon2">
                                        <i className="fa-solid fa-share"></i><b> Visitar</b>
                                    </button>
                                </a>                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src="../../../img/tela01 (3).png" alt="Imagem 2" className="gallery-image" />
                            <div className="overlay">
                                <h3>Bijoux e Acessórios Kixiki</h3>
                                <a href="https://kixiki.shop">
                                    <button aria-current="page" className=" btn btn-nav" type="button" id="button-addon2">
                                        <i className="fa-solid fa-share"></i><b> Visitar</b>
                                    </button>
                                </a>                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src="../../../img/tela01 (4).png" alt="Imagem 2" className="gallery-image" />
                            <div className="overlay">
                                <h3>Pousada Vital</h3>
                                <a href="https://pousadavital.shop">
                                    <button aria-current="page" className=" btn btn-nav" type="button" id="button-addon2">
                                        <i className="fa-solid fa-share"></i><b> Visitar</b>
                                    </button>
                                </a>                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src="../../../img/tela01 (5).png" alt="Imagem 2" className="gallery-image" />
                            <div className="overlay">
                                <h3>Clinica da Mulher</h3>
                                <a href="https://clinicadamulher.shop">
                                    <button aria-current="page" className=" btn btn-nav" type="button" id="button-addon2">
                                        <i className="fa-solid fa-share"></i><b> Visitar</b>
                                    </button>
                                </a>                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src="../../../img/tela01 (6).png" alt="Imagem 2" className="gallery-image" />
                            <div className="overlay">
                                <h3>Hotel Colatina</h3>
                                <a href="https://colatinahotel.shop">
                                    <button aria-current="page" className=" btn btn-nav" type="button" id="button-addon2">
                                        <i className="fa-solid fa-share"></i><b> Visitar</b>
                                    </button>
                                </a>                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="section-content">
                    <h1 className="section-title">Paginas do Google</h1>
                    <p className="section-subtitle">Confira algumas páginas de sucesso. As páginas bem desenvolvidas e devidamente atualizadas dentro do Google Maps, tem o potencial de alavancar sua marca. Aqui alguns exemplos disso:</p>

                    <div className="gallery">

                        <div className="gallery-item">
                            <img src="../../../img/maps (1).png" alt="Imagem 2" className="gallery-image" />
                            <div className="overlay">
                                <h3>Tropical Motel</h3>
                                <a href="https://www.google.com.br/maps/place/Tropical+Motel/@-24.4800836,-48.5261481,8z/data=!4m13!1m2!2m1!1shotel+tropical!3m9!1s0x94cfaab4fe9899f5:0xa24c944f6bf29729!5m2!4m1!1i2!8m2!3d-23.5911799!4d-46.8272692!15sCg5ob3RlbCB0cm9waWNhbFoQIg5ob3RlbCB0cm9waWNhbJIBCmxvdmVfaG90ZWyaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUkxhSEJZYWtoUkVBReABAA!16s%2Fg%2F1tdzxw9c?entry=ttu">
                                    <button aria-current="page" className=" btn btn-nav" type="button" id="button-addon2">
                                        <i className="fa-solid fa-share"></i><b> Visitar</b>
                                    </button>
                                </a>                                    </div>
                        </div>
                        <div className="gallery-item">
                            <img src="../../../img/maps (2).png" alt="Imagem 2" className="gallery-image" />
                            <div className="overlay">
                                <h3>Borracharia do Pereira</h3>
                                <a href="https://www.google.com.br/maps/place/BORRACHARIA+PEREIRA+E+FILHO+(Atendemos+em+domicilio,Borracharias,Chaveiros,Pneus+Remolds)/@-23.6926806,-46.7836441,17z/data=!4m6!3m5!1s0x94ce525ef8459195:0x16c6174065448729!8m2!3d-23.6926356!4d-46.7836283!16s%2Fg%2F11gfmcwbyw?entry=ttu">
                                    <button aria-current="page" className=" btn btn-nav" type="button" id="button-addon2">
                                        <i className="fa-solid fa-share"></i><b> Visitar</b>
                                    </button>
                                </a>                                    </div>
                        </div>
                        <div className="gallery-item">
                            <img src="../../../img/maps (3).png" alt="Imagem 2" className="gallery-image" />
                            <div className="overlay">
                                <h3>Berude Vidraçaria</h3>
                                <a href="https://www.google.com.br/maps/place/Berude+vidra%C3%A7aria/@-20.3469726,-40.2976708,17z/data=!3m1!4b1!4m6!3m5!1s0xb8179a6523584b:0xebdede39612e4e50!8m2!3d-20.3469726!4d-40.2950959!16s%2Fg%2F11py_b5c2v?entry=ttu">
                                    <button aria-current="page" className=" btn btn-nav" type="button" id="button-addon2">
                                        <i className="fa-solid fa-share"></i><b> Visitar</b>
                                    </button>
                                </a>                                    </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="section-content">
                    <h1 className="section-title">Cartões Digitais</h1>
                    <p className="section-subtitle">Confira nosso modelo de cartão digital, uma ferramenta muito util e versatil. Uma maneira de compartilhar sua marca para quem e onde quiser, todo conteudo da sua empresa com facil acesso.</p>
                    <div className="gallery">

                        <div className="gallery-item">
                            <img src="../../../img/t02.png" alt="Imagem 2" className="gallery-image" />
                            <div className="overlay">
                                <h3>Grupo Maps</h3>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src="../../../img/t03.png" alt="Imagem 2" className="gallery-image" />
                            <div className="overlay">
                                <h3>Design Plano</h3>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src="../../../img/t04.png" alt="Imagem 2" className="gallery-image" />
                            <div className="overlay">
                                <h3>Chacara Betel</h3>
                            </div>
                        </div>
                        {/* Adicione mais itens de galeria conforme necessário */}
                    </div>
                </div>
            </div>
            <div className="briefing-container">
            <h1>Realize um orçamento!</h1>
            {sent ? (
                <p className="success-message">Obrigado pela sua mensagem</p>
            ) : (
                <form onSubmit={handleSubmit} className="briefing-form">
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            required
                            placeholder="insira seu nome."
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            required
                            placeholder="Insira seu e-mail para o retorno do contato!"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensagem:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="form-control"
                            required
                            placeholder="Informe aqui os serviços que tem interesse e como gostaria que eles fossem realizados. Vamos retornar o contato!"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-env">Enviar</button>
                </form>
            )}
        </div>
        </section>
    );
}

export default Sites;