import React from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const TodoList = () => {
  return (
    <div>
      <h1>To Do App</h1>
      <div className={utilStyles.todoListContainer}>
        <form>
          <input></input>
          <button>add item</button>
        </form>
        <button>finish all ✅</button>
        <button>remove all ❌</button>
        <ol>
          <li>
            <div>
              <span>some description</span>
              <span>
                <button>✅</button>
                <button>❌</button>
              </span>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
