import classNames from 'classnames/bind';
import styles from './FAQ.module.scss';

const cx = classNames.bind(styles);

function FAQ() {
    return (
        <div className={cx('faq')}>
            <div className={cx('header')}>
                <h1 className={cx('heading')}>Frequently Asked Questions (FAQ)</h1>
                <p>published 3 years ago in shrtcodeupdated 3 years ago</p>
            </div>
            <div className={cx('container')}>
                <div className={cx('container_item')}>
                    <h2>What is shrtcode?</h2>
                    <p>
                        shrtcode is mainly a free URL Shortener. We also provide some more free tools at
                        shrtco.de/tools.
                    </p>
                </div>

                <div className={cx('container_item')}>
                    <h2>What is an URL Shortener?</h2>
                    <p>
                        URL-Shortener can generate short links which redirect to a longer link. That means you can
                        easily generate shorter links out of long links. For example you can turn this link:
                        https://en.wikipedia.org/wiki/URL_shortening into a much shorter Link, such as shrtco.de/w - Go
                        ahead, click on it and see what happens!
                    </p>
                </div>

                <div className={cx('container_item')}>
                    <h2>Why is shrtcode "secure"?</h2>
                    <p>
                        On our Website, we state that shrtcode is "the secure URL Shortener". That means we take
                        security and privacy very serious. Let me explain it. First of all, we take various security
                        measurements to ensure that your generated short-links will always point to the destination (the
                        long link) set by you. This may seem obvious, but over the years, various short URL services
                        were multiple times the target of hackers. Therefor leading to thousands or even millions of
                        short-Links suddenly redirect to different websites (e.g. scam websites). That's really bad,
                        especially when you published your short-links somewhere were you can't change them afterwards
                        and all your short-link visitors suddenly see a scam Website. So that's where shrtcode comes in
                        handy: our server constantly checks all created short-links if they are still pointing to the
                        correct direction. Additionally, we check all shortened Links for malware and viruses and block
                        them automatically.
                    </p>
                </div>

                <div className={cx('container_item')}>
                    <h2>But what about privacy?</h2>
                    <p>
                        We don't track any visitors of short-links. We don't save where they are from, which browser
                        they are using and all that other stuff. We redirect them immediately to the destination
                        website. That's all.
                    </p>
                </div>
                <div className={cx('container_item')}>
                    <h2>I have a link which contains sensitive information, what can I do?</h2>
                    <p>
                        Good question. Because short-Links are so short, they can easily be guessed and accessed by the
                        wrong people. That's bad. That's why we have a feature which lets you easily protect your
                        short-Link with a password!
                    </p>
                </div>
                <div className={cx('container_item')}>
                    <h2>I need an even shorter Link!</h2>
                    <p>
                        You shortened a Link with shrtcode but it is still too long? Good news! Just replace the
                        "shrtco.de" part in your Link with "9qr.de"! That's 3 characters shorter! For example,
                        shrtco.de/example becomes 9qr.de/example. Pro tip: To make the part after the Slash ("/")
                        shorter, use our custom link tool!
                    </p>
                </div>

                <div className={cx('container_item')}>
                    <h2>What about Emoji Links?</h2>
                    <p>
                        Everyone loves Emojis! ❤️ Visit shrtco.de/tools/emoji to generate an emoji-link! Awesome, right?
                    </p>
                </div>

                <div className={cx('container_item')}>
                    <h2>How can shrtcode be free?!</h2>
                    <p>
                        When you visit our homepage, shrtco.de, you may see an advertisement on the bottom of the site.
                        Thank's to this ad we can pay for our servers and domains. Don't worry: we won't show any ads on
                        your short-Links, just on our homepage.
                    </p>
                </div>

                <div className={cx('container_item')}>
                    <h2>Can I delete or change a short-Link?</h2>
                    <p>No, we are sorry but this isn't possible right now.</p>
                </div>

                <div className={cx('container_item')}>
                    <h2>I found a short-Link that violates the shrtcode Terms Of Service</h2>
                    <p>
                        Please send us an email to info at tibush.com containing the short-Link. We will then check it
                        and eventually block it.
                    </p>
                </div>

                <div className={cx('container_item')}>
                    <h2>My short-Link has been blocked</h2>
                    <p>
                        That probably happened because it violated our Terms Of Service. If you think we blocked it by
                        mistake, please send us an email to info at tibush.com.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
