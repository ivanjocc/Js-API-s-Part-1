// async function obtenerDatos(){
// 	const response = await fetch ('http://localhost:3000/naruto-shippuden');
// 	const json = await response.json();
// 	// const json = await response.text();
	
// 	console.log(json);
// 	console.log(JSON.parse(json));
// 	json.forEach(element => {
// 		console.log(element.nombre);
// 	});

// }

// obtenerDatos();


document.querySelector("#boton").addEventListener('click', traerDatos);

function traerDatos(){
	const xhttp = new XMLHttpRequest();

	xhttp.open('GET', 'db.json', true);

	xhttp.send();

	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			// console.log(this.responseText);
			let datos = JSON.parse(this.responseText);
			// console.log(datos);
			let res = document.querySelector('#res');
			res.innerHTML = '';

			for(let item of datos){
				// console.log(item);
				res.innerHTML += `
					<tr>
						<td>${item.nombre}</td>
						<td>${item.skill}</td>
						<td>${item.aldea}</td>
					</td>
				`
			}
		}
	}
}