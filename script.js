  const cityData = {
    seoul: {
      name: "서울",
      cardImage: "images/city-cards/seoul.png",
      desc: "조선의 수도이자 오늘날 대한민국의 중심 도시입니다. 궁궐, 왕실 의례, 근현대사의 기억을 함께 살펴볼 수 있습니다.",
      mapText: "서울 약도",
      heritage: [
        {
          name: "경복궁",
          x: "50%",
          y: "20%",
          cardImage: "images/heritage-cards/seoul-gyeongbokgung.png"
        },
        {
          name: "창덕궁",
          x: "60%",
          y: "20%",
          cardImage: "images/heritage-cards/seoul-changdeokgung.png"
        },
        {
          name: "종묘",
          x: "64%",
          y: "25%",
          cardImage: "images/heritage-cards/seoul-jongmyo.png"
        },
        {
          name: "덕수궁",
          x: "49%",
          y: "33%",
          cardImage: "images/heritage-cards/seoul-deoksugung.png"
        },
        {
          name: "서대문형무소역사관",
          x: "25%",
          y: "22%",
          cardImage: "images/heritage-cards/seoul-seodaemun-prison-history-hall.png"
        }
      ]
    },

    gyeongju: {
      name: "경주",
      cardImage: "images/city-cards/gyeongju.png",
      desc: "신라 천년의 수도로, 고대 국가의 왕릉, 불교문화, 과학기술, 궁궐 유적을 함께 살펴볼 수 있는 도시입니다.",
      mapText: "경주 약도",
      heritage: [
        {
          name: "불국사",
          x: "96%",
          y: "75%",
          cardImage: "images/heritage-cards/gyeongju-bulguksa.png"
        },
        {
          name: "석굴암",
          x: "98%",
          y: "70%",
          cardImage: "images/heritage-cards/gyeongju-seokguram.png"
        },
        {
          name: "대릉원",
          x: "34%",
          y: "44%",
          cardImage: "images/heritage-cards/gyeongju-daereungwon.png"
        },
        {
          name: "첨성대",
          x: "39%",
          y: "46%",
          cardImage: "images/heritage-cards/gyeongju-cheomseongdae.png"
        },
        {
          name: "동궁과 월지",
          x: "42%",
          y: "45%",
          cardImage: "images/heritage-cards/gyeongju-donggung-wolji.png"
        }
      ]
    },

    beijing: {
      name: "베이징",
      cardImage: "images/city-cards/beijing.png",
      desc: "중국 왕조의 수도로, 황제 권력, 제국의 의례, 궁궐 공간, 근현대 정치의 상징을 함께 살펴볼 수 있습니다.",
      mapText: "베이징 약도",
      heritage: [
        {
          name: "자금성",
          x: "44%",
          y: "60%",
          cardImage: "images/heritage-cards/beijing-forbidden-city.png"
        },
        {
          name: "천단",
          x: "46%",
          y: "65%",
          cardImage: "images/heritage-cards/beijing-temple-of-heaven.png"
        },
        {
          name: "이화원",
          x: "35%",
          y: "53%",
          cardImage: "images/heritage-cards/beijing-summer-palace.png"
        },
        {
          name: "만리장성",
          x: "57%",
          y: "10%",
          cardImage: "images/heritage-cards/beijing-great-wall.png"
        },
        {
          name: "천안문광장",
          x: "44%",
          y: "63%",
          cardImage: "images/heritage-cards/beijing-tiananmen-square.png"
        }
      ]
    },

    shanghai: {
      name: "상하이",
      cardImage: "images/city-cards/shanghai.png",
      desc: "근대 동아시아의 개항과 도시 변화를 보여주는 대표적인 도시입니다. 제국주의, 조계, 임시정부, 근대 도시 문화를 함께 살펴볼 수 있습니다.",
      mapText: "상하이 약도",
      heritage: [
        {
          name: "와이탄",
          x: "65%",
          y: "45%",
          cardImage: "images/heritage-cards/shanghai-bund.png"
        },
        {
          name: "예원",
          x: "63%",
          y: "48%",
          cardImage: "images/heritage-cards/shanghai-yuyuan-garden.png"
        },
        {
          name: "대한민국 임시정부 청사",
          x: "59%",
          y: "48%",
          cardImage: "images/heritage-cards/shanghai-korean-provisional-government.png"
        },
        {
          name: "루쉰공원",
          x: "63%",
          y: "41%",
          cardImage: "images/heritage-cards/shanghai-luxun-park.png"
        },
        {
          name: "프랑스 조계지",
          x: "55%",
          y: "51%",
          cardImage: "images/heritage-cards/shanghai-french-concession.png"
        }
      ]
    },

    xian: {
      name: "시안",
      cardImage: "images/city-cards/xian.png",
      desc: "중국 고대 왕조의 수도였던 도시로, 진·한·당 제국의 유산과 실크로드의 출발점을 함께 살펴볼 수 있습니다.",
      mapText: "시안 약도",
      heritage: [
        {
          name: "진시황릉 병마용",
          x: "87%",
          y: "25%",
          cardImage: "images/heritage-cards/xian-terracotta-army.png"
        },
        {
          name: "시안성벽",
          x: "44%",
          y: "43%",
          cardImage: "images/heritage-cards/xian-city-wall.png"
        },
        {
          name: "대안탑",
          x: "47%",
          y: "53%",
          cardImage: "images/heritage-cards/xian-giant-wild-goose-pagoda.png"
        },
        {
          name: "비림박물관",
          x: "44%",
          y: "49%",
          cardImage: "images/heritage-cards/xian-beilin-museum.png"
        },
        {
          name: "대명궁 유적",
          x: "46%",
          y: "40%",
          cardImage: "images/heritage-cards/xian-daming-palace.png"
        }
      ]
    },

    tokyo: {
      name: "도쿄",
      cardImage: "images/city-cards/tokyo.png",
      desc: "에도 시대의 정치 중심지에서 근대 일본의 수도로 변화한 도시입니다. 막부, 근대화, 국가 의례, 도시 문화를 함께 살펴볼 수 있습니다.",
      mapText: "도쿄 약도",
      heritage: [
        {
          name: "에도성 터",
          x: "54%",
          y: "41%",
          cardImage: "images/heritage-cards/tokyo-edo-castle-site.png"
        },
        {
          name: "센소지",
          x: "66%",
          y: "32%",
          cardImage: "images/heritage-cards/tokyo-sensoji.png"
        },
        {
          name: "메이지 신궁",
          x: "39%",
          y: "45%",
          cardImage: "images/heritage-cards/tokyo-meiji-shrine.png"
        },
        {
          name: "도쿄국립박물관",
          x: "60%",
          y: "32%",
          cardImage: "images/heritage-cards/tokyo-national-museum.png"
        },
        {
          name: "니혼바시",
          x: "61%",
          y: "45%",
          cardImage: "images/heritage-cards/tokyo-nihonbashi.png"
        }
      ]
    },

    kyoto: {
      name: "교토",
      cardImage: "images/city-cards/kyoto.png",
      desc: "오랫동안 일본의 수도였던 도시로, 귀족 문화, 불교문화, 무사 정권의 흔적, 전통 신앙을 함께 살펴볼 수 있습니다.",
      mapText: "교토 약도",
      heritage: [
        {
          name: "기요미즈데라",
          x: "80%",
          y: "53%",
          cardImage: "images/heritage-cards/kyoto-kiyomizudera.png"
        },
        {
          name: "금각사",
          x: "25%",
          y: "11%",
          cardImage: "images/heritage-cards/kyoto-kinkakuji.png"
        },
        {
          name: "은각사",
          x: "93%",
          y: "18%",
          cardImage: "images/heritage-cards/kyoto-ginkakuji.png"
        },
        {
          name: "후시미 이나리 신사",
          x: "78%",
          y: "82%",
          cardImage: "images/heritage-cards/kyoto-fushimi-inari-shrine.png"
        },
        {
          name: "니조성",
          x: "51%",
          y: "32%",
          cardImage: "images/heritage-cards/kyoto-nijo-castle.png"
        }
      ]
    },

    nagasaki: {
      name: "나가사키",
      cardImage: "images/city-cards/nagasaki.png",
      desc: "일본의 대외 교류와 근현대사의 흔적을 함께 볼 수 있는 항구 도시입니다. 교역, 기독교, 원폭과 평화의 기억을 함께 살펴볼 수 있습니다.",
      mapText: "나가사키 약도",
      heritage: [
        {
          name: "데지마",
          x: "76%",
          y: "74%",
          cardImage: "images/heritage-cards/nagasaki-dejima.png"
        },
        {
          name: "오우라 천주당",
          x: "75%",
          y: "87%",
          cardImage: "images/heritage-cards/nagasaki-oura-church.png"
        },
        {
          name: "평화공원",
          x: "65%",
          y: "30%",
          cardImage: "images/heritage-cards/nagasaki-peace-park.png"
        },
        {
          name: "나가사키 원폭자료관",
          x: "66%",
          y: "33%",
          cardImage: "images/heritage-cards/nagasaki-atomic-bomb-museum.png"
        },
        {
          name: "글로버원",
          x: "72%",
          y: "85%",
          cardImage: "images/heritage-cards/nagasaki-glover-garden.png"
        }
      ]
    },

    taipei: {
      name: "타이베이",
      cardImage: "images/city-cards/taipei.png",
      desc: "타이완의 중심 도시로, 중화 문화의 유산, 사원 문화, 식민지 경험, 냉전 이후의 정치적 기억을 함께 살펴볼 수 있습니다.",
      mapText: "타이베이 약도",
      heritage: [
        {
          name: "국립고궁박물원",
          x: "57%",
          y: "56%",
          cardImage: "images/heritage-cards/taipei-national-palace-museum.png"
        },
        {
          name: "용산사",
          x: "44%",
          y: "74%",
          cardImage: "images/heritage-cards/taipei-longshan-temple.png"
        },
        {
          name: "중정기념당",
          x: "51%",
          y: "75%",
          cardImage: "images/heritage-cards/taipei-chiang-kai-shek-memorial-hall.png"
        },
        {
          name: "보피랴오 역사거리",
          x: "47%",
          y: "76%",
          cardImage: "images/heritage-cards/taipei-bopiliao-historic-block.png"
        },
        {
          name: "총통부 건물",
          x: "48%",
          y: "73%",
          cardImage: "images/heritage-cards/taipei-presidential-office-building.png"
        }
      ]
    }
  };

  const cityMapImages = {
    seoul: "images/city-maps/seoul-map.png",
    gyeongju: "images/city-maps/gyeongju-map.png",
    beijing: "images/city-maps/beijing-map.png",
    shanghai: "images/city-maps/shanghai-map.png",
    xian: "images/city-maps/xian-map.png",
    tokyo: "images/city-maps/tokyo-map.png",
    kyoto: "images/city-maps/kyoto-map.png",
    nagasaki: "images/city-maps/nagasaki-map.png",
    taipei: "images/city-maps/taipei-map.png"
  };

