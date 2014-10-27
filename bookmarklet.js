javascript:(function(host){
	var site, salt;
	do {
		site = prompt('Введите сайт:',host);
	} while (site === '');
	do {
		salt = prompt('Введите парольную фразу:');
	} while (salt === '');
	function generateHash(salt) {
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

	prompt('Ваш пароль:', generateHash(salt+site+salt));

})(location.hostname);