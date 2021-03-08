////////////////////////////
/////////////////////////////
///////////Event Listeners/////////////
////////////////////////////
////////////////////////////


//////////////click//////////////////
// let click1 = function(e){
//     console.log('Buton 1 \'e tıklandı!');
//     e.preventDefault();//Sayfa yenilemeyi engeller.Scroll bar sabit durur.
// }
// let click2 = function(){
//     console.log('Buton 2 \'e tıklandı!');
// }
const delete_btn =document.querySelector('#btnDeleteAll');
const add_btn = document.querySelector('#btnAddNewTask');
const ul_object = document.querySelector('#task-list')
//Mouse tıkladığında işlem yapar.
// btn.addEventListener('click',click1);
// btn.addEventListener('click',click2)
// btn2.addEventListener('click',click2);
// btn2.addEventListener('click',function(e){
//     let val ; 
//     val = e.target;
//     val = e.target.id;
//     val = e.target.classList;
//     console.log(val);
// });

// btn.addEventListener('mouseover',function(){
//     console.log('Mouse buton1 üzerinde');
// })


//////////////////////////////////////////
//////////////Mouse Events////////////////
//////////////////////////////////////////
//click//////////////////////
// delete_btn.addEventListener('click',eventHandler);
// add_btn.addEventListener('click',eventHandler)

//double click//////////////////////
// add_btn.addEventListener('dblclick',eventHandler);

//mouse down//////////////////////// // Butona tıklayınca func çalışır.
// delete_btn.addEventListener('mousedown',eventHandler)


//mouse up//////////////////////// //Tıklamayı bıraktığımızda func çalışır.
// delete_btn.addEventListener('mouseup',eventHandler)

//mouse enter//////////////////////// //Üstüne geldiğimizde func çalışır.Tek bir nesne olarak algılar.İçerisindeki nesneler üzerinde gezindiğimizde tekrar çalışmaz.
// ul_object.addEventListener('mouseenter',eventHandler)

//mouse leave//////////////////////// //Üstüne ayrıldığımızda func çalışır.
// ul_object.addEventListener('mouseleave',eventHandler)

//ouse over , mouse enter  olayı gibi çalışır .Farkı Ul içindeki her eleman için tekrar çalışır.
//ul_object.addEventListener('mouseover',eventHandler)

//mouse out .Nesne üzerindeki elemanlarda gezindikçe 
//ul_object.addEventListener('mouseout',eventHandler)

//mouse move //Mouse nesne üzerindeki her hareketinde function çalışır.
// var h1 = document.querySelector('#header');
// ul_object.addEventListener('mousemove',eventHandler);
// function eventHandler(e){
//     console.log(`Event type : ${e.type}`);
//     console.log(e);
//     h1.textContent = `Mouse X : ${e.offsetX} Mouse Y : ${e.offsetY}`;
// }


//////////////////////////////////////////
//////////////Keyboard Events////////////////
//////////////////////////////////////////

const input = document.querySelector('#txtTaskName')

const form = document.querySelector('#addTaskForm');
//keydown tuşa basıldığında
// input.addEventListener('keydown',eventHandler);

//keydown tuştan elimi kaldırdığımda
// input.addEventListener('keyup',eventHandler);

// //keypress 
// input.addEventListener('keypress',eventHandler);

// //focus metin kutusuna tıklandığında çalış ır.
//  input.addEventListener('focus',eventHandler);

//  // //blur metin kutusundan çıktığımızda çalışır.
//  input.addEventListener('blur',changecolor);


//Form elemanları alma
//Form içerisindeki type = submit olan butona basıldığında ilgili verileri ilgili sayfaya gönderir.Eğer bir server 'a gönderiliyorsa sayfa refresh olmamalı. 
// form.addEventListener('submit',eventHandler);


 ///////////////Event Fonksiyonlar////////////
function eventHandler(e){
    console.log(e.type);
    //e.target.value ile girilen değer alınır.
    // console.log('value : '+e.target.value);
    // console.log('keycode : '+e.keyCode);
    // console.log('Girilen değer : '+input.value);
    // e.target.style.background = 'yellow'
    // e.target.style.color = 'black'
    e.preventDefault();
}

function changecolor(e){
    e.target.style.background = 'white';
}


//////////////////////////////////////////
//////////////Event Bubbling////////////////
//////////////////////////////////////////

//İçten dışa bütün nesneler çalışır.
// const cardbody = document.querySelector('.card-body');
// const card = document.querySelector('.card')
// const container = document.querySelector('.container');

// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation();//Bir üst nesnenin click fonskiyonunu çalıştırmaz.
// })
// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();
// })
// cardbody.addEventListener('click',function(e){
//     console.log('card-body');
//     e.stopPropagation();
// })
// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// })

//////////////////////////////////////////
//////////////Event Capturing////////////////
//////////////////////////////////////////

//Dıştan içe doğru çalışır.
//Varsayılan olarak fonksiyonun 3.parametresi bubbling destekler.
// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation();
//     //Bir üst nesnenin click fonskiyonunu çalıştırmaz.
// },true)
// card.addEventListener('click',function(e){
//     console.log('card');
// },true)
// cardbody.addEventListener('click',function(e){
//     console.log('card-body');
// },true)
// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// },true)

////////////////Örnek///////////////

//Her fa fa-times iconunu seç ve onlara bir event ekle

//Yöntem 1
// const deleteitems = document.querySelectorAll('.fa-times')

// // for(let item of deleteitems){
// //     item.addEventListener('click',function(e){
// //         console.log(e.target);
// //         e.target.parentElement.parentElement.remove();
// //     })
// // }

//Yöntem 2
// const ul = document.querySelector('#task-list');

// ul.addEventListener('click',function(e){
//     //console.log(e.target);
//     if (e.target.className ==='fas fa-times') {
//         e.target.parentElement.parentElement.remove();
//     }
// })


//////////////////////////////////////////
//////////////Local & Session Storage////////////////
//////////////////////////////////////////

// //Local Storage kalıcıdır.Çalıştığı url adresinde kalır.

// const firstname = localStorage.setItem('fistname','Tugay');
// const lastname = localStorage.setItem('lastname','Tufan')

// console.log(localStorage);  

// //Local Storage geçicidir.Tarayıcı kapanırsa bilgiler silinir.
// const city = sessionStorage.setItem('city','Kocaeli');
// const country = sessionStorage.setItem('country','Türkiye');

// console.log(sessionStorage);

// console.log(localStorage.getItem('fistname'));

// localStorage.removeItem('fistname')

// localStorage.clear();

let hobies = ['Sinema','Futbol','Yüzme']

localStorage.setItem('hobies',JSON.stringify(hobies));

