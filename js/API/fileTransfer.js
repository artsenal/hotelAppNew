var file = {
	exito: function(){
		window.localStorage.setItem("nombreUsuario", $("#nombreRegistro").val());
		window.location.href = "#home";
	},

	error: function(){
		alert("Error al enviar foto al servidor");
	},

	transferir: function(fileURL){
		/*
		 * Opciones de Envio
		 */
		var options      = new FileUploadOptions();
		options.fileKey  = "foto";
		options.fileName = "miFoto";
		options.mimeType = "image/jpeg";

		var ft = new FileTransfer();
		ft.upload(fileURL, "http://www.colors.edu.mx/archivoTest.php", file.exito, file.error, options);
	}
};