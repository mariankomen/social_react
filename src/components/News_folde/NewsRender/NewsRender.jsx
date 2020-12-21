import React from 'react';
import s from './../news.module.css';

const NewsRender = (props) => {
    return (
            <div className={s.batya}>
                <div className={s.news_block}>
                    <div>
                            <div>Hello, news #{props.NewsID}</div>
                        <img src={'data:image/jpeg;base64,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'}/>
                    </div>
                    <div>{props.Content}</div>
                </div>
            </div>

    );
}

export default NewsRender;



