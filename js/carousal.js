let currentIndex = 1;
let timer;
 
const carousal = {
  init: function (object) {
    const { el, banners, interval } = object;
 
    // Ensure at least 3 banners
    const length = banners.length;
    if (length === 1) {
      banners.push(banners[0]);
      banners.push(banners[0]);
    }
    if (length === 2) {
      banners.push(banners[0]);
    }
    this._render(el, banners);
   
    // Set the interval for automatic image change to 3 seconds (3000 milliseconds)
    timer = setInterval(this._next.bind(this), interval);
  },
 
  _render: function (el, banners) {
    const imgUl = document.createElement('div');
    imgUl.className = 'banner-list';
    let imgUlInnerHTML = '';
 
    const paginationBox = document.createElement('div');
    paginationBox.className = 'pagination-box';
    let paginationBoxInnerHTML = '';
 
    banners.forEach((item, index) => {
      imgUlInnerHTML += `<div class="banner-item ${index === 0 ? 'banner-item-prev' : ''} ${index === 1 ? 'banner-item-current' : ''} ${index === 2 ? 'banner-item-next' : ''} ${index > 2 ? 'banner-item-out' : ''}"><img src="${item.imageUrl}"></div>`;
 
      paginationBoxInnerHTML += `<div class="pagination-item index-${index} ${index === currentIndex ? 'active' : ''}"></div>`;
    });
 
    imgUl.innerHTML = imgUlInnerHTML;
    paginationBox.innerHTML = paginationBoxInnerHTML;
    el.appendChild(imgUl);
    el.appendChild(paginationBox);
  },
 
  // Change to the next image
  _next: function () {
    let bannerList = document.querySelectorAll('.banner-item');
    let length = bannerList.length;
    currentIndex = (currentIndex + 1) % length;
    this._changeNextOrder(currentIndex);
    this._renderPagination(currentIndex);
  },
 
  _changeNextOrder: function (_currentIndex) {
    let bannerList = document.querySelectorAll('.banner-item');
    let length = bannerList.length;
 
    bannerList.forEach((item, index) => {
      if (index === _currentIndex) {
        item.className = 'banner-item banner-item-current';
      } else if (index === ((_currentIndex - 1 + length) % length)) {
        item.className = 'banner-item banner-item-prev';
      } else if (index === ((_currentIndex + 1) % length)) {
        item.className = 'banner-item banner-item-next';
      } else {
        item.className = 'banner-item banner-item-out';
      }
    });
  },
 
  _renderPagination: function (_currentIndex) {
    let paginationList = document.querySelectorAll('.pagination-item');
    paginationList.forEach((item, index) => {
      if (index === _currentIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
};
 
const carousalDom = document.querySelector('.music-carousal');
const banners = [
 
 

{
  imageUrl: "./images/MP300G3(2).png"
},
{
  imageUrl: "./images/MP100.png"
},
{
  imageUrl: "./images/MP500G4(2).png"
},
{
  imageUrl: "./images/MP1300G5(2).png"
}

 
  
 
 
 
];
 
// Initialize carousel with 3-second interval
carousal.init({
  el: carousalDom,
  banners,
  interval: 3500
});
 
