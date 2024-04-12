import styles from './featured.module.css'
import Image from "next/image";

export const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey developers!</b> Discover my creative ideas
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image className={styles.image} src={'/p1.jpeg'} alt={'post image'} fill/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p className={styles.postDesc}>Suspendisse tincidunt dignissim interdum. Vestibulum at nibh
                        ultrices, commodo erat eget, consectetur magna. Ut at condimentum lacus, nec facilisis ligula.
                        Aenean tincidunt sem non volutpat fermentum. Suspendisse sed leo ac eros aliquet convallis sed
                        quis leo. Nulla scelerisque ultrices orci, sed dictum mi condimentum pretium. Duis rutrum et
                        velit sed suscipit. Nulla rhoncus tincidunt dolor vitae convallis. Nullam accumsan neque vel
                        nulla lobortis, eu malesuada purus dignissim. Nam id accumsan nisi. Praesent id efficitur urna.
                        Quisque blandit lectus ipsum, sit amet lobortis dolor tristique sed. Vivamus dignissim neque ac
                        metus luctus, et hendrerit velit dignissim.</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}