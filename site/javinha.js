function Verificador() {
    const acesso = [
        { login: "Diego", senha: "123" },
        { login: "Robson", senha: "456" },
        { login: "JoaoWesley", senha: "789" }
    ];
    const login = document.getElementById("Login").value;
    const senha = document.getElementById("Senha").value;
    const mensagem = document.getElementById("textinho");

    if (login === "" || senha === "") {
        mensagem.innerHTML = "Verifique seu cadastro";
        return;
    }

    let encontrado = false;
    for (let i = 0; i < acesso.length; i++) {
        if (login === acesso[i].login && senha === acesso[i].senha) {
            mensagem.innerHTML = "Você esta cadastrado";
            encontrado = true;
            document.getElementById("bemVindoOverlay").classList.add("ativo")
            mensagem.innerHTML = ""
            window.location.href = "/site/segunda.html"


            break;
        }
    }
    if (!encontrado) {
        mensagem.innerHTML = "Você nâo esta cadastrado"

    }
}