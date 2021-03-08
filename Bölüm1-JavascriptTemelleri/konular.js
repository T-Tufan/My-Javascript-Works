///////////Giriş/////////////
// alert("Merhaba");
// console.log("Merhaba")
// console.log(1234)
// console.log(true)
// console.log([1,2,3])
// console.error("Hata Oluştu!!!")
// console.log

// console.clear()

/////////////////////////////
///////////Değişkenler/////////////
////////////////////////////
// var age 
// console.log(age) //Konsol içerisinde undefined olarak görünür.

// age = 20 
// console.log(age) //20 yazar.

// var fullname = 'TUGAY TUFAN'
// console.log(fullname)

// fullname = "BARIŞ TUĞFAN"
// console.log(fullname)

// var yas1
// var _yas2
// var $yas3

// // var , let , const 

// //let daha dar scope içinde çalışır.
// let city = "Kocaeli"
// console.log(city)
// //Const ile sabit veriler tutulur.
// const email = "ttugay1997@gmail.com"
// console.log(email)

// email = "tugay__1997@gmail.com"
// console.log(email)

/////////////////////////////
///////////Değişken Tipleri/////////////
////////////////////////////

///////////Primitive Tipler/////////////
// let firstName = "Çınar"
// console.log(typeof firstName)  //tipini yazar.

// let number = 23
// let number2 = 100.5
// console.log(typeof number+" "+typeof number2)

// let isActive = true
// console.log(typeof isActive);

// let job = null
// console.log(job);

// let car;
// console.log(typeof car);

///////////Reference Tipler-Objects/////////////
// let names = ['Ali','Veli','Ayşe']
// console.log(typeof names);

// let adres = {
//     city : "Kocaeli",
//     country : "Türkiye"
// }
// console.log(typeof adres);

// let calculateAge = function(){
//     return 0;
// }
// console.log(typeof calculateAge);

/////////////////////////////
///////////Tür Dönüşümleri/////////////
////////////////////////////

///////////String to Number//////////
// let number1 = Number('5')
// let number2 = Number('10')
// let total = number1+number2
// console.log(typeof number1);
// console.log(total)

// //////////Number to String////////////

// let val

// val = String(10)
// console.log(val + " "+ typeof val);

// ///////////Bool to String////////////

// val = String(true)
// console.log(val +" " +typeof val);
// console.log(val.length);

// //Date to String

// val = new Date()
// console.log(val+" "+typeof val);
// console.log(String(val)+" "+ typeof String(val))

// val = String(new Date().getDay())
// console.log(val +" "+typeof val);

// ///////////Array to String///////////

// val = String([1,2,3,4,true])
// console.log(val+" "+ typeof val);

// //toString() kullanımı

// val = (10).toString()
// console.log(val +" "+ typeof val);

// /////////////String to Number///////////
// val = Number("10")
// console.log(val +" "+typeof val);

// ////////////Bool to Number//////////////

// val = Number(true)
// val = Number(false)
// console.log(val.toFixed(2) +" "+typeof val);

// val = Number(["1","2","3"])
// console.log(val +" "+typeof val);//Dizi number dönüşümü olmaz.

// //parseInt
// //parseFloat

// val = parseInt("10")
// console.log(val +" "+typeof val);

// val = parseFloat("10.5")
// console.log(val +" "+typeof val);

/////////////////////////////
///////////Operatörler/////////////
////////////////////////////

// let val;
// const a = 10;
// const b = 5;
// let c = 3;

// console.log(val+" "+typeof val);

// val = a+b;
// console.log(val+" "+typeof val);

// val = a*b;
// console.log(val+" "+typeof val);

// val =a/b;
// console.log(val+" "+typeof val);

// val = c++
// console.log(val+" "+typeof val);
// console.log(c+" "+typeof c);

// val = ++c;
// console.log(val+" "+typeof val);

// val = a==b
// console.log(val+" "+typeof val);

// val = b==c
// console.log(val+" "+typeof val);

// val = 5 ==='5' //değer ve tip kontrol
// console.log(val+" "+typeof val);

/////////////////////////////
///////////Date/////////////
////////////////////////////

// let tarih = new Date()
// console.log(tarih);

// /////////Set Metodlar/////////
// tarih.setDate(29)
// tarih.setFullYear(2023)
// tarih.setMonth(10)
// tarih.setMilliseconds(0)
// /////////Get Metodlar/////////
// console.log(tarih.getHours());
// console.log(tarih.getMilliseconds());
// console.log(tarih.getMonth());
// console.log(tarih.getFullYear());

// let birthday = new Date(1997,10,10);
// console.log(birthday);

// let yas = new Date().getFullYear()-birthday.getFullYear();
// console.log(yas);


/////////////////////////////
///////////Numbers Metodları/////////////
////////////////////////////

// var value = '10'

// console.log(value);

// var number =10.24575 
// value = number.toPrecision(6);
// console.log(value);

// value = Math.PI;
// console.log("Pi sayısı : "+value);
// value = Math.round(value);
// console.log(value);

