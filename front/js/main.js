// Scrolling
const toTheTop = document.querySelector('#to-the-top');

// skrolovanje
window.onscroll = function() {
    if (document.documentElement.scrollTop > 80) {
        toTheTop.style.display = "block";
    } else {
        toTheTop.style.display = "none";
    }
}
// ka vrhu
toTheTop.addEventListener('click', toTop);
function toTop() {
    document.documentElement.scrollTop = 0;
}
// sektori
let sectoryList = document.querySelector('#sectory-list');

// block
let upravaArticle = document.querySelector('#uprava-article');
let projektiArticle = document.querySelector('#projekti-article');
let gradilistaArticle = document.querySelector('#gradilista-article');
let administracijaArticle = document.querySelector('#administracija-article');
let pripremaArticle = document.querySelector('#priprema-article');
let opstiArticle = document.querySelector('#opsti-article');
let knjigovodstvoArticle = document.querySelector('#knjigovodstvo-article');
let biroArticle = document.querySelector('#biro-article');
let bzrArticle = document.querySelector('#bzr-article');
let komercijalaArticle = document.querySelector('#komercijala-article');
let logistikaArticle = document.querySelector('#logistika-article');
let magacinArticle = document.querySelector('#magacin-article');
let alatiArticle = document.querySelector('#alati-article');
let radniciArticle = document.querySelector('#radnici-article');
let nekretnineArticle = document.querySelector('#nekretnine-article');
let skiresortArticle = document.querySelector('#skiresort-article');
let plamenacArticle = document.querySelector('#plamenac-article');
let pravniArticle = document.querySelector('#pravni-article');
let masterArticle = document.querySelector('#master-article');
let rampaArticle = document.querySelector('#rampa-article');
let hiddenArticle = document.querySelector('#hidden-article');

let lisi = ``;
block(upravaNiz, upravaArticle);
block(projektiNiz, projektiArticle);
block(gradilistaNiz, gradilistaArticle);
block(administracijaNiz, administracijaArticle);
block(pripremaNiz, pripremaArticle);
block(opstiNiz, opstiArticle);
block(knjigovodstvoNiz, knjigovodstvoArticle);
block(biroNiz, biroArticle);
block(bzrNiz, bzrArticle);
block(komercijalaNiz, komercijalaArticle);
block(logistikaNiz, logistikaArticle);
block(magacinNiz, magacinArticle);
block(alatiNiz, alatiArticle);
block(radniciNiz, radniciArticle);
block(nekretnineNiz, nekretnineArticle);
block(skiresortNiz, skiresortArticle);
block(plamenacNiz, plamenacArticle);
block(pravniNiz, pravniArticle);
block(masterNiz, masterArticle);
block(rampaNiz, rampaArticle);
block(hiddenNiz, hiddenArticle);

/// BLOK
function block(all, plc) {
    lisi += `
      <li class="list-category"><a href='#${all[0].sort}-article'>${all[0].sort}</a></li>
    `
    sectoryList.innerHTML = lisi;
    let forma = `
        <div>
            <table>
                <thead class="refa">
                    <tr><td colspan="4"><hr></td></tr>
                    <tr> <th colspan="4" style="text-align:center; padding: 10px 0; font-size: 110%" >${all[0].ref}` 
                    if (`${all[0].z}` == `true`) { forma += ` - ${all[0].sort}@kej.rs`} forma += `</th></tr>
                    <tr><td colspan="4"><hr></td></tr>
                </thead>
                <tbody>
                `;
                all.forEach(single => {
                        forma += `<table><thead><th colspan="4"><hr></th></thead><tbody><tr>
                          <td title='ime i prezime' class="asa">${single.ime}</td>
                          <td colspan="3"  title='email' class="msa"><i>${single.email}</i></td>
                        </tr>
                        <tr>
                          <td title='sektor' class="opo">${single.ref}</td>
                          <td title='skraceni broj' class="psa" style="width:15%">${single.skr}</td>
                          <td title='broj' class="bsa" style="width:35%;font-weight:bold" data-broj=${single.svezajedno}>${single.broj}</td>
                          <td title='drugo' class="esa">${single.priv}</td>
                        </tr>
                        <tr><td colspan="4"><hr></td></tr></tbody>`;
                    })
                    forma += `
                </tbody>
            </table>
        </div>
    `;
    plc.innerHTML = forma;    
}



