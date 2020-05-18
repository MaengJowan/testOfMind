let list = [];
let count = 0;
let questions = [
  ["당신의 성별은 무엇인가요?", "여자", "", "남자", ""],
  [
    "당신은 침대에서 자고 있고, 테이블 위에는 초대장이 놓여있습니다. 어떤 초대장일까요?",
    "유명작가의 작품을 감상 할 수 있는 미술관",
    "a",
    "도심 속에서 열리는 할로윈 파티",
    "b",
  ],
  [
    "아침이 되었습니다. 바쁜 일상에서 벗어나 모처럼 휴식을 맞이한 당신 무엇을 하실 건가요?",
    "그동안 만나지 못했던 친구들과 약속 잡기",
    "a",
    "집에서 이불 덮고 드라마나 영화 보기",
    "b",
  ],
  [
    "저녁이 되어서 친구에게 전화가 왔습니다. 하지만 당신은 무언가를 하고 있어서 받지 못했습니다. 무엇을 하고 있었을까요?",
    "한강을 바라보며 조깅",
    "a",
    "카페에서  독서 삼매경",
    "b",
  ],
  [
    "그날 밤 당신은 잠에 빠져듭니다. 당신은 어떤 꿈을 꾸고 있을까요?",
    "어린아이로 돌아가 과거에 자주 놀던 동네 놀이터에서 소꿉놀이를 하고 있다",
    "a",
    "어딘지 모르는 공간에 갇혀 그곳을 탈출하려 고민하고 있다",
    "b",
  ],
  [
    "아침 8시, 알람이 울립니다. 아침을 먹으려고 일찍 알람을 맞췄나 봅니다. 어떻게 하실 것인가요?",
    "아침을 먹는다",
    "",
    "늦잠을 잔다",
    "",
  ],
];
let resultIndex = [
  "aaaa",
  "aaab",
  "aaba",
  "abaa",
  "baaa",
  "aabb",
  "abab",
  "baab",
  "abba",
  "baba",
  "bbaa",
  "abbb",
  "babb",
  "bbab",
  "bbba",
  "bbbb",
];
let result = {
  aaaa: [
    "아싸인척하는 인싸",
    "<div class='resultMindTitle'><img src='./image/aaaa.jpg' alt='image'/></div><div class='resultMindContent'>혼자있기를 좋아하는 당신 그러나 당신주변에는 항상 친구들이 가득하군요. 혼자서도 잘노는 당신을 위해 혼자라도 새로운 도전을 할 수 있는 관광지를 추천합니다. 꽉찬 스케줄과 신나는 액티비티를 할 준비가 되셨나요?</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><ul><li>대천(짚라인,스카이바이크)</li> <li>단양(패러글라이딩)</li> <li>제주도(한라산)</li> <li>전주(한옥마을)</li> <li>강화도(루지)</li></ul><br/></div>",
  ],
  aaab: [
    "시간은 금이다",
    "<div class='resultMindTitle'><img src='./image/aaab.jpg' alt='image'/></div><div class='resultMindContent'>당신은 혼자있을때도 시간을 헛으로 쓰는 법이 없네요. 집에서도 밖에서도 항상 일을 벌이며 새로운 것을 추구합니다. 항상 새로운 것을 추구해 앞으로도 하고 싶은게 많은 당신을 위한 여행지를 추천합니다.</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><ul><li>강원도 홍천(알파카월드)</li> <li>춘천 강촌(구곡폭포)</li> <li>창녕(우포늪)</li> <li>영덕(블루로드, 1코스 5시간)</li> <li>영천별빛마을(패러글라이딩, 별자리)</li> <li>충북제천청풍랜드</li> </ul><br/></div>",
  ],
  aaba: [
    "걸어다니는 백과사전",
    "<div class='resultMindTitle'><img src='./image/aaba.jpg' alt='image'/></div><div class='resultMindContent'>이것저것 잡다한 지식을 많이 알고 있는 당신은 새로운 것을 배우고 알아가는 것을 좋아합니다. 당신의 지식은 많은 사람들이 문제를 해결하는것에도 도움을 주네요. 세상은 아직도 배울게 많습니다. 여행을 통해 새로운지식을 습득해보는 것은 어떨까요?</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><br/><ul><li>경주(보문단지)</li> <li>공주(공산성, 국립공주박물관)</li> <li>고성(공룡발자국)</li> <li>부여(백제문화단지)</li> <li>군산(근대문화유산마을)</li> </ul></div>",
  ],
  abaa: [
    "신선놀음형",
    "<div class='resultMindTitle'><img src='./image/abaa.jpg' alt='image'/></div><div class='resultMindContent'>많은 사람들과 함께 있는 환경에서 지쳐있는 당신은 혼자만의 시간을 가지고 휴식을 취하고 싶어하는 열망이 있습니다. 편안하게 휴식을 즐기고 마음의 여유를 쌓을 수 있는 장소를 추천합니다.</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><ul><li>아산온양온천</li> <li>부산(스파랜드샌텀시티)</li> <li>가평(아침고요수목원, 남이섬)</li> <li>대전(한밭수목원)</li> <li>서울(마곡서울식물원)</li> <li>보령용두캠핑장</li> </ul></div>",
  ],
  baaa: [
    "선천적인싸형",
    "<div class='resultMindTitle'><img src='./image/baaa.jpg' alt='image'/></div><div class='resultMindContent'>누구에게나 좋은 에너지를 주는 당신. 다른 사람과 여행을 갈때마다 남들과는 다른 리더쉽으로 눈에 띄네요. 몸도 생각도 바쁜 당신에게 활동적이며 의미있는 장소를 추천합니다.</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><ul><li>제주도(우도)</li> <li>인천월미도&차이나타운</li> <li>용인에버랜드</li> <li>부산해운대</li> <li>여수(엑스포해안공원)</li> <li>서울광장시장</li> </ul></div>",
  ],
  aabb: [
    "사막의오아시스형",
    "<div class='resultMindTitle'><img src='./image/aabb.jpg' alt='image'/></div><div class='resultMindContent'>남들과는 다르게 살아가려고 노력하는 당신. 여행지조차 평범함을 거부합니다. 자신에게 많은 애정을 가지고 혼자만의 시간을 가질수 있는 장소를 추천합니다.</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><ul><li>파주DMZ</li> <li>원주뉴지엄산</li> <li>남해독일마을</li> <li>가평쁘띠프랑스</li> <li>제주도성읍민속마을</li> <li>경북(백두대간 협곡열차)</li></ul></div>",
  ],
  abba: [
    "귀하게자란 부자집자제형",
    "<div class='resultMindTitle'><img src='./image/abba.jpg' alt='image'/></div><div class='resultMindContent'>돈에서 여유가 나온다는 말을 아는 당신. 여행을 통하여 즐거움 뿐만 아니라 교양과 지식을 얻는 것을 원하네요. 단순한 추억여행을 넘어선 새로운것을 배우는 장소를 당신에게 추천합니다.</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><ul><li>영주 무성마을</li> <li>광양 와인동굴</li> <li>강릉 대관령옛길</li> <li>순천 순천만자연생태공원</li> <li>남양주 다산 정약용 생가</li> <li>전남 구례 사성암</li> <li>낙산사(템플스테이)</li></ul></div>",
  ],
  bbaa: [
    "아낌없이주는나무형",
    "<div class='resultMindTitle'><img src='./image/bbaa.jpg' alt='image'/></div><div class='resultMindContent'>자신이 앞에서 나서는 것보다 남들을 도와주어 그들이 잘되었을때 행복감을 느끼는 당신. 이번 여행은 친구들과 여행을 떠나 다같이 편하게 이야기를 나누며 솔직한 이야기를 할 수 있는 장소를 추천합니다.</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><ul><li>안동(하회마을)</li> <li>인천차이나타운</li> <li>외도보타니아</li> <li>아산지중해마을</li> <li>전북 낙원(국립민속국악원)</li> <li>청주수암골벽화마을</li> <li>강원도홍천비발디파크</li></ul></div>",
  ],
  baab: [
    "인생은 한방 모험가형",
    "<div class='resultMindTitle'><img src='./image/baab.jpg' alt='image'/></div><div class='resultMindContent'>대담하면서 적극적인 자세로 항상 임하는 당신. 여행에 임할때도 최선을 다합니다. 남들에게 새로운 경험을 주고싶어하는 당신에게 스펙타클한 장소를 추천합니다.</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><ul><li>제주도서귀포시(스쿠버다이빙)</li> <li>강원도양양해담마을(카약, 사격, 뗏목타기)</li> <li>경남양산루지</li> <li>경북경주경주월드</li> <li>대구이월드(스카이점프)</li> <li>경남창원 엣지워크</li> <li>파주마장호수(출렁다리)</li> </ul></div>",
  ],
  baba: [
    "놀고싶은 공부벌레형",
    "<div class='resultMindTitle'><img src='./image/baba.jpg' alt='image'/></div><div class='resultMindContent'>친구들과의 여행 자체에서 즐거움을 느끼지만 여행 속에서도 많은 경험과 교육적인 측면을 중요시 생각하는 당신. 단순 여행이 아닌 여행을 통해서도 많은 것을 배울수 있는 장소를 추천합니다.</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><ul><li>인천강화도</li> <li>서울 종로(서촌마을)</li> <li>경상북도문경(문경새재도립공원)</li> <li>경기도여주(박물관)</li> <li>경상북도경주</li> </ul></div>",
  ],
  abab: [
    "고독한 욕심꾸러기형",
    "<div class='resultMindTitle'><img src='./image/abab.jpg' alt='image'/></div><div class='resultMindContent'>혼자서 많은 것을 가지고 싶어하는 당신. 항상 계획적이고 무엇을 하든 신중한 성격이 여행지를 선택하는 과정에서도 드러나네요. 그런 당신에게 혼자 여행을 떠나지만 많은 체험을 하고 편안하게 쉴 수도 있는 장소를 추천합니다.</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><ul><li>원주소금산(출렁다리)</li> <li>경주 양남 주상절리 ‘파도소리길</li> <li>동해시 천곡황금박쥐동굴</li> <li>인제군(아이언웨이&스캐드다이빙)</li> <li>함양악양둑방(경비행기체험)</li> <li>양양서피비치(서핑전용해변)</li> <li>강원인제나르샤파크(번지점프)</li> </ui></div>",
  ],
  bbba: [
    "유유자적양반형",
    "<div class='resultMindTitle'><img src='./image/bbba.jpg' alt='image'/></div><div class='resultMindContent'>사람들과 어울리는 것을 좋아하지만 그 속에서도 여유로움을 느끼는 것을 좋아하는 당신. 사람들이 당신의 여유로움을 보고 그들 또한 여유를 즐기게 만듭니다. 그런 당신에게 천천히 걷는 것이나 스스로에 대해 생각할 수 있는 시간을 가질 수 있는 장소를 추천합니다.</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><ul><li>낙산사(템플스테이)</li> <li>포항 서산서원</li> <li>수원 화성</li> <li>파주 판문점</li> <li>고성 통일전망타워</li> <li>경상북도 독도</li> </ul></div>",
  ],
  bbab: [
    "천진난만어린이형",
    "<div class='resultMindTitle'><img src='./image/bbab.jpg' alt='image'/></div><div class='resultMindContent'>가만히 앉아서 공부하는 것참을 수가 없는 당신. 항상 몸을 움직여야 직성이 풀리시지는 않으신가요? 남들과는 다르고 특별한 여행지를 원하는 당신은 단순히 보고 배우는 여행은 원하지 않아요. 신나게 액티비티를 즐기며, 힐링하는 여행지가 있다면 당신에게 딱 어울릴 것 같군요.</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><ul><li>제주빅볼랜드</li> <li>전남여수금오도(스노쿨링,캠핑)</li> <li>부산요트투어</li> <li>통영어드벤처타워</li> <li>경북경주(패러글라이딩)</li> <li>경남하동(짚라인)</li> <li>제주도추자도</li> </ul></div>",
  ],
  babb: [
    "완벽주의자리더형",
    "<div class='resultMindTitle'><img src='./image/babb.jpg' alt='image'/></div><div class='resultMindContent'>가장 완벽한 여행을 위해서 하루종일 인터넷 서핑도 마다하지 않는 당신은 모두가 원하는 여행지를 찾기 위해 항상 노력하는 사람이군요. 힐링은 집에서나 하는 것이라 생각하는 당신에게 유익하고 볼거리가 가득한 여행지를 추천합니다.</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><ul><li>춘천산토리니</li> <li>부여백제문화단지</li> <li>인천고려천도공원</li> <li>전라북도군산(경암동철길마을)</li> <li>강원도정선화암동굴</li> </ul></div>",
  ],
  abbb: [
    "인생에 답을 찾으려는 몽상가형",
    "<div class='resultMindTitle'><img src='./image/abbb.jpg' alt='image'/></div><div class='resultMindContent'>당신은 항상 매사에 진지한 모습으로 때로는 날카로운 지적을 할 수 있는 사람입니다. 혼자서 여가시간을 알차게 보내는 것을 좋아해 집에서 영화나 책을 보며 하루종일을 거뜬히 보낼 수 있군요. 혼자 사색하고, 고민하는 것을 좋아하는 당신에게 추천하는 여행지입니다.</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><ul><li>부산보수동(책방골목)</li> <li>강릉노추산모정의돌탑길</li> <li>수원 방화수류정</li> <li>부산 168계단</li> <li>영월 해미읍성</li> <li>안동 도산서원</li> </ul></div>",
  ],
  bbbb: [
    "낙천적이고 도전적인 명상가",
    "<div class='resultMindTitle'><img src='./image/bbbb.jpg' alt='image'/></div><div class='resultMindContent'>당신은 사람들과 어울리기를 좋아하는 사람입니다. 열심히 움직이는 것보다는 지친 일상을 뒤로 한 채 힐링을 즐기고 싶어하는 군요. 힐링을 즐기면서도 배움의 자세를 잃지 않으려는 당신에게 추천해줄 여행지입니다</div><div class='resultTravelTitle'>당신의 맞춤 여행지</div><div class='resultTravelContent'><ul><li>제주 한남시험림</li> <li>강원도 삼화사(템플스테이)</li> <li>상주경천대 국민관광지</li> <li>단양 팔경</li> <li>무안 늘어지마을</li> <li>강원도 영월 선임마을</li> </ul></div>",
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
    //testPage fade in
    count++;
    $(".header").html(`<img src='image/list${count}.jpg' />`);
    $(".header").css("opacity", "1");
    $(".question").css("opacity", "1");
    $(".answerGroup").css("opacity", "1");
    setTimeout(function () {
      $("#testPage").css("opacity", "1");
    }, 2100);
  }
}
let start = false;

