//UI variables
//İlk olarak sayfa içersindeki elemanlara ulaşacağımız bağlantılar oluşturuluyor.
const form = document.querySelector('#addTaskForm');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taksList = document.querySelector('#task-list');
let items ;

loaditems()
eventListeners();
//saveAndloadfromLocal();

//Ulaşılan elemanlara atayacağımız event fonksiyonları yazılıyor.
function loaditems(){
    items = getItemFromLS();
    items.forEach(function(item){
        create_li_item(item)
    })
}
function eventListeners(){
    //submit item
    form.addEventListener('submit',addNewItem);
    //delete an item
    taksList.addEventListener('click',deleteItem);
    //delete all item
    btnDeleteAll.addEventListener('click',deleteAllItem);

}
//add new item function
function addNewItem(e){
    if (input.value ==='') {
        //input kutusu boş ise bişey eklemez
        alert('İnput box is null')
    }
    //
    create_li_item(input.value)
    //
    setItemToLS(input.value);
    input.value='';
    e.preventDefault();
}
function deleteItem(e){
        console.log(e.target);
        if (e.target.className === 'fas fa-times') {
            if(confirm('Are You Sure ??')){
             e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}
function deleteAllItem(){
    if(confirm('Are You Sure')){
        console.log(taksList.childNodes);
        console.log(taksList.children);
        taksList.innerHTML='';
        /*taksList.childNodes.forEach(function(element){
            if (element.nodeType == 1) {
                element.remove();
            }
        })*/
        console.log('Tüm seçilenler silindi.');
    }else{
        console.log('Silme işlemi yapılmadı');
    }
    
}
function create_li_item(text){
     //input kutusunda değer var ise bir li elemanı oluşturulur.
     const li = document.createElement('li');
     li.className = 'list-group-item list-group-item-secondary';
     //li elemanı içine input kutusundaki değer yazılıyor.
     li.appendChild(document.createTextNode(text));
     //li elemanı içerisine ekelnecek bi a elemanı oluşturuluyor.
     const a = document.createElement('a');
     a.setAttribute('href','#');
     //a.setAttribute('class','delete-item float-right');
     a.classList = 'delete-item float-right';
     a.innerHTML = '<i class="fas fa-times"></i>';
 
     // i element bu şekilde oluşturulabilir.
     //const i = document.createElement('i');
     // i.classList.add('fas');
     // i.classList.add('fa-times');
     // i.classList = 'fas fa-times'//
     //a.appendChild(i);
         
     //li ve a element leri ilişkilendiriliyor.
     li.appendChild(a);
     //oluşturulan li elemanı alt taraftaki ul nesnesi içine gönderilir.
     taksList.appendChild(li);
     return taksList;
}
function getItemFromLS(){
    if (localStorage.getItem('items') === null) {
        items =[];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}
function setItemToLS(text){
    items = getItemFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}