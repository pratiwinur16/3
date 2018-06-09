/*Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. 
Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang
 dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, 
 anggap saja semua text lowercase.*/


function groupAnimals(animals) {
    var resultArr = [ [] ];
    var a = 0;

    animals.sort() // sorting dulu 
    resultArr[0].push(animals[0])
    
    for(var i = 1 ; i < animals.length ; i++){ //lakukan pengulangan sepanjang animals length 
        if(animals[i][0] === resultArr[a][0][0]){ // jika animals yang ke i indeks yg ke 0 samadengan array a indeks 0 dan 0 maka 
            resultArr[a].push(animals[i]) // push ke result array 
        }else{
            a++; // increment array jika tidak 
            resultArr[a] = [animals[i]] //
        }
    }
    return resultArr
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