let selectedCity = null;

const scrollButtons = document.querySelectorAll("[data-scroll-target]");
const cityButtons = document.querySelectorAll(".city-button");
const cityTitle = document.querySelector("#selected-city-title");
const cityMapText = document.querySelector("#city-map-text");
const cityMapPanel = document.querySelector(".city-map-placeholder");
const heritageList = document.querySelector("#heritage-list");
const popup = document.querySelector("#popup");
const popupContent = document.querySelector(".popup-content");
const popupTitle = document.querySelector("#popup-title");
const popupZoomGuide = document.querySelector("#popup-zoom-guide");
const popupImageStage = document.querySelector("#popup-image-stage");
const popupImage = document.querySelector("#popup-image");
const popupText = document.querySelector("#popup-text");
const popupClose = document.querySelector("#popup-close");
const cityCardButton = document.querySelector("[data-card='city']");
const faqItems = document.querySelectorAll(".faq-item");
const aiButton = document.querySelector("#ai-button");

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scrollTarget);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

cityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cityKey = button.dataset.city;
    const city = cityData[cityKey];

    if (!city) return;

    selectedCity = city;
    cityTitle.textContent = city.name;
    cityMapText.textContent = city.mapText;
    cityMapPanel.dataset.city = cityKey;

    const mapImage = cityMapImages[cityKey];

    if (mapImage) {
      cityMapPanel.style.backgroundImage = `url("${mapImage}")`;
      cityMapPanel.classList.add("has-map-image");
    } else {
      cityMapPanel.style.backgroundImage = "";
      cityMapPanel.classList.remove("has-map-image");
    }

    cityButtons.forEach((cityButton) => {
      cityButton.classList.toggle("active", cityButton.dataset.city === cityKey);
    });

    renderHeritageButtons(city);
    document.querySelector("#city-section").scrollIntoView({ behavior: "smooth" });
  });
});

