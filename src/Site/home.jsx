import React from "react";
import Menu from "./Home/menu"
import Banner from "./Home/banner"
import Features from "./Home/features"
import Sobre from "./Home/sobre"
import Footer from "./Home/footer"
import Testemunho from "./Home/testemunho";
import Especialidades from "./Home/especialidades";
import Briefing from "./Home/briefing";
function Site(){
    return <div>
        <Menu />
        <Banner />
        <Sobre />
        <Especialidades />
        <Features />
        <Briefing/>
        <Testemunho />
        <Footer />
    </div>
}
export default Site;