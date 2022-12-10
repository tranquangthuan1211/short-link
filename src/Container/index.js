import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Container.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Api = 'https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html';
const cx = classNames.bind(styles);
let s = [];

function Container() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState('');
    useEffect(() => {
        fetch(Api)
            .then((res) => res.json())
            .then((res) => setSearchResult(searchValue + res.result.short_link));
    }, [searchResult]);

    const handleSumit = () => {
        setSearchResult([]);
    };
    return (
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
                    <FontAwesomeIcon onClick={handleSumit} icon={faArrowRight} className={cx('icon_link')} />
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
                    With this free Link Shortener you can make Links shorter and easier to remember. Just enter a Link
                    into the form and click on the above Button to generate a short Link. When visiting the short-Link,
                    the short-Link will immediately redirect you to the long Link.
                </p>
            </div>
        </div>
    );
}
export { Container };
