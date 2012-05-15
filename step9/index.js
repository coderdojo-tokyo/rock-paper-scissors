window.onkeydown = function(e){
	var d1 = document.getElementById('you');
	var d2 = document.getElementById('computer');
	var d3 = document.getElementById('judge');
	
	var a = e.keyCode;
	if (a < 49 || 51 < a) return;// '1', '2', '3'以外のキーが押されたら無視
	a = a - 49;// '1' のキーコードは 49
	var b = Math.random() * 3;
	b = Math.floor(b);
	var j = judge(a, b);// 0:ひきわけ, 1:あなたのかち, 2:コンピュータのかち
	
	showHand(d1, a);
	showHand(d2, b);
	showJudge(d3, j);
};

judge = function(a, b){
	if (a == b) return 0;
	if (b == 0) b = 3;
	if (a == b - 1) return 1;
	return 2;
};

showHand = function(d, x){
	var imgs = ['rock.jpg', 'scissors.jpg', 'paper.jpg'];
	d.innerHTML = '<img src="' + imgs[x] + '" />';
};

showJudge = function(d, x){
	var judges = ['あいこ!', 'あなたのかち!', 'コンピュータのかち!'];
	d.innerHTML = judges[x];
};