// value = Math.sqrt(72);
// value = Math.pow(2,4);
// value = Math.abs(-100);
// value = Math.min(10,15,21,2,7);
// value = Math.max(10,15,21,2,7);
// value = Math.random()*10;
// value = Math.floor(Math.random()*10);
// console.log(value);

/////////////////////////////
///////////Stirng Metodları/////////////
////////////////////////////

// let firstName = 'Tugay'
// let lastName = 'Tufan'
// let yas = 24
// let val;
// let array = "Futbol,Sinema,Yüzme,Basketbol"

// //String concatenation

// val = firstName+" "+lastName;
// val = 'Sadık';
// val += ' Turan'



// val = 'Benim adım : '+firstName+" "+lastName+'\nYaşım : '+yas+"\nGebze'de yaşıyorum."
// console.log(val);
// console.log(typeof val);

// //String concat

// let str = firstName.concat(' '+lastName)
// let len = str.length;
// console.log(str+' ve kelime  uzunluğu '+len);

// //UpperCase LowerCase

// let up = str.toLowerCase();
// let lower = str.toUpperCase();
// console.log("Küçük : "+up+"\nBüyük : "+lower);

// //str = str.indexOf("T");
// //console.log(str);

// //Arama

// str = str.substring(0,5);
// console.log(str);

// console.log(array.split(","));

/////////////////////////////
///////////Template Literals/////////////
////////////////////////////

//String birleştirmede pratik bir yöntem
// const fullname = "Sena Turan"
// const city ="Kocaeli"
// const yearOfBirth = 1997;

// val = "Benim adım "+fullname+
// " ve "+city+" de yaşıyorum ve "+
// (new Date().getFullYear()-yearOfBirth)+" yaşındayım."

// val = `benim adım ${fullname} ve ${city}'de yaşıyorum ve yaşım 18'den  ${(new Date().getFullYear()-yearOfBirth>=18)?'büyük' : 'küçük'} . `
// console.log(val);


/////////////////////////////
///////////Array(Diziler)/////////////
////////////////////////////

// let names = ['Tugay','Ahmet','Ramazan','Nuri'];

// let years =[1996,2000,2004,2008,2012,2016,2020]

// let mixed = ['Tugay','Tuğfan',1997,true,580.5,["Sinema","Futbol"]]

// console.log(names)
// console.log(typeof names);

// console.log(years);
// console.log(typeof years);

// console.log(mixed);
// console.log(typeof mixed);

// //getArrayİtem
// console.log(mixed[1]);
// //setArrayItem
// mixed[5][0] = "Basketbol"
// console.log(mixed);
// //add item
// mixed.push('Computer Engineering')
// console.log(mixed);
// //remove item
// mixed.pop();//sondaki elemanı siler.
// mixed.shift();//en baştaki elemanı siler.
// console.log(mixed);
// //index of 
// var index = mixed.indexOf(1997)
// console.log(mixed[index]);
// //reverse diziyi ters çevirir.
// mixed.reverse();
// //sort dizi elemanlarını sayısal olarak sıralar.
// years.sort();
// //concat // birleştirme işlemi yapar.
// let conc = mixed.concat(years).sort();
// console.log(conc);

// //18 yaşından büyükse true , küçükse false dönen bir uyugulama yapınız.

// function over18(year){
//     return new Date().getFullYear()-year >= 18;
// }
// var results = years.filter(over18)//dizi elemanlarını fonksiyon içine gönderir.
// console.log(results);


/////////////////////////////
///////////If else(Koşul)/////////////
////////////////////////////

// const firstName = 'Sena';
// const age = 24;
// const isStudent = false;
// const school = 'İTÜ';

// if (firstName == 'Sena') {
//     console.log("Hi Sena");
// }
// if (age === '24') {
//     console.log("Your Age : "+age);
// }
// if (isStudent) {
//     console.log("Student.");
// }else {
//     console.log("Is Not Student.");
// }

// if (age >= 18 && age <= 24) {
//     console.log(`${firstName} is a adult.`);
// }
 
// if (typeof school !== 'undefined') {
//     console.log(`school değişkenini tipi : ${typeof school}`);
// }

/////////////////////////////
///////////Switch(Koşul)/////////////
////////////////////////////

// let category = 'telefon'

// switch (category) {
//     case 'telefon':
//         console.log("Telefon Kategorisi");
//         break;
//     case 'bilgisayar':
//         console.log("Bilgisayar Kategorisi");
//         break;
//     default:
//         console.log("Kategori seçilmedi");
//         break;
// }

// let day ;

// switch (new Date().getDay()) {
//     case 0:
//         day = 'Pazar';
//         break;
//     case 1:
//         day = 'Pazartesi';
//         break;
//     case 2:
//         day = 'Salı';
//         break;
//     case 33:
//         day = 'Çarşamba';
//         break;
//     case 4:
//         day = 'Perşembe';
//         break;
//     case 5:
//         day = 'Cuma';
//         break;
//     case 6:
//         day = 'Cumartesi';
//         break;
//     default:
//         break;
// }
// console.log(`Bugün günlerden ${day}`);

