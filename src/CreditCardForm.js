import React, { useState } from 'react';

export function CreditCardForm  ({ onCreditCardSubmit }) {
  const [creditCardName, setCreditCardName] = useState('');
  const [creditCardList, setCreditCardList] = useState([]);
  const [error, setError] = useState('');

  function handleInputChange  (e) {
    setCreditCardName(e.target.value);
  };

  function handleSubmit  (e) {
    e.preventDefault();
    if (creditCardName.trim() === '') {
      setError('Please enter a credit card name.'); // Display error message
      return;
    }

    // Add the entered credit card to the list
    setCreditCardList((prevList) => [...prevList, creditCardName]);

    // Clear the input field and error message
    setCreditCardName('');
    setError('');

    // Pass the credit card list to the parent component
    onCreditCardSubmit(creditCardList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Credit Card Name:
        <input
          type="text"
          value={creditCardName}
          onChange={handleInputChange}
          placeholder="Enter Credit Card Name"
        />
      </label>
      <button type="submit">Submit</button>

      {error && <p className="error-message">{error}</p>}

      <h3>Previously entered credit cards:</h3>
      <ul>
        {creditCardList.map((card, index) => (
          <li key={index}>{card}</li>
        ))}
      </ul>
    </form>
  );
}
