/* =================== Variables ====================== */
/* ==================================================== */

const stages = [...document.querySelectorAll(".circle")];
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const progress = document.querySelector("#progress");
let count = 0;

/* =================== Functions ====================== */
/* ==================================================== */

/* Helper Functions
/* ==================================================== */

function colorCirclesUp() {
	stages[count].classList.add("active");
}

function colorCirclesDown() {
	stages[count].classList.remove("active");
}

function adjustProgress() {
	progress.style.width = `${(count / (stages.length - 1)) * 100}%`;
}

/* App Functions
/* ==================================================== */

function checkButtonState() {
	if (count === stages.length - 1) {
		next.setAttribute("disabled", "");
	} else {
		next.removeAttribute("disabled");
	}
	if (count === 0) {
		prev.setAttribute("disabled", "");
	} else {
		prev.removeAttribute("disabled");
	}
}

function increaseProgress(event) {
	if (event.target === next && count < stages.length - 1) {
		count += 1;
		document.addEventListener("transitionend", colorCirclesUp, {
			once: true,
		});
		adjustProgress();
	}
	if (event.target === prev && count > 0) {
		colorCirclesDown();
		count -= 1;
		adjustProgress();
	}
}

/* Handler Functions
/* ==================================================== */

function clickHandler(event) {
	event.preventDefault();
	if (event.target.tagName !== "BUTTON") return;
	increaseProgress(event);
	checkButtonState();
}

/* ============  Inits and Event Listeners  =========== */
/* ==================================================== */

document.addEventListener("click", clickHandler);
