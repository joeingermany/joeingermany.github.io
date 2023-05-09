/* 메인 홈페이지 아이콘 숨김을 위한 코드 */

function toggleBtn1() {
  
	// 토글 할 버튼 선택 (btn1)
	const btn1 = document.getElementById('show-popup1');
	const btn2 = document.getElementById('show-popup2');
	const btn3 = document.getElementById('show-popup3');
	const btn4 = document.getElementById('show-popup4');
	const btn5 = document.getElementById('show-popup5');
	const btn6 = document.getElementById('show-popup6');
	
	
	// btn1 숨기기 (visibility: hidden)
	if(btn1.style.visibility !== 'hidden') {
	  btn1.style.visibility = 'hidden';
	  btn2.style.visibility = 'hidden';
	  btn3.style.visibility = 'hidden';
	  btn4.style.visibility = 'hidden';
	  btn5.style.visibility = 'hidden';
	  btn6.style.visibility = 'hidden';
	}
	// btn` 보이기 (visibility: visible)
	else {
	  btn1.style.visibility = 'visible';
	  btn2.style.visibility = 'visible';
	  btn3.style.visibility = 'visible';
	  btn4.style.visibility = 'visible';
	  btn5.style.visibility = 'visible';
	  btn6.style.visibility = 'visible';
	}	
  }


/* 갤러리 팝업을 위한 코드 */
//var images = ["/img/portfolio/1.png", "/img/portfolio/2.png", "/img/portfolio/3.png", "/img/portfolio/4.png", "/img/portfolio/5.png"];
var images = [
"/img/portfolio/img (1).jpg", "/img/portfolio/img (2).jpg", "/img/portfolio/img (3).jpg", "/img/portfolio/img (4).jpg", 
"/img/portfolio/img (5).jpg", "/img/portfolio/img (6).jpg", "/img/portfolio/img (7).jpg", "/img/portfolio/img (8).jpg", 
"/img/portfolio/img (9).jpg", "/img/portfolio/img (10).jpg", "/img/portfolio/img (11).jpg", "/img/portfolio/img (12).jpg", 
"/img/portfolio/img (13).jpg", "/img/portfolio/img (14).jpg", "/img/portfolio/img (15).jpg", "/img/portfolio/img (16).jpg", 
"/img/portfolio/img (17).jpg", "/img/portfolio/img (18).jpg", "/img/portfolio/img (19).jpg", "/img/portfolio/img (20).jpg", 
"/img/portfolio/img (21).jpg", "/img/portfolio/img (22).jpg", "/img/portfolio/img (23).jpg", "/img/portfolio/img (24).jpg", 
"/img/portfolio/img (25).jpg", "/img/portfolio/img (26).jpg", "/img/portfolio/img (27).jpg", "/img/portfolio/img (28).jpg", 
"/img/portfolio/img (29).jpg", "/img/portfolio/img (30).jpg", "/img/portfolio/img (31).jpg", "/img/portfolio/img (32).jpg", 
"/img/portfolio/img (33).jpg", "/img/portfolio/img (34).jpg", "/img/portfolio/img (35).jpg", "/img/portfolio/img (36).jpg", 
"/img/portfolio/img (37).jpg", "/img/portfolio/img (38).jpg", "/img/portfolio/img (39).jpg", "/img/portfolio/img (40).jpg", 
"/img/portfolio/img (41).jpg", "/img/portfolio/img (42).jpg", "/img/portfolio/img (43).jpg", "/img/portfolio/img (44).jpg", 
"/img/portfolio/img (45).jpg", "/img/portfolio/img (46).jpg", "/img/portfolio/img (47).jpg", "/img/portfolio/img (48).jpg", 
"/img/portfolio/img (49).jpg", "/img/portfolio/img (50).jpg", "/img/portfolio/img (51).jpg", "/img/portfolio/img (52).jpg", 
"/img/portfolio/img (53).jpg", "/img/portfolio/img (54).jpg", "/img/portfolio/img (55).jpg", "/img/portfolio/img (56).jpg", 
"/img/portfolio/img (57).jpg", "/img/portfolio/img (58).jpg", "/img/portfolio/img (59).jpg", "/img/portfolio/img (60).jpg", 
"/img/portfolio/img (61).jpg", "/img/portfolio/img (62).jpg", "/img/portfolio/img (63).jpg"];
var currentImageIndex;

document.querySelectorAll(".thumbnail").forEach(function(thumbnail, index) {
	thumbnail.addEventListener("click", function() {
		currentImageIndex = index;
		showPopup();
	});
});

document.querySelector("#prev-button").addEventListener("click", function() {
	currentImageIndex--;
	if (currentImageIndex < 0) {
		currentImageIndex = images.length - 1;
	}
	showImage();
});

document.querySelector("#next-button").addEventListener("click", function() {
	currentImageIndex++;
	if (currentImageIndex >= images.length) {
		currentImageIndex = 0;
	}
	showImage();
});

document.querySelector("#close-button").addEventListener("click", function() {
	hidePopup();
});

function showPopup() {
	showImage();
	document.querySelector("#popup").style.display = "flex";
}

function hidePopup() {
	document.querySelector("#popup").style.display = "none";
}

function showImage() {
	document.querySelector("#image").src = images[currentImageIndex];
}



/* 비디오 팝업을 위한 코드 */

function openVideo1() {
	var videoUrl = "https://www.youtube.com/embed/epTzfG_GKE0";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo2() {
	var videoUrl = "https://www.youtube.com/embed/U5g2GPWwaAg";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo3() {
	var videoUrl = "https://www.youtube.com/embed/j568VCRMsRc";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo4() {
	var videoUrl = "https://www.youtube.com/embed/Fm5DBnH5Mn8";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo5() {
	var videoUrl = "https://www.youtube.com/embed/FVQYucflUl8";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo6() {
	var videoUrl = "https://www.youtube.com/embed/XpfPaOQ2kI0";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo7() {
	var videoUrl = "https://www.youtube.com/embed/7eklYNSwVcg";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo8() {
	var videoUrl = "https://www.youtube.com/embed/C-rJlzWIXIo";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo9() {
	var videoUrl = "https://www.youtube.com/embed/Y6-_bO1d3yQ";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo10() {
	var videoUrl = "https://www.youtube.com/embed/p-GB2dT1jsk";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo11() {
	var videoUrl = "https://www.youtube.com/embed/exqOqh45NiY";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo12() {
	var videoUrl = "https://www.youtube.com/embed/cjhtdG73dJ8";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo13() {
	var videoUrl = "https://www.youtube.com/embed/rPdv2s6ytbM";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo14() {
	var videoUrl = "https://www.youtube.com/embed/oixrSecaTRY";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo15() {
	var videoUrl = "https://www.youtube.com/embed/6N5pQBK4U3M";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo16() {
	var videoUrl = "https://www.youtube.com/embed/qrSGixFDE0Y";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  

  function closeVideo() {
	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "none";
	videoPlayer.src = "";
  }

  /* */