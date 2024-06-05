const quantity = document.getElementById('quantity'),
	minus = document.getElementById('minus'),
	inputs = document.querySelectorAll('.radio'),
	manualBtn = document.querySelectorAll('.manual-btn p'),
	inputs1 = document.querySelectorAll('.radio1'),
	manualBtn1 = document.querySelectorAll('.manual-btn1 p'),
	slide = document.querySelectorAll('.slide'),
	popUp = document.getElementById('pop-up'),
	first = document.querySelector('.first1'),
	firstImg = document.querySelector('.first1 img'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	itemNo = document.querySelector('.cart-no'),
	cartQuant = document.querySelectorAll('.quantity'),
	full = document.querySelectorAll('.full'),
	empty = document.querySelector('.empty'),
	clear = document.querySelectorAll('.clear'),
	mobileIcon = document.querySelectorAll('.mobile-icon'),
	navLink = document.getElementById('nav-link');

console.log(navLink);
let a,
	b = 0,
	c,
	d;

let mainArray = [1, 2, 3, 4];
let popArray = [1, 2, 3, 4];

const showNav = () => {
	navLink.classList.toggle('show');
};

for (let i = 0; i < mobileIcon.length; i++) {
	mobileIcon[i].addEventListener('click', showNav);
}

const clearCart = () => {
	for (let i = 0; i < full.length; i++) {
		full[i].classList.replace('show', 'hide');
	}
	itemNo.classList.remove('show');
	empty.style.display = 'flex';
	quantity.innerText = 3;
};

document.querySelector('.add-btn').addEventListener('click', () => {
	for (let i = 0; i < full.length; i++) {
		full[i].classList.replace('hide', 'show');
	}
	c = quantity.innerText;
	itemNo.classList.add('show');
	for (let i = 0; i < cartQuant.length; i++) {
		cartQuant[i].innerHTML = c;
	}
	document.querySelector('.arithemetic').innerHTML = `$${c * 125}`;
	empty.style.display = 'none';
});

document.querySelector('.carts > img').addEventListener('click', () => {
	document.querySelector('.cart').classList.toggle('show');
});

prev.onclick = function () {
	// d = firstImg.scrollWidth;
	e = firstImg.getBoundingClientRect();
	d = e.width;
	console.log(d);
	b <= -d ? (b += d) : (b = -(3 * d));

	first.style.marginLeft = b + 'px';

	manualBtn1.forEach(e => {
		e.style.backgroundColor = 'transparent';
		e.style.filter = 'opacity(1)';
		e.style.border = 'none';
	});

	b === -550
		? ((manualBtn1[1].style.backgroundColor = 'var(--pale-orange)'),
		  (manualBtn1[1].style.filter = 'opacity(0.7)'),
		  (manualBtn1[1].style.border = '2px solid var(--orange)'))
		: b === -1100
		? ((manualBtn1[2].style.backgroundColor = 'var(--pale-orange)'),
		  (manualBtn1[2].style.filter = 'opacity(0.7)'),
		  (manualBtn1[2].style.border = '2px solid var(--orange)'))
		: b === -1650
		? ((manualBtn1[3].style.backgroundColor = 'var(--pale-orange)'),
		  (manualBtn1[3].style.filter = 'opacity(0.7)'),
		  (manualBtn1[3].style.border = '2px solid var(--orange)'))
		: ((manualBtn1[0].style.backgroundColor = 'var(--pale-orange)'),
		  (manualBtn1[0].style.filter = 'opacity(0.7)'),
		  (manualBtn1[0].style.border = '2px solid var(--orange)'));
};

next.addEventListener('click', () => {
	d = firstImg.scrollWidth;
	console.log(d);
	b >= -(2 * d) ? (b -= d) : (b = 0);

	first.style.marginLeft = b + 'px';

	manualBtn1.forEach(e => {
		e.style.backgroundColor = 'transparent';
		e.style.filter = 'opacity(1)';
		e.style.border = 'none';
	});
	b === -550
		? ((manualBtn1[1].style.backgroundColor = 'var(--pale-orange)'),
		  (manualBtn1[1].style.filter = 'opacity(0.7)'),
		  (manualBtn1[1].style.border = '2px solid var(--orange)'))
		: b === -1100
		? ((manualBtn1[2].style.backgroundColor = 'var(--pale-orange)'),
		  (manualBtn1[2].style.filter = 'opacity(0.7)'),
		  (manualBtn1[2].style.border = '2px solid var(--orange)'))
		: b === -1650
		? ((manualBtn1[3].style.backgroundColor = 'var(--pale-orange)'),
		  (manualBtn1[3].style.filter = 'opacity(0.7)'),
		  (manualBtn1[3].style.border = '2px solid var(--orange)'))
		: ((manualBtn1[0].style.backgroundColor = 'var(--pale-orange)'),
		  (manualBtn1[0].style.filter = 'opacity(0.7)'),
		  (manualBtn1[0].style.border = '2px solid var(--orange)'));
});

const showPopUp = () => {
	popUp.classList.toggle('show');
};

for (let i = 0; i < slide.length; i++) {
	slide[i].addEventListener('click', showPopUp);
}

for (let i = 0; i < mainArray.length; i++) {
	inputs[i].addEventListener('click', () => {
		manualBtn.forEach(e => {
			e.style.backgroundColor = 'transparent';
			e.style.filter = 'opacity(1)';
			e.style.border = 'none';
		});

		manualBtn[i].style.backgroundColor = 'var(--pale-orange)';
		manualBtn[i].style.filter = 'opacity(0.7)';
		manualBtn[i].style.border = '2px solid var(--orange)';
	});
}

for (let i = 0; i < popArray.length; i++) {
	inputs1[i].addEventListener('click', () => {
		manualBtn1.forEach(e => {
			e.style.backgroundColor = 'transparent';
			e.style.filter = 'opacity(1)';
			e.style.border = 'none';
		});

		manualBtn1[i].style.backgroundColor = 'var(--pale-orange)';
		manualBtn1[i].style.filter = 'opacity(0.7)';
		manualBtn1[i].style.border = '2px solid var(--orange)';
	});
}

document.getElementById('plus').onclick = function () {
	a = quantity.innerHTML;
	a++;
	minus.style.opacity = '1';
	quantity.textContent = a;
};

minus.addEventListener('click', () => {
	a = quantity.innerHTML;
	a >= 2 ? (a--, (minus.style.opacity = '1')) : (minus.style.opacity = '0.5');
	quantity.textContent = a;
});

for (let i = 0; i < clear.length; i++) {
	clear[i].addEventListener('click', clearCart);
}
