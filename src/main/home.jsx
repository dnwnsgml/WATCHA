import React from "react";
import styles from "./main.module.css";
import Main_slide from "./main_slide";
import Main_movie from "./main_movie";
import Main_new from "./main_new";


function Home() {
    return (
        <>
            <div className={styles.home}>
                <Main_slide />
                <div className={styles.watcha_movie}>
                    <Main_movie />
                </div>
                <div className={styles.watcha_new}>
                    <Main_new />
                </div>
            </div>
        </>
    )
}

export default Home;