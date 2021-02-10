(function () {
    // Función tradicional
    function suma(sum1, sum2) {
        return sum1 + sum2;
    }
    console.log(suma(3, 5));
    // Función anónima
    var resta = function (res1, res2) {
        return res1 - res2;
    };
    console.log(resta(9, 5));
    // Función flecha
    var sumaFlecha = function (sum1, sum2) { return sum1 + sum2; };
    console.log(sumaFlecha(5, 5));
    function tortillaPatata(ing1, ing2, ing3, ing4) {
        if (ing4 === void 0) { ing4 = 'Pimiento'; }
        if (ing3) {
            console.log("Ingredientes Tortilla de Patata: " + ing1 + ", " + ing2 + ", " + ing3 + " y " + ing4 + ".");
            console.log('Ingredientes Tortilla de Patata: ' + ing1 + ', ' + ing2 + ', ' + ing3 + ' y ' + ing4 + '.');
        }
        else {
            console.log("Ingredientes Tortilla de Patata: " + ing1 + ", " + ing2 + " y " + ing4 + ".");
        }
    }
    tortillaPatata('huevo', 'patata', 'cebolla', 'calabacin');
})();
