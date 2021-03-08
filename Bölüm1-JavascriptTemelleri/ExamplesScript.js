///////////////////////////////////////
////////////Uygulama 1(Değişkenler)/////////////////
//////////////////////////////////////
// var customerName = "Tugay"
// var customerLastname ="Tufan"
// var identityNumber = 49852383664
// birthDate = 1997
// const sumOrder = function(order1 , order2){
//     var sum = parseInt(order1+order2)
//     return sum;
// }
// var gender = "Erkek"
// var adress = {
//     doorNumber : 110,
//     street : "2343 sokak",
//     neighborhood : "Adem Yavuz Mahallesi",
//     district : "Gebze",
//     city : "Kocaeli",
//     country : "Turkiye"
// }
// var hobies = String([
//     'futbol',
//     'sinema',
//     'mobil uygulama geliştirme'
// ])

// console.log("Kimlik No : "+identityNumber);
// console.log("Mahalle : "+adress.neighborhood);

// let order1 = 110.5;
// let order2 = 80.7;
// console.log("Sipariş Toplam : "+sumOrder(order1,order2));

// console.log("Yaş : "+(new Date().getFullYear()-birthDate));

///////////////////////////////////////
////////////Uygulama 2(Oparatörler)/////////////////
//////////////////////////////////////

// let kgCan =70, kgAda = 55;
// let byCan = 1.84, byAda = 1.67;

// let weightIndex = function(kilo , boy){
//     var index = kilo / (boy*boy)
//     return index
// };

// let canIndex = weightIndex(kgCan,byCan);
// let adaIndex = weightIndex(kgAda,byAda);

// if(canIndex <= 18.4){
//     console.log("Zayıf");
// }else if (canIndex >18.4 && canIndex <= 24.9){
//     console.log("Normal");
// }else if (canIndex >24.9 && canIndex <= 29.9){
//     console.log("Fazla Kilolu");
// }else if (canIndex >29.9){
//     console.log("Şişman (Obez)");
// }

///////////////////////////////////////
////////////Uygulama 3(Date & Times)/////////////////
//////////////////////////////////////

// var dt = new Date();
// console.log("Yıl : "+dt.getFullYear()+"\nAy : "+dt.getMonth());

// let dt2 = new Date("10/21/1997 15:10:00")
// console.log(dt2);

// let dt3 = new Date(1997,9,21,15,10,00)
// console.log(dt3);
// //1 gün öncesi
// let dt4 = new Date("10/18/1997");
// var dayofMonth = dt4.getDate();
// dt4.setDate(dayofMonth-1);

// console.log(dt4);

// //İki tarih arası saat farkı alma

// var firstDate = new Date("12/28/2004 20:00")
// var lastDate = new Date("11/27/2009 22:30")

// var fark = lastDate-firstDate;

// var saniye = fark/1000;
// var dakika = saniye/60;
// var saat = dakika/60;
// var gün = saat/24;
// var yıl = gün/365.25

// console.log(yıl);

///////////////////////////////////////
////////////Uygulama 4(Numbers)/////////////////
//////////////////////////////////////

// var num = 15.123456789;

// //toplam 3 basamak yazdır 

// console.log(num.toPrecision(3));

// //Ondalıklı bölümü 3 basamak yaz.

// console.log(num.toFixed(4));

// //Yukarı yada aşağı yuvarla

// console.log(Math.round(num));

// //Yukarı yuvarla

// console.log(Math.ceil(num));

// //En büyük en küçük bulma

// console.log(Math.min(1,2,3,4,5,6));
// console.log(Math.max(1,2,3,4,5,6));

// //Bir personelin yaptığı mesaiye göre maaş hesaplayınız.
// //Brüt maas = 3700 
// //Brüt mesai =10.3
// //Ocak ayında toplam 42 saat mesai yaptı ise brüt toplam maaşı nedir?
// //Brüt maaştan toplam kesinti oranı %25 ise alınacak toplam net maaş nedir.

