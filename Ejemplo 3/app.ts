(() => {
    let mensaje = 'let';
    var mensaje2 = 'var';

    if(true) {
        let mensaje = 'let2';
        var mensaje2 = 'var2';
    }
    console.log('Con let: ' + mensaje + 'con var: ' + mensaje2);
})();