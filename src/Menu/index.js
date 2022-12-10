import { faLink, faLock, faPen, faPlus, faQrcode, faSmileWink, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('menu')}>
            <h1 className={cx('menu_heading')}>More privacy-friendly Tools →</h1>

            <div className={cx('menu_choose')}>
                <div className={cx('link', 'size')}>
                    <a href="/" className={cx('icon')}>
                        <FontAwesomeIcon className={cx('fix')} icon={faLink} />
                    </a>
                    <h3>Link Shortener</h3>
                </div>

                <div className={cx('qr', 'size')}>
                    <a href="/qr" className={cx('icon')}>
                        <FontAwesomeIcon className={cx('fix')} icon={faQrcode} />
                    </a>
                    <h3>QR Code Generator</h3>
                </div>

                <div className={cx('pass', 'size')}>
                    <a href="/pass" className={cx('icon')}>
                        <FontAwesomeIcon className={cx('fix')} icon={faLock} />
                    </a>
                    <h3>Password protect a Link</h3>
                </div>

                <div className={cx('generater', 'size')}>
                    <a className={cx('icon')}>
                        <FontAwesomeIcon className={cx('fix')} icon={faSmileWink} />
                    </a>
                    <h3>Emoji-Link Generator</h3>
                </div>

                <div className={cx('submit', 'size')}>
                    <a className={cx('icon')}>
                        <FontAwesomeIcon className={cx('fix')} icon={faPen} />
                    </a>
                    <h3>Custom Link Generator</h3>
                </div>

                <div className={cx('wifi', 'size')}>
                    <a className={cx('icon')}>
                        <FontAwesomeIcon className={cx('fix')} icon={faWifi} />
                    </a>
                    <h3>WiFi QR Code Generator</h3>
                </div>

                <div className={cx('plus', 'size')}>
                    <a className={cx('icon')}>
                        <FontAwesomeIcon className={cx('fix')} icon={faPlus} />
                    </a>
                    <h3>Submit an idea</h3>
                </div>
            </div>
        </div>
    );
}

export default Menu;
