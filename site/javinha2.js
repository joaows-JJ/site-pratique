async function carregar(objeto){
    try {
        document.getElementById('conteudo').innerHTML="Carregando..."
        await new Promise (resolve => setTimeout (resolve,2000));

        let msgs = {
            "PLANOS": "Mensal R$ 189.90, trimestral R$ 129.90, anual R$ 109,90",
            "SOBRE" : "A Pratique é uma empresa que acredita no poder da dedicação e do aprendizado contínuo. Nosso objetivo é oferecer soluções e experiências que incentivem o desenvolvimento de habilidades e a transformação de potencial em resultados concretos. Valorizamos o processo de aperfeiçoamento constante, seja no âmbito profissional, artístico ou pessoal, pois sabemos que a verdadeira evolução vem da prática constante. Estamos aqui para apoiar quem busca crescer, aprender e alcançar seus objetivos com mais confiança ,",
            "UNIDADES": "Savassi, Belvedere, Horto, Venda nova,Ribeirão das neves   ",
            "CONTATO": " +55 31 3648 3376 ou acesse nosso instagram @redePratique_BH"
        };

        document.getElementById('conteudo').innerHTML= msgs[objeto];
    }
    catch {
        document.getElementById('conteudo').innerHTML = "Erro:" + erro.message;
        console.error("Erro capturado: ",erro);
    }
}
