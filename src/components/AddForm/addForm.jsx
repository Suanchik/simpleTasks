import React, { useRef, useState } from 'react';
import Card from '../Card/card';
import './addForm.scss';
import plus from './../../assets/add.svg';
import close from './../../assets/close.png';

function AddForm({ addNewCard }) {

    const [edit, setEdit] = useState(false);
    const textRef = useRef();

    const OpenadderCard = () => {
        setEdit(!edit)
    }

    const addNewCardText = () => {
        let newtext = textRef.current.value
        if (newtext !== '') {
            addNewCard(newtext);
            textRef.current.value = ''
            OpenadderCard()
        }
    }

    return (
        <React.Fragment>
            {edit
                ?
                <div className="add-form">
                    <div className="add-form__input">
                        <Card><textarea ref={textRef} autoFocus name="" id="" rows="3" /></Card>
                        <div className="add-form__button">
                            <button className="button" onClick={addNewCardText}>Добавить карточку</button>
                            <img onClick={OpenadderCard} src={close} alt="close" />
                        </div>
                    </div>
                </div>
                :
                <div onClick={OpenadderCard} className="open-button">
                    <div className="button-add-btn">
                        <img src={plus} alt="plus" />
                        <div>Добавить еще задачу</div>
                    </div>
                </div>}
        </React.Fragment>
    )
};

export default AddForm;