import React from 'react';
// import naruto from './../assets/naruto.jpg';
// import superman from './../assets/uperman.jpg';
// import dc from './../assets/dc.jpg';
import future2 from './../assets/future2.jpg';
import future from './../assets/future.jpg';
// import black from './../assets/black.jpg';
import tbbt from './../assets/tbbt.jpg';
import marvel from './../assets/marvel.jpg';
import friends from './../assets/friends.jpg';
import gothem from './../assets/gothem.jpg';
import spiderman from './../assets/spiderman.jpg';

const BackgImg = React.memo(() => {

    const avatarki = [gothem,future2,future, spiderman,tbbt,friends, marvel];
    let num = 0;
    let root = document.querySelector('#root');

    (() => {
        root.style.backgroundImage = `url(${avatarki[num]})`;
    })()

    const changeBackground = () => {

        root.style.backgroundImage = `url(${avatarki[num += 1]})`;
        if(num >= avatarki.length) {
            root.style.backgroundImage = `url(${avatarki[0]})`
            num = 0
        }
      }

    return (
        <div>
            <button className="avaChange" onClick={changeBackground}>изменить фон</button>
        </div>
    )
})

export default BackgImg
