/*/İlkel Veri Türleri
JavaScript'teki ilkel veri türleri şunları içerir:

Numbers - Tamsayılar - Ondalık sayılar
Strings - Tek tırnak, çift tırnak veya ters tırnak içerisindeki tüm veriler..
Booleans - true yada false (true = 1 false = 0 bu iki terimi bu şekilde öğrenin. Çevirilerine çok girmeyin kısaca var yada yok )
Null - Boş değer yada değeri yok
Undefined - Bir değer verilmeyen değişken. ( Örn: let variables; )
Symbol - Sembol yapıcısı tarafından oluşturulabilen benzersiz bir değer
JavaScript'teki ilkel olmayan veri türleri şunları içerir:

Objects ( Nesneler )
Arrays ( Diziler )
Şimdi ilkel ve ilkel olmayan veri türlerinin tam olarak ne anlama geldiğini görelim. İlkel veri türleri değişmez (değiştirilemez) veri türleridir. İlkel bir veri türü oluşturulduktan sonra onu değiştiremeyiz./*/

//Primitive Data Types
let numOne = 2
let numTwo = 2

console.log(numOne == numTwo) //true

let js = 'Javascript'
let py = 'Python'

console.log(js == py) //false 

let bool1 = true
let bool2 = false

console.log(bool1 == bool2) //false

