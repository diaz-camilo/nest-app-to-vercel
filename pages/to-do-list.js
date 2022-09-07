import Layout from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export default function ToDoList() {
  function handleOnClick(event) {
    console.log('clicked the button');

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
          </div>
        </div>
      </article>
    </Layout>
  );
}
