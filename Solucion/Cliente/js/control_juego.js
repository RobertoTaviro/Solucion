//Funciones que modifiquen el INDEX

function inicio (){
	mostrarCabecera();
}


function borrarControl(){
	$('#controlID').remove();
}

function mostrarCabecera(){
	$('#cabeceraID').remove();
	$('#controlID').append('<div id="cabeceraID"><h2>Panel de Control</h2><imput type="text" id="cabecera">')
}

function botonNombre(){
	$('#cabeceraID').append('<button type="button" id="nombreBtn" class="btn">')
	$('#nombreBtn').on('click',function(){
	 	$('#nombreBtn').remove();
	 	crearUsuario(nombre=('#nombre').val());
	 	//control de esta variable
	});
}






/////////////////////////////////////////////////////////////////
//Funciones de comunicación con el servidor

function crearUsuario(nombre){
	if (nombre=""){
		nombre="jugador";
	}
	$.getJSON('/crearUsuario/'+nombre,function (datos) {

		// datos tiene la respuesta del servidor
		// Mostrar los datos del usuario
		//controlas el momento (callback)
	});
	//Si muestro aqui los datos, no tienes la seguridad de que se muestre
	//no controlas el momento  
}

















