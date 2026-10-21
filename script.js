/* =====================================
   MARVEL-STYLE BIRTHDAY EXPERIENCE
===================================== */


/* =====================================
   PAGE TRANSITIONS
===================================== */

function enterUniverse() {

    document.body.classList.add("page-exit");

    setTimeout(() => {

        window.location.href = "hero.html";

    }, 700);

}


function goToBirthday() {

    document.body.classList.add("page-exit");

    setTimeout(() => {

        window.location.href = "birthday.html";

    }, 700);

}


function restartExperience() {

    document.body.classList.add("page-exit");

    setTimeout(() => {

        window.location.href = "index.html";

    }, 700);

}


/* =====================================
   STAR PARTICLES
===================================== */

function createStars() {

    const starContainer =
        document.getElementById("stars");

    if (!starContainer) return;


    for (let i = 0; i < 70; i++) {

        const star =
            document.createElement("span");


        star.style.position = "absolute";

        star.style.width =
            `${Math.random() * 2 + 1}px`;

        star.style.height =
            star.style.width;

        star.style.background =
            "white";

        star.style.borderRadius =
            "50%";

        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;

        star.style.opacity =
            Math.random();

        star.style.animation =
            `twinkle ${2 + Math.random() * 4}s infinite alternate`;

        starContainer.appendChild(star);

    }

}


const starStyle =
document.createElement("style");

starStyle.innerHTML = `

@keyframes twinkle {

    from {
        opacity: 0.15;
        transform: scale(0.5);
    }

    to {
        opacity: 1;
        transform: scale(1.5);
    }

}

.page-exit {

    animation:
        pageExit 0.7s ease forwards;

}

@keyframes pageExit {

    to {

        opacity: 0;

        transform: scale(1.1);

        filter: blur(10px);

    }

}

`;

document.head.appendChild(starStyle);


/* =====================================
   CONFETTI
===================================== */

function launchConfetti() {

    const container =
        document.querySelector(".confetti-container");

    if (!container) return;


    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti");


        piece.style.left =
            `${Math.random() * 100}vw`;


        piece.style.animationDuration =
            `${2 + Math.random() * 4}s`;


        piece.style.animationDelay =
            `${Math.random() * 2}s`;


        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        container.appendChild(piece);

    }

}


/* =====================================
   TYPEWRITER EFFECT
===================================== */

function typeWriter(element, text, speed = 70) {

    if (!element) return;


    element.textContent = "";


    let index = 0;


    function write() {

        if (index < text.length) {

            element.textContent +=
                text.charAt(index);

            index++;

            setTimeout(write, speed);

        }

    }


    write();

}


/* =====================================
   INITIALIZATION
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createStars();


        const name =
            document.querySelector(".birthday-name");


        if (name) {

            typeWriter(
                name,
                "YOUR SPECIAL HERO",
                80
            );

            setTimeout(
                launchConfetti,
                1500
            );

        }

    }
);
