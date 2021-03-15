//object literals
// let tugay = {
//     name : 'tugay',
//     yearOfBirth : 1997,
//     job : 'student'
// }

// let numbers =[10,20,30];

// console.log(tugay);
// console.log(numbers);

//////////////////////////////////////////
//////////////Constructor////////////////
//////////////////////////////////////////

/*let Insignia = {
    marka : 'Opel',
    model : 'İnsignia',
    fiyat : 0.32,
    km : 45000
}*/

/* 1.Yöntem
function Car(marka,model,fiyat,km,productYear){
   this.marka = marka;
   this.model = model;
   this.fiyat = fiyat;
   this.km = km; 
   this.productYear = productYear;
   this.calculateAge = function(){
       return new Date().getFullYear()-this.productYear;
   }

   //console.log(this);
}
*/

// let Car = function(marka,model,fiyat,km,productYear){
//     this.marka = marka;
//     this.model = model;
//     this.fiyat = fiyat;
//     this.km = km; 
//     this.productYear = productYear;
//     this.calculateAge = function(){
//         return new Date().getFullYear()-this.productYear;
//     }
// }
// let Insignia = new Car('Opel','İnsignia',0.32,45000,2017);
// let M5 = new Car('Bmw','M5',0.48,25000);

// console.log('Marka : '+Insignia.marka);
// console.log('Yaş : '+Insignia.calculateAge());


//////////////////////////////////////////
//////////////Prototype(Kalıtım)////////////////
//////////////////////////////////////////
//Özellikleri objeler arası aktarmayı sağlar.

// let Person = function(name ,surname, yearofbirth, job) {
//     this.name = name;
//     this.job = job;
//     this.surname = surname;
//     this.yearofbirth = yearofbirth;
// }
// Person.prototype.calculateAge = function(){
//     return new Date().getFullYear()-this.yearofbirth;

// }
// Person.prototype.fullname = function(){
//     return `${this.name} ${this.surname}`
// }
// let emel = new Person('Emel','Yılmaz',1997,'Mühendis');
// let yigit = new Person('Yiğit','Aslan',1992,'Mimar');
// console.log(emel);
// console.log(`Emel yaş : ${emel.calculateAge()}`);
// console.log(`Yiğit yaş : ${yigit.calculateAge()}`);

// console.log(emel.hasOwnProperty('name'));

// console.log(emel.fullname());
// console.log(yigit.fullname());

//////////////////////////////////////////
//////////////Constructor and Prototype(Kalıtım)////////////////
//////////////////////////////////////////

// let Person = function(name,salary){
//     if (!(this instanceof Person)) {
//         return new Person(name,salary);
//     }
//     this.name = name ; 
//     this.salary = salary;
// }
// Person.prototype.calculateSalary = function(){
//     var month = new Date().getMonth()+1;
//     var tax = 0;
//     total = this.salary*month;
//     if (total<20000) {
//         tax = total*0.2;
//     }else if(tax>=20000 && total <30000){
//         tax = total*0.3;
//     }else{
//         tax = total*0.4;
//     }
//     return {
//         tax : tax,
//         net : total-tax
//     }
// }
    
// let emp1 = Person('Tugay',4500);
// console.log(emp1);
// console.log('Ödenen vergi : '+emp1.calculateSalary().tax+'\nVergiden kalan net maaş : '+emp1.calculateSalary().net);


// let emp2 = Person('Barış',4000);
// console.log(emp2);

//////////////////////////////////////////
//////////////Object.Create////////////////
//////////////////////////////////////////
//Objeler arası bilgi aktarımı (özellik aktarımı)

// let Student = {
//     calvulateAge : function(){
//         return new Date().getFullYear()-this.yearofbirth;
//     }
// }
// console.log(Student);
// ///////////
// //1.yöntem
// //////////
// let yigit = Object.create(Student);
// yigit.name = 'Yiğit';
// yigit.yearofbirth = 1997;
// yigit.job = 'Mühendis'
// console.log(yigit.calvulateAge());
// ///////////
// //2.Yöntem
// //////////
// let emel = Object.create(Student,{
//     name : {value : 'emel'},
//     yearofbirth : {value : 1994},
//     job : {value : 'Student'},
// });
// console.log(emel);
// console.log(emel.calvulateAge());

