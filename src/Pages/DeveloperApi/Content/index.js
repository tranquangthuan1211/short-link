import classNames from 'classnames/bind';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);
function Content() {
    return (
        <div className={cx('content_dev')}>
            <h1 className={cx('heading')}>shrtcode API Documentation</h1>
            <div className={cx('Api')}>
                <h2>API Base</h2>
                <p className={cx('api_link')}>https://api.shrtco.de/v2/</p>
                <p>All API Methods support GET and POST Requests.</p>
            </div>

            <div>
                <h2>Authentication</h2>
                <p>This API doesn't require any Authentication.</p>
            </div>

            <div>
                <h2>Rate Limits</h2>
                <p>The number of request is limited to 1 requests per second, per IP address.</p>
            </div>

            <div>
                <h2>Terms of use</h2>
                <p>By using our API you agree to our terms of service. The API is based on a fair-use policy.</p>
            </div>

            <div>
                <h2>Errors</h2>
                <p>
                    All unsuccessful API calls return an error message along with an error_code. See the table below to
                    learn more about the meaning of each error_code:
                </p>

                <div className={cx('table_error')}>
                    <table>
                        <tr>
                            <th>error_code</th>
                            <th>Error</th>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>No URL specified ("url" parameter is empty)</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Invalid URL submitted</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Rate limit reached. Wait a second and try again</td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>IP-Address has been blocked because of violating our terms of service</td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td>shrtcode code (slug) already taken/in use</td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>Unknown error</td>
                        </tr>

                        <tr>
                            <td>7</td>
                            <td>No code specified ("code" parameter is empty)</td>
                        </tr>

                        <tr>
                            <td>8</td>
                            <td>Invalid code submitted (code not found/there is no such short-link)</td>
                        </tr>

                        <tr>
                            <td>9</td>
                            <td>Missing required parameters</td>
                        </tr>

                        <tr>
                            <td>10</td>
                            <td>Trying to shorten a disallowed Link. More information on disallowed links</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Content;
