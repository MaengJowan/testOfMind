let list = { a: 0, b: 0, c: 0, d: 0 };
let count = 0;
let questions = [
  [
    "따스한 햇빛이 내리쬐는 요즘, 당신은 어디로 여행을 떠나고 싶은가요?",
    "-	기분좋은 바람을 느낄 수 있고 책 한권을 읽을 수 있는 혼자만의 장소",
    "a",
    "-	시원한 바다가 앞에 펼쳐져 있고, 마음껏 맨발로 뛰어다닐 수 있는 해변",
    "b",
  ],
  [
    "4)	당신이 선택한 장소를 누구와 함께 가고 싶은가요?",
    "-	사랑하는 애인",
    "c",
    "-	둘도 없는 친구들",
    "d",
  ],
  [
    "5)	당신이 선택한 사람과 즐거운 여행을 시작하려고 한다. 이번 여행에서 당신이 하고 싶은 일은?",
    "-	진정한 휴식",
    "a",
    "-	이곳 저곳 돌아다니면서 다양한 경험",
    "b",
  ],
  [
    "3)	여행을 계획하는 당신에게 누군가 무료로 숙소를 예약해 준다면 어떤 곳에서 머무시겠습니까? ",
    "-	분위기 좋은 곳에서 즐기는 호텔",
    "c",
    "-	여러 사람들과 한데 어울릴 수 있는 게스트하우스",
    "d",
  ],
  ["1)	당신의 성별은?", "남자", "", "여자", ""],
  ["2)	당신의 나이대는 어떤 지점인가요?", "20대   ", "", "30대   ", ""],
];
let resultIndex = ["ac", "ad", "bc", "bd"];
let result = {
  ac: [
    "한적한 장소",
    "<div class='resultMindTitle'>당신의 여행 성향</div><div class='resultMindContent'>당신은 조용한 곳을 좋아하군요!</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'>경남 양산 배내골 - 영남 알프스의 심장부로써 계곡과 산이 어우러져 한적하게 쉴 수 있는 공간<br/>경남 양산 임경대 - 양산 8경으로 한적하지만 멋진 뷰를 자랑함<br/>통영 동피랑 마을 / 서피랑 마을 - 한적하지만 동피랑과 서피랑의 분위가가 약간 다름<br/>울산 작천정계곡 - 캠핑장이 있고, 작천정 근처 야영장이 있어 가족과 분위기 내기 좋음<br/>언양 등억온천 - 진짜 온천 지대, 근처 무인텔 및 숙박시설이 많아 온천과 휴양을 동시에 하기 좋음<br/>경북 보경사 계곡 - 절<br/></div>",
  ],
  ad: [
    "한적한 장소",
    "<div class='resultMindTitle'>당신의 여행 성향</div><div class='resultMindContent'>당신은 조용한 곳을 좋아하군요!</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'>경남 양산 배내골 - 영남 알프스의 심장부로써 계곡과 산이 어우러져 한적하게 쉴 수 있는 공간<br/>경남 양산 임경대 - 양산 8경으로 한적하지만 멋진 뷰를 자랑함<br/>통영 동피랑 마을 / 서피랑 마을 - 한적하지만 동피랑과 서피랑의 분위가가 약간 다름<br/>울산 작천정계곡 - 캠핑장이 있고, 작천정 근처 야영장이 있어 가족과 분위기 내기 좋음<br/>언양 등억온천 - 진짜 온천 지대, 근처 무인텔 및 숙박시설이 많아 온천과 휴양을 동시에 하기 좋음<br/>경북 보경사 계곡 - 절<br/></div>",
  ],
  bc: [
    "한적한 장소",
    "<div class='resultMindTitle'>당신의 여행 성향</div><div class='resultMindContent'>당신은 조용한 곳을 좋아하군요!</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'>경남 양산 배내골 - 영남 알프스의 심장부로써 계곡과 산이 어우러져 한적하게 쉴 수 있는 공간<br/>경남 양산 임경대 - 양산 8경으로 한적하지만 멋진 뷰를 자랑함<br/>통영 동피랑 마을 / 서피랑 마을 - 한적하지만 동피랑과 서피랑의 분위가가 약간 다름<br/>울산 작천정계곡 - 캠핑장이 있고, 작천정 근처 야영장이 있어 가족과 분위기 내기 좋음<br/>언양 등억온천 - 진짜 온천 지대, 근처 무인텔 및 숙박시설이 많아 온천과 휴양을 동시에 하기 좋음<br/>경북 보경사 계곡 - 절<br/></div>",
  ],
  bd: [
    "한적한 장소",
    "<div class='resultMindTitle'>당신의 여행 성향</div><div class='resultMindContent'>당신은 조용한 곳을 좋아하군요!</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'>경남 양산 배내골 - 영남 알프스의 심장부로써 계곡과 산이 어우러져 한적하게 쉴 수 있는 공간<br/>경남 양산 임경대 - 양산 8경으로 한적하지만 멋진 뷰를 자랑함<br/>통영 동피랑 마을 / 서피랑 마을 - 한적하지만 동피랑과 서피랑의 분위가가 약간 다름<br/>울산 작천정계곡 - 캠핑장이 있고, 작천정 근처 야영장이 있어 가족과 분위기 내기 좋음<br/>언양 등억온천 - 진짜 온천 지대, 근처 무인텔 및 숙박시설이 많아 온천과 휴양을 동시에 하기 좋음<br/>경북 보경사 계곡 - 절<br/></div>",
  ],
};
function next() {
  let questArray = questions[count];
  if (questArray == null) {
    finishTest();
  } else {
    $(".question").html(questions[count][0]);
    $(".answerGroup").html(
      "<div class='answer' onclick='selectAnswer(\"" +
        questArray[2] +
        "\")'>" +
        questArray[1] +
        "</div>" +
        "<div class='answer' onclick='selectAnswer(\"" +
        questArray[4] +
        "\")'>" +
        questArray[3] +
        "</div>"
    );
    count++;
  }
}
let start = false;
function startToTest() {
  if (start) return;

  start = true;

  $(".title > p").css("opacity", "1");
  $(".title > p").css("animation-name", "ltr-fadeout-slide");
  $(".title > p").css("animation-delay", "0s");

  $(".middle > .bottomLogo").css("opacity", "0");

  $(".startBtn").css("opacity", "1");
  $(".startBtn").css(
    "animation",
    "ltr-fadeout-slide 1s ease 0s 1 normal forwards"
  );
  $("#testPage").css("opacity", "0");
  $("#testPage").css("display", "block");
  setTimeout(function () {
    $("#mainPage > .title").remove();
    $("#mainPage > .bottomLogo").remove();
  }, 1000);
  setTimeout(function () {
    $("#testPage").css("opacity", "1");
  }, 1500);

  setTimeout(function () {
    $(".question").css("width", "100%");
    setTimeout(function () {}, 1000);

    next();
  }, 3000);
}

function selectAnswer(tendency) {
  list[tendency]++;

  $(".answerGroup > div").css("opacity", "1");
  $(".answerGroup > div").css("width", "100%");
  $(".answer").css(
    "animation",
    "ltr-fadeout-slide 1s ease 0s 1 normal forwards"
  );

  next();
}

function finishTest() {
  $(".question").text("");
  $(".question").css("opacity", 1);

  $(".question").css("opacity", "0");
  $("#loadingPage").css("opacity", "0");
  $("#loadingPage").css("display", "block");
  setTimeout(function () {
    $("#loadingPage").css("opacity", "1");
  }, 300);

  $("#resultPage").css("opacity", "0");
  $("#resultPage").css("display", "block");
  setTimeout(function () {
    $("#testPage").remove();
    $("#loadingPage").css("opacity", "0");
    $("#resultPage").css("opacity", "1");

    setResult();

    setTimeout(function () {
      $("#loadingPage").remove();
    }, 300);
  }, 5000);
}

function setResult() {
  let character = (list.a > list.b ? "a" : "b") + (list.c > list.d ? "c" : "d");

  const set = result[character];

  $("#resultPage").html("<div class='title'>" + set[0] + "</div>" + set[1]);
}
