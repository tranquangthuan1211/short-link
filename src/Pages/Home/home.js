import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import Menu from '~/Menu';
import { faFacebookSquare, faTelegramPlane, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Api = 'https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html';

const cx = classNames.bind(styles);

function Home() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [display, setDisplay] = useState([]);
    useEffect(() => {
        fetch(Api)
            .then((res) => res.json())
            .then((res) => setSearchResult(searchValue + res.result.short_link));
    }, [searchResult]);

    const handleSumit = () => {
        setSearchResult([]);
        setDisplay([
            {
                display: 'block',
            },
        ]);
    };
    return (
        <div className={cx('content_home')}>
            <div className={cx('heading')}>
                <h1>The</h1>
                <h1 className={cx('float')}>privacy-friendly</h1>
                <h1> URL Shortener</h1>
            </div>
            <div className={cx('content_input')}>
                <div className={cx('content')}>
                    <div className={cx('shorten_link')}>
                        <h1 className={cx('name')}>Link Shortener</h1>
                        <div className={cx('input_link')}>
                            <p className={cx('load_link')}>Enter a Link:</p>
                            <input
                                className={cx('input')}
                                placeholder="example.com"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            ></input>
                            <FontAwesomeIcon
                                style={{ backgroundColor: '#21253f' }}
                                onClick={handleSumit}
                                icon={faArrowRight}
                                className={cx('icon_link')}
                            />
                        </div>

                        <div className={cx('short_domain')}>
                            <p className={cx('title')}>Short domain:</p>
                            <button className={cx('hrtco')}>shrtco.de </button>
                            <button className={cx('qr')}>s9qr.de </button>
                            <button className={cx('shiny')}>shiny.link </button>
                        </div>

                        <div className={cx('introduce')}>
                            <h2>Help us keep shrtcode running!</h2>
                            <p className={cx('price')}>
                                Support us by donating $1 or more — <a>Donate now →</a>
                            </p>
                        </div>

                        <p className={cx('end_input')}>
                            With this free Link Shortener you can make Links shorter and easier to remember. Just enter
                            a Link into the form and click on the above Button to generate a short Link. When visiting
                            the short-Link, the short-Link will immediately redirect you to the long Link.
                        </p>
                    </div>
                </div>
            </div>
            <p className={cx('describe')}>By using shrtcode you agree to our Terms of Service.</p>

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

            <div className={cx('content_menu')}>
                <Menu />
            </div>
        </div>
    );
}

export default Home;