//////////////////////////////////////////
//////////////Prototypal Inheritance////////////////
//////////////////////////////////////////
//2 farklı nesne arası inheritance

// let Person = function(name,yearofbirth,job){
//     this.name = name;
//     this.yearofbirth = yearofbirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function(){
//     return new Date().getFullYear()- this.yearofbirth;
// }
// //Inherit the person Property
// let Teacher = function(name,yearofbirth,job,subject){
//     Person.call(this,name,yearofbirth,job);
//     this.subject = subject;
// }

// //Inherit the Person prototype methods
// Teacher.prototype = Object.create(Person.prototype);//Prototype aktarma
// //Set Teacher constructor
// Teacher.prototype.constructor = Teacher;

// Teacher.prototype.greeting = function(){
//     return `Hello my name is ${this.name}`;
// }
// let emel = new Teacher('Emel',1994,'Teacher','math');

// console.log(emel);
// console.log(emel.calculateAge());

//////////////////////////////////////////
//////////////Built in Constructor////////////////
//////////////////////////////////////////

//String

// var str1 = 'Tugay';
// var str2 = new String('Tufan');
// console.log(typeof str1);
// console.log(typeof str2);

// String.prototype.repeat = function(n){
//     return new Array(n+1).join(this);
// }
// console.log('Tugay'.repeat(2));
// //Number 
// var numb1 = 10;
// var numb2 =new Number(10);
// console.log(numb1);
// console.log(numb2);

// //Array 

// var arr1 = ['ada','yiğit','kerem'];
// var arr2 = new Array('ada','yiğit','kerem');

// Array.prototype.remove = function(member){
//     var index = this.indexOf(member);
//     if (index>-1) {
//         this.splice(index,1);
//     }
//     return this;
// }
// console.log(arr1.remove('ada'));


//////////////////////////////////////////
//////////////Kalıtım Uygulama////////////////
//////////////////////////////////////////

//Person>Student=Teacher>HeadMaster
// let Person = function(name){
//     this.name = name;
// }
// Person.prototype.Introduce = function(){
//     return `Benim adım ${this.name}.`
// }
// let Student = function(name,number){
//     Person.call(this,name);
//     this.number = number;
//     this.study = function(){
//         return `${this.name} ders çalışıyor`;
//     }
// }
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// let Teacher = function(name,branch){
//     Person.call(this,name);
//     this.branch = branch;
// }
// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;
// Teacher.prototype.teach = function(){
//     return `${this.name} adlı öğretmen ${this.branch} dersine giriyor.`
// }
// let Headmaster = function(name,branch){
//     Teacher.call(this,name,branch);
//     this.shareTask = function(){
//         return `${this.name} okul müdürüdür.Ve görev dağılımı yapıyor.`;
//     }
// }
// Headmaster.prototype = Object.create(Teacher.prototype);
// Headmaster.prototype.constructor = Headmaster;

// let Kenan = new Headmaster('Kenan','Matematik');
// console.log(getProperties(Kenan));
// console.log(Kenan.Introduce());
// console.log(Kenan.teach());
// console.log(Kenan.shareTask());

// let Ayşe = new Teacher('Ayşe','Türkçe');
// console.log(getProperties(Kenan));
// console.log(Ayşe.Introduce());
// console.log(Ayşe.teach());
// //console.log(Ayşe.shareTask());

// function getProperties(object){
//     return (`İsim : ${object.name}\nBranş : ${object.branch}`);
// }

//////////////////////////////////////////
//////////////Primiteve ve Object Farklar////////////////
//////////////////////////////////////////