function renderHeritageButtons(city) {
  heritageList.innerHTML = "";

  city.heritage.forEach((heritage) => {
    const button = document.createElement("button");
    button.className = "heritage-button";
    button.textContent = heritage.name;
    button.dataset.label = heritage.name;
    button.setAttribute("aria-label", heritage.name);
    button.style.setProperty("--x", heritage.x);
    button.style.setProperty("--y", heritage.y);

    button.addEventListener("click", () => {
      openPopup(
        heritage.name,
        "",
        heritage.cardImage
      );
    });

    heritageList.appendChild(button);
  });
}
cityCardButton.addEventListener("click", () => {
  if (!selectedCity) {
    openPopup(
      "도시를 먼저 선택해주세요",
      "동아시아 지도에서 도시를 선택하면 해당 도시의 소개 그림카드를 열 수 있습니다."
    );
    return;
  }

  openPopup(
    `${selectedCity.name} 도시 소개`,
    "",
    selectedCity.cardImage
  );
});

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

aiButton.addEventListener("click", () => {
  openPopup(
    "AI 여행 계획 파트너",
    "이 버튼은 나중에 실제 AI 대화창 링크와 연결할 수 있습니다. 지금은 임시 안내 팝업입니다."
  );
});

popupClose.addEventListener("click", closePopup);

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    closePopup();
  }
});

