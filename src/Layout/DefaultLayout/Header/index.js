import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('header')}>
            <FontAwesomeIcon icon={faLink} className={cx('header-icon')} />
            <h1>Shorten Link</h1>
        </div>
    );
}

export default Header;
