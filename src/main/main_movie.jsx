import React from "react";
import styles from "./main.module.css";
import { Link } from 'react-router-dom'

function Main_movie() {
    return (
        <>
            <div className={styles.main_movie}>
                <h2>왓챠 개봉관</h2>
                <Link to="./movie/movie">더보기→</Link>
                <div className={styles.movie_con}>
                    <img src="https://an2-img.amz.wtchn.net/image/v2/8X7yIBZUGqtXofyyz8u5ZQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5qUXdlRE0yTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9EUXlNVEl5TkRJNE56Z3lNRFUyT1RNaWZRLkctSlVwU21ma2NvQ1c5b0EwWmsxYWNEZ25ZcEFQakVWN2Z0clZUaWRoSWM" alt="무비1" />
                    <img src="https://an2-img.amz.wtchn.net/image/v2/hQe2wAk-nijaPYayngQz8Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5qUXdlRE0yTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9ESXhOakUwTXpnMU56QTJNalkzT0RZaWZRLjI2ZmhKN3dacmpTdk5nUTZHNjdMQlVIT3ZCTFVabzdjRG5fcGVxNTlIcEE" alt="무비2" />
                    <img src="https://an2-img.amz.wtchn.net/image/v2/bNgeIbRrM-b41XPXfgRjXw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5qUXdlRE0yTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk56QXpPVEV3TWpjeU5EUXhNREV3TWpFaWZRLkF3NGlpVW9zdENFOVJ6YTJyel9pdWowd2VPN0FVb2VjNFctZFVobGpOS0U" alt="무비3" />
                </div>
            </div>
        </>
    )
}

export default Main_movie;