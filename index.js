import VueLoader from './src/index';

// add autoinstall support if the component is attached to the windows object e.g. if added by CDN
VueLoader.install = Vue => Vue.component(VueLoader.name, VueLoader);
if (typeof window !== 'undefined' && window.Vue) window.Vue.use(VueLoader);

export {
    VueLoader
};

export default VueLoader;
