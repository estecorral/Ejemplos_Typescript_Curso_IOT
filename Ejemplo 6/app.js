(function () {
    var Coche = /** @class */ (function () {
        function Coche(marca, modelo, color, puertas) {
            this.marca = marca;
            this.modelo = modelo;
            this.color = color;
            this.puertas = puertas;
        }
        return Coche;
    }());
    var miCoche = new Coche('Opel', 'Astra', 'Rojo', 5);
    console.log(miCoche);
})();
