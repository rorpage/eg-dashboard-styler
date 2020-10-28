function buildLink(url) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;

    return link;
}

let fonts = buildLink('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700');
document.head.appendChild(fonts);

let icons = buildLink('https://fonts.googleapis.com/icon?family=Material+Icons');
document.head.appendChild(icons);

let mdlstyle = buildLink('https://code.getmdl.io/1.3.0/material.indigo-pink.min.css');
document.head.appendChild(mdlstyle);

var mdlJs = document.createElement('script');
mdlJs.src = 'https://code.getmdl.io/1.3.0/material.min.js';
document.head.appendChild(mdlJs);

function buildHeader() {
    var layoutDiv = document.createElement('div');
    layoutDiv.className = 'mdl-layout mdl-js-layout mdl-layout--fixed-header';

    var header = document.createElement('header');
    header.className = 'mdl-layout__header';

    var headerRow = document.createElement('div');
    headerRow.className = 'mdl-layout__header-row';

    var titleSpan = document.createElement('span');
    titleSpan.className = 'mdl-layout-title';
    titleSpan.textContent = 'Dashboard';
    headerRow.appendChild(titleSpan);

    header.appendChild(headerRow);

    var drawer = document.createElement('div');
    drawer.className = 'mdl-layout__drawer';

    titleSpan = document.createElement('span');
    titleSpan.className = 'mdl-layout-title';
    titleSpan.textContent = 'Dashboard';

    drawer.appendChild(titleSpan);

    var nav = document.createElement('nav');
    nav.class = 'mdl-navigation';

    var timeLogLink = document.createElement('a');
    timeLogLink.textContent = 'Time Log';
    timeLogLink.href = 'https://dashboard.e-gineering.com/TimeTracker/TimeLog';
    timeLogLink.class = 'mdl-navigation__link';

    nav.appendChild(timeLogLink);

    drawer.appendChild(nav);

    var main = document.createElement('main');
    main.className = 'mdl-layout__content';

    var pageContent = document.createElement('div');
    pageContent.className = 'page-content';

    main.appendChild(pageContent);

    layoutDiv.appendChild(header);
    layoutDiv.appendChild(drawer);
    layoutDiv.appendChild(main);

    document.body.insertBefore(layoutDiv, document.getElementById('theme-container'));

    pageContent.appendChild(document.getElementById('app-container'));

    document.body.removeChild(document.getElementById('theme-container'));
}

function cleanUpContent() {
    // document.querySelector('#timetracker-tabs > ul:first-of-type').remove();
}

window.addEventListener('load', function() {
    // buildHeader();
    // cleanUpContent();
});