/** @format */

window.onload = function () {
	main();
};

function main() {
	const result = document.getElementById('result');

	const inputNumberBtn = document.getElementsByClassName('input-number-btn');

	for (let i = 0; i < inputNumberBtn.length; i++) {
		inputNumberBtn[i].addEventListener('click', function () {
			let value = parseInt(inputNumberBtn[i].innerText, 10);
			let oldResult = parseInt(result.innerText, 10);

			const calculationType = document.querySelector(
				'input[name="calc-type"]:checked',
			).value;

			let newResult = 0;

			if (calculationType === 'plus') {
				newResult = oldResult + value;
			} else if (calculationType === 'minus') {
				newResult = oldResult - value;
			}
			result.innerText = newResult;
			expandResultWrapper(result.innerText);
		});
	}

	document.getElementById('initial-btn').addEventListener('click', function () {
		let initialInput = document.getElementById('initial-input');
		if (initialInput.value) {
			result.innerText = initialInput.value;
		}
	});

	document.getElementById('reset').addEventListener('click', function () {
		result.innerText = 0;
		document.getElementById('initial-input').value = 0;
		document.getElementById('custom-input').value = 0;
		const wrapper = document.getElementById('result-wrapper');
		wrapper.style.width = '8rem';
		wrapper.style.height = '8rem';
	});

	document.getElementById('custom-btn').addEventListener('click', function () {
		let customInput = document.getElementById('custom-input');

		let value = parseInt(customInput.value, 10);
		let oldResult = parseInt(result.innerText, 10);

		const calculationType = document.querySelector(
			'input[name="calc-type"]:checked',
		).value;

		let newResult = 0;

		if (calculationType === 'plus') {
			newResult = oldResult + value;
		} else if (calculationType === 'minus') {
			newResult = oldResult - value;
		}
		result.innerText = newResult;
		expandResultWrapper(result.innerText);
	});

	function expandResultWrapper(text) {
		const sizes = {
			4: '10rem',
			5: '12rem',
			6: '14rem',
			7: '16rem',
			8: '18rem',
			9: '20rem',
			10: '22rem',
		};
		const wrapper = document.getElementById('result-wrapper');
		const result = document.getElementById('result');
		const len = text.length;

		// don't do anything
		if (len < 4) return;

		// expand wrapper
		if (len > 3 && len < 11) {
			wrapper.style.width = sizes[len];
			wrapper.style.height = sizes[len];
			return;
		}
	}
}
