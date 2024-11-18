// JavaScript source code
function checker() {
    var result = confirm('Da li ste sigurni da zelite da porucite?');
    if (result == false) {
        event.preventDefault();
    }
}

function check() {
    var result = confirm('Da li ste sigurni da zelite da otkazete porudžbinu?');
    if (result == false) {
        event.preventDefault();
    }
}

