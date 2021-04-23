// 햄버거 바 아이콘 선택자
const menuOpenEl = document.getElementById('btn-sitemap-open')
// 닫는 아이콘 선택자
const menuCloseEl = document.getElementById('btn-sitemap-close')
const layer_sitemap = document.getElementById('layer_sitemap')

// 햄버거 바 아이콘에 클릭 이벤트가 발생하면,
menuOpenEl.addEventListener("click", function() {
    // 햄버거 바 아이콘을 보이지 않게 처리하고,
    menuOpenEl.style.display = 'none'
    // 닫는 아이콘은 보이게 처리합니다
    menuCloseEl.style.display = 'block'
    layer_sitemap.style.display = 'block'
})

// 닫는 아이콘에 클릭 이벤트가 발생하면,
menuCloseEl.addEventListener("click", function() {
    // 햄버거 바 아이콘을 보이게 처리하고,
    menuOpenEl.style.display = 'block'
    // 닫는 아이콘은 보이지 않게 처리합니다
    menuCloseEl.style.display = 'none'
    layer_sitemap.style.display = 'none'
})