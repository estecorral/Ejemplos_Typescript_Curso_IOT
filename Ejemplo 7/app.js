var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Vehiculo = /** @class */ (function () {
        function Vehiculo(marca, modelo, color, puertas) {
            this.marca = marca;
            this.modelo = modelo;
        }
        Vehiculo.prototype.arrancar = function () {
            console.log('Coche arrancado');
        };
        return Vehiculo;
    }());
    var Coche = /** @class */ (function (_super) {
        __extends(Coche, _super);
        function Coche(marca, modelo, color, puertas, nRuedas) {
            return _super.call(this, marca, modelo, color, puertas) || this;
        }
        return Coche;
    }(Vehiculo));
    var miCoche = new Coche('Opel', 'Tigra', 'Negro', 3, 4);
    console.log(miCoche);
    console.log(miCoche.arrancar());
})();