// var brütMaas = 3700;
// var brütMesai = 10.3;
// var mesaiSaat = 42;
// var netMaas = parseFloat(brütMaas*0.75);

// var brütToplam = brütMaas+(brütMesai*mesaiSaat);
// var netToplam = netMaas+(brütMesai*mesaiSaat);//Mesai dahil

// console.log("Brüt Toplam Maaş : "+brütToplam+"\nNet Toplam Maaş : "+netToplam+"\nNet Maaş : "+netMaas);

///////////////////////////////////////
////////////String Uygulama/////////////////
//////////////////////////////////////

// var cümle = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloribus velit voluptatem omnis eaque odit enim rerum? Odio, sunt blanditiis tempora perspiciatis quo vitae voluptas amet soluta est, ad fugit rem necessitatibus, temporibus dolores explicabo! Quibusdam veniam vel eveniet vitae. Itaque placeat necessitatibus eum atque ducimus sapiente nemo, nostrum rem libero saepe voluptatibus ad vel neque assumenda natus repellat earum dignissimos ea molestiae? Reprehenderit, dicta ut! Labore corporis pariatur deserunt inventore facilis provident, minus voluptatum repellat temporibus repudiandae sed at possimus recusandae exercitationem neque tenetur dolores sunt fuga quia autem ea ullam consequuntur. Fugiat cumque repudiandae iste enim commodi quidem excepturi est consequuntur, quo cum aliquam nostrum iure earum voluptatibus fuga dignissimos aspernatur delectus repellat fugit nesciunt. Sed fugiat totam tempore magnam eius consequuntur obcaecati repellat consectetur, expedita commodi aspernatur repudiandae molestias quas hic vitae, aliquid reprehenderit distinctio perferendis. Dolorem, ducimus aliquid numquam expedita magni aut atque id nihil sint.';

// var webAdres = 'https://www.udemy.com/course/modern-javascript-kursu/learn/lecture/11495746#content';

// var webAdresError = 'https://www.udemy.com/course /Modern -jaVascrıpt-kursu /learn /lecture/11495746#contentı';

// //cümle kaç karakterlidir.
// var numberofchar = cümle.length;
// console.log("Karakter Sayısı : "+numberofchar);

// //cümle kaç kelimeden oluşmuştur.
// var sntcsarray = cümle.trim().split(" ");
// console.log("Kelime sayısı : "+sntcsarray.length);

// //Küçük ve büyük harflerle yazdır.
// console.log(cümle.toUpperCase());
// console.log(cümle.toLowerCase());

// //! işaretini yerine ? koy.

// console.log(cümle.replace("!","?"));

// //url içerisinde bir bölümü çıkar.
// var str = 'https://';
// console.log(webAdres.substr(str.length));

// //url hangi protokolü kullanıyor.
// console.log(webAdres.startsWith('https')); 

// //url .com ibaresini içeriyor mu?
// console.log(webAdres.includes('.com'));
// // / /g slash lar arasına yazılan bütün karakterleri işleme alır.
// console.log(webAdresError.toLowerCase().trim().replace(/ /g,'').replace('ı','i'));

///////////////////////////////////////
////////////Diziler Uygulama/////////////////
//////////////////////////////////////

// //"Bmw,Mercedes,Opel,Mazda" elamanlarına sahip bir dizi oluştur
// var markalar = ['Bmw','Mercedes','Opel','Mazda']

// //Dizi eleman sayısı
// console.log(markalar.length);

// //İlk ve son eleman nedir?
// console.log(markalar[0]);
// console.log(markalar[markalar.length-1]);

// //Renault markasını dizi sonuna ekle.
// markalar.push('Renault')
// console.log(markalar);

// //Toyota değerini dizi başına ekleyin
// markalar.unshift('Toyota')
// console.log(markalar);

// //Renault değerini siliniz.
// markalar.pop()
// console.log(markalar);

// //Toyota değerini sil
// markalar.shift('Toyota')
// console.log(markalar);

// //Ters çevir
// markalar.reverse();
// console.log(markalar);

