for (var i = 0; i <= 100; i++) {

    var notPrime = false;

    for (var j = 2; j <= i; j++) {
        if (i%j===0 && j!==i) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(i);
    }
}