import Layout from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export default function ToDoList() {
  return (
    <Layout>
      <Head>
        <title>To do list</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>To Do List</h1>
        <div className={utilStyles.todoListContainer}></div>
      </article>
    </Layout>
  );
}
