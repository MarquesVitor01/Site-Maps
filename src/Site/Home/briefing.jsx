import React, { useState } from "react";
import './briefing.css';
import emailjs from 'emailjs-com';

function Briefing() {
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
        <div className="briefing-container">
            <h1 className="testemunho-title2">Realize um orçamento!</h1>
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
    );
};

export default Briefing;