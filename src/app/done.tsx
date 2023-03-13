import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { SimpleTypeProps } from './components/propstype'
import data from './data.json';

// const inter = Inter({ subsets: ['latin'] })

interface User {
  id: number;
  title: string;
  image: string;
  type:string;
}
const filteredData = data.filter((item: User) => item.type === "done");

export default function Done() {
  return (
    <div className={styles.container}>
       {/* <SimpleTypeProps image='/images/nature.jpg' age={20} name='Nimadir' lastname='Kimdir'/> */}
       {filteredData.map((item) => (
        <div className={styles.cont}>
        <p className={styles.id}>{item.id}</p>
        <div className={styles.box}>
          <p>{item.title}</p> 
          <div><Image src={item.image} alt='Nimadir' width={300} height={300} className={styles.image}/></div>
        </div>
        <p className={styles.id}>{item.type}</p>
        </div>
        
      ))}
    </div>
  )
}
