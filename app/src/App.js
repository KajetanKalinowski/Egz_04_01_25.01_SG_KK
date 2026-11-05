import { useState } from 'react';
import './App.css';
function App() {
  const lista = [{id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}]
const [switch1,setSwitch1] = useState(true)
const [switch2,setSwitch2] = useState(true)
const [switch3,setSwitch3] = useState(true)
// **********************************************
// nazwa metody: Checked1
// opis metody: zmienia stan switch1 w zależności od poprzedniego stanu
// parametry: brak
// zwracany typ i opis: brak
// autor: 123456789010
// ***********************************************
function Checked1(){
  if(switch1==true){
    setSwitch1(false)
  }else{
    setSwitch1(true)
  }
}
// **********************************************
// nazwa metody: Checked2
// opis metody: zmienia stan switch2 w zależności od poprzedniego stanu
// parametry: brak
// zwracany typ i opis: brak
// autor: 123456789010
// ***********************************************
function Checked2(){
  if(switch2==true){
    setSwitch2(false)
  }else{
    setSwitch2(true)
  }
}
// **********************************************
// nazwa metody: Checked3
// opis metody: zmienia stan switch3 w zależności od poprzedniego stanu
// parametry: brak
// zwracany typ i opis: brak
// autor: 123456789010
// ***********************************************
function Checked3(){
  if(switch1==true){
    setSwitch3(false)
  }else{
    setSwitch3(true)
  }
}
// **********************************************
// nazwa metody: Add
// opis metody: zwiększa wartość downloads o 1 w konkretnym elemencie listy
// parametry: brak
// zwracany typ i opis: brak
// autor: 123456789010
// ***********************************************
function Add(id){
  console.log(id)
  lista[id].downloads++
}
  return (
    <div>
      <h1 style={{"text-align": "center"}}>Kategorie zdjęć</h1>
      <div style={{"display": "flex", "flexDirection":"row","gap": "2px"}}>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" defaultChecked="true" onChange={()=>{Checked1()}} id="ctrId"/>
        <label class="form-check-label" for="ctrId">Kwiaty</label>
      </div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" onChange={()=>{Checked2()}} defaultChecked="true" id=" ctrId2"/>
        <label class="form-check-label" for=" ctrId2">Zwierzęta</label>
      </div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" onChange={()=>{Checked3()}} defaultChecked="true" id=" ctrId3"/>
        <label class="form-check-label" for=" ctrId3">Samochody</label>
      </div>
      </div>
      <div style={{"display": "flex", "flexDirection":"row","flexWrap":"wrap"}}>
        {lista.map((item,idx)=>(
          (switch1 && item.category==1) || (switch2 && item.category==2) || (switch3 && item.category==3)?
          <div key={idx}>
            <img src={`./assets/${item.filename}`} alt={item.alt} style={{"margin":"5px","borderRadius":"5px"}}/>
            <h4>Pobrań: {item.downloads}</h4>
            <button type="button" onClick={()=>{Add(item.id)}} class="btn btn-success">Pobierz</button>
          </div>:<></>
))}
      </div>
    </div>
  );
}

export default App;
