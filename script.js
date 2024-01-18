const trips = document.querySelectorAll("#trips .slide");
const dates = document.querySelectorAll("#dates .slide");
const testimonials = document.querySelectorAll("#testimonials .slide");

dates.forEach((date, index) => {
	date.style.transform = `translateX(${index * 100}%)`;
});

trips.forEach((trip, index) => {
	trip.style.transform = `translateX(${index * 100}%)`;
});

testimonials.forEach((trip, index) => {
	trip.style.transform = `translateX(${index * 100}%)`;
});

let currTrip = 0;
let currDate = 0;
let currTestimonial = 0;

let maxTrip = trips.length - 1;
let maxDate = dates.length - 1;
let maxTestimonial = testimonials.length - 1;

const nextTrip = document.querySelector("#trips .btn-next");
const prevTrip = document.querySelector("#trips .btn-prev");

const nextDate = document.querySelector("#dates .btn-next");
const prevDate = document.querySelector("#dates .btn-prev");

const nextTestimonial = document.querySelector("#testimonials .btn-next");
const prevTestimonial = document.querySelector("#testimonials .btn-prev");

nextTrip.addEventListener("click", function () {
	if (currTrip == maxTrip) {
		currTrip = 0;
	} else {
		currTrip++;
	}

	trips.forEach((trip, index) => {
		trip.style.transform = `translateX(${100 * (index - currTrip)}%)`;
	});
});

prevTrip.addEventListener("click", function () {
	if (currTrip == 0) {
		currTrip = maxTrip;
	} else {
		currTrip--;
	}

	trips.forEach((trip, index) => {
		trip.style.transform = `translateX(${100 * (index - currTrip)}%)`;
	});
});

nextDate.addEventListener("click", function () {
	if (currDate == maxDate) {
		currDate = 0;
	} else {
		currDate++;
	}

	dates.forEach((date, index) => {
		date.style.transform = `translateX(${100 * (index - currDate)}%)`;
	});
});

prevDate.addEventListener("click", function () {
	if (currDate == 0) {
		currDate = maxDate;
	} else {
		currDate--;
	}

	dates.forEach((date, index) => {
		date.style.transform = `translateX(${100 * (index - currDate)}%)`;
	});
});

nextTestimonial.addEventListener("click", function () {
	if (currTestimonial == maxTestimonial) {
		currTestimonial = 0;
	} else {
		currTestimonial++;
	}

	testimonials.forEach((testimonial, index) => {
		testimonial.style.transform = `translateX(${
			100 * (index - currTestimonial)
		}%)`;
	});
});

prevTestimonial.addEventListener("click", function () {
	if (currTestimonial == 0) {
		currTestimonial = maxTestimonial;
	} else {
		currTestimonial--;
	}

	testimonials.forEach((testimonial, index) => {
		testimonial.style.transform = `translateX(${
			100 * (index - currTestimonial)
		}%)`;
	});
});
