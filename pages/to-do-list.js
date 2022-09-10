import Layout from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import { useState } from 'react';
import ListItem from '../components/ListItem';

export default function ToDoList() {
  const sampleItems = [
    { description: 'go to the shop 🛒', isFinished: false },
    { description: 'buy ice cream 🍦', isFinished: false },
    { description: 'eat ice cream 😋', isFinished: false },
  ];

  const [listItems, setListItems] = useState(sampleItems);
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddItemClick(event) {
    event.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    setListItems([
      ...listItems,
      { description: inputValue, isFinished: false },
    ]);
    setInputValue('');
  }

  function handleFinish(index) {
    const listItemsCopy = listItems.slice();
    listItemsCopy[index].isFinished = !listItemsCopy[index].isFinished;
    setListItems(listItemsCopy);
  }
  function handleRemove(index) {
    const listItemsCopy = [...listItems];
    listItemsCopy.splice(index, 1);
    console.log(listItemsCopy);
    setListItems(listItemsCopy);
  }

  return (
    <Layout>
      <Head>
        <title>To do list</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>To Do List</h1>
        <div className={utilStyles.todoListContainer}>
          <div>
            <form>
              <input value={inputValue} onChange={handleInputChange}></input>
              <button onClick={handleAddItemClick}>add item</button>
            </form>
            <ol>
              {listItems.map((listItem, index) => (
                <li key={index}>
                  <ListItem
                    listItem={listItem}
                    index={index}
                    handleFinish={handleFinish}
                    handleRemove={handleRemove}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </Layout>
  );
}
