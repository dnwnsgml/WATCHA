import React from "react";
import styles from "./main.module.css";
import Carousel from 'react-bootstrap/Carousel';

function Main_slide() {
    return (
        <>
            <div className={styles.main_slide}>
                <Carousel>
                    <Carousel.Item>
                        <div>
                            <img
                                src="https://an2-img.amz.wtchn.net/image/v2/IDXxoQoOxuJ-uF6ka35Qpw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZNE5Ea3dNVGt4T1RZM01EY3lOVFkyTUNJc0luRWlPamd3ZlEueGE2Y1lZYUNnaHUzNUVZUjNpYzJkYkc1QllpOE1IYW9OVEhsRXZCaE9ONA"
                                alt="First slide"
                            />
                        </div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <img
                                src="https://an2-img.amz.wtchn.net/image/v2/75Sgrjjt9IEGQd_YD4j8XA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZNE5EZzVPRE01TXpVMk1ESXdNekV4TnlJc0luRWlPamd3ZlEuM2VodlZHS3VJUDB2T01BdDZvRXlHNmJSM2xvSThqSkVQV05zdzVuOU5nWQ"
                                alt="Second slide"
                            />
                        </div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <img
                                src="https://an2-img.amz.wtchn.net/image/v2/DC4wlwS4XQD-Q_IQoZda8Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZNE5Ea3dNakF3TnpBeU16azBNVGN6TkNJc0luRWlPamd3ZlEuSVhrYmtNU0R6VG1aeEhuREt4XzNCTkl4NGJnOVJsaUZOd0stbTQ4T04tdw"
                                alt="Third slide"
                            />
                        </div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Main_slide;