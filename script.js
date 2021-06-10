var slideIndex = [1, 1, 1, 1, 1, 1]
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"]

const playlistContainer = document.getElementById('playlist-container')
const newVideosContainer = document.getElementById('new-videos-container')
const slideshowsContainer = document.getElementById('slideshows-container')
const handoutsContainer = document.getElementById('handouts-container')
// const hamburger = document.querySelector(".hamburger")
// const navMenu = document.querySelector(".nav-menu")
// const navLink = document.querySelectorAll(".nav-link")

const playlists = [
  {
    name: '公民入籍100題 (講解)',
    label: '共9集',
    color: 'bl',
    url: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc7UDuZA8Nj657FRfUPvK64F'
  },
  {
    name: '公民入籍100題 (測驗)',
    label: '共3集',
    color: 'bl',
    url: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc7UDuZA8Nj657FRfUPvK64F'
  },
  {
    name: '初級英文語法',
    label: '共5集',
    color: 'rd',
    url: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc6Jue0UT6B08LmOLP1gD3KX'
  },
  {
    name: '初級英文聽力',
    label: '共5集',
    color: 'rd',
    url: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc5pDK_0ITg2WI7DTREd5dpw'
  },
  {
    name: 'N400申請表格',
    label: '共20集',
    color: 'gr',
    url: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc63iTNzMqh2FXdN_u3CeXnA'
  },
  {
    name: 'N400關鍵單字',
    label: '共5集',
    color: 'gr',
    url: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc63yD30Yk0RVICtOteRTNft'
  },
]
const newVideos = [
  {
    name: '英文電話用語',
    label: '初級英文聽力5',
    color: 'rd',
    url: 'https://www.youtube.com/watch?v=2sHA5cXAlUY'
  },
  {
    name: '常用英文道歉語',
    label: '初級英文聽力4',
    color: 'rd',
    url: 'https://www.youtube.com/watch?v=ybhNDkBZsd8'
  },
  {
    name: '定冠詞、不定冠詞',
    label: '初級英文語法3',
    color: 'rd',
    url: 'https://www.youtube.com/watch?v=E74ev8WdEOI'
  }
]
const slideshows = [
  {
    name: 'mySlides1',
    numVideos: 9,
    videos: [
      {
        caption: '1-12題',
        link: 'wmnrQaCaudU'
      },
      {
        caption: '13-25題',
        link: 'vTSGoCb71Qg'
      },
      {
        caption: '26-36題',
        link: 'YQEetxHHBqQ'
      },
      {
        caption: '37-47題',
        link: 'LMXamDlEHYM'
      },
      {
        caption: '48-57題',
        link: '-J507CAdQ-4'
      },
      {
        caption: '58-70題',
        link: 'IQm9KAHE0qc'
      },
      {
        caption: '71-77題',
        link: 'aZkXmBHiA_w'
      },
      {
        caption: '78-87題',
        link: 'qEAEAQ0LbWc'
      },
      {
        caption: '88-100題',
        link: '4Yrv-izIPic'
      }
    ]
  },
  {
    name: 'mySlides2',
    numVideos: 3,
    videos: [
      {
        caption: '1-36題',
        link: 'Gg4zpxdaf6s'
      },
      {
        caption: '37-70題',
        link: 'sZ64BXtUOVw'
      },
      {
        caption: '71-100題',
        link: 'PdUNrUu9BoU'
      }
    ]
  },
  {
    name: 'mySlides3',
    numVideos: 5,
    videos: [
      {
        caption: '1 可數、不可數名詞',
        link: 'DyJqeNGECVY'
      },
      {
        caption: '1A 量詞',
        link: 'u9tWpaIcj60'
      },
      {
        caption: '1B 量詞',
        link: 'Rbw6YjvBEKg'
      },
      {
        caption: '2 可數名詞複數形式',
        link: 'CPPTmlQrk0o'
      },
      {
        caption: '3 定冠詞、不定冠詞',
        link: 'E74ev8WdEOI'
      }
    ]
  },
  {
    name: 'mySlides4',
    numVideos: 5,
    videos: [
      {
        caption: '常用英文50句 (之一)',
        link: 'kf4b2ApWmfI'
      },
      {
        caption: '常用英文50句 (之二)',
        link: '_eINQybbIPM'
      },
      {
        caption: '常用英文問候語',
        link: '-eyb-Hcm1Ms'
      },
      {
        caption: '常用英文道歉語',
        link: 'ybhNDkBZsd8'
      },
      {
        caption: '英文電話用語',
        link: '2sHA5cXAlUY'
      }
    ]
  },
  {
    name: 'mySlides5',
    numVideos: 20,
    videos: [
      {
        caption: '您是否合乎申請資格',
        link: 'E4P-4k4Dbog'
      },
      {
        caption: '您的個人資料',
        link: 'PhM3KN4zn30'
      },
      {
        caption: '身體殘疾和 (或) 損傷的個人輔助',
        link: '0kPR73PPz2U'
      },
      {
        caption: '您的聯絡資料',
        link: '1Dn1yP9vgUM'
      },
      {
        caption: '您的居住資料',
        link: 'Ozdusij8rXU'
      },
      {
        caption: '您父母的資料',
        link: 'rNazz8yddyI'
      },
      {
        caption: '個人基本資料',
        link: 'pbX2d7iMS_M'
      },
      {
        caption: '您的就業與就學資料',
        link: 'AThrbnXe4Ig'
      },
      {
        caption: '在美國境外的期間',
        link: '5R6jiZHKUEo'
      },
      {
        caption: '有關您的婚姻史',
        link: 'qX_4G8wqxSg'
      },
      {
        caption: '有關您子女的資料',
        link: 'EF0r1wnictE'
      },
      {
        caption: '有關您額外的資料 (之一)',
        link: 'ED7BcEAP_nA'
      },
      {
        caption: '有關您額外的資料 (之二)',
        link: 'MfU_53BlpXU'
      },
      {
        caption: '有關您額外的資料 (之三)',
        link: '7KOYE2r1z50'
      },
      {
        caption: '有關您額外的資料 (之四)',
        link: 'YoaJ-8wx1kU'
      },
      {
        caption: '申請人的聲明、認證和簽名',
        link: 'QBoOk-QolWk'
      },
      {
        caption: '翻譯人的聯絡資料、認證和簽名',
        link: 'mWVaUTPYMKs'
      },
      {
        caption: '表格預備人的資料、宣言和簽名',
        link: 'OsVYDeRpElQ'
      },
      {
        caption: '面試時的簽名 / 放棄外國頭銜',
        link: 'YByCcxHxYKg'
      },
      {
        caption: '效忠誓言',
        link: 'gcV2sBDMsus'
      }
    ]
  },
  {
    name: 'mySlides6',
    numVideos: 5,
    videos: [
      {
        caption: '第十二單元',
        link: '7tV-yHwGyLg'
      },
      {
        caption: '第十三單元',
        link: '55MdFEe8eFA'
      },
      {
        caption: '第十四單元',
        link: '4cuTvaOjnjo'
      },
      {
        caption: '第十五單元 (之一)',
        link: 'Hu84E-4l6b4'
      },
      {
        caption: '第十五單元 (之二)',
        link: 'NP7ORUtpjcM'
      }
    ]
  }
]
const handouts = [
  {
    name: '可數、不可數名詞',
    label: '初級英文語法1',
    color: 'rd',
    url: './handouts/English Basics 1_ C_UC Nouns.pdf'
  },
  {
    name: '量詞',
    label: '輔助英文教材1A',
    color: 'rd',
    url: './handouts/English Basics 1A_ Quantifiers.pdf'
  },
  {
    name: '量詞',
    label: '輔助英文教材1B',
    color: 'rd',
    url: './handouts/English Basics 1B_ Measure Words.pdf'
  },
  {
    name: '可數名詞複數形式',
    label: '初級英文語法2',
    color: 'rd',
    url: './handouts/English Basics 2_ Plural Form of C Nouns.pdf'
  },
  {
    name: 'N400關鍵單字1',
    label: '第十二單元',
    color: 'gr',
    url: './handouts/N400 Key Vocabulary for Part 12 (1).pdf'
  },
  {
    name: 'N400關鍵單字2',
    label: '第十三單元',
    color: 'gr',
    url: './handouts/N400 Key Vocabulary for Part 12 (2).pdf'
  },
  {
    name: 'N400關鍵單字3',
    label: '第十四單元',
    color: 'gr',
    url: './handouts/N400 Key Vocabulary for Part 12 (3).pdf'
  },
  {
    name: 'N400關鍵單字4',
    label: '第十五單元 (之一)',
    color: 'gr',
    url: './handouts/N400 Key Vocabulary for Part 12 (4).pdf'
  },
  {
    name: 'N400關鍵單字5',
    label: '第十五單元 (之二)',
    color: 'gr',
    url: './handouts/N400 Key Vocabulary for Part 12 (5).pdf'
  }
]

