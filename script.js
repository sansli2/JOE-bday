/* ==================================================
   ARSU ARCHIVE — INTERACTIVE SCRIPT
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const opening = document.getElementById("opening");
    const archive = document.getElementById("archive");
    const beginBtn = document.getElementById("beginBtn");

    /* ==================================================
       OPEN ARCHIVE
    ================================================== */

    beginBtn.addEventListener("click", () => {

        opening.classList.add("hidden");
        archive.classList.remove("hidden");

        showPage("intro");

    });


    /* ==================================================
       PAGE NAVIGATION
    ================================================== */

    function showPage(id) {

        const pages = document.querySelectorAll(".archive-page");

        pages.forEach(page => {
            page.classList.add("hidden");
        });

        const page = document.getElementById(id);

        if (page) {

            page.classList.remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    }


    /* ==================================================
       NORMAL NEXT BUTTONS
    ================================================== */

    document.querySelectorAll(".next-btn").forEach(button => {

        button.addEventListener("click", () => {

            const nextPage = button.dataset.next;

            showPage(nextPage);

        });

    });


    /* ==================================================
       A PUZZLE
       Correct order:
       Grade 12 → Entrance Exam/Dorm → University
    ================================================== */

    const aButtons =
        document.querySelectorAll("#aPuzzle button");

    const aMessage =
        document.getElementById("aMessage");

    const aReward =
        document.getElementById("aReward");

    const aCorrectOrder = [
        "grade",
        "exam",
        "university"
    ];

    let aStep = 0;

    aButtons.forEach(button => {

        button.addEventListener("click", () => {

            const answer = button.dataset.answer;

            if (answer === aCorrectOrder[aStep]) {

                button.classList.add("selected");

                aStep++;

                if (aStep === aCorrectOrder.length) {

                    aMessage.textContent =
                        "✓ The sequence is correct. Archive A recovered.";

                    aReward.classList.remove("hidden");

                } else {

                    aMessage.textContent =
                        "✓ Correct. Continue the timeline.";

                }

            } else {

                aMessage.textContent =
                    "✕ That isn't the next event. Try again.";

                aStep = 0;

                aButtons.forEach(btn => {
                    btn.classList.remove("selected");
                });

            }

        });

    });


    /* ==================================================
       R PUZZLE
       Correct order:
       Qoqor → Unisa → Nowhere → Sambusa → Rainy Night
    ================================================== */

    const rButtons =
        document.querySelectorAll("#rPuzzle button");

    const rMessage =
        document.getElementById("rMessage");

    const rReward =
        document.getElementById("rReward");

    const rCorrectOrder = [
        "qoqor",
        "unisa",
        "nowhere",
        "sambusa",
        "rain"
    ];

    let rStep = 0;

    rButtons.forEach(button => {

        button.addEventListener("click", () => {

            const answer = button.dataset.answer;

            if (answer === rCorrectOrder[rStep]) {

                button.classList.add("selected");

                rStep++;

                if (rStep === rCorrectOrder.length) {

                    rMessage.textContent =
                        "✓ Journey reconstructed. Archive R recovered.";
 rReward.classList.remove("hidden");

                } else {

                    rMessage.textContent =
                        "✓ Correct. Follow the journey.";

                }

            } else {

                rMessage.textContent =
                    "✕ Wrong path. Start the journey again.";

                rStep = 0;

                rButtons.forEach(btn => {
                    btn.classList.remove("selected");
                });

            }

        });

    });


    /* ==================================================
       S REVEAL
    ================================================== */

    const sRevealBtn =
        document.getElementById("sRevealBtn");

    const sReward =
        document.getElementById("sReward");

    const sMessage =
        document.getElementById("sMessage");

    sRevealBtn.addEventListener("click", () => {

        sMessage.textContent =
            "✓ Personality file verified. Archive S recovered.";

        sReward.classList.remove("hidden");

        sRevealBtn.disabled = true;

        sRevealBtn.style.opacity = "0.5";

    });


    /* ==================================================
       U — CHOOSE EXACTLY 3
    ================================================== */

    const choices =
        document.querySelectorAll("#uChoices button");

    const counter =
        document.getElementById("uCounter");

    const confirmBtn =
        document.getElementById("uConfirm");

    const uMessage =
        document.getElementById("uMessage");

    const uReward =
        document.getElementById("uReward");

    let selectedChoices = [];

    const correctChoices = [
        "food",
        "vintage",
        "travel"
    ];


    choices.forEach(button => {

        button.addEventListener("click", () => {

            const choice = button.dataset.choice;

            if (selectedChoices.includes(choice)) {

                selectedChoices =
                    selectedChoices.filter(
                        item => item !== choice
                    );

                button.classList.remove("selected");

            } else {

                if (selectedChoices.length >= 3) {

                    uMessage.textContent =
                        "Choose only three.";

                    return;
                }

                selectedChoices.push(choice);

                button.classList.add("selected");

            }

            counter.textContent =
                ${selectedChoices.length} / 3 selected;

            uMessage.textContent = "";

        });

    });


    confirmBtn.addEventListener("click", () => {

        if (selectedChoices.length !== 3) {

            uMessage.textContent =
                "Choose exactly three things first.";

            return;

        }

        const isCorrect =
            correctChoices.every(
                choice => selectedChoices.includes(choice)
            );

        if (isCorrect) {

            uMessage.textContent =
                "✓ The final memory has been recovered.";

            uReward.classList.remove("hidden");

            confirmBtn.disabled = true;

            confirmBtn.style.opacity = "0.5";

            choices.forEach(button => {
                button.disabled = true;
            });

        } else {

            uMessage.textContent =
                "Something doesn't belong in this file. Try again.";

        }

    });


    /* ==================================================
       PASSPORT
    ================================================== */

    const passportBtn =
        document.getElementById("passportBtn");

    passportBtn.addEventListener("click", () => {

        showPage("passport");

    });

});
