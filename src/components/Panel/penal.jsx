import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewCardItem, dalateAllItem, addNewName, taskDoneAC } from '../../redux/penal';
import AddForm from '../AddForm/addForm';
import Card from '../Card/card';
import './penal.scss';
import close from './../../assets/close.png';
import edit from './../../assets/edit.svg';
import done2 from './../../assets/done.png';


function Penal({ items, name, el, deletoneList }) {

    console.log(items)

    const dispatch = useDispatch();
    const [editMode, seteditMode] = useState(false);
    const [taskname, usetaskname] = useState(name);
    const [done, usedone] = useState(false);
    const nameRef = useRef();

    const addNewCard = (text) => {
        dispatch(addNewCardItem(el, text))
    }

    const taskDone = (index) => {
        dispatch(taskDoneAC(el, index));
    }

    const changeName = () => {
        seteditMode(!editMode)
    }

    const changeTaskName = (e) => {
        usetaskname(e.currentTarget.value)

    }

    const addNewNameText = () => {
        if (nameRef.current && nameRef.current.value) {
            let newName = nameRef.current.value;
            dispatch(addNewName(el, newName));
        }
        changeName()
    }

    const dalateAllCard = () => {
        const isdeleteList = window.confirm("вы хотите удалить весь список?")
        if (isdeleteList) { dispatch(dalateAllItem(el)) }
    }

    return (
        <div>
            <div className="penal">
                <div className="penal__head">
                    {!editMode ? <div><img className='imgPen' onClick={changeName} src={edit} alt="close" />
                        <div className="header">{name}</div><img className='img' onClick={dalateAllCard} src={close} alt="close" /></div> :
                        <input onChange={(e) => changeTaskName(e)} ref={nameRef} autoFocus type="text" onBlur={addNewNameText} value={taskname} />}
                </div>
                {items.length < 1 ?
                    <span className="netZadach">нет задач</span> :
                    <div className="penal__items">
                        {items.map((el, index) =>
                            el && <div key={index} className="task_block">
                                <Card el={el} deleteOnecard={() => deletoneList(el)} key={index} close={close}>
                                    {el.name}
                                </Card>
                                <input type="checkbox" id={el.name} className="chackinput" checked={el.done} onChange={() => taskDone(index)} />
                                <label className={el.done ? "green" : "chaklabel"} for={el.name}>
                                    {el.done ?
                                        <img src={done2} alt="" /> :
                                        ""}
                                </label>
                            </div>)}
                    </div>}
                <AddForm addNewCard={addNewCard} />
            </div>
        </div>
    )
}

export default Penal;