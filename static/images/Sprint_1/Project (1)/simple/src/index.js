import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';
import './style.css';
import button from './components/button';
import page1 from './pages/page1';
import page2 from './pages/page2';

console.log(tpl);


const comp = Handlebars.compile(tpl);
const res = comp({
	fname: 'students',
	btn: button('btn1','Click this', )
});

document.getElementById('root').innerHTML = res;

document.getElementById('root').querySelector('a').addEventListener('click', (e) => {

})

window.createButton = (id, value) => {

	const htmlTpl = document.createElement('template');
	htmlTpl.innerHTML = button(id,value);

	document.getElementById('root').appendChild(htmlTpl.content);
}
