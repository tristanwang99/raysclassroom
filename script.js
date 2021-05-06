const playlists = [{
    title: '公民入籍100題 (系列)',
    text: '美國公民測驗的題目及標準答案',
    img: 'https://img.youtube.com/vi/wmnrQaCaudU/maxresdefault.jpg',
    vid: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc7UDuZA8Nj657FRfUPvK64F'
},
{
    title: 'N400申請表格 (系列)',
    text: '美國入籍考試前必須提交的表格',
    img: 'https://img.youtube.com/vi/E4P-4k4Dbog/maxresdefault.jpg',
    vid: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc63iTNzMqh2FXdN_u3CeXnA'
},
{
    title: '公民入籍100題 (系列)',
    text: '幫助您英文學習不間斷',
    img: 'https://img.youtube.com/vi/DyJqeNGECVY/maxresdefault.jpg',
    vid: 'https://www.youtube.com/playlist?list=PLdlV3Srhrpc6Jue0UT6B08LmOLP1gD3KX'
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

const playlistContainer = document.querySelector('#playlist-container');
const newVidsContainer = document.querySelector('#new-vids-container');

function displayCards(cards) {
    let html = '';
    cards.forEach(element => {
        html += `
            <div class="card" style="width: 18rem;">
                <img src="${element.img}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <a href="${element.vid}" class="btn btn-primary">前往</a>
                </div>
            </div>
        `
    });
    return html;
}

playlistContainer.innerHTML = displayCards(playlists);
newVidsContainer.innerHTML = displayCards(newVids);