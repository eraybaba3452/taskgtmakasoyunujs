function oyunuBaslat(secim){
    
    let insanSecimi=secim.id;
  
    
    let rastgeleSayi=Math.floor(Math.random()*3);
    let bilgisayarSecimi=['tas', 'kagit', 'makas'][rastgeleSayi];
  
    
    let oyunPuanlamalari = {
      'tas': {"makas": 1, "tas": 0.5, "kagit": 0},
      'kagit': {'tas': 1, 'kagit': 0.5, 'makas': 0},
      'makas': {'kagit': 1, 'makas': 0.5, 'tas': 0}
    };
  
    
    let insanPuani=oyunPuanlamalari[insanSecimi][bilgisayarSecimi];
  
  
      /*
      let sonuc=document.getElementById("sonuc");
  
      if(insanPuani === 0){
          sonuc.innerHTML= "Kaybettiniz :(";
          sonuc.style.color="red";
      }
      else if(insanPuani ===0.5){
          sonuc.innerHTML= "Sonuç Berabere";
          sonuc.style.color="blue";
      }
      else{
          sonuc.innerHTML= "Kazandınız :)";
          sonuc.style.color="green";
      }
      */
  
    
    let kayitliResimler = {
      "tas": document.getElementById('tas').src,
      "kagit": document.getElementById('kagit').src,
      "makas": document.getElementById('makas').src
  };
  
  
    document.getElementById("tas").remove();
    document.getElementById("kagit").remove();
    document.getElementById("makas").remove();
  
   
    var insanResmi = document.createElement("img");
    var bilgisayarResmi = document.createElement("img");
    var sonucMesaji = document.createElement("div");
  
    
    insanResmi.src=kayitliResimler[insanSecimi];
    bilgisayarResmi.src=kayitliResimler[bilgisayarSecimi];
  
    
    document.getElementById("container").appendChild(insanResmi);
    document.getElementById("container").appendChild(sonucMesaji);
    document.getElementById("container").appendChild(bilgisayarResmi);
  
    
    if(insanPuani === 0){
      sonucMesaji.innerHTML= "Kaybettiniz :(";
      sonucMesaji.style.color="red";
    }
    else if(insanPuani ===0.5){
        sonucMesaji.innerHTML= "Sonuç Berabere";
        sonucMesaji.style.color="blue";
    }
    else{
        sonucMesaji.innerHTML= "Kazandınız :)";
        sonucMesaji.style.color="green";
    }
  
  
  }