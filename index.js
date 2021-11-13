var firstName = prompt("Iltimos ismingizni yozing: ")
while(!isNaN(firstName)){
               firstName = prompt("Iltimos, harflardan foydalanib yozing")
}
console.log(firstName+" bu dasturda sizga sonlarning darajisini topib beramiz !");
alert(firstName+" bu dasturda sizga sonlarning darajisini topib beramiz !");

var numberOne = +prompt(firstName+" iltimos daraja asosidagi soni kiriting: ")
while (isNaN(numberOne) || numberOne == 0 ){
               numberOne = +prompt(firstName+" eslatib o'tamiz daraja asosiga faqat son kiriting !")
}

var numberTwo = +prompt(firstName+" iltimos asosning darajasidagi soni kiriting !")
while (isNaN(numberTwo) || numberOne == 0 ){
               numberTwo = +prompt(firstName+" eslatib o'tamiz asosning darajasiga faqat son kiriting !")
}
var total = 1
               for (let i = 0; i < numberTwo;i++) {
                            total = total*numberOne   
               }

console.log(firstName+" siz asosga "+numberOne+" va darajaga "+numberTwo+" sonlarini kiritdingiz "+"va "+numberOne+" ning "+numberTwo+"--darajasi "+total+" bo'ladi");
alert(firstName+" siz asosga "+numberOne+" va darajaga "+numberTwo+" sonlarini kiritdingiz "+"va "+numberOne+" ning "+numberTwo+"-darajasi "+total+" bo'ladi");
alert(firstName+" sizga e'tibor uchun katta rahmat, barcha ezgu maqsadlaringizga erishishingizga tiladoshmiz deya Rasuljon")