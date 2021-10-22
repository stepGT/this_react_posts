import React from 'react'
import style from './Loader.module.css';

const Loader = () => {
    return (
        <div className={style.wrapLoader}>
            <div className={style.loader}></div>
        </div>
    )
}

export default Loader;