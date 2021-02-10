(() => {
    class Vehiculo {
        constructor(public marca: string, public modelo: string, color: string, puertas: number) {

        }

        arrancar() {
            console.log('Coche arrancado');
        }
    }

    class Coche extends Vehiculo {
        constructor(marca: string, modelo: string, color: string, puertas: number, nRuedas: number){
            super(marca, modelo, color, puertas);
        }
    }

    const miCoche = new Coche('Opel', 'Tigra', 'Negro', 3, 4);
    console.log(miCoche);
    console.log(miCoche.arrancar());
})();