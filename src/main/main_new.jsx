import React from "react";
import styles from "./main.module.css";
import { Link } from 'react-router-dom'

function Main_new() {
    return (
        <>
            <div className={styles.new_movie}>
                <h2>NEW</h2>
                <Link to="./new/new">더보기→</Link>
                <div className={styles.movie_con}>

                </div>
            </div>
        </>
    )
}

export default Main_new;