function openPopup(title, text, imageSrc = "") {
  popupTitle.textContent = title;
  popupText.textContent = text;

  resetImageZoom();

  if (imageSrc) {
    popupContent.classList.add("image-mode");
    popupImage.src = imageSrc;
    popupImage.alt = title;
    popupImageStage.hidden = false;
    popupText.hidden = true;
    popupZoomGuide.hidden = false;

    popupImage.onload = () => {
      fitImageToStage();
    };
  } else {
    popupContent.classList.remove("image-mode");
    popupImage.src = "";
    popupImage.alt = "";
    popupImageStage.hidden = true;
    popupText.hidden = false;
    popupZoomGuide.hidden = true;
  }

  popup.classList.add("active");
  popup.setAttribute("aria-hidden", "false");
}

function closePopup() {
  popup.classList.remove("active");
  popup.setAttribute("aria-hidden", "true");
  popupContent.classList.remove("image-mode");
  resetImageZoom();
}

let imageFitScale = 1;
let imageZoom = 1;
let imageX = 0;
let imageY = 0;
let isDraggingImage = false;
let dragStartX = 0;
let dragStartY = 0;
let startImageX = 0;
let startImageY = 0;

const activePointers = new Map();
let pinchStartDistance = 0;
let pinchStartZoom = 1;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function applyImageTransform() {
  const totalScale = imageFitScale * imageZoom;
  popupImage.style.transform =
    `translate(-50%, -50%) translate(${imageX}px, ${imageY}px) scale(${totalScale})`;
}

function resetImageZoom() {
  imageZoom = 1;
  imageX = 0;
  imageY = 0;
  isDraggingImage = false;
  activePointers.clear();
  applyImageTransform();
}

function fitImageToStage() {
  if (!popupImage.naturalWidth || !popupImageStage.clientWidth) return;

  const stageWidth = popupImageStage.clientWidth;
  const stageHeight = popupImageStage.clientHeight;

  imageFitScale = Math.min(
    stageWidth / popupImage.naturalWidth,
    stageHeight / popupImage.naturalHeight,
    1
  );

  resetImageZoom();
}

popupImageStage.addEventListener(
  "wheel",
  (event) => {
    if (popupImageStage.hidden) return;

    event.preventDefault();

    const zoomStep = event.deltaY > 0 ? -0.12 : 0.12;
    imageZoom = clamp(imageZoom + zoomStep, 1, 5);

    if (imageZoom === 1) {
      imageX = 0;
      imageY = 0;
    }

    applyImageTransform();
  },
  { passive: false }
);

popupImageStage.addEventListener("pointerdown", (event) => {
  if (popupImageStage.hidden) return;

  popupImageStage.setPointerCapture(event.pointerId);
  activePointers.set(event.pointerId, {
    x: event.clientX,
    y: event.clientY
  });

  if (activePointers.size === 1) {
    isDraggingImage = true;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    startImageX = imageX;
    startImageY = imageY;
  }

  if (activePointers.size === 2) {
    const points = Array.from(activePointers.values());
    pinchStartDistance = getDistance(points[0], points[1]);
    pinchStartZoom = imageZoom;
    isDraggingImage = false;
  }
});

