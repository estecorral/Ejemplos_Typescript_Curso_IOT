(() =>{
    interface Vehiculo {
        modelo: string;
        marca: string;
        motorizado: boolean;
        puertas?: number;

        cuentaKm();
    }

    class Coche implements Vehiculo {
        constructor(public modelo: string, public marca: string, public motorizado: boolean, public puertas: number) {

        }

        cuentaKm() {
            console.log('50000km');
        }
    }

    const miBicleta: Vehiculo = {
        modelo: 'Oiz',
        marca: 'Orbea',
        motorizado: false,
        cuentaKm() {
            console.log('5000km');
        }
    }
})();