//Primitive tiplerde bellek alanları farklı yerlerdedir.Her tipin kendine özgü alanı vardır.Bir tipin tuttuğu değer değişirse diğerinde değişmez.
//Object tipler adreslere erişirler.Bir object diğer objeye atanır ise her iki object aynı adres alanını gösterir.Tiplerden birisi değişsse bile diğeride değişir.
//Fonksiyon içerisine gönderilen primite tip aslında o değildir.Onun bir kopyası gönderilir.Dolayısıyla foksiyon çalıştıktan sonra primite tip değeri ilk halinde kalır.Object tipi için durum tam tersidir.Fonksiyon içine object tipin adresi gönderilir değişim adres belleğinde olur.Dolayısıyla parametre olaarak gönderilen değer fonksiyon dışına çıktığında değişmiş olur.Bunun bu şekilde çalışmasının nedeni primitive tipler tek bir değer tutar.Bellekte kopyasının alınması sistmei yavaşlatmaz.Fakat object tipler içerisinde binlerce değer tutabilir ve kopyasını oluşturmak sistemi oldukça yavaşlatırdı.
// var a =10;
// var b = a;
// console.log('a : '+a+'\nb : '+b);

// var objA = {
//     name : 'Tugay',
//     age: 24
// }
// var objB = objA;
// var objC = objB;
// objA.age = 23;
// objB.age = 25;
// console.log('objA : '+objA.name +' '+ objA.age +'\nobjB : '+objB.name+' '+objB.age);
// console.log('objC : '+objC.name +' '+objC.age);

// var num = 50;
// var account ={
//     name : 'Tugay',
//     accountNumber :'123456'
// }

// function update(a,b){
//     a = 100;//a Farklı br değişken.Adres alanı num değişkeninden farklıdır.
//     b.accountNumber = '654321';//account objesi adres alanında işlem yapılıyor.
//     console.log(a);
//     console.log(b.accountNumber);
// }

// update(num,account);

// console.log(num);
// console.log(account.accountNumber);


//////////////////////////////////////////
//////////////Callback Fonksiyonlar////////////////
//////////////////////////////////////////
//Fonksiyon içerisine fonksiyon gönderebiliriz.
// function multiplybytwo(a,b,c,callback){
//     let arr = [];
//     for(let i = 0 ; i<3 ; i++){
//         arr[i] = callback(arguments[i]*2);
//     }
//     return arr;
// }

// function addOne(a){
//     return a+1;
// }
// console.log(multiplybytwo(2,3,4,addOne));
// console.log(multiplybytwo(10,15,20,function(a){return a+3;}));

//////////////////////////////////////////
//////////////Immediate Fonksiyonlar////////////////
//////////////////////////////////////////

//Sadece uygulama başında bir kere çalışmasını istediğimiz fonksiyonlar.
// Immediate fonksiyon isimsiz olur.Yapısı : 
// (function(){

// }());
// (function(name){
//     var days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
//     var today = new Date();
//     var msg = 'Welcome '+name+'.Today is '+days[today.getDay()];
//     console.log(msg);
// }('Tugay'));

//////////////////////////////////////////
//////////////Function that Return Functions///////////////
//////////////////////////////////////////

//Bazen fonksiyonlar geriye fonsiyon döndürür.

// function Question(hobby){
//     switch(hobby){
//         case 'Araba' :
//             return function(name){
//                 console.log(name + ' do you have a car ?');
//             } 
//         break;
//         case 'Kitap' : 
//             return function(name){
//                 console.log(name + ' what is your favorite book ?');
//             }
//         break;
//         case 'Yazılım' : 
//             return function(name){
//                 console.log(name + ' are you interesting in software ?');
//             }
//         break;
//         default : 
//             return function(name){
//                 console.log(name +' how are you today ?');
//             }
//         break ;
//     }
// }

// let carquestion = Question('Araba');
// carquestion('Tugay');s
// let bookquestion = Question('Kitap');
// bookquestion('Tugay');

//////////////////////////////////////////
//////////////Getter ve Setter///////////////
//////////////////////////////////////////

// const Person = {
//     firstname : 'Tugay',
//     lastname : 'Tufan',
    /*get fullname(){
        console.log(`${this.firstname} ${this.lastname}`);
    },
    set Fullname(value){
        var parts = value.trim().split(' ');
        this.firstname = parts[0];
        this.lastname = parts[1];
    }*/