popupImageStage.addEventListener("pointermove", (event) => {
  if (popupImageStage.hidden || !activePointers.has(event.pointerId)) return;

  activePointers.set(event.pointerId, {
    x: event.clientX,
    y: event.clientY
  });

  if (activePointers.size === 2) {
    const points = Array.from(activePointers.values());
    const currentDistance = getDistance(points[0], points[1]);

    if (pinchStartDistance > 0) {
      imageZoom = clamp(
        pinchStartZoom * (currentDistance / pinchStartDistance),
        1,
        5
      );

      if (imageZoom === 1) {
        imageX = 0;
        imageY = 0;
      }

      applyImageTransform();
    }

    return;
  }

  if (isDraggingImage && imageZoom > 1) {
    imageX = startImageX + event.clientX - dragStartX;
    imageY = startImageY + event.clientY - dragStartY;
    applyImageTransform();
  }
});

popupImageStage.addEventListener("pointerup", endPointer);
popupImageStage.addEventListener("pointercancel", endPointer);
popupImageStage.addEventListener("pointerleave", endPointer);

function endPointer(event) {
  activePointers.delete(event.pointerId);

  if (activePointers.size === 0) {
    isDraggingImage = false;
  }

  if (activePointers.size < 2) {
    pinchStartDistance = 0;
  }
}

function getDistance(pointA, pointB) {
  const dx = pointA.x - pointB.x;
  const dy = pointA.y - pointB.y;
  return Math.sqrt(dx * dx + dy * dy);
}

/* =========================
   BGM Playlist Control
========================= */

const bgmAudio = document.querySelector("#bgm-audio");
const bgmButton = document.querySelector("#bgm-button");
const bgmNextButton = document.querySelector("#bgm-next-button");
const bgmTitle = document.querySelector("#bgm-title");

const bgmPlaylist = [
  {
    title: "여행 준비",
    src: "audio/travel-bgm-1.mp3"
  },
  {
    title: "도시 산책",
    src: "audio/travel-bgm-2.mp3"
  },
  {
    title: "역사 기행",
    src: "audio/travel-bgm-3.mp3"
  }
];

let currentBgmIndex = 0;
let isBgmPlaying = false;

if (bgmAudio && bgmButton && bgmNextButton && bgmTitle) {
  bgmAudio.volume = 0.28;
  bgmAudio.src = bgmPlaylist[currentBgmIndex].src;
  bgmTitle.textContent = `BGM: ${bgmPlaylist[currentBgmIndex].title}`;

  bgmButton.addEventListener("click", async () => {
    if (!isBgmPlaying) {
      await playBgm();
    } else {
      pauseBgm();
    }
  });

  bgmNextButton.addEventListener("click", async () => {
    await playNextBgm();
  });

  bgmAudio.addEventListener("ended", async () => {
    await playNextBgm();
  });
}

async function playBgm() {
  try {
    await bgmAudio.play();

    isBgmPlaying = true;
    bgmButton.textContent = "♪ BGM 끄기";
    bgmButton.classList.add("is-playing");
    bgmButton.setAttribute("aria-pressed", "true");
    bgmTitle.textContent = `BGM: ${bgmPlaylist[currentBgmIndex].title}`;
  } catch (error) {
    console.warn("BGM 재생이 차단되었거나 파일을 불러오지 못했습니다.", error);
    bgmTitle.textContent = "BGM 재생 불가";
  }
}

function pauseBgm() {
  bgmAudio.pause();

  isBgmPlaying = false;
  bgmButton.textContent = "♪ 여행 BGM 켜기";
  bgmButton.classList.remove("is-playing");
  bgmButton.setAttribute("aria-pressed", "false");
  bgmTitle.textContent = `BGM 일시정지: ${bgmPlaylist[currentBgmIndex].title}`;
}

async function playNextBgm() {
  currentBgmIndex = (currentBgmIndex + 1) % bgmPlaylist.length;
  bgmAudio.src = bgmPlaylist[currentBgmIndex].src;
  bgmTitle.textContent = `BGM: ${bgmPlaylist[currentBgmIndex].title}`;

  if (isBgmPlaying) {
    await playBgm();
  }
}