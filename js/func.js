$(document).ready(function () {
    var eCPU = new Array();
    eCPU[0] = "PEDRA";
    eCPU[1] = "PAPEL";
    eCPU[2] = "TESOURA";
    eCPU[3] = "SPOCK";
    eCPU[4] = "LAGARTO";
    var winSeguidas = parseInt("0");

    $(".btnPedra").click(function () {
        var x = Math.floor((Math.random() * 5) + 1) - 1;
        if (eCPU[x] == "PEDRA") {
            $(".empate").get(0).play();
            $("span#R-t").html("Empate!!!");
            $("span#R-d").html("Vamos de novo!");
            $("div.message").fadeToggle();
        }
        if (eCPU[x] == "LAGARTO") {
            $(".win").get(0).play();
            $("span#R-t").html("Você venceu esta rodada!");
            $("span#R-d").html("Pedra esmaga lagarto!");
            $("div.message").fadeToggle();
            winSeguidas++;
        }

        if (eCPU[x] == "TESOURA") {
            $(".win").get(0).play();
            $("span#R-t").html("Você venceu esta rodada!");
            $("span#R-d").html("Pedra quebra tesoura!");
            $("div.message").fadeToggle();
            winSeguidas++;
        }
        if (eCPU[x] == "SPOCK") {
            $(".derrota").get(0).play();
            $("span#R-t").html("Você perdeu esta rodada!");
            $("span#R-d").html("Spock vaporiza pedra!");
            $("div.message").fadeToggle();
            winSeguidas--;
        }
        if (eCPU[x] == "PAPEL") {
            $(".derrota").get(0).play();
            $("span#R-t").html("Você perdeu esta rodada!");
            $("span#R-d").html("Papel cobre pedra!");
            $("div.message").fadeToggle();
            winSeguidas--;
        }
        if (winSeguidas == 0) {
            $("#CPU").attr("src", "img/cpu1.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "10%");
            $("div.progress-bar span").html("10%");
        }
        if (winSeguidas == 1) {
            $("#CPU").attr("src", "img/cpu2.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "28%");
            $("div.progress-bar span").html("28%");
        }
        if (winSeguidas == 2) {
            $("#CPU").attr("src", "img/cpu3.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "45%");
            $("div.progress-bar span").html("45%");
        }
        if (winSeguidas == 3) {
            $("#CPU").attr("src", "img/cpu4.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "71%");
            $("div.progress-bar span").html("71%");
        }
        if (winSeguidas == 4) {
            $("#CPU").attr("src", "img/cpu5.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "97%");
            $("div.progress-bar span").html("97%");
        }
        if (winSeguidas == 5) {
            $("section").hide();
            $("small.result").html("Você venceu!");
            $("p.text-result").html("Você é f*d*. Caraca... parabéns, sério mesmo... Como você conseguiu?... Loucura loucura loucura...");
            $("#Resultado").fadeToggle();
            $(".melody").get(0).pause();
            winSeguidas = 0;
            $("#CPU").attr("src", "img/cpu1.gif");
            $("div.progress-bar").css("width", "10%");
            $("div.progress-bar span").html("10%");
        }
        if (winSeguidas < 0) {
            $("section").hide();
            $("small.result").html("Você perdeu!");
            $("p.text-result").html("Infelizmente... você é só mais um. Tenta de novo. Vai que vai. Desistir é prós fracos! </br>Dica: desista.");
            $("#Resultado").fadeToggle();
            $(".melody").get(0).pause();
            winSeguidas = 0;
            $("#CPU").attr("src", "img/cpu1.gif");
            $("div.progress-bar").css("width", "10%");
            $("div.progress-bar span").html("10%");
        }
    });

    $(".btnPapel").click(function () {
        var x = Math.floor((Math.random() * 5) + 1) - 1;
        if (eCPU[x] == "PAPEL") {
            $(".empate").get(0).play();
            $("span#R-t").html("Empate!!!");
            $("span#R-d").html("Vamos de novo!");
            $("div.message").fadeToggle();
        }
        if (eCPU[x] == "LAGARTO") {
            $(".derrota").get(0).play();
            $("span#R-t").html("Você perdeu esta rodada!");
            $("span#R-d").html("Lagarto come papel!");
            $("div.message").fadeToggle();
            winSeguidas--;
        }

        if (eCPU[x] == "TESOURA") {
            $(".derrota").get(0).play();
            $("span#R-t").html("Você perdeu esta rodada!");
            $("span#R-d").html("Tesoura corta papel!");
            $("div.message").fadeToggle();
            winSeguidas--;
        }
        if (eCPU[x] == "SPOCK") {
            $(".win").get(0).play();
            $("span#R-t").html("Você venceu esta rodada!");
            $("span#R-d").html("Papel refuta Spock!");
            $("div.message").fadeToggle();
            winSeguidas++;
        }
        if (eCPU[x] == "PEDRA") {
            $(".win").get(0).play();
            $("span#R-t").html("Você venceu esta rodada!");
            $("span#R-d").html("Papel cobre pedra!");
            $("div.message").fadeToggle();
            winSeguidas++;
        }
        if (winSeguidas == 0) {
            $("#CPU").attr("src", "img/cpu1.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "10%");
            $("div.progress-bar span").html("10%");
        }
        if (winSeguidas == 1) {
            $("#CPU").attr("src", "img/cpu2.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "28%");
            $("div.progress-bar span").html("28%");
        }
        if (winSeguidas == 2) {
            $("#CPU").attr("src", "img/cpu3.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "45%");
            $("div.progress-bar span").html("45%");
        }
        if (winSeguidas == 3) {
            $("#CPU").attr("src", "img/cpu4.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "71%");
            $("div.progress-bar span").html("71%");
        }
        if (winSeguidas == 4) {
            $("#CPU").attr("src", "img/cpu5.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "97%");
            $("div.progress-bar span").html("97%");
        }
        if (winSeguidas == 5) {
            $("section").hide();
            $("small.result").html("Você venceu!");
            $("p.text-result").html("Você é f*d*. Caraca... parabéns, sério mesmo... Como você conseguiu?... Loucura loucura loucura...");
            $("#Resultado").fadeToggle();
            $(".melody").get(0).pause();
            winSeguidas = 0;
            $("#CPU").attr("src", "img/cpu1.gif");
            $("div.progress-bar").css("width", "10%");
            $("div.progress-bar span").html("10%");
        }
        if (winSeguidas < 0) {
            $("section").hide();
            $("small.result").html("Você perdeu!");
            $("p.text-result").html("Infelizmente... você é só mais um. Tenta de novo. Vai que vai. Desistir é prós fracos! </br>Dica: desista.");
            $("#Resultado").fadeToggle();
            $(".melody").get(0).pause();
            winSeguidas = 0;
            $("#CPU").attr("src", "img/cpu1.gif");
            $("div.progress-bar").css("width", "10%");
            $("div.progress-bar span").html("10%");
        }
    });

    $(".btnTesoura").click(function () {
        var x = Math.floor((Math.random() * 5) + 1) - 1;
        if (eCPU[x] == "TESOURA") {
            $(".empate").get(0).play();
            $("span#R-t").html("Empate!!!");
            $("span#R-d").html("Vamos de novo!");
            $("div.message").fadeToggle();
        }
        if (eCPU[x] == "LAGARTO") {
            $(".win").get(0).play();
            $("span#R-t").html("Você venceu esta rodada!");
            $("span#R-d").html("Tesoura decapita lagarto!");
            $("div.message").fadeToggle();
            winSeguidas++;
        }
        if (eCPU[x] == "PAPEL") {
            $(".win").get(0).play();
            $("span#R-t").html("Você venceu esta rodada!");
            $("span#R-d").html("Tesoura corta papel!");
            $("div.message").fadeToggle();
            winSeguidas++;
        }
        if (eCPU[x] == "SPOCK") {
            $(".derrota").get(0).play();
            $("span#R-t").html("Você perdeu esta rodada!");
            $("span#R-d").html("Spock derrete tesoura!");
            $("div.message").fadeToggle();
            winSeguidas--;
        }
        if (eCPU[x] == "PEDRA") {
            $(".derrota").get(0).play();
            $("span#R-t").html("Você perdeu esta rodada!");
            $("span#R-d").html("Pedra quebra tesoura!");
            $("div.message").fadeToggle();
            winSeguidas--;
        }
        if (winSeguidas == 0) {
            $("#CPU").attr("src", "img/cpu1.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "10%");
            $("div.progress-bar span").html("10%");
        }
        if (winSeguidas == 1) {
            $("#CPU").attr("src", "img/cpu2.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "28%");
            $("div.progress-bar span").html("28%");
        }
        if (winSeguidas == 2) {
            $("#CPU").attr("src", "img/cpu3.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "45%");
            $("div.progress-bar span").html("45%");
        }
        if (winSeguidas == 3) {
            $("#CPU").attr("src", "img/cpu4.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "71%");
            $("div.progress-bar span").html("71%");
        }
        if (winSeguidas == 4) {
            $("#CPU").attr("src", "img/cpu5.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "97%");
            $("div.progress-bar span").html("97%");
        }
        if (winSeguidas == 5) {
            $("section").hide();
            $("small.result").html("Você venceu!");
            $("p.text-result").html("Você é f*d*. Caraca... parabéns, sério mesmo... Como você conseguiu?... Loucura loucura loucura...");
            $("#Resultado").fadeToggle();
            $(".melody").get(0).pause();
            winSeguidas = 0;
            $("#CPU").attr("src", "img/cpu1.gif");
            $("div.progress-bar").css("width", "10%");
            $("div.progress-bar span").html("10%");
        }
        if (winSeguidas < 0) {
            $("section").hide();
            $("small.result").html("Você perdeu!");
            $("p.text-result").html("Infelizmente... você é só mais um. Tenta de novo. Vai que vai. Desistir é prós fracos! </br>Dica: desista.");
            $("#Resultado").fadeToggle();
            $(".melody").get(0).pause();
            winSeguidas = 0;
            $("#CPU").attr("src", "img/cpu1.gif");
            $("div.progress-bar").css("width", "10%");
            $("div.progress-bar span").html("10%");
        }
    });

    $(".btnLagarto").click(function () {
        var x = Math.floor((Math.random() * 5) + 1) - 1;
        if (eCPU[x] == "LAGARTO") {
            $(".empate").get(0).play();
            $("span#R-t").html("Empate!!!");
            $("span#R-d").html("Vamos de novo!");
            $("div.message").fadeToggle();
        }
        if (eCPU[x] == "TESOURA") {
            $(".derrota").get(0).play();
            $("span#R-t").html("Você perdeu esta rodada!");
            $("span#R-d").html("Tesoura decapita lagarto!");
            $("div.message").fadeToggle();
            winSeguidas--;
        }

        if (eCPU[x] == "PAPEL") {
            $(".win").get(0).play();
            $("span#R-t").html("Você venceu esta rodada!");
            $("span#R-d").html("Lagarto come papel!");
            $("div.message").fadeToggle();
            winSeguidas++;
        }
        if (eCPU[x] == "SPOCK") {
            $(".win").get(0).play();
            $("span#R-t").html("Você venceu esta rodada!");
            $("span#R-d").html("Lagarto envenena Spock!");
            $("div.message").fadeToggle();
            winSeguidas++;
        }
        if (eCPU[x] == "PEDRA") {
            $(".derrota").get(0).play();
            $("span#R-t").html("Você perdeu esta rodada!");
            $("span#R-d").html("Pedra esmaga lagarto!");
            $("div.message").fadeToggle();
            winSeguidas--;
        }
        if (winSeguidas == 0) {
            $("#CPU").attr("src", "img/cpu1.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "10%");
            $("div.progress-bar span").html("10%");
        }
        if (winSeguidas == 1) {
            $("#CPU").attr("src", "img/cpu2.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "28%");
            $("div.progress-bar span").html("28%");
        }
        if (winSeguidas == 2) {
            $("#CPU").attr("src", "img/cpu3.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "45%");
            $("div.progress-bar span").html("45%");
        }
        if (winSeguidas == 3) {
            $("#CPU").attr("src", "img/cpu4.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "71%");
            $("div.progress-bar span").html("71%");
        }
        if (winSeguidas == 4) {
            $("#CPU").attr("src", "img/cpu5.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "97%");
            $("div.progress-bar span").html("97%");
        }
        if (winSeguidas == 5) {
            $("section").hide();
            $("small.result").html("Você venceu!");
            $("p.text-result").html("Você é f*d*. Caraca... parabéns, sério mesmo... Como você conseguiu?... Loucura loucura loucura...");
            $("#Resultado").fadeToggle();
            $(".melody").get(0).pause();
            winSeguidas = 0;
            $("#CPU").attr("src", "img/cpu1.gif");
            $("div.progress-bar").css("width", "10%");
            $("div.progress-bar span").html("10%");
        }
        if (winSeguidas < 0) {
            $("section").hide();
            $("small.result").html("Você perdeu!");
            $("p.text-result").html("Infelizmente... você é só mais um. Tenta de novo. Vai que vai. Desistir é prós fracos! </br>Dica: desista.");
            $("#Resultado").fadeToggle();
            $(".melody").get(0).pause();
            winSeguidas = 0;
            $("#CPU").attr("src", "img/cpu1.gif");
            $("div.progress-bar").css("width", "10%");
            $("div.progress-bar span").html("10%");
        }
    });

    $(".btnSpock").click(function () {
        var x = Math.floor((Math.random() * 5) + 1) - 1;
        if (eCPU[x] == "SPOCK") {
            $(".empate").get(0).play();
            $("span#R-t").html("Empate!!!");
            $("span#R-d").html("Vamos de novo!");
            $("div.message").fadeToggle();
        }
        if (eCPU[x] == "TESOURA") {
            $(".win").get(0).play();
            $("span#R-t").html("Você venceu esta rodada!");
            $("span#R-d").html("Spock derrete tesoura!");
            $("div.message").fadeToggle();
            winSeguidas++;
        }

        if (eCPU[x] == "PAPEL") {
            $(".derrota").get(0).play();
            $("span#R-t").html("Você perdeu esta rodada!");
            $("span#R-d").html("Papel refuta Spock!");
            $("div.message").fadeToggle();
            winSeguidas--;
        }
        if (eCPU[x] == "LAGARTO") {
            $(".derrota").get(0).play();
            $("span#R-t").html("Você perdeu esta rodada!");
            $("span#R-d").html("Lagarto envenena Spock!");
            $("div.message").fadeToggle();
            winSeguidas--;
        }
        if (eCPU[x] == "PEDRA") {
            $(".win").get(0).play();
            $("span#R-t").html("Você venceu esta rodada!");
            $("span#R-d").html("Spock vaporiza pedra!");
            $("div.message").fadeToggle();
            winSeguidas++;
        }
        if (winSeguidas == 0) {
            $("#CPU").attr("src", "img/cpu1.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "10%");
            $("div.progress-bar span").html("10%");
        }
        if (winSeguidas == 1) {
            $("#CPU").attr("src", "img/cpu2.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "28%");
            $("div.progress-bar span").html("28%");
        }
        if (winSeguidas == 2) {
            $("#CPU").attr("src", "img/cpu3.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "45%");
            $("div.progress-bar span").html("45%");
        }
        if (winSeguidas == 3) {
            $("#CPU").attr("src", "img/cpu4.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "71%");
            $("div.progress-bar span").html("71%");
        }
        if (winSeguidas == 4) {
            $("#CPU").attr("src", "img/cpu5.gif").hide().fadeToggle();
            $("div.progress-bar").css("width", "97%");
            $("div.progress-bar span").html("97%");
        }
        if (winSeguidas == 5) {
            $("section").hide();
            $("small.result").html("Você venceu!");
            $("p.text-result").html("Você é f*d*. Caraca... parabéns, sério mesmo... Como você conseguiu?... Loucura loucura loucura...");
            $("#Resultado").fadeToggle();
            $(".melody").get(0).pause();
            winSeguidas = 0;
            $("#CPU").attr("src", "img/cpu1.gif");
            $("div.progress-bar").css("width", "10%");
            $("div.progress-bar span").html("10%");
        }
        if (winSeguidas < 0) {
            $("section").hide();
            $("small.result").html("Você perdeu!");
            $("p.text-result").html("Infelizmente... você é só mais um. Tenta de novo. Vai que vai. Desistir é prós fracos! </br>Dica: desista.");
            $("#Resultado").fadeToggle();
            $(".melody").get(0).pause();
            winSeguidas = 0;
            $("#CPU").attr("src", "img/cpu1.gif");
            $("div.progress-bar").css("width", "10%");
            $("div.progress-bar span").html("10%");
        }
    });

    $(".btnVoltar").click(function () {
        $("section").hide();
        $("#Inicio").fadeToggle();
        winSeguidas = 0;
        $("#CPU").attr("src", "img/cpu1.gif");
    });
    $(".btnJogar").click(function () {
        $("section").hide();
        $("#Jogo").fadeToggle();
        $(".melody").get(0).play();
        winSeguidas = 0;
        $("#CPU").attr("src", "img/cpu1.gif");
    });
    $(".btnSobre").click(function () {
        $("section").hide();
        $("#SobreAdson").fadeToggle();
    });
    $(".btnAjuda").click(function () {
        $("section").hide();
        $("#Ajuda").fadeToggle();
    });
    $(".btnAdson").click(function () {
        $("section").hide();
        $("#SobreAdson").fadeToggle();
    });
    $(".btnPontes").click(function () {
        $("section").hide();
        $("#SobrePontes").fadeToggle();
    });
    $(".btnBento").click(function () {
        $("section").hide();
        $("#SobreBento").fadeToggle();
    });
    $(".btnIndio").click(function () {
        $("section").hide();
        $("#SobreIndio").fadeToggle();
    });

    $(".btnDesistir").click(function () {
        $("section").hide();
        $("#Inicio").fadeToggle();
        $(".melody").get(0).pause();
        winSeguidas = 0;
        $("#CPU").attr("src", "img/cpu1.gif");
    });
    $(".btnOk").click(function () {
        $("div.message").fadeToggle();
    });
});