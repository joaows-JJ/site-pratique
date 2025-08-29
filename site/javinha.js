function Verificador() {
    const acesso = [
        { login: "Diego", senha: "123" },
        { login: "Robson", senha: "456" },
        { login: "JoaoWesley", senha: "789" }
    ];
    const login = document.getElementById("Login").value;
    const senha = document.getElementById("Senha").value;
    const mensagem = document.getElementById("textinho");
    let encontrado = false;

    if (login === "" || senha === "") {
        mensagem.innerHTML = "Verifique seu cadastro";
        return;
    }

    for (let i = 0; i < acesso.length; i++) {
        if (login === acesso[i].login && senha === acesso[i].senha) {
            encontrado = true;
            mensagem.innerHTML = "Você esta cadastrado";
            document.getElementById("bemVindoOverlay").classList.add("ativo")
            mensagem.innerHTML = ""
            window.location.href = 'http://127.0.0.1:5500/segunda.html'
        }
    }
    if (!encontrado) {
        mensagem.innerHTML = "Você nâo esta cadastrado"

    }
}
