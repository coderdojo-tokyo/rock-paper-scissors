window.onkeydown = function(e){
	var d1 = document.getElementById('you');
	
	// 数字の入れもの = 変数 (へんすう)
	var a = e.keyCode;
	console.log(a);
	a = a - 48;
	
	// もし〜なら
	if (a == 1) {
		d1.innerHTML = 'ぐー';
	} else if (a == 2) {
		d1.innerHTML = 'ちょき';
	} else {
		d1.innerHTML = 'ぱー';
	}
};