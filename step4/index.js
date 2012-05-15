window.onkeydown = function(e){
	var d1 = document.getElementById('you');
	var d2 = document.getElementById('computer');
	var d3 = document.getElementById('judge');
	
	// あなたの手
	var a = e.keyCode;
	a = a - 48;
	
	if (a == 1) {
		d1.innerHTML = '<img src="rock.jpg" />';//ぐー
	} else if (a == 2) {
		d1.innerHTML = '<img src="scissors.jpg" />';//ちょき
	} else {
		d1.innerHTML = '<img src="paper.jpg" />';//ぱー
	}
	
	// コンピュータの手
	var b = Math.random() * 3;
	b = Math.ceil(b);
	
	if (b == 1) {
		d2.innerHTML = '<img src="rock.jpg" />';//ぐー
	} else if (b == 2) {
		d2.innerHTML = '<img src="scissors.jpg" />';//ちょき
	} else {
		d2.innerHTML = '<img src="paper.jpg" />';//ぱー
	}
	
	// どっちが勝った?
	if (a == b) {
		d3.innerHTML = 'あいこ!';
	} else if ((a == 1 && b == 2) || (a == 2 && b == 3) || (a == 3 && b == 1)) {
		d3.innerHTML = 'あなたのかち!';
	} else {
		d3.innerHTML = 'コンピュータのかち!';
	}
};