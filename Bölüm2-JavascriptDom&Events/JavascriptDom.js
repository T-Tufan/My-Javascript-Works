
/////////////////////////////
///////////Dom Giriş/////////////
////////////////////////////
// let value ;

// value = window.document;
// value = document.all; //Bütün etiketleri collection dizi olarak döner.
// value = document.all.length; // toplam etiket sayısı gelir.
// value = document.all[11] //11.sıradaki etiket gelir
// value = document.head; //Sayfa head bölümü gelir.
// value = document.body; //Sayfa Body bölümü gelir.
// value = document.anchors; //Bütün bağlantı adresleri gelir.
// value = document.URL; //Sayfa url döner.
// value = document.domain; //Domain adresi döner.
// value = document.images; //Sayfadaki tüm fotoğrafları collection dizi olarak döner.
// value = document.title; //Sayfa başlığı döner.
// value = document.forms;
// value = document.forms[0];
// value = document.forms[0].id;
// value = document.forms[0].method;
// value = document.scripts[2].getAttribute('src');
// console.log(value);

/////////////////////////////
///////////Selecting Elements/////////////
////////////////////////////

///////////////Single Elements///////////////

//document.getElementById() kullanıldı.
// let val = window.document.getElementById('header');
// val = window.document.getElementById('header').id;
// val = window.document.getElementById('header').className;

// val = window.document.getElementById('header');
// val.style.fontSize = '35px';
// val.style.color = 'red';
// val.style.fontWeight = "bold"
// //val.style.display = 'none';
// document.getElementById('header').innerText = 'My Javascript Page';
// document.getElementById('header').innerHTML='<b>My Javascript Page</b>'
// console.log(val.id);

// //document.querrySelector()  // Daha esnek bir yapısı vardır.
// let querrySelector = document.querySelector('.app-title')
// querrySelector = document.querySelector('.card-header')
// querrySelector = document.querySelector('h1');
// querrySelector = document.querySelector('div');

// document.querySelector('li').style.color = 'darkblue';
// document.querySelector('li:nth-child(2)').style.color = 'red';
// document.querySelector('li:last-child').style.color = 'yellow';
// document.querySelector('li').textContent ="First Li";

// querrySelector = document.querySelector('li').className = 'list-group-item list-group-item-warning'
// querrySelector = document.querySelector('li').classList.add('active');

// console.log(querrySelector);


/////////////////////////////Multiple Elements////////////////////////////

//////////document.getElementByClassName();//////////

// let val = document.getElementsByClassName('list-group-item');
// val[0].style.color = 'darkblue';
// val[0].style.fontSize = '20px';
// val[0].textContent='First Li'

// for(let listItem of val){
//     listItem.style.color = 'darkblue'
//     listItem.style.fontWeight = 'bold';
//     console.log(listItem);
// }
// console.log(val[0]);

//////////document.getElementByTagName();//////////

// val = document.getElementsByTagName('a'); //Sayfadaki tüm a etiketlerini alır.

// val = document.querySelector('#task-list');//ul etiketi altındaki a etiketlerini alır.
// val = val.getElementsByTagName('a');

// console.log(val);

//////////document.querrySelectorAll();//////////

// var value = document.querySelectorAll('li');//Tüm li etiketleri gelir.

// value.forEach(function(item,index){
//     item.textContent = `${index} - List`;
// })

// value = document.querySelectorAll('li:nth-child(odd)');

// for(const [index,odd] of value.entries()){
//     odd.textContent = `${index}- Odd - List`
// }




/////////////////////////////
///////////Dom elemanları üzerinde gezinme/////////////
////////////////////////////

// let val ;

// let list = document.querySelector('#task-list')

// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;

// val = list.children;
// for(let li_tag of list.children){
//     li_tag.textContent = 'Merhaba'
// }

// val = list.children[1].children; // 2 numaralı elementin 'ın tüm elemetleri getirilir.
// console.log(val);

// val = list.firstChild;//İlk node karşımıza gelir.
// console.log(val);

// val = list.firstElementChild; // ilk element karşımıza gelir.
// console.log(val);

// val = list.lastChild;//son node gelir.
// console.log(val);

// val = list.lastElementChild;//son çocuk element 
// console.log(val);

// val = list.childElementCount;//Cocuk element sayısı
// console.log(val);

// val = list.parentNode; // Bir üst node değeri
// console.log(val);

// val = list.parentElement; // Bir üst element;
// console.log(val);

// val = list.parentElement.parentElement;
// console.log(val);

// val = list.children[0].nextSibling ; //0 ' dan sonraki node ' a geçer.
// console.log(val);

// val = list.children[0].nextElementSibling; // Bundan sonraki ilk element' e geçer.
// console.log(val);

// val = list.children[1].previousSibling; // bir önceki node 'a geçiş yapar.
// console.log(val);

// val = list.children[1].previousElementSibling; //bir önceki element'e geçiş yapar.
// console.log(val);


/////////////////////////////
///////////Element Oluşturma ve Koda ekleme/////////////
////////////////////////////

// const li = document.createElement('li')

// //add class
// li.className = 'list-group-item list-group-item-warning';
// //add id
// li.id = 'creating_li'
// //add attribite
// li.setAttribute('title','new item'); 
// li.setAttribute('style','fontsize : 20px')
// //text node 
// const text = document.createTextNode("New İtem");
// //a element oluşturma ve attribute set etme
// const a = document.createElement('a');
// a.setAttribute('href','www.google.com')
// a.className = 'delete-item float-right'
// a.innerHTML='<i class="fas fa-times"></i>'


// li.appendChild(text)
// li.appendChild(a)
// console.log(li);
// //En son oluşturulan yapı ekleneceği yere set edilmeli.
// document.getElementById('task-list').appendChild(li)

////////////////////////////
/////////////////////////////
///////////Element , Attribute Silme ve Güncelleme/////////////
////////////////////////////
////////////////////////////
// var tasklist = document.querySelector('#task-list');

///////////remove element////////////
//tasklist.remove();
// console.log(tasklist.childNodes[1]);
// tasklist.childNodes[1].remove();
// tasklist.removeChild(tasklist.children[0])
// console.log(tasklist);

///////////remove attribute////////////
// tasklist.children[0].children[0].removeAttribute('href');
// for(const ch of tasklist.children){
//     ch.removeAttribute('class')
// }
// console.log(tasklist);

///////////Replacing Elements/////////////
//div yerine h1 element atama
// var div = document.querySelector('.card-header')
//h1 oluşturuluyor.
// var h1 = document.createElement('h1');
// h1.setAttribute('style','color : dark blue ; fontweight : bold');
// h1.id = 'h1_element'
// h1.textContent = 'H1 Element';

// const divparent = document.getElementsByClassName('card')
// divparent[0].lastChild.replaceWith(h1,div);

// console.log(div);
// console.log(h1);
// console.log(divparent);

/////////////classes/////////////
// let val;
// let link = tasklist.children[0].children[0];
// val = link.className;
// val =link.classList;

// link.classList.add('new_class')
// link.classList.remove('new_class')

// console.log(val);

////////////attributes///////////////

// val = link.getAttribute('class'); //attr getirme
// val = link.setAttribute('href','www.google.com') // attr set etme
// val = link.getAttribute('href')

// val = link.hasAttribute('data-id')//attribute var mı yok mu

// console.log(val);