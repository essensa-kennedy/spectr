// $(document).ready(function () {

// 	//E-mail Ajax Send
// 	$("form").submit(function () { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function () {
// 			alert("Ваша заявка принята!");
// 			setTimeout(function () {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// });

const iconMenu = document.querySelector('.menu__icon')
// const body = document.querySelector('body')

if (iconMenu) {
	const bodyMenu = document.querySelector('.menu__body')
	iconMenu.addEventListener('click', function (e) {
		body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active')
		bodyMenu.classList.toggle('_active')
	})
	
}

function selectPicture(el) {

	let obj = {
		1: 'Администрация Краснодарского края',
		2: 'Многофункциональные центры Краснодарского края',
		3: 'НКО "Фонд капитального ремонта МКД"',
		4: 'BAON',
		5: 'ASICS',
	}

	let pics = document.querySelectorAll('.clients__small-img')
	let descr = document.querySelector('.clients__description')

	let imgSrc = el.src;
	let elem_id = el.id;


	let current = document.querySelector('.img-biglogo')
	current.src = imgSrc;
	pics.forEach(element => {
		element.classList.remove('small-img--active')
	});
	el.classList.add('small-img--active')
	
	descr.innerHTML = obj[elem_id]
}