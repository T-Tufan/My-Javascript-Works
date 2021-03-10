var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

let index =0;
const arrayLenght = models.length;
var interval ;
//slider ayarları burada yapılıyor.
const settings = {
    duration : '2500',
    random : false
}
var image = document.querySelector('.card-img-top'); 
var cardTitle = document.querySelector('.card-title');
var cardLink = document.querySelector('.card-link');
var leftClick = document.querySelector('.fa-arrow-circle-left');
var rigthClick = document.querySelector('.fa-arrow-circle-right');

//Döngü şeklinde çalışan slider durdurur.
document.querySelectorAll('.arrow').forEach(function(item){
    //mouse üstünde ise yapılacak işlemler
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
    //Mouse üstünden ayrılırsa yapılacak işlemler
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

init(settings); 

leftClick.addEventListener('click',goLeft) // bir önceki aracı göster
rigthClick.addEventListener('click',goRight); // bir sonraki aracı göster


function init(settings){
    // setTimeout  belli bir süre sonra başlatılacak olan fonksiyon.Bir kere çalışır.
    //setinterval Sürekli tekrar eder.
    
    var prev; // bir önceki değeri tutar.
   interval =  setInterval(function(){
       //Random sayının tekrarı engelleniyor.
        if (settings.random) {
            do{
                index = Math.floor(Math.random() * arrayLenght);
            }while(prev == index)
            prev = index;
        }
        //Verilerin sırayla gelmesi için
        else{
            if (index == arrayLenght-1) {
                index = 0;
            }else{
                index++;
            }     
        }
        console.log(index);
        showModel(index); 
    },settings.duration)
}
function showModel(indx){
    cardTitle.textContent=models[indx].name;
    image.setAttribute('src',models[indx].image);
    cardLink.setAttribute('href',models[indx].link);
}
function goLeft(){
    console.log('işlemden önce : '+index);
    if (index==0) {
        index = arrayLenght-1; 
        console.log('işlemden sonra ; dizi boyuna eşitle : ',index);
    }else{
        index--;
        console.log('işlemden sonra ; azalt : '+index);
    }
    showModel(index);
}
function goRight(){
    console.log('işlemden önce : '+index);
    if (index == arrayLenght-1) {
        index = 0;
        console.log('işlemden sonra ; ilk elemana git : ',index);
    }else{
        index++;
        console.log('işlemden sonra ; arttır : '+index);
    }
    showModel(index);
}