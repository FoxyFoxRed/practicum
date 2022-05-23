import Handelbars from 'handlebars';
import template from './template.tml';

document.addEventListener('DOMContentLoaded', () => {
    const compiled = Handelbars.compile(template);
    const html = compiled({firstname: 'Georg', lastname: 'Milevski'});
    window.compiled = compiled;
    document.body.innerHTML = html;
});