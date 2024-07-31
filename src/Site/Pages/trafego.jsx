import React, { useState } from "react";
import './trafego.css'
import '../Home/briefing.css';
import emailjs from 'emailjs-com';

function Trafego() {
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
    return (<>
        <section id="banner " className="banner-trafego">
            <button className="btn-voltar btn btn-danger" onClick={() => window.history.back()}>Voltar</button>
            <div className="content content-trafego">
                <h2>Aumente suas Vendas com Tráfego Pago</h2>
                <p>Alcance seu público-alvo e impulsione seu negócio online.</p>
                <a href="https://api.whatsapp.com/send?phone=%2B551139392301&data=ARBNkxwEQt1YQ1wqJR96AMx5gGeHa-dNEXQ7B9_OyPd66mw9axy2DQ_e0iuvTBAZIyQWDeuNTkYXzunvq5IV9eVXzKcwkX1XGWbYO4DGnFAKBVgSWoOmUeOAQbhSHGbQ38JqVnLPnXT2EprHJKvdlhn25g&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR2bnX6nd-4aiSPpJJzFBV7uJz8HofSNZh1pZGKidwXhU-WU0fQYRMlQr9o_aem_AbEmklhAkfz3iW3nbWM9BwzC-ORAq78ZeFHMi-rI6R9LqLks9FN1yvzFpbTYc1riM4iMRqhgb3Rr9h3fet4nqvZR" className="btn">
                    <button className="btn btn-trafego " aria-current="page" type="button" id="button-addon2">Entre em Contato</button>
                </a>
            </div>
        </section>
        <section id="beneficios" className="beneficios">
            <div className="content content-trafego">
                <h2>Benefícios do Tráfego Pago</h2>
                <div className="beneficios-container">
                    <div className="beneficio">
                        <img src="../../../img/captura03.jpeg" alt="Benefício 1" />
                    </div>
                </div>
                <div className="container-trafego">
                    <div className="card-trafego">
                        <i className="fa-solid fa-eye"></i>
                        <div className="content">
                            <h2>Maior Visibilidade</h2>
                            <p className="text-beneficios">Seja encontrado por clientes potenciais no momento certo.</p>
                        </div>
                    </div>
                    <div className="card-trafego">
                        <i className="fa-solid fa-bullseye"></i>
                        <div className="content">
                            <h2>Segmentação Eficiente</h2>
                            <p className="text-beneficios">Alcance seu público-alvo com precisão e aumente suas conversões.</p>
                        </div>
                    </div>
                    <div className="card-trafego">
                        <i className="fa-solid fa-chart-simple"></i>
                        <div className="content">
                            <h2>Análises Detalhadas</h2>
                            <p className="text-beneficios">Acompanhe o desempenho de suas campanhas e otimize seus resultados.</p>
                        </div>
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

    </>
    );
}

export default Trafego;