$(function() {
	$('#test').css('display','none');
	

	var start = getQueryString("start");
	
	var end = new Date().getTime();
	var result = end - start;
	var state = false;

	if(start != null && start != "") {
		alert('result:'+result);
		if(result >10) {
			state = true;
		}

	}
	
	if(state === true){
		
		$('#content').css('background','none');
		$('#test').show();
	}else{
		
		window.location.href = "error.html";
	}

})

/**
 * 获取参数
 */
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) {
		return decodeURIComponent(r[2]);
	}
	return '';
}