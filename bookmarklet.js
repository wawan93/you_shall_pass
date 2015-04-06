
(function(h){
    function generate(s,mp,a) {
        var salt = mp+s+mp;
        var alphabet;
        if(a) {
            alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*([{}])_+~-'+'1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*([{}])_+~-ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        } else {
            alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890__--1234567890abcdefghijklmnopqrstuvwxyz__--ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        var integer, j, temp, i, v, p;

        for (i = alphabet.length - 1, v = 0, p = 0; i > 0; i--, v++) {
            v %= salt.length;
            p += integer = salt[v].charCodeAt(0);
            j = (integer + v + p) % i;
            temp = alphabet[j];
            alphabet = alphabet.substr(0, j) + alphabet[i] + alphabet.substr(j + 1);
            alphabet = alphabet.substr(0, i) + temp + alphabet.substr(i + 1);
        }
        return alphabet.substr(1,15);
    }

    var nw = window.open('','', 'menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=320,height=250');
    if(!nw) {
        alert('Window blocked!');
    } else {
        var d=nw.document;
        var b=d.body;
        var s=d.createElement('style');
        var host=d.createElement('input');
        var mp=d.createElement('input');
        var gp=d.createElement('input');
        var label=d.createElement('label');
        var chbx=d.createElement('input');

        if(h.indexOf('www.')===0)
            h = h.substring(4);

        s.innerHTML='input,label{margin:5px auto;display:block;padding:5px;width:200px;outline:none;} input[type=checkbox]{display:inline;margin:0; padding:0; width:20px;}';

        host.value = h;
        host.placeholder = 'Site';

        mp.type = 'password';
        mp.placeholder = 'Master-password';

        gp.placeholder = 'Generated password';
        gp.style.border = '2px solid #d45729';
        gp.readOnly = true;

        chbx.type='checkbox';
        chbx.id = 'chbx';
        chbx.setAttribute('checked','checked');
        label.appendChild(chbx);
        label.innerHTML += '!@#$%^&*([{_+~-}])';

        host.onkeyup = mp.onkeyup = label.onclick = function(e){gp.value = generate(host.value.toLowerCase(),mp.value,d.getElementById('chbx').checked);};

        b.appendChild(s);
        b.appendChild(host);
        b.appendChild(mp);
        b.appendChild(gp);
        b.appendChild(label);
        mp.focus();

        d.onkeydown = function(e) {if(e.keyCode===27) {nw.close();}};
        nw.onblur = function(e) {nw.close();};
    }
})(location.hostname);
