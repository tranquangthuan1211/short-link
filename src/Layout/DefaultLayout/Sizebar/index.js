import React from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './SizeBar.module.scss';

const cx = classNames.bind(styles);
function SizeBar() {
    return (
        <ul className={cx('size_bar')}>
            <li className={cx('home')}>
                <a href="/">Home</a>
            </li>
            <li className={cx('FAQ')}>
                <a href="/tintuc">FAQ</a>
            </li>
            <li className={cx('DEVELOPER API')}>
                <a href="/dev">DEVELOPER API</a>
            </li>
            <li className={cx('more')}>
                <Tippy
                    placement="bottom"
                    render={(attrs) => (
                        <div className={cx('box')} tabIndex="-1" {...attrs}>
                            <h1>Advertise</h1>
                            <h1>News</h1>
                            <h1>All free Tools</h1>
                            <h1>Disallowed links</h1>
                            <h1>Report Abuse</h1>
                            <h1>Terms Of Service</h1>
                            <h1>Contact Us</h1>
                        </div>
                    )}
                >
                    <a>More</a>
                </Tippy>
            </li>
        </ul>
    );
}

export default SizeBar;
