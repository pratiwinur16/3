function balikKata(str){
  var newString=''// buat variabel string baru untuk menampung string yang akan dibalik katanya 
  for (var i= str.length-1; i>=0; i--){ // start condition dikurang satu merujuk kepada karakter terakhir (karena array dimulai dari 0)
    newString= newString + str[i]; 
  }
  return newString;
}

console.log (balikKata('Hello World'))