// }
// console.log(Person);
// Person.firstname = 'Sena'
// Person.fullname;
// Person.Fullname = 'Beyza Eroğlu';
// Person.fullname;

//DefinePropery ile oluşturulan özellikler değiştirilemez.Bunun için fonksiyon vb. değişmeyen yapılar bununla tanımlanabilir.Sadece okunabilir değişkenler.Ama hem okuma hemde yazma için writable özelliği true yapılmalı.
// Object.defineProperty(Person,'fullName',{
//      get(){
//         return `${this.firstname} ${this.lastname}`;
//     },
//     set(value){
//         var parts = value.trim().split(' ');
//         this.firstname = parts[0];
//         this.lastname = parts[1];
//     }
// });
/*Object.defineProperty(Person,'age',{
    value : function() {
        if (this.value < 18 ) {
            this.value = 18;
        }else{
            this.value = this.value;
        }
    },
    writable : true,
})*/
// console.log(Person);
// console.log(Person.fullName);
// Person.fullName = 'Emel Melek';
// console.log(Person.fullName);



//////////////////////////////////////////
//////////////Call,Apply,Bind///////////////
//////////////////////////////////////////

//call . this işlevi görür.parametre olarak gönderilen değer this yerine geçer.İlk parametre this yerine geçer.
//apply call gibi çalışır .Sadece ilk parametre dışındaki parametreler dizi şeklinde fonksiyona verilir.
//Bind geriye bir fonksiyon döndürür.Bu dönüş değeri bir değişkene atılır.
// var welcome = function(a,b){
//     console.log(`WELCOME ${this.name}.Are you interesting in ${a} and ${b} ?`);
// };
// welcome();
// var yigit = {
//     name : 'yiğit'
// }
// var emel ={
//     name : 'Emel'
// }
// welcome.call(yigit,'asp.net','node.js');
// welcome.call(emel,'asp.net','node.js');

// welcome.apply(yigit,['asp.net','node.js']);
// welcome.apply(emel,['asp.net','node.js']);

// welcomeYigit = welcome.bind(yigit,'asp.net','node.js');
// welcomeEmel = welcome.bind(emel,'asp.net','node.js');
// welcomeYigit();
// welcomeEmel();

// var num = {
//     min : 0,
//     max : 100,
//     checkNumericRange : function (value) {
//         if(typeof value !== 'number'){
//             return false;
//         }else{
//             return value >= this.min && value <= this.max;
//         }
//     }
// }
// var num1 = {
//     min : 50,
//     max : 60
// }
// console.log(num.checkNumericRange(75));
// console.log(num.checkNumericRange.call(num1,60));
// console.log(num.checkNumericRange.apply(num1,[65]));
// var bindNumericRange = num.checkNumericRange.bind(num1);
// console.log(bindNumericRange(61));

//////////////////////////////////////////
//////////////Error Handling///////////////
//////////////////////////////////////////

//ReferencesError
//SyntaxError
//URIError
//TypeError
// try {
//     console.log(myfunction());
// } catch (e) {
//     console.log(e);
//     console.log(e.messages);
//     console.log(e.name);
//     console.log(e instanceof ReferenceError);
// }

// var person = {
//     name : 'Emel Melek',
// }
// try{
//     console.log(person.name);
//     if (typeof person.email == 'undefined') {
//         throw new Error('Email object is not defined!!')
//     }
//     console.log(person.email);
// }catch(e){
//     console.log(e);
// }

//////////////Örnek///////////////
document.getElementById('myBtn').addEventListener('click',function(e) {
    var name = document.getElementById('name');
    var age = document.getElementById('age');
    var errors = document.getElementById('errors');
    try {
        if (name.nodeValue.length == 0) {
            throw new Error('Name is required');
        }
        if(name.nodeValue.length >20){  
            throw new Error('Name is to long');
        }
    } catch (error) {
        errors.innerHTML = error.messages();
    }
    e.preventDefault();
})