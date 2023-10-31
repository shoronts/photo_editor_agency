import { Bootstrap } from '../bootstrap/bootstrap.bundle.min.js';
Bootstrap();

const steps = {
    "current": 1,
    "one": false,
    "tow": false,
    "three": false,
    "four": false
};
const stepNames = {
    "first_step": "Add Info",
    "second_step": "Upload Images",
    "third_step": "Add Contact Info",
    "fourth_step": "Submit Quote"
};

const firstStepNav = document.querySelector("#left-part #first-step");
const secondStepNav = document.querySelector("#left-part #second-step");
const thirdStepNav = document.querySelector("#left-part #third-step");
const fourthStepNav = document.querySelector("#left-part #fourth-step");

const firstStepBox = document.querySelector("#right-part .first-step-box");
const secondStepBox = document.querySelector("#right-part .second-step-box");
const thirdStepBox = document.querySelector("#right-part .third-step-box");
const fourthStepBox = document.querySelector("#right-part .fourth-step-box");

const allInfoPage = document.querySelector("#all-info");
const thankYouPage = document.querySelector("#thank-you");

const nextBtn = document.querySelector(".navigate-box .main-buttons .next-btn button");
const backBtn = document.querySelector(".navigate-box .main-buttons .back-btn button");

const resizeImage = document.querySelector("#right-part .second-step-box .add-on-services #add-on-resize");
const widthHeightInfo = document.querySelector("#right-part .second-step-box .add-on-services .width-height-box");

const checkSecondInfoAddOnServiceResizeImages = () => {
    resizeImage.addEventListener("change", () => {
        if (resizeImage.checked) {
            widthHeightInfo.classList.remove("d-none");
        } else {
            widthHeightInfo.classList.add("d-none");
        }
    });
};


const changeStep = () => {
    // Next form
    nextBtn.addEventListener("click", () => {
        if (steps.current === 1) {
            // Need to Check values
            steps.current = 2;
            firstStepNav.classList.remove("start");
            firstStepNav.classList.remove("active");
            secondStepNav.classList.add("start");
            firstStepNav.classList.add("done");
            firstStepBox.classList.add("d-none");
            secondStepBox.classList.remove("d-none");
            steps.one = true;
            nextBtn.querySelector('span').innerText = stepNames.second_step;
            checkSecondInfoAddOnServiceResizeImages();
        } else if (steps.current === 2) {
            // Need to Check values
            steps.current = 3;
            secondStepNav.classList.remove("start");
            secondStepNav.classList.add("done");
            thirdStepNav.classList.add("start");
            secondStepBox.classList.add("d-none");
            thirdStepBox.classList.remove("d-none");
            steps.tow = true;
            nextBtn.querySelector('span').innerText = stepNames.third_step;
        } else if (steps.current === 3) {
            // Need to Check values
            steps.current = 4;
            thirdStepNav.classList.remove("start");
            thirdStepNav.classList.add("done");
            fourthStepNav.classList.add("start");
            thirdStepBox.classList.add("d-none");
            fourthStepBox.classList.remove("d-none");
            steps.three = true;
            nextBtn.querySelector('span').innerText = stepNames.fourth_step;
        } else if (steps.current === 4) {
            // Need to Check values
            steps.current = 5;
            steps.four = true;
            thankYouPage.classList.remove("d-none");
            allInfoPage.innerHTML = "";
        }
        backBtn.classList.remove("d-none");
    });
    backBtn.addEventListener("click", () => {
        const allStepNavs = document.querySelectorAll("#left-part .steps .step");
        allStepNavs.forEach(item => {
            item.classList.remove("active");
            item.classList.remove("start");
        });
        if (steps.current === 4) {
            steps.current = 3;
            thirdStepNav.classList.add("active");
            nextBtn.querySelector('span').innerText = stepNames.third_step;
            fourthStepBox.classList.add("d-none");
            thirdStepBox.classList.remove("d-none");
        } else if (steps.current === 3) {
            steps.current = 2;
            secondStepNav.classList.add("active");
            nextBtn.querySelector('span').innerText = stepNames.second_step;
            thirdStepBox.classList.add("d-none");
            secondStepBox.classList.remove("d-none");
        }
        else if (steps.current === 2) {
            backBtn.classList.add("d-none");
            steps.current = 1;
            firstStepNav.classList.add("active");
            secondStepBox.classList.add("d-none");
            firstStepBox.classList.remove("d-none");
            nextBtn.querySelector('span').innerText = stepNames.first_step;
            checkSecondInfoAddOnServiceResizeImages();
        }
    });
};

changeStep();