var sıralar = document.querySelectorAll('.row');
var filmler = document.querySelector('#movie');
var container = document.querySelector('.container');
var info = document.querySelector('.text');
const availableseats = container.querySelectorAll('.seat:not(.reserved)');
var selectSeatCount;
var indexes = [];
//Tıklama özellikleri eklendi.
sıralar.forEach(function(sıra,indx){
    sıra.addEventListener('click',function(e){
        choiceSeat(e,indx);
        //filmler.addEventListener('click',choiceMovie);
    });
});
filmler.addEventListener('click',choiceMovie);
function choiceSeat(e,sıraindex){
    //1.Yöntemm
        if(e.target.classList.contains('seat') && !(e.target.classList.contains('reserved'))){
            e.target.classList.toggle('selected'); //.selected varsa siler yoksa ekler
            //console.log('seat index : '+sıraindex*seatIndex);
            console.log(e.target.className);
        } 
        calculateCost();
        //info.textContent(`${filmler.textContent} filmine toplam ${selectSeatCount} adet bilet aldınız.\nToplam Bilet Fiyatlar : ${allTicketPrices}`);*/
}
function choiceMovie(e){
    selectSeatCount = container.querySelectorAll('.seat.selected').length;
        allTicketPrices = selectSeatCount*(filmler.value);
        info.firstElementChild.textContent = `${selectSeatCount}`;
        info.lastElementChild.textContent = `${allTicketPrices}`;
}
function calculateCost(){
    const selectedSeats = container.querySelectorAll('.seat.selected');

    const selectedSeatsArray = [];
    const availableSeatsArray = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsArray.push(seat);
    })
    availableseats.forEach(function(availableSeat){
        availableSeatsArray.push(availableSeat);
    })

    
    /*for (var i = 0 ; i<selectedSeatsArray.length ; ) {
        console.log(selectedSeatsArray);
        for(var j = 0 ; j<availableSeatsArray.length; ){
            console.log(selectedSeatsArray);
            if (selectedSeatsArray[i] === availableSeatsArray[j]) {
                indexes.push(j);
                i++;
                j++;
            }else{
                j++;
            }     
        }
    }*/
    console.log(indexes);
    selectSeatCount = selectedSeats.length;
    allTicketPrices = selectSeatCount*(filmler.value);
    info.firstElementChild.textContent = `${selectSeatCount}`;
    info.lastElementChild.textContent = `${allTicketPrices}`;
}
function setLocalStorage(){

}