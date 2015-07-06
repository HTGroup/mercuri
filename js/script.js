// Mixing jQuery and Node.js code in the same file? Yes please!

/*$(document).ready(function(){
	$(window).resize(function(){
		window.resizeTo(1350,570);
		window.focus();
	});
});*/
$(function(){
	var iframe = null,
		_iframeContent = null;
	$("#mecuri").bind("load",function(){
		iframe = $(this);
		_iframeContent = iframe.contents();

		setInterval(function(){
			iframe.contents().find(".vklady_table").each(function(){
				var _self = $(this).find("tbody");
				var summ = 0;
				var koh = 0;
				var zav = 0;
				var all = 0;
				var nac = 0;
				if(_self.eq(0).find(".myData").length > 0) return;
				_self.eq(1).find("tr").each(function () {
					var mm = parseInt($(this).find("td").eq(2).text().replace(" ", ""));
					var day = parseInt($(this).find("td").eq(3).find("div").text().replace(" ", ""));
					var mm2 = parseFloat($(this).find("td").eq(4).find("div").text().replace(" ", ""));
					var mm3 = parseFloat($(this).find("td").eq(5).text().replace(" ", ""));
					var mm4 = parseFloat($(this).find("td").eq(6).find("div").text().replace(" ", ""));

					if (!isNaN(day)) {
						$(this).find("td").eq(3).find("div").text($(this).find("td").eq(3).find("div").text() + " (" + (day * mm3).toFixed(2) + ")");
						nac += day * mm3;
					}
					if (!isNaN(mm))
						summ += mm
					if (!isNaN(mm2))
						koh += mm2
					if (!isNaN(mm3))
						zav += mm3
					if (!isNaN(mm4))
						all += mm4
				});
				_self.eq(0).find(".legend").after('<tr class="legend myData"><td width="180"></td><td style="width: 90px; "></td><td style="width: 90px;">' + summ + '</td><td style="width: 100px;">' + nac.toFixed(2) + '</td><td>' + koh.toFixed(2) + '</td><td class="brd_left">' + zav.toFixed(2) + '</td><td class="brd_left">' + all.toFixed(2) + '</td><td>'+(nac+all+koh).toFixed(2)+'</td></tr>');
			});
		},2000);

	});
});