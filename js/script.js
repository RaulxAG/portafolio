window.onload = () => {
    let body = document.getElementsByTagName("body")[0];
    let sections = document.getElementsByTagName("section");
    let title = document.getElementsByClassName("title")[0];

    let btonEmail = document.getElementsByClassName("button--bg")[0];
    let ubi = document.getElementsByClassName("txtUbi")[0];
    let techs = document.getElementsByClassName("tech");

    let claro = document.getElementById("btnClaro");
    let oscuro = document.getElementById("btnOscuro");

    // Cambio de estilos para el modo claro
    claro.addEventListener('click', () => {
        claro.style.display = "none";
        oscuro.style.display = "block";
        title.style.color = "#1c1c1c";
        body.style.backgroundColor = "#eee";
        body.style.color = "#1c1c1c";
        btonEmail.style.color = "#1c1c1c";
        ubi.style.color = "#1c1c1c";
        ubi.style.backgroundColor = "#cecece";
        ubi.style.borderRadius = "10px";
        ubi.style.padding = "2px 5px";
        ubi.style.boxShadow = "0 0 5px 1.5px #cecece";
        [...techs].forEach(tech => {
            tech.style.backgroundColor = "#252525";
        });
        document.getElementsByTagName("header")[0].style.color = "#1c1c1c";
        [...sections].forEach(element => {
            element.style.color = "#2c2c2c";
            element.style.backgroundColor = "#b5b5b5";
            element.style.opacity = 1;
            element.style.boxShadow = "0 0 3px 1px black";
        })
    })

    // Cambio de estilos para el modo oscuro
    oscuro.addEventListener('click', () => {
        oscuro.style.display = "none";
        claro.style.display = "block";
        title.style.color = "#a6a6a6";
        body.style.backgroundColor = "#1c1c1c";
        btonEmail.style.color = "#a6a6a6";
        ubi.style.color = "#a6a6a6";
        ubi.style.background = "none";
        ubi.style.border = "none";
        ubi.style.boxShadow = "none";
        [...techs].forEach(tech => {
            tech.style.background = "none";
        });
        [...sections].forEach(element => {
            element.style.color = "#a6a6a6";
            element.style.backgroundColor = "#252525";
            element.style.boxShadow = "0 0 3px 1px #a6a6a6";
        });
    })
}