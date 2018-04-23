'use strict';
console.log('loading...');

/**
 * Add returns to the timeout
 */
new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

    return setTimeout(function() {
        console.log('hit one');
        console.log(result); // 1
        return result * 2;
    }, 2000);

}).then(function(result) { // (***)

    return setTimeout(function() {
        console.log('hit 2');
        console.log(result); // 2
        return result * 2;
    }, 2000);

}).then(function(result) {

    return setTimeout(function() {
        console.log('hit 3');
        console.log(result); // 4
        return result * 2;
    }, 2000);

});