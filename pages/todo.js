import React, { useState } from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const TodoList = () => {
  const placeholderData = [
    { description: 'go to the shop 🛒', isFinished: true },
    { description: 'buy ice cream 🍦', isFinished: false },
    { description: 'eat ice cream 😋', isFinished: false },
  ];

  const [listItems, setListItems] = useState(placeholderData);

  function handleRemoveAll(event) {
    setListItems([]);
  }

  return (
    <div>
      <h1>To Do App</h1>
      <div className={utilStyles.todoListContainer}>
        <form>
          <input></input>
          <button>add item</button>
        </form>
        <button>finish all ✅</button>
        <button onClick={handleRemoveAll}>remove all ❌</button>
        <ol>
          {listItems.map((item) => (
            <li>
              <div>
                <span
                  style={
                    item.isFinished
                      ? { textDecoration: 'line-through', color: 'gray' }
                      : {}
                  }
                >
                  {item.description}
                </span>
                <span>
                  <button>✅</button>
                  <button>❌</button>
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
