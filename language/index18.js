import VueI18n from './vue-i18n.js';//需先安装vue-i18n
import Vue from 'vue';



Vue.use(VueI18n);
import En from './locales/en.js';   // 英文
import Cn from './locales/cn.js';	  // 中文
import Fn from './locales/fn.js';    //繁体


const messages = {
	'En': { message: En },
	'Cn': { message: Cn },
	'Fn': { message: Fn },
}
 
var lang = uni.getStorageSync("language") == 'Cn' ? uni.getStorageSync("language") : 'En';
uni.setStorageSync("language",lang)


var i18n = new VueI18n({
  locale: lang,    // 语言标识
  messages
});

Vue.prototype.i18n = i18n; 
 
export default i18n