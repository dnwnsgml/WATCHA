import React from "react";
import styles from "./main.module.css";
import { Link } from 'react-router-dom'
import { useItemState } from "../context";

function NewItem({ item }) {
    if (item.new) {
        return (
            <div>
                <img src={item.src} alt="" />
                <p>{item.genre}</p>
                <p>{item.scope}</p>
            </div>
        )
    }
}

function Main_new() {
    const items = useItemState();
    return (
        <>
            <div className={styles.new_movie}>
                <h2>NEW</h2>
                <Link to="./new/new">더보기→</Link>
                <div className={styles.new_con}>
                    {items.map((item) => (
                        <NewItem item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Main_new;