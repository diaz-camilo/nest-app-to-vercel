import Layout from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import { useState } from 'react';

export default function ToDoList() {
  // let number = 0;
  const [number, setNumber] = useState(0);
  // This is how we use variables* that should trigger a rerender
  // every time ir runs, it will replace the value of numbers
  const [numbers, functionToSetTheValueOfNumbers] = useState([]);
  // let numbers = [];
  function handleOnClick(event) {
    setNumber(number + 1);
    // numbers.push(number);
    functionToSetTheValueOfNumbers([...numbers, number]);
    console.log('clicked the button', { number, numbers });

    event.preventDefault(); // this is needed to stop the page refresh
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
              <input type={'text'}></input>
              {/* HTML-like components in react have onClick event handlers. 
              you can pass a function to this event handler to handle the event.
              here for example we are telling react that every time the user click
              this button, it should call the handle click function
              https://reactjs.org/docs/forms.html */}
              <button onClick={handleOnClick}>add item</button>
            </form>
            <ul>
              {/* the map function takes each element in an array and returns a
              new array of the new items */}
              {numbers.map((number) => (
                <li key={number}>{number}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Layout>
  );
}
