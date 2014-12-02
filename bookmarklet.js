(function(h){
	function generate(s,mp) {
		var salt = mp+s+mp;
	  	var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*([{}])_+~-'+
				'1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*([{}])_+~-ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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
	
	var nw = window.open('','', 'menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=220,height=150');
	if(!nw) {
		alert('Window blocked!');
	} else {
		var d=nw.document, b=d.body;
		var host=d.createElement('input');
		host.value = h;
		var mp=d.createElement('input');
		mp.type = 'password';
		mp.placeholder = 'Master-password'
		var gp=d.createElement('input');
		gp.placeholder = 'Generated password';
		host.onkeyup = function(e){gp.value = generate(host.value.toLowerCase(),mp.value);};
		mp.onkeyup = function(e){gp.value = generate(host.value.toLowerCase(),mp.value);};
	
		b.appendChild(host); 
		b.appendChild(mp);
		b.appendChild(gp);
		mp.focus();
		
		d.onkeydown = function(e) {if(e.keyCode===27) {nw.close();}}
	}
})(location.hostname)
