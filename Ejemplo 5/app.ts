(() => {
    // Función tradicional
    function suma (sum1: number, sum2: number) {
        return sum1 + sum2;
    }

    console.log(suma(3, 5));
    // Función anónima
    let resta = function (res1: number, res2: number) {
        return res1 - res2;
    }
    console.log(resta(9, 5));

    // Función flecha
    let sumaFlecha = (sum1: number, sum2: number) => sum1 + sum2;
    console.log(sumaFlecha(5, 5));

    function tortillaPatata(ing1: string, ing2: string, ing3?: string, ing4: string = 'Pimiento') {
        if(ing3) {
            console.log(`Ingredientes Tortilla de Patata: ${ing1}, ${ing2}, ${ing3} y ${ing4}.`);
            console.log('Ingredientes Tortilla de Patata: ' + ing1 + ', ' + ing2 + ', ' + ing3 + ' y ' + ing4 + '.');
        } else {
            console.log(
              `Ingredientes Tortilla de Patata: ${ing1}, ${ing2} y ${ing4}.`
            );
        }
    }

    tortillaPatata('huevo', 'patata', 'cebolla', 'calabacin');
})();