function startToTest() {
  if (start) return;

  start = true;

  $(".title > p").css("opacity", "1");
  $(".title > p").css("animation-name", "ltr-fadeout-slide");
  $(".title > p").css("animation-delay", "0s");

  $(".middle > .bottomLogo").css("opacity", "1");
  $(".middle > .bottomLogo").css("animation-name", "ltr-fadeout-slide");
  $(".middle > .bottomLogo").css("opacity", "0");

  $(".startBtn").css("opacity", "1");
  $(".startBtn").css(
    "animation",
    "ltr-fadeout-slide 1s ease 0s 1 normal forwards"
  );
  $("#testPage").css("opacity", "0");
  $("#testPage").css("display", "flex");
  $("#testPage").css("flex-direction", "column");
  $(".question").css("opacity", "1");
  $(".answerGroup").css("opacity", "1");
  setTimeout(function () {
    $(".middle").remove();
    $("#mainPage > .title").remove();
    $("#mainPage > .bottomLogo").remove();
  }, 1000);
  setTimeout(function () {
    $("#testPage").css("animation-name", "ltr-fadein-slide");
    $("#testPage").css("animation-delay", "1s");
    $("#testPage").css("opacity", "1");
    next();
  }, 1100);
}

function selectAnswer(tendency) {
  list.push(tendency);

  //선택하면 사라짐
  $(".question").css("opacity", "0");
  $(".answerGroup").css("opacity", "0");
  $(".header").css("opacity", "0");

  setTimeout(function () {
    //요소 투명도 0
    $("#testPage").css("opacity", "0");
  }, 500);

  setTimeout(function () {
    next();
  }, 1500);
}

