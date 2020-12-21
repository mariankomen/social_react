import React from 'react';
import s from './news.module.css';
import NewsRender from "./NewsRender/NewsRender";


const news = (props) => {
    let NewsItem = props.NewsItems.map(n => <NewsRender NewsID={n.NewsID} Content={n.Content}/>)
    return (
            <div>
                <div>
                    {NewsItem}
                </div>
            </div>
    );
}

export default news;