// //Alfabetik sıralayınız.
// markalar.sort();
// console.log(markalar);

// //[1,3,5,2,7,25,35] sayısal olarak sıralayınız.
// var numbers = [1,3,5,2,7,25,35]
// function compare(a,b){
//     if(a>b) return 1;
//     if(a=b) return 0;
//     if(a<b) return -1;
// }
// console.log(numbers.filter(compare));

// //Opel dizinin bir elemanı mı?
// console.log(markalar.includes("Opel"));

// //var str = 'Chevrolet,Dacia' ifadesini diziye çeviriniz.
// var str = 'Chevrolet,Dacia';
// var strArray = str.trim().split(',');
// console.log(strArray);

// //İki diziyi birleştiriniz.
// var complexArray = markalar.concat(strArray);
// console.log(complexArray);

// //Markalar dizisini son iki elamanını siliniz.
// console.log(markalar.splice(2,2));
//console.log(markalar);


///////////////////////////////////////
////////////Kosullar/////////////////
//////////////////////////////////////

//20.04.2017 tarihinde trafiğe çıkan bir aracın servis bakım süreleri aşağıda verilmiştir.Bu bilgilere göre servis uyarısını veriniz.

//1.Bakım : 1.Yıl
//2.Bakım : 2.Yıl
//3.Bakım : 3.Yıl
//4.Bakım : 4.Yıl

// var aracTarih = new Date("04/20/2017");
// var aracyas = new Date().getFullYear()-aracTarih.getFullYear();

// if (aracyas === 1) {
//     console.log('1.yıl zorunlu bakımınızı yaptırın.');
// }else if(aracyas == 2){
//     console.log('2.yıl zorunlu bakımınızı yaptırın.');
// }else if(aracyas == 3){
//     console.log('3.yıl zorunlu bakımınızı yaptırın.');
// }else if(aracyas == 4){
//     console.log('4.yıl zorunlu bakımınızı yaptırın.');
// }else{
// console.log("Bakım yaptırmak zorunda değilsiniz.");
// }


// ////////////Örnek 2///////////

// var result = prompt("who is there? ")

// console.log(result);

// if (result == "Cancel") {
//     console.log('cancelled');
// }else if(result =='Admin'){
//     console.log("Welcome Admin");
//     var password = prompt("enter your password")
//     if (password == 'cancel') {
//         console.log('cancelled');
//     }else if(password == 1234){
//         console.log('Welcome Admin');
//     }
//     else 
//     console.log("Wrong password");
// }else{
//     console.log('I dont know you');
//}



///////////////////////////////////////
////////////Object Literals/////////////////
//////////////////////////////////////

/*Aşağıdaki object literal yapısını kullanarak en az 5 araç bilgisini tutunuz.
   
   Araç Bilgileri:

      id : bmw116d_1234
      model : 116d
      yil : 2015
      renk : white
      servis kayitlari : 
            id : bmw116d_1234_1 tarih : 30.01.2016 km : 13000 toplam ücret : 900
               servis detayı:
               id : 1 işlem : yağ değişimi ücret : 300
               id : 2 işlem : filtre değişimi ücret: 300
               id : 3 işlem : fren hidroliği ücret: 300
            
            id : bmw116d_1234_2 tarih : 10.01.2017 km : 28000 toplam ücret : 1800
               id : 1 işlem : yağ değişimi ücret : 350
               id : 2 işlem : filtre değişimi : 350
               id : 3 işlem : fren hidroliği : 300
               id : 3 işlem : balata değişimi : 800 

*/

