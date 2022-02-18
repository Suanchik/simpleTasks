import { Fragment } from 'react';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import BackgImg from './components/backgImg';
import Penal from './components/Panel/penal';
import { addNewListItem, deleteOneListofcard } from './redux/penal';
import add from './assets/add.svg'


function App() {

  const items = useSelector(({penal}) => penal.items);
  const [listEit, setlistEit] = useState(false)
  const NameRef = useRef();
  

  const itemsLength = Object.keys(items).length;

  
  const dispatch = useDispatch();

  const addNewList = () => {
    const newNametext = NameRef.current.value
    if(newNametext !== '') {
      const newName = Math.random() * (Object.keys(items).length)
      const newList =  {
          name: newNametext,
          item: []
      }
      dispatch(addNewListItem(newList, newName))
      setlistEit(!listEit)
    }
  }

  const openListInput = () => {
    if(NameRef.current && NameRef.current.value) {
      addNewList()
    }
    setlistEit(!listEit)
  }

  
  const deletoneList = (element, elemIndex) => {
    dispatch(deleteOneListofcard(element, elemIndex))
  }

  return (
    <Fragment>
    <BackgImg/>
    <div className="App">
      {Object.keys(items).map((el, index)=> <Penal key={index} items={items[el].item} deletoneList={(elem) => deletoneList(el, items[el].item.indexOf(elem))} name={items[el].name} el={el}/>)}
      {!listEit ? itemsLength === 5 ? null : <div onClick={openListInput} className="addNewList">Добавить список</div>
      :
      <div className="inputAria">
      <input ref={NameRef} onBlur={(openListInput)} autoFocus rows="3" placeholder="имя списка"/>
      </div>}
  </div> 
    </Fragment>
    
  );
}

export default App;
