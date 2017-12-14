$(function() {
	
	validate();


})

function validate() {
	$('#sure').click(function() {

		start = new Date().getTime();

		var wu = $("#wu").val();
		var our = $("#our").val();

		if(wu == null || wu == "") {
			alert("请回答第一个问题");
		} else if(our == null || our == ""){
			alert("请回答第二个问题")
		}else {

			wu_value = "488f97fc30b38589d1ac632f1be586a74e6be6aaffcf68144700a20673156cfa2d6d34751e7923fba5205e4fb2ded4846062013b959c5e3be3cc8e7801c63920";
			our_value = "6b04886074c58d424f215b884135450bc7fe17f93fd5c2da90c6dd1807e6042df714fb7789d8fb12463950d45fe3028fb2cd217587c5bed9cd0d71266b2a79da";

			var shaObj1 = new jsSHA("SHA-512", "TEXT");
			shaObj1.update(wu);
			wu = shaObj1.getHash("HEX");

			var shaObj2 = new jsSHA("SHA-512", "TEXT");
			shaObj2.update(our);
			our = shaObj2.getHash("HEX");

			if(wu === wu_value) {
				if(our === our_value) {
					window.location.href = "promise.html?start=" + start;
				} else {
					alert("第二个问题回答错误!");
				}
			} else {
				alert("第一个问题回答错误!");
			}
		}

	})

}
