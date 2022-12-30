import Link from "next/link";
import styles from "../styles/Home.module.css"
const index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Link href="/actionPages">
                    <p className={styles.title}>actionPages</p>
                </Link>
            </div>
        </div>
    );
}

export default index;