// let aracBilgileri = [
//    //Araç1 bmw116d_1234
//     {
//         id : 'bmw116d_1234',
//         model : '116d',
//         yil : 2015,
//         renk : 'white',
//         servisKayitlari : [
//            //Servis Kayıt 1
//             {   
//                 id : ' bmw116d_1234_1',
//                 tarih : '01/30/2016',  
//                 km : 13000, 
//                 toplamUcret : 900,   
//                 detay : [
//                         {   id : 'bmw116d_1234_1_1',    islem : 'yağ değişimi', ucret : 300 },
//                         {   id : 'bmw116d_1234_1_2',    islem : 'filtre degisimi',  ucret : 300 },
//                         {   id : 'bmw116d_1234_1_3',    islem : 'fren hidroliği',   ucret : 300 },
//                     ]
//             },
//             //Servis Kayıt 2
//             {
//                 id : ' bmw116d_1234_2',
//                 tarih : '01/10/2017',
//                 km : 28000,
//                 toplamUcret : 1800,
//                 detay : [
//                     {   id : 'bmw116d_1234_2_1',    islem : 'yağ değişimi', ucret : 350 },
//                     {   id : 'bmw116d_1234_2_2',    islem : 'filtre degisimi',  ucret : 350 },
//                     {   id : 'bmw116d_1234_2_3',    islem : 'fren hidroliği',   ucret : 300 },
//                     {   id : 'bmw116d_1234_2_4',    islem : 'balta değişimi',   ucret : 800 },
//                 ]
//             }
//         ]
//     },
//     //Araç1 bmw320d_1234
//     {
//         id : 'bmw320d_1234',
//         model : '320d',
//         yil : 2017,
//         renk : 'blue',
//         servisKayitlari : [
//            //Servis Kayıt 1
//             {   
//                 id : 'bmw320d_1234_1',
//                 tarih : '02/27/2018',  
//                 km : 7500, 
//                 toplamUcret : 2400,   
//                 detay : [
//                         {   id : 'bmw320d_1234_1_1',    islem : 'yağ değişimi', ucret : 1000 },
//                         {   id : 'bmw320d_1234_1_2',    islem : 'filtre degisimi',  ucret : 900 },
//                         {   id : 'bmw320d_1234_1_3',    islem : 'fren hidroliği',   ucret : 500 },
//                     ]
//             },
//             //Servis Kayıt 2
//             {
//                 id : 'bmw320d_1234_2',
//                 tarih : '05/19/2019',
//                 km : 15000,
//                 toplamUcret : 4500,
//                 detay : [
//                     {   id : 'bmw320d_1234_2_1',    islem : 'yağ değişimi', ucret : 1000 },
//                     {   id : 'bmw320d_1234_2_2',    islem : 'filtre degisimi',  ucret : 900 },
//                     {   id : 'bmw320d_1234_2_3',    islem : 'Üst Kapak Conta Değişimi',   ucret : 1800 },
//                     {   id : 'bmw320d_1234_2_4',    islem : 'balta değişimi',   ucret : 800 }, 
//                 ]
//             }
//         ]
//     },
// ]

//     //İlk kayıt edilen araç bilgilerini getir.

//     console.log(aracBilgileri[0])
//     console.log(aracBilgileri[0].servisKayitlari[0].detay);


///////////////////////////////////////
////////////Sayı Tahmin Oyunu/////////////////
//////////////////////////////////////

//1-10 arası rastgele sayı üreten bir sayıyı aşağı yukarı ifadeleri ile buldurun.
//**puanlama yap. */
//kullanıcı kaç kerede bileceğini belirtebilsin.

// let rand = (Math.random(0,10)*10).toPrecision(1);
// console.log(rand);
// let defPoint = 100;
// let decPoint = 4;
// let tryCount = 0;
// let maxTryCount = prompt("how many times do you want to try ? ");
// let guess ;
// do{
//     guess = prompt("Make the guess");
//     if (guess == rand) {
//         console.log(`Congratulations ... Correct Prediction \nYour Point : ${defPoint} \nTry Count : ${tryCount}`);
//         break;
//     }else{
//         tryCount += 1
//         defPoint -=decPoint;
//         console.log(`Wrong Prediction \n Ceiling Points : ${defPoint} \nTry Count : ${tryCount}`);
//     }
 
// }while(tryCount<maxTryCount){
//     if (tryCount>=maxTryCount) {
//         console.log(`I'm sorry...You don't have right to try`);
//     }
// }