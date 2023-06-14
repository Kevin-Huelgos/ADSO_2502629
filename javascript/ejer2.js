function calcularDescuento() {
    var destino = document.getElementById("destino").value; // Obtiene el valor del elemento con ID "duracion" del documento HTML
    var duracion = document.getElementById("duracion").value;  // Obtiene el valor del elemento con ID "duracion" del documento HTML
  
    var descuento = 0; /*var se utiliza para declarar variables.
     Sirve para crear una nueva variable y asignarle un valor inicial opcional.*/ 
  
    // Calculamos el descuento según el destino seleccionado
     //aquí se agrega casos para los destinos restantes
    switch (destino)/*switch es una estructura de control que permite evaluar el valor 
    de una expresión y ejecutar diferentes bloques de código según el caso que coincida 
    con ese valor*/  {
      case "mexico":
        descuento = 5;
        break;
      case "espana":
        descuento = 10;
        break;
      case "londres":
        descuento = 20;
        break;
      case "africa":
        descuento = 25;
        break;
    }
  
    // Calculamos el descuento aplicado al costo del viaje
    var costoViaje = 900000; // Aquí debes ingresar el costo base del viaje
    var descuentoAplicado = (costoViaje * descuento) / 100;
  
    // Calculamos el costo final del viaje
    var costoFinal = costoViaje - descuentoAplicado;
  
    // Mostramos el resultado al usuario
    document.getElementById("resultado").innerHTML = "Costo final del viaje: $" + costoFinal;
    /* --document.getElementById("resultado") se utiliza para obtener una referencia al elemento HTML 
      con el atributo id "resultado" en el documento.
      --innerHTML es una propiedad que permite acceder y modificar el contenido HTML dentro de un elemento.
      --"Costo final del viaje: $" + costoFinal es una concatenación de texto donde se agrega el valor de la variable costoFinal al mensaje.*/
  }