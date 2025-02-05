import React from 'react';
import {cards} from "./data";

export const Cards = () => {
  return (
    cards.map((card) => {
        const { id, img, title, text, location, payment , duration, date} = card;
        return (
          <article className="tour-card" key={id} >
            <div className="tour-img-container">
              <img src={img} className="tour-img" alt=""/>
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>
                {text}
              </p>
              <div className="tour-footer">
                <p>
                  <span><i className="fas fa-map"></i></span> {location}
                </p>
                <p>{duration}</p>
                <p>{payment}</p>
              </div>
            </div>
          </article>
        )
      })
  );
};

