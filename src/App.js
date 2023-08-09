import React, { useState } from 'react';
import {CreditCardForm} from './CreditCardForm';

export function App () {
    const handleCreditCardSubmit = (creditCardList) => {
      console.log(creditCardList); 
    };
  
    return (
      <div>
        <h1>Credit Card Cash Back Optimizer</h1>
        <CreditCardForm onCreditCardSubmit={handleCreditCardSubmit} />
      </div>
    );
  }

  
