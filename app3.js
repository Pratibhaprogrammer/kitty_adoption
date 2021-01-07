

function timeGreeting(){var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    
    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'time space is broken';
    }
    
    document.write('<h2>' + greeting + '</h2>');

}

timeGreeting()