function finishTest() {
  $(".question").css("opacity", 1);
  $(".question").css("opacity", "0");
  $(".answerGroup").css("opacity", 1);
  $(".answerGroup").css("opacity", "0");
  $(".header").css("opacity", "1");
  $(".header").css("opacity", "0");

  $("#loadingPage").css("opacity", "0");
  $("#loadingPage").css("display", "block");
  setTimeout(function () {
    $("#loadingPage").css("opacity", "1");
  }, 300);

  $("#resultPage").css("opacity", "0");
  $("#resultPage").css("display", "block");
  setTimeout(function () {
    $("#testPage").remove();
    $("#loadingPage").remove();
    $("#loadingPage").css("opacity", "0");
    $("#resultPage").css("opacity", "1");

    setResult();
  }, 5000);
}
const link = "https://maengjowan.github.io/testOfMind/";
function setResult() {
  let character = list[1] + list[2] + list[3] + list[4];
  console.log("character : " + character);

  const set = result[character];

  $("#resultPage").html(
    "<div class='title'>" +
      set[0] +
      "</div>" +
      set[1] +
      "<div class='trab'><div class='button-container'><button class='button' onclick='location.reload()''>다시하기</button><button class='button' onclick='self.close()'>그만하기</button></div><div class='info'><div><p>더 많은 여행정보를 알고 싶으시면?</p></div><div><a href='http://trab.co.kr'><p><i class='fas fa-home'></i>Trab.co.kr</p></a><button class='btn clipboard' id='clipboard' data-clipboard-text='https://maengjowan.github.io/testOfMind/'>링크 공유하기</button><a href='https://www.youtube.com/channel/UCWBlmEW8cq3CM2fGGNYH4gA'><p><i class='fab fa-youtube'></i>Trab Youtube</p></a><a href='https://instagram.com/trab_insta?igshid=u0xr9ldg0pj3'><p><i class='fab fa-instagram'></i>Trab instagram</p></a></div></div></div></div>"
  );
  
  document.getElementById('clipboard').addEventListener("click", clipboard());
}
function clipboard(){
  var btn = new Clipboard(".clipboard");
    btn.on('success', function(e) {
        console.log(e);
        confirm("클립보드에 복사되었습니다.");
    });
    btn.on('error', function(e) {
      console.log(e);
      alert("Ctrl + C 를 누르면 복사가 완료됩니다.");
    });
}