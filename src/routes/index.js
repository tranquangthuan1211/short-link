import Home from '~/Pages/Home/home';
import FAQ from '~/Pages/FAQ';
import DeveloperApi from '~/Pages/DeveloperApi';
import QrLink from '~/Pages/QrLink';
import PassLink from '~/Pages/PassLink';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/tintuc', component: FAQ, layout: FAQ },
    { path: '/dev', component: DeveloperApi },
    { path: '/qr', component: QrLink },
    { path: '/pass', component: PassLink },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