// const age = 23
// //switch koşul kullanımı
// switch(true){
//     case (age >0 && age <12):
//         console.log("He is a child.");
//         break;
//     case (age >=12 && age < 18):
//         console.log("He is a teenager ");
//         break;
//     case (age >=18 && age < 30):
//         console.log("He is a adult ");
//         break;
//     default :
//         console.log("not information"); 
//     break;
// }

/////////////////////////////
///////////Object Literals/////////////
////////////////////////////

// let person = {
//     firstname : 'Tugay',
//     lastname : 'Tugfan',
//     age : 24,
//     hobies : ["Cinema","Football"],
//     university : 'Yalova University',
//     adress : {
//         country : 'Turkey',
//         city : 'Kocaeli'
//     },
//     getBirthYear : function(){
//         return new Date().getFullYear()-this.age;
//     }
// }

// console.log(person);
// console.log(`Firstname : ${person.firstname} \nLastname : ${person.lastname} \nAge : ${person.age} \nHobies : ${person.hobies} \nAdres : ${person.adress['city']} / ${person.adress.country} \nBirthYear : ${person.getBirthYear()}`);

// let people = [
//     {firstname : 'Tugay', lastname : 'Tufan'},
//     {firstname : 'Ahmet', lastname : 'Yiğit'},
//     {firstname : 'Ramazan', lastname : 'İkinci'}
// ]
// //İlk Yöntem
// for(var object of people){
//     console.log(`Ìsim : ${object.firstname} \t Soyisim : ${object.lastname}`);
// }
// //İkinci Yöntem
// for(var index in people){
//     console.log(`Ìsim : ${people[index].firstname} \t Soyisim : ${people[index].lastname}`);
// }


/////////////////////////////
///////////Döngüler/////////////
////////////////////////////

//////////////for///////////
// for(let i = 0 ; i <10 ; i++){
//     if (i == 3 ) {
//         console.log("Aranan rakam : "+i);
//         continue;
//     }
//     if (i == 6) {
//         console.log('En sevmediğim rakam : '+i);
//         break;
//     }
//     console.log(i);
// }

// /////////////while/////////////
// let i = 0;
// while(i<10){
//     console.log('sayi : '+i);
//     i++;
// }

// //////////do while/////////
// i =11;
// do{
//     console.log('sayi : '+i);
//     i++;
// }while(i<10)


// //////////For Türevleri///////////////////
// var arabalar = ['Bmw','Mercedes','Toyota'];
// console.log("\nFor Yöntemi");
// for (let index = 0; index < arabalar.length; index++) {
//     console.log(arabalar[index]);
// }
// console.log("\nFor In Yöntemi");
// for (const index in arabalar) {
//    console.log(arabalar[index]);
// }
// console.log("\nFor Of Yöntemi");
// for(const araba of arabalar){
//     console.log(araba.toString());
// }
// console.log("\nFor Each Yöntem 1");
// arabalar.forEach(item =>
//     console.log(`Araba ${arabalar.indexOf(item)} : ${item}`)
// )
// console.log("\nFor Each Yöntem 2");
// arabalar.forEach(function(item){
//     console.log(`Araba ${arabalar.indexOf(item)} : ${item}`);
// })

// let people = [
//     {firstName : 'Ramazan', lastName : 'İkinci'},
//     {firstName : 'Ahmet', lastName : 'Yiğit'},
//     {firstName : 'Nurullah', lastName : 'Aslan'}
// ]

// for (const person of people) {
//     console.log(`${person}`);
// }

// //map object nesnesinden bize array döndürür.

// let array = people.map(function(item){
//     return item.firstName + " " + item.lastName;
// })

// let array2 = people.map(item =>
//      item.firstName + " " + item.lastName)
// console.log(array);
// console.log(array2);

/////////////////////////////
///////////Fonksiyonlar/////////////
////////////////////////////

// function yasHesapla(dogumyil){
//     return new Date().getFullYear()-dogumyil;
// }
// console.log(yasHesapla(1997));

// function emekliligeKacYilKaldi(dogumyılı = 1997,isim = 'Tugay Tufan'){
//     let yas = new Date().getFullYear()-dogumyılı;
//     let emeklilik = 65-yas;
    
//     if (emeklilik>0) {
//         console.log(`Sayın : ${isim},\nEmekli olmanıza ${emeklilik} yıl kaldı.`);
//     }else
//     console.log(`Zaten emeklisiniz.`);

//     return emeklilik , isim ;
// }

// emekliligeKacYilKaldi(1997)

// function args(){
//     console.log(arguments[0]);
// }
// args(10,20,30)

/////////////////////////////
///////////Window/////////////
////////////////////////////

// var a = 10;
// let value;

// function abc(){
//     return 0;
// }

// value = window;

// console.log(value);

// //alert("Merhaba")
// var mesaj = prompt("Bir mesaj giriniz")
// console.log(mesaj);
// var confirm = confirm("Emin misiniz?")
// console.log(confirm);