import React from 'react';
import {Title} from "./title";
import {Cards} from "./cards";


const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='featured' subTitle='tours' />
      <div className="section-center featured-center">
       <Cards/>
      </div>
    </section>
  );
};

export default Tours;
