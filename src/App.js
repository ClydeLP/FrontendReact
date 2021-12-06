import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
//TODO useEffect - єто хук он нужен для того чтобы вызывать какие-то функции во время рендеринга
// TODO useState - это хук который нужен для контроля динамических переменных
function App() {
  const [data, setData] = useState([]);
  //TODO data - это хранилище данных и это переменная её можно объявить как угодно
  //TODO setData - это функция которая обновляет значения
  useEffect(() => {
    fetch('http://localhost:4000/test')
        .then(res => res.json())//TODO так как ответ в json формате его нужно конвертировать
        .then(res => setData(res))
  },[])
  //TODO Fetch предоставляет улучшенный интерфейс для осуществления запросов к серверу: как по части возможностей и контроля над происходящим, так и по синтаксису, так как построен на промисах.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {data.map((element) => <li>{element.name},{element.age}</li>)}
        </div>
      </header>
    </div>
  );
}

export default App;
