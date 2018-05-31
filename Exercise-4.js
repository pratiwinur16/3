
/////////////Soal NO 1/////////////////// 
var input = ["0001", 
            "Roman Alamsyah", 
            "Bandar Lampung", 
            "21/05/1989", 
            "Membaca"] ;
function dataHandling2(){
  input.splice (1,1, "Roman ALamsyah ELsharawy")
  input.splice (2,1, "PRovinsi Bandar Lampung")
  input.splice (4,0, "Pria")
  input.splice (5,0, "SMA International Metro")
  return input ;
}
console.log(dataHandling2());
console.log('\n');
/////////////////Soal no 2//////////////////

var pisahTanggal= input[3].split("/")
//console.log (pisahTanggal[1]) //always console log to see if its work or not!

switch(pisahTanggal[1]) {
  case '01': { 
    console.log(' Januari ' ); 
  break; 
  }
  case '02': { 
    console.log(' Februari ' );
  break; 
  }
  case '03': { 
    console.log(' Maret '); 
  break; 
  }
  case '04': 
  { 
    console.log(' April '); 
  break; 
  }
  case '05': 
  { 
    console.log(' Mei ' ); 
  break;
  }
  case '06': 
  { 
    console.log(' Juni '); 
  break; 
  }  
  case '07': { 
    console.log(' Juli '); 
  break; 
  }
  case '08': 
  { 
    console.log(' Agustus ' ); 
  break; 
  }
  case '09': 
  { 
    console.log(' September ') ; 
  break; 
  }
  case '10': 
  { 
    console.log(' Oktober ' ); 
  break; 
  }
  case '11': 
  { 
    console.log(' November ' ); 
  break; 
  }
  case '12': { 
    console.log( ' Desember '); 
  break; 
  }
  default : { console.log('Bulan tidak tersedia'); }
} 
console.log("\n")
///////////////////soal no 3 ///// 
var urut =pisahTanggal.sort(function(a, b){return b-a}); 
console.log(urut)
console.log("\n")

///////////////soal no 4/////////// 
var gabungTanggal = input[3].split("/").join("-");
console.log(gabungTanggal)
console.log("\n")
/////soal no 5///////
var batasKarakter= input[1].split("",15).join("");
console.log (batasKarakter)
