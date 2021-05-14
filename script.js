const playlists = [{
    title: '公民入籍100題 (講解系列)',
    text: '美國公民測驗的題目及標準答案<br>(共9集)',
    img: 'https://img.youtube.com/vi/wmnrQaCaudU/maxresdefault.jpg',
    vid: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc7UDuZA8Nj657FRfUPvK64F'
},
{
    title: '公民入籍100題 (測驗系列)',
    text: '讓您測試自己對入籍考試的熟悉度<br>(共3集)',
    img: 'https://img.youtube.com/vi/Gg4zpxdaf6s/maxresdefault.jpg',
    vid: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc7UDuZA8Nj657FRfUPvK64F'
},
{
    title: '初級英文語法 (系列)',
    text: '幫助您英文學習不間斷<br>(共5集)',
    img: 'https://img.youtube.com/vi/DyJqeNGECVY/maxresdefault.jpg',
    vid: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc6Jue0UT6B08LmOLP1gD3KX'
},
{
    title: '初級英文聽力 (系列)',
    text: '幫助您英文學習不間斷<br>(共3集)',
    img: 'https://img.youtube.com/vi/kf4b2ApWmfI/maxresdefault.jpg',
    vid: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc5pDK_0ITg2WI7DTREd5dpw'
},
{
    title: 'N400申請表格 (系列)',
    text: '美國入籍考試前必須提交的表格<br>(共20集)',
    img: 'https://img.youtube.com/vi/E4P-4k4Dbog/maxresdefault.jpg',
    vid: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc63iTNzMqh2FXdN_u3CeXnA'
},
{
    title: 'N400關鍵單字 (系列)',
    text: '幫助您了解表格內容、通過面試<br>(共5集)',
    img: 'https://img.youtube.com/vi/7tV-yHwGyLg/maxresdefault.jpg',
    vid: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc63yD30Yk0RVICtOteRTNft'
}];

const newVids = [{
    title: '定冠詞、不定冠詞',
    text: '初級英文課程3',
    img: 'https://img.youtube.com/vi/E74ev8WdEOI/maxresdefault.jpg',
    vid: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc7UDuZA8Nj657FRfUPvK64F'
},
{
    title: '常用英文問候語',
    text: '初級英文聽力3',
    img: 'https://img.youtube.com/vi/-eyb-Hcm1Ms/maxresdefault.jpg',
    vid: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc7UDuZA8Nj657FRfUPvK64F'
},
{
    title: '可數名詞複數形式',
    text: '初級英文語法2',
    img: 'https://img.youtube.com/vi/CPPTmlQrk0o/maxresdefault.jpg',
    vid: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc7UDuZA8Nj657FRfUPvK64F'
}];

const ct100ExpVids = [
    ['1-12題', 'wmnrQaCaudU'],
    ['13-25題', 'vTSGoCb71Qg'],
    ['26-36題', 'YQEetxHHBqQ']
];

const playlistContainer = document.querySelector('#playlist-container');
const newVidsContainer = document.querySelector('#new-vids-container');
const ct100ExpContainer = document.querySelector('#ct100-exp-test');

function displayCards(cards) {
    let html = '';
    cards.forEach(element => {
        html += `
            <div class="card" style="width: 18rem;">
                <img src="${element.img}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <a href="${element.vid}" class="btn btn-light btn-lg">前往</a>
                </div>
            </div>
        `
    });
    return html;
}

function displayCarousel(carousel, num) {
    let html = '';
    html += '<ol class="carousel-indicators">';
    for (let i = 0; i < carousel.length; i++) {
        html += `<li data-target="#c${num}" data-slide-to="${i}"`;
        if (i === 0) {
            html += ` class="active"`;
        }
        html += `></li>`;
    }
    html += `
        </ol>
        <div class="carousel-inner">
    `
    for (let i = 0; i < carousel.length; i++) {
        html += `<div class="carousel-item`;
        if (i === 0) {
            html += ` active`
        } 
        html += `">
                <a href="https://www.youtube.com/watch?v=${carousel[i][1]}">
                    <img src="https://img.youtube.com/vi/${carousel[i][1]}/maxresdefault.jpg" class="d-block w-100" alt="">
                </a>
                <div class="carousel-caption d-none d-md-block">
                    <h5>${carousel[i][0]}</h5>
                </div>
            </div>
        `
    }
    html += `
        </div>
        <a class="carousel-control-prev" href="#c${num}" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#c${num}" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    `
    return html;
}

playlistContainer.innerHTML = displayCards(playlists);
newVidsContainer.innerHTML = displayCards(newVids);