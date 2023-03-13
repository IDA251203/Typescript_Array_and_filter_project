import React,{FC} from "react";
import styles from './propstype.module.css'
import Image from "next/image";

type SimpleTypePropsType={
  data: Array<
  { id: string;
    title: string ;
    image:string;
    type:string
  }
  >;
}


  export const SimpleTypeProps:FC<SimpleTypePropsType> = ({ data }) => {
    return (
  <>
      
      {data.map((item) => (
        <div className={styles.cont} key={item.type}>
          <p>{item.id}</p>
          <Image src={item.image} alt='Nimadir' width={300} height={300}/>
          <p>{item.title}</p> 
      </div>
      ))}

  </>
    );
  };
// export const SimpleTypeProps= () =>{

// }