//const searchInput1 = document.getElementById('search-input1');
//const searchInput2 = document.getElementById('search-input2');
//const searchInput3 = document.getElementById('search-input3');

const submit1 = document.getElementById('submit1');
const submit2 = document.getElementById('submit2');
const submit3 = document.getElementById('submit3');

//searchInput1.addEventListener("keyup", showSearched1);
//searchInput2.addEventListener("keyup", showSearched2);
//searchInput3.addEventListener("keyup", showSearched3);
submit1.addEventListener("click", showSearched1);
submit2.addEventListener("click", showSearched2);
submit3.addEventListener("click", showSearched3);

let nwasa = document.querySelectorAll('.asa');
let owasa = document.querySelectorAll('.bsa');
let pwasa = document.querySelectorAll('.psa');

let fwrefa = document.querySelectorAll('.refa');


let codeBlock = `<i class="fa-solid fa-magnifying-glass"></i>`;
// nesto oko value
document.getElementById("submit1").innerHTML = codeBlock;
document.getElementById("submit2").innerHTML = codeBlock;
document.getElementById("submit3").innerHTML = codeBlock;






// dodato
const searchInput1 = document.getElementById('search-input1');
const searchInput2 = document.getElementById('search-input2');
const searchInput3 = document.getElementById('search-input3');




// PRETRAGA 1
function showSearched1() {
  //let filterWord = this.value.toLowerCase();
  let filterWord = searchInput1.value.toLowerCase();
  console.log(filterWord);
  if (filterWord.length == 0) {
    fwrefa.forEach(re => {
      re.style.display = "table-row-group";
    })
  }
  console.log(filterWord.length);
  console.log(filterWord.charAt(0));
  nwasa.forEach(az => {
      if (az.innerHTML.toLowerCase().indexOf(filterWord) > -1) {
          az.parentElement.parentElement.parentElement.style.display = "";
          fwrefa.forEach(re => {
            re.style.display = "table-row-group";
          })
      } else {
          az.parentElement.parentElement.parentElement.style.display = "none";
          fwrefa.forEach(re => {
            re.style.display = "none";
          })
      }
  })
}

// PRETRAGA 2
function showSearched2() {
  //let filterWord = this.value.toLowerCase();
  let filterWord = searchInput2.value.toLowerCase();
  if (filterWord.length == 0 ) {
    fwrefa.forEach(re => {
      re.style.display = "table-row-group";
    })
  }
  owasa.forEach(az => {
      if (az.getAttribute("data-broj").indexOf(filterWord) > -1) {
        az.parentElement.parentElement.parentElement.style.display = "";
        fwrefa.forEach(re => {
          re.style.display = "table-row-group";
        })
      } else {
        az.parentElement.parentElement.parentElement.style.display = "none";
        fwrefa.forEach(re => {
          re.style.display = "none";
        })
      }
  })
}

// PRETRAGA 3
function showSearched3() {
  //let filterWord = this.value.toLowerCase();
  let filterWord = searchInput3.value.toLowerCase();
  if (filterWord.length == 0 ) {
    fwrefa.forEach(re => {
      re.style.display = "table-row-group";
    })
  }
  pwasa.forEach(az => {
      if (az.innerHTML.toLowerCase().indexOf(filterWord) > -1) {
        az.parentElement.parentElement.parentElement.style.display = "";
        fwrefa.forEach(re => {
          re.style.display = "table-row-group";
        })
      } else {
        az.parentElement.parentElement.parentElement.style.display = "none";
        fwrefa.forEach(re => {
          re.style.display = "none";
        })
      }
  })
}

