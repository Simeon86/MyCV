window.addEventListener('DOMContentLoaded', (event) => {

var arr = [
			{
				name: 'Simeon',
				lastName: 'Nikolov',
				age: '36',
				position: 'Junior Front End Developer',
				ganeder: 'male',
				avatar: './assets/img/Me.jpg',
				description: '',
				experience: 'Internet Application Developer at Medical University-Varna Sep 2022. Lecturer Advance Academy Oct 2022. Advance Academy - from September 2021 year to the November 2022 year',
				study: 'HTML, CSS, SASS, Javascript, Node.js, React, Bootstrap, NPM, MongoDB', 
				currently: 'I am currently studying GitHub',
				previous: 'I have previous experience outside the IT sector',
			}
		];

		var insert = document.querySelector('#insert')

		arr.forEach(function(person) {
			console.log(person)
		
		var cart = createCart(person);
		var x = 1

		insert.append(cart);

		})

		function createCart(person) {

			//Create Virtual Element
			var cart = document.createElement("div");
			
			// Add Class
			cart.classList.add('cart');

			// Add HTML Inside
			cart.innerHTML = `<div class="personal-information">
				<div class="avatar">
					<img src="${person.avatar}" alt="${person.name} ${person.lastName}">
				</div>
				<h2>${person.position}</h2>
				<h3>${person.name} ${person.lastName} / Age: ${person.age}</h3>
				<h4>Expirience: over 1 year</h4>
				<p>${person.description}
				</p>
				<p>${person.experience}
				</p>
				<p>${person.study}
				</p>
				<p>${person.currently}
				</p>
				<p>${person.previous}
				</p>

			</div>`
		
		return cart;
	}
});
