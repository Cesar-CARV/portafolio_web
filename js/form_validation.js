const form = document.querySelector('#contact_form');

form.addEventListener('submit', e => {
	e.preventDefault();

	let error = false;
	const alert = document.querySelector('#contact_form__alert');
	const msg = document.querySelector('#contact_form__alert__msg');

	const name = document.querySelector('#input_name');
	const about = document.querySelector('#input_subject');
	const email = document.querySelector('#input_email');
	const message = document.querySelector('#input_message');

	console.log(name.value, about.value, email.value, message.value);

	if (name.value === '') { error = true;}
	if (about.value === '') { error = true;}
	if (email.value === '' || 
		!email.value.match(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/)) { 
		error = true;
	}

	if (message.value === '') { error = true;}

	if (error) {
		msg.innerText = "El email es incorrecto, llenelo de la manera correcta."
		alert.className = "alert alert--error alert--show";
		return;
	}

	msg.innerText = "Se ah enviado de manera correcta el mensaje"
	alert.className = "alert alert--ok alert--show";
	form.submit();

	console.log(error);
});


const btnEasterEgg = document.querySelector('#btn_easter_egg');
const msg = document.querySelector('#secret_message');
const secretMessageCloseButton = document.querySelector('#secret_message__close_button');

let easterEggClicks = 0;

const animation = [
  { transform: "rotate(-45deg)" },
  { transform: "rotate(45deg)" },
  { transform: "rotate(0deg)" },
];

const animationSettings = {
  duration: 300,
  iterations: 1,
};

// show modal
btnEasterEgg.addEventListener('click', e => {
	easterEggClicks ++;
	btnEasterEgg.animate(animation, animationSettings);

	if (easterEggClicks >= 3) {
		msg.showModal();
	}

	// reset clicks
	setTimeout( () => easterEggClicks = 0, 800);
});

// hide modal
secretMessageCloseButton.addEventListener('click', e => {
	msg.close();
});

