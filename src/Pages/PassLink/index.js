import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTelegramPlane, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import styles from './PassLink.module.scss';
import Menu from '~/Menu';

const cx = classNames.bind(styles);
function PassLink() {
    const [address, setAddress] = useState('');
    const [pass, setPass] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [display, setDisplay] = useState([]);

    const handleSubmit = () => {
        setSearchResult('shrtco.de/GILDZ2');
        setDisplay([
            {
                display: 'block',
            },
        ]);
    };
    return (
        <div className={cx('content_pass')}>
            <div className={cx('content_input')}>
                <div className={cx('content')}>
                    <div className={cx('shorten_link')}>
                        <h1 className={cx('name')}>QR Code Generator</h1>
                        <p className={cx('load_qr')}>Enter any Text or Link:</p>
                        <div className={cx('input_qr')}>
                            <input
                                className={cx('input')}
                                placeholder="example.com"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            ></input>
                        </div>
                        <p className={cx('load_qr')}>Choose a Password:</p>
                        <div className={cx('input_qr')}>
                            <input
                                className={cx('input')}
                                placeholder="secret"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            ></input>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className={cx('icon_link')}
                                style={{ backgroundColor: '#21253f' }}
                                onClick={handleSubmit}
                            />
                        </div>

                        <div className={cx('introduce')}>
                            <h2>Help us keep shrtcode running!</h2>
                            <p className={cx('price')}>
                                Support us by donating $1 or more — <a>Donate now →</a>
                            </p>
                        </div>

                        <p className={cx('end_input')}>
                            Easily create a QR-Code with this free Tool! Just enter a Text or a Link and click on the
                            above Button to get a QR-Code! You can download the QR-Code and if you want, you can print
                            it! All QR-Codes are generated client-side, which mean that your entered text doesn't leave
                            your device.
                        </p>
                    </div>
                </div>
            </div>

            <div style={display[0]} className={cx('result_link')}>
                <a>{searchResult}</a>
                <div className={cx('social_media')}>
                    <FontAwesomeIcon className={cx('icon', 'face_book')} icon={faFacebookSquare} />
                    <FontAwesomeIcon className={cx('icon', 'twitter')} icon={faTwitterSquare} />
                    <FontAwesomeIcon className={cx('icon', 'mail')} icon={faEnvelope} />
                    <FontAwesomeIcon className={cx('icon', 'phone')} icon={faPhoneSquare} />
                    <FontAwesomeIcon className={cx('icon', 'telegram')} icon={faTelegramPlane} />
                </div>
            </div>

            <div className={cx('url')}>
                <div className={cx('url_describe')}>
                    <h1>The secure and reliable URL Shortener</h1>
                    <p>
                        shrtcode is more than just another URL Shortener. shrtcode is very secure and privacy friendly.
                        More information → Feel free to use our popular Link shortening tool above or try one of our
                        other free Tools.
                    </p>
                </div>

                <div className={cx('advertisement')}>
                    <img className={cx('image_advertisement')} src="https://shrtco.de/img/example_big.png" />
                </div>
            </div>

            <div className={cx('menu')}>
                <Menu />
            </div>
        </div>
    );
}

export default PassLink;
