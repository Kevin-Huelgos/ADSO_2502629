function calcularPrecio() {
    var saborSeleccionado = document.getElementById("sabor").value;
    var precio;
    var descuento;
  
    switch (saborSeleccionado) {
      case "oreo":
        precio = 1500;
        descuento = 5;
        break;
      case "fresa":
        precio = 2000;
        descuento = 10;
        break;
      case "vainilla":
        precio = 3000;
        descuento = 10;
        break;
      case "brawnie":
        precio = 5000;
        descuento = 10;
        break;
      default:
        document.getElementById("resultado").innerHTML = "Lo sentimos, no tenemos ese sabor.";
        return;
    }
  
    var precioFinal = precio - (precio * (descuento / 100));
    document.getElementById("resultado").innerHTML = "Precio del helado: $" + precioFinal;
  }