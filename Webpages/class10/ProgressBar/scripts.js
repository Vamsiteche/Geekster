const bar=document.getElementById('bar')
function barcal(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    console.log(scrolled)
    bar.innerHTML=scrolled.toFixed(0)+"%"
    bar.style.width=scrolled+"%"

    bar.style.backgroundColor="rgb(100,"+scrolled/100*255+",100)"

}
document.addEventListener('scroll',barcal)

