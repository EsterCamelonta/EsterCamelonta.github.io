(function() {
    var xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.onreadystatechange = function() {
        if ((this.readyState === 4) && (this.status === 200)) {
            document.querySelector('.breakfast-menu').innerHTML = this.responseText;
        }
    };

    xmlHttpRequest.open('GET', 'simple.xml', true);
    xmlHttpRequest.send();

    document.querySelector('.lorem-ipsum-button').addEventListener('click', function(event) {
        document.querySelector('.lorem-ipsum--hidden').classList.remove('lorem-ipsum--hidden');
    });
})();
