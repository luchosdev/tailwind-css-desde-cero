let p = document.getElementById('products-bar');
    let myText;
    for (i = 0; i < p.length; i++) {
        var txt = document.getElementsById('products-bar')[i].innerHTML;
        if (p[i].innerHTML == txt) {
            myText = p[i];
            break;
        }
    }

myText.removeAttribute("hidden");