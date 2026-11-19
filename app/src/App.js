import { useState } from 'react';
import './App.css';

const initialLista = [
  { id: 0, alt: "Mak", filename: "obraz1.jpg", category: 1, downloads: 35 },
  { id: 1, alt: "Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43 },
  { id: 2, alt: "Dalmatyńczyk", filename: "obraz3.jpg", category: 2, downloads: 2 },
  { id: 3, alt: "Świnka morska", filename: "obraz4.jpg", category: 2, downloads: 53 },
  { id: 4, alt: "Rotwailer", filename: "obraz5.jpg", category: 2, downloads: 43 },
  { id: 5, alt: "Audi", filename: "obraz6.jpg", category: 3, downloads: 11 },
  { id: 6, alt: "kotki", filename: "obraz7.jpg", category: 2, downloads: 22 },
  { id: 7, alt: "Róża", filename: "obraz8.jpg", category: 1, downloads: 33 },
  { id: 8, alt: "Świnka morska", filename: "obraz9.jpg", category: 2, downloads: 123 },
  { id: 9, alt: "Foksterier", filename: "obraz10.jpg", category: 2, downloads: 22 },
  { id: 10, alt: "Szczeniak", filename: "obraz11.jpg", category: 2, downloads: 12 },
  { id: 11, alt: "Garbus", filename: "obraz12.jpg", category: 3, downloads: 321 }
];

function App() {
  const [lista, setLista] = useState(initialLista);
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(true);

  // **********************************************
  // nazwa metody: Checked1
  // opis metody: zmienia stan switch1 w zależności od poprzedniego stanu
  // parametry: brak
  // zwracany typ i opis: brak
  // autor: 123456789010
  // ***********************************************
  function Checked1() {
    setSwitch1(prev => !prev);
  }

  // **********************************************
  // nazwa metody: Checked2
  // opis metody: zmienia stan switch2 w zależności od poprzedniego stanu
  // parametry: brak
  // zwracany typ i opis: brak
  // autor: 123456789010
  // ***********************************************
  function Checked2() {
    setSwitch2(prev => !prev);
  }

  // **********************************************
  // nazwa metody: Checked3
  // opis metody: zmienia stan switch3 w zależności od poprzedniego stanu
  // parametry: brak
  // zwracany typ i opis: brak
  // autor: 123456789010
  // ***********************************************
  function Checked3() {
    setSwitch3(prev => !prev);
  }

  // **********************************************
  // nazwa metody: Add
  // opis metody: zwiększa wartość downloads o 1 w konkretnym elemencie listy
  // parametry: id - identyfikator elementu w tablicy
  // zwracany typ i opis: brak
  // autor: 123456789010
  // ***********************************************
  function Add(id) {
    setLista(prevLista =>
      prevLista.map(item =>
        item.id === id ? { ...item, downloads: item.downloads + 1 } : item
      )
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Kategorie zdjęć</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            checked={switch1}
            onChange={Checked1}
            id="ctrId1"
          />
          <label className="form-check-label" htmlFor="ctrId1">Kwiaty</label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            checked={switch2}
            onChange={Checked2}
            id="ctrId2"
          />
          <label className="form-check-label" htmlFor="ctrId2">Zwierzęta</label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            checked={switch3}
            onChange={Checked3}
            id="ctrId3"
          />
          <label className="form-check-label" htmlFor="ctrId3">Samochody</label>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {lista.map((item) =>
          (switch1 && item.category === 1) ||
          (switch2 && item.category === 2) ||
          (switch3 && item.category === 3) ? (
            <div key={item.id}>
              <img
                src={`./assets/${item.filename}`}
                alt={item.alt}
                style={{ margin: "5px", borderRadius: "5px" }}
              />
              <h4>Pobrań: {item.downloads}</h4>
              <button
                type="button"
                onClick={() => Add(item.id)}
                className="btn btn-success"
              >
                Pobierz
              </button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;