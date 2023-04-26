import React from 'react';

export default function Card ({ items, children }){

    return <div className="cardzilla">
              {
                items.map((item) => children(item))
              }
    </div>
  }