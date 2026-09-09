/* =========================================================
   NAVEGACIÓN ENTRE PANTALLAS
========================================================= */

function goTo(screenId) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(screen => {

        screen.classList.remove("active");

    });

    const target =
        document.getElementById(screenId);

    if (target) {

        target.classList.add("active");

    }

    // Si llegamos al final, lanzar confeti
    if (screenId === "final") {

        startConfetti();

    }

    // Si llegamos a la carta
    if (screenId === "carta") {

        startLetter();

    }

}


/* =========================================================
   MÚSICA
========================================================= */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

let musicPlaying = false;

musicBtn.addEventListener("click", () => {

    if (musicPlaying) {

        music.pause();

        musicBtn.textContent = "🎵";

        musicPlaying = false;

    } else {

        music.play()
            .then(() => {

                musicBtn.textContent = "🔊";

                musicPlaying = true;

            })
            .catch(() => {

                alert(
                    "Tu navegador necesita permiso para reproducir la música."
                );

            });

    }

});


/* =========================================================
   EFECTO MÁQUINA DE ESCRIBIR
========================================================= */

const letterText = `Marita♡:

Hoy quería hacer algo diferente para desearte un feliz cumpleaños.

No quería simplemente escribirte un "feliz cumpleaños" y ya.

Quería aprovechar este día para recordarte algo que quizá no te digo muy seguido:

Me alegra muchísimo tenerte en mi vida.

Te conozco desde hace muchos años, desde aquellos tiempos en los que éramos niños y probablemente ninguno de los dos imaginaba todo lo que viviríamos después.

Con el paso del tiempo he podido verte crecer y convertirte en la maravillosa persona que eres hoy.

Y si hay algo que siempre he pensado de ti, es que tienes una esencia muy especial.

Admiro tu forma de ser, tu manera de enfrentar las cosas y esa personalidad que te hace ser tú.

Quizá no siempre encuentre las palabras para decirlo, pero realmente te aprecio muchísimo.

Me alegra poder decir que eres parte de mi historia y que, después de tantos años, seguimos compartiendo momentos y recuerdos.

Espero que nunca olvides lo valiosa que eres.

Deseo de corazón que este nuevo año de tu vida esté lleno de cosas bonitas, nuevas experiencias, sueños cumplidos y muchísimas razones para sonreír.

Gracias por ser esa gran persona que eres.

Y sobre todo...

Gracias por existir y por haber formado parte de mi vida durante tantos años.

Feliz cumpleaños. ❤️`;

let letterStarted = false;

function startLetter() {

    if (letterStarted) return;

    letterStarted = true;

    const element =
        document.getElementById("typewriter");

    const continueButton =
        document.getElementById("continueLetter");

    let index = 0;

    function write() {

        if (index < letterText.length) {

            element.textContent +=
                letterText.charAt(index);

            index++;

            setTimeout(write, 25);

        } else {

            continueButton.classList.remove("hidden");

        }

    }

    write();

}


/* =========================================================
   SORPRESAS
========================================================= */

function showSurprise(number) {

    const box =
        document.getElementById("surpriseMessage");

    const icon =
        box.querySelector("span");

    const text =
        box.querySelector("p");


    if (number === 1) {

        icon.textContent = "🌟";

        text.textContent =
            "Nunca dudes de la persona que eres. Hay cosas maravillosas en ti que quizá tú misma no alcanzas a ver.";

    }


    if (number === 2) {

        icon.textContent = "💭";

        text.textContent =
            "Uno de mis recuerdos favoritos no necesariamente es un momento enorme. A veces son esas pequeñas conversaciones, risas y momentos que terminan quedándose en nuestra memoria.";

    }


    if (number === 3) {

        icon.textContent = "💌";

        text.textContent =
            "Mi deseo para ti es sencillo: que seas feliz, que encuentres personas que valoren tu corazón y que nunca dejes de perseguir aquello que te haga ilusión.";

    }

    box.style.transform =
        "scale(.95)";

    setTimeout(() => {

        box.style.transform =
            "scale(1)";

    }, 100);

}


/* =========================================================
   CORAZONES FLOTANTES
========================================================= */

const heartsContainer =
    document.querySelector(".hearts-container");

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "❤️",
        "💗",
        "💖",
        "✨",
        "🌸",
        "💫"
    ];

    heart.textContent =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 7) + "s";

    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 14000);

}

setInterval(createHeart, 900);


/* =========================================================
   CONFETI
========================================================= */

function startConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );

    // Limpiar confeti anterior
    container.innerHTML = "";

    for (let i = 0; i < 180; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        piece.style.background =
            randomConfettiColor();

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(piece);

    }

}


function randomConfettiColor() {

    const colors = [

        "#ff6fae",
        "#ffd166",
        "#7dd3fc",
        "#c4b5fd",
        "#ffffff",
        "#86efac",
        "#fb7185"

    ];

    return colors[
        Math.floor(
            Math.random() * colors.length
        )
    ];

}


/* =========================================================
   REINICIAR
========================================================= */

function restartPage() {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(screen => {

        screen.classList.remove("active");

    });

    document
        .getElementById("inicio")
        .classList.add("active");


    // Reiniciar carta

    letterStarted = false;

    document.getElementById(
        "typewriter"
    ).textContent = "";

    document
        .getElementById("continueLetter")
        .classList.add("hidden");


    // Limpiar confeti

    document.getElementById(
        "confetti-container"
    ).innerHTML = "";

}


/* =========================================================
   EFECTO AL CARGAR
========================================================= */

window.addEventListener("load", () => {

    console.log(
        "✨ Página de cumpleaños cargada."
    );

});