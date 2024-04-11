'use client'

import styles from './authLinks.module.css'
import Link from "next/link";
import {useState} from "react";

export const AuthLinks = () => {
    const [open, setOpen] = useState(false)
    //temp
    const status = 'notathenticated'
    return(
        <>
            {status === 'notathenticated' ?
                <Link href={'/login'} className={styles.link}>Login</Link> :
                <>
                    <Link href={'/write'} className={styles.link}>Write</Link>
                    <span className={styles.link}>Logout</span>
                </>

            }
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href={'/'}>Homepage</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Contact</Link>
                    {status === 'notathenticated' ?
                        <Link href={'/login'}>Login</Link> :
                        <>
                            <Link href={'/write'}>Write</Link>
                            <span className={styles.link}>Logout</span>
                        </>

                    }
                </div>
            )}
        </>
    )
}