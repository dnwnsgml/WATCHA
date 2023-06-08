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
                                src="https://an2-img.amz.wtchn.net/image/v2/-aezqWTKxae77gbpc0W8FQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZNE5UVXlNakkwTVRVek5qYzVNemc1T0NJc0luRWlPamd3ZlEuWVNXUkJNa2VlZWFZdFNaaEJSOFVGaHFiUXNnbHhxZXpYYmNjUlNZcDRDSQ"
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