playlistContainer.addEventListener('click', function (event) {
  openBtnLink(event)
})

newVideosContainer.addEventListener('click', function (event) {
  openBtnLink(event)
})

slideshowsContainer.addEventListener('click', function (event) {
  if (event.target.matches('img')) {
    console.log('open')
    const url = `https://www.youtube.com/watch?v=${event.target.dataset.link}`
    window.open(url)
  }
})

handoutsContainer.addEventListener('click', function (event) {
  openBtnLink(event)
})

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function openBtnLink(event) {
  if (event.target.matches('.bt')) {
    console.log('open')
    window.open(event.target.dataset.link)
  }
}

function renderBtns(array, id) {
  let html = ''
  array.forEach(element => {
    html += `<div class="col-sm-12 col-md-6 col-lg-4">
        <div class="bt pl-btn ${element.color}" data-link="${element.url}">
          <h4>${element.name}</h4>
          <p>${element.label}</p>
        </div>
      </div>`
  })
  id.innerHTML = html
}

function renderSlideshows(array, id) {
  let html = ''
  array.forEach((element, index) => {
    html += `<div class="col-sm-12 col-lg-6">
        <div class="slideshow-container">`
    for (let i = 1; i <= element.numVideos; i++) {
      html += `<div class="${element.name} fade" id="${element.name}">
        <div class="numbertext">${i} / ${element.numVideos}</div>
        <img src="https://img.youtube.com/vi/${element.videos[i - 1].link}/maxresdefault.jpg" data-link="${element.videos[i - 1].link}" style="width:100%">
        <div class="text">${element.videos[i - 1].caption}</div>
      </div>`
    }
    html += `<a class="prev" onclick="plusSlides(-1, ${index})" style="color: #f6f4f3;">&#10094;</a>
          <a class="next" onclick="plusSlides(1, ${index})" style="color: #f6f4f3;">&#10095;</a>
        </div>
      </div>`
  })
  id.innerHTML = html
}

function renderHandoutLinks(array, id) {
  let html = ''
  array.forEach(element => {
    html += `<div class="col-sm-12 col-md-6 col-lg-4">
        <div class="bt ho-btn ${element.color}" data-link="${element.url}">
          <h4>${element.name}</h4>
          <p>${element.label}</p>
        </div>
      </div>`
  })
  id.innerHTML = html
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no)
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no])
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"
  }
  x[slideIndex[no] - 1].style.display = "block"
}

renderBtns(playlists, playlistContainer)
renderBtns(newVideos, newVideosContainer)
renderSlideshows(slideshows, slideshowsContainer)

for (let i = 0; i < slideId.length; i++) {
  showSlides(1, i)
}

renderHandoutLinks(handouts, handoutsContainer)