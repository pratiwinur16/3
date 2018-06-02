/*Problem
Diberikan sebuah function tentukanDeretGeometri(arr) yang menerima satu parameter berupa array yang terdiri dari angka. 
Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret geometri. 
Deret geometri adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten secara perkalian.
 Contoh, [1, 3, 9, 27, 81] adalah deret aritmatika dengan pertambahan nilai sebesar pengalian 3, 
 dan [1, 3, 9, 27, 48] bukanlah deret aritmatika 
 karena tidak perbedaan selisih antar angka yang tidak konsisten secara perkalian (27 * 3 bukanlah 48!)
// logic : sama seperti deret aritmatika, arr.length dibatasin -2 karena kondisi i+1 &i+2. 
kemudian cek apakah array ke i+1 dibagi arr [i] sama dengan arr [i+2]/ arri+1, 
contoh i=0 berarti, (0+1)/0 === (0+2)/ (0+1) = 1/0 --> 3/1 =3 -> 2/1-> 9/3=3 -> true  */

function tentukanDeretGeometri(arr) {
  var cek = true; 
  for (var i=0; i<arr.length-2; i++ ){ // for-nya dibatesin jadi kurang 2 indeks, karena kondisi if i+1 i+2 
         if(arr[i+1]/arr[i] ===arr[i+2]/arr[i+1]){
      } else {
       cek=false;  
    } 
  }
  return cek;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false