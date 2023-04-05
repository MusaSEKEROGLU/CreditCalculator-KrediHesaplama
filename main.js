function krediHesapla(){
    var cekilecekTutar,vadeSayisi; //giriş değişkenleri
    var aylikTaksit,odenecekToplamTutar; //çıkış değişkenleri

    cekilecekTutar = document.getElementById("txtKrediTutari").value;  //input'un değerini alma
    var selectListe = document.getElementById("slctVade"); //selectListeyi secme

    vadeSayisi = selectListe.options[selectListe.selectedIndex].value;  //select options'lardaki değerleri alma 12,24,36,48 değerlerini
            if(vadeSayisi == 12){
                odenecekToplamTutar = cekilecekTutar * 1.10;   //1.1 yüzde 10 faiz
            }
            else if(vadeSayisi == 24){
                odenecekToplamTutar = cekilecekTutar * 1.20;   //1.2 yüzde 20 faiz
            }
            else if(vadeSayisi == 36){
                odenecekToplamTutar = cekilecekTutar * 1.30;   //1.3 yüzde 30 faiz
            }
            else if(vadeSayisi == 48){
                odenecekToplamTutar = cekilecekTutar * 1.40;   //1.4 yüzde 40 faiz
            }
    

    aylikTaksit = odenecekToplamTutar / vadeSayisi;

         document.getElementById("sonuc").innerHTML = "Toplam Geri Ödeme: " + odenecekToplamTutar +
    "<br>" + "Aylık Taksit Tutarı: " + aylikTaksit.toFixed(2); //toFixed(2) virgülden sonra 2 basamak
   
}

    


 
