const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function() {
	menuHeader.classList.add(expandClass);
});
window.addEventListener("click", function(e) {
	if(!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
		menuHeader.classList.remove(expandClass);
	}
});
//Chạy thư viện jquery Slick slider
$(document).ready(function () {
	$(".quote-container").slick({
		prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow: "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
		//Responsive màn hình mobile tablet nut prev và next 
		responsive: 
		[
			{
				//Điểm kết thúc nút từ màn hình 767 trở xuống
				breakpoint: 767,
				settings: 
				{
					//Thiết lập nút mũi tên ko có trên mobile tablet
					arrows: false,
				},
			},
		],
	});
});
