import styles from './authLinks.module.css'
import Link from "next/link";

export const AuthLinks = () => {

    //temp
    const status = 'notathenticated'
    return(
        <>
            {status === 'notathenticated' ?
                <Link href={'/login'}>Login</Link> :
                <>
                    <Link href={'/write'}>Write</Link>
                    <span className={styles.link}>Logout</span>
                </>

            }
        </>
    )
}