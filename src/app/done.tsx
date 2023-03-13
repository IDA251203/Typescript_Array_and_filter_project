import Image from 'next/image'
import styles from './page.module.css'
import data from './data.json';


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
