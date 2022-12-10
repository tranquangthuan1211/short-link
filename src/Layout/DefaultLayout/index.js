import classNames from 'classnames/bind';
import styles from './index.module.scss';
import Header from './Header';
import SizeBar from './Sizebar';
const cx = classNames.bind(styles);
function DefauktLayout({ children }) {
    return (
        <div className={cx('cover')}>
            <Header />
            <SizeBar />
            {children}
        </div>
    );
}

export default DefauktLayout;
