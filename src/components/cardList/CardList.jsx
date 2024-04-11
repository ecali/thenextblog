import styles from './cardList.module.css'
import {Pagination} from "@/components/pagination/Pagination";

export const CardList = () => {
    return (
        <div className={styles.container}>CardList
            <Pagination/>
        </div>
    )
}