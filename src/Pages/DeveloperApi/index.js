import classNames from 'classnames/bind';
import styles from './DeverloperApi.module.scss';
import Content from './Content';

const cx = classNames.bind(styles);
function Dev() {
    return (
        <div className={cx('dev')}>
            <Content />
            <div className={cx('advertisment')}>
                <img src="https://shrtco.de/img/example_big.png" className={cx('advertisment_image')} />
            </div>
        </div>
    );
}

export default Dev;
