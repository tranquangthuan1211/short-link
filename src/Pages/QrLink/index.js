import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './QrLink.module.scss';
import Menu from '~/Menu';

const cx = classNames.bind(styles);
function QrLink() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [display, setDisplay] = useState([]);
    const handleSubmit = () => {
        setSearchResult('https://blog.dktcdn.net/files/cach-tao-ma-qr-11.png');
        setDisplay([
            {
                display: 'flex',
            },
        ]);
    };
    return (
        <div className={cx('content_qr_link')}>
            <div className={cx('content_input')}>
                <div className={cx('content')}>
                    <div className={cx('shorten_link')}>
                        <h1 className={cx('name')}>QR Code Generator</h1>
                        <div className={cx('input_qr')}>
                            <p className={cx('load_qr')}>Enter any Text or Link:</p>
                            <input
                                className={cx('input')}
                                placeholder="hello !"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            ></input>
                            <FontAwesomeIcon
                                onClick={handleSubmit}
                                icon={faArrowRight}
                                className={cx('icon_link')}
                                style={{ backgroundColor: '#21253f' }}
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

            <div style={display[0]} className={cx('resultItem')}>
                <h2>Qr-Code generated!</h2>
                <img src={searchResult} />
                <h1 className={cx('dowload_qr')}>DOWNLOAD QR-CODE</h1>
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

export default QrLink;
