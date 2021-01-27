const images = [...document.querySelectorAll(".panel")];
const gallery = document.querySelector(".container");

function showHeaders(image) {
	image.addEventListener(
		"transitionend",
		() => {
			image.querySelector("h3").style.display = "block";
		},
		{ once: true }
	);
}

function expandImage(event) {
	if (!event.target.closest(".container")) return;
	if (event.target.classList.contains("active")) return;
	images.forEach((image) => {
		image.classList.remove("active");
		image.querySelector("h3").style.display = "none";
		if (image === event.target) {
			image.classList.add("active");
		}
	});
	showHeaders(event.target);
}

gallery.addEventListener("click", function (event) {
	expandImage(event);
});
