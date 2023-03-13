import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Backlog from './backlog';
import Inprogress from './inprogress';
import Done from './done';

// const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <div className={styles.containerflex}>
       {/* <SimpleTypeProps image='/images/nature.jpg' age={20} name='Nimadir' lastname='Kimdir'/> */}
       <div className={styles.titlecont}>
        <div className={styles.title}>
          <p>Backlog</p>
        </div>
        <div className={styles.title}>
          <p>Inprogress</p>
        </div>
        <div className={styles.title}>
          <p>Done</p>
        </div>
       </div>
      <Backlog/>
      <Inprogress/>
      <Done/>
    </div>
  )
}
