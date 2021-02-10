(() => {
    class Coche {
        constructor(public marca: string, public modelo: string, public color: string, public puertas: number) {
        
        }
    }

    const miCoche = new Coche('Opel', 'Astra', 'Rojo', 5);
    console.log(miCoche);
})();