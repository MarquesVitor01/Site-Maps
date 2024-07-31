import React from "react";
import { motion } from "framer-motion";
import './especialidades.css'

function Especialidades() {
    return (
        <div id="sobre" className="container-v">
            <div className="title">
                <h2 className="text-h">Conheça nossa empresa</h2>
            </div>
            <div className="content">
                <img
                    src="https://th.bing.com/th/id/R.1768e48f9164d8cbc555c83752415332?rik=tOlo%2fj8lGPbCng&pid=ImgRaw"
                    alt=""
                    className="company-image"
                />
                <p className="text-p">
                    Somos uma empresa de Marketing Digital comprometida em impulsionar o seu sucesso online. Com uma equipe dedicada e expertise em estratégias digitais, estamos aqui para ajudar a potencializar o seu negócio e fazê-lo se destacar nos campos de busca. Através de técnicas avançadas de SEO (Search Engine Optimization), campanhas de publicidade eficazes e uma abordagem personalizada, trabalhamos para aumentar a visibilidade da sua marca e atrair mais clientes em potencial.

                    No mundo digital em constante evolução, entendemos a importância de estar à frente da concorrência. É por isso que oferecemos soluções inovadoras e adaptáveis, projetadas para alcançar resultados tangíveis e sustentáveis. Seja você uma startup ambiciosa ou uma empresa estabelecida, estamos aqui para ajudá-lo a alcançar novos patamares de sucesso.

                    Ao escolher nossa empresa, você não está apenas investindo em serviços de marketing; você está investindo no crescimento e no futuro do seu negócio. Deixe-nos ser seu parceiro de confiança no mundo digital e juntos construiremos uma presença online poderosa e impactante.                </p>
            </div>
        </div>
    );
}

export default Especialidades;