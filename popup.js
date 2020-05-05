
let changeColor = document.getElementById('changeColor');
const defaultColors = document.getElementById('defaultColors');
const inputColorPrimary = document.getElementById('color-primary');
const inputColorSecondary = document.getElementById('color-secondary');
const inputColorText = document.getElementById('color-text');

let colors = {
    primary: '#2D787C',
    secondary: '#548BB0',
    primaryLight: 'rgb(52, 132, 136)',
    bg: '',
    text: '#fff'
}

chrome.storage.sync.get('colorPrimary', function(data) {
    inputColorPrimary.value = data.colorPrimary;
    colors.primary = data.colorPrimary;
});

chrome.storage.sync.get('colorSecondary', function(data) {
    inputColorSecondary.value = data.colorSecondary;
    colors.secondary = data.colorSecondary;
});

chrome.storage.sync.get('colorText', function(data) {
    inputColorText.value = data.colorText;
    colors.text = data.colorText;
});


inputColorPrimary.oninput = function(element) {
    const value = inputColorPrimary.value;
    colors.primary = value;
    chrome.storage.sync.set({colorPrimary: value}, function() {
        console.log('The color is green.');
      });
}

inputColorSecondary.oninput = function(element) {
    const value = inputColorSecondary.value;
    colors.secondary = value;
    chrome.storage.sync.set({colorSecondary: value}, function() {
        console.log('The color is green.');
      });
}

inputColorText.oninput = function(element) {
    const value = inputColorText.value;
    colors.text = value;
    chrome.storage.sync.set({colorText: value}, function() {
        console.log('The color is green.');
      });
}

defaultColors.onclick = () => {
    colors = {
        primary: '#2D787C',
        secondary: '#548BB0',
        primaryLight: 'rgb(52, 132, 136)',
        bg: '',
        text: '#fff'
    }
    inputColorPrimary.value = colors.primary;
    inputColorSecondary.value = colors.secondary;
    inputColorText.value = colors.text;

    chrome.storage.sync.set({colorPrimary: colors.primary, colorSecondary: colors.secondary, colorText: colors.text}, function() {
        console.log('The color is green.');
    });
    
}



changeColor.onclick = function(element) {
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 
            `
            console.log('clicked');
            var style = document.createElement('style');
          style.type = 'text/css';
          style.innerHTML =  \` ${styles(colors)}
            \`;
          console.log('aaaaa');
          document.getElementsByTagName('head')[0].appendChild(style);
          `
        });
    });
};


/////////////////////////////////////////
/////////// STYLES //////////////////////
/////////////////////////////////////////

const styles = colors => `

div.s3-brand.navbar-brand img {
    display: none !important;
}

.navbar-brand {
    display: none !important;
}

.navbar {
    background-color: ${colors.secondary} !important;
    color: ${colors.text} !important;
    padding: 12px 100px 0 100px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-around !important;
}

.nav {
    color: ${colors.text} !important;
    display: flex !important;
    justify-content: space-around !important;
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
    list-style: none !important;
    padding-right: 100px !important;
}

.nav-link {
    color: ${colors.text} !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
    font-size: 14px !important;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2) !important;
}

.nav-link:after {
    content: "" !important;
    display: block !important;
    width: 0 !important;
    height: 1px !important;
    background-color: ${colors.text} !important;
    margin: 0 auto !important;
    margin-top: 2px !important;
    transition: width 0.2s !important;
}

.nav-link:hover:after {
    width: 100% !important;
}

.nav-item:hover {
    background-color: transparent !important;
}

.nav-link img {
    display: none !important;
}

.active {
    background-color: transparent !important;
}

.s3-logout a {
    color: ${colors.text} !important;
    text-decoration: none !important;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2) !important;
}

.s3-logout:hover {
    background-color: transparent !important;
}

.s3-logout a:after {
    content: "" !important;
    display: block !important;
    width: 0 !important;
    height: 1px !important;
    background-color: ${colors.text} !important;
    margin: 0 auto !important;
    margin-top: 2px !important;
    transition: width 0.2s !important;
}

.s3-logout:hover a:after {
    width: 100% !important;
}

.s3-logout {
    padding-top: 6px !important;
    color: transparent !important;
}

#page_prev_a {
    color: ${colors.text} !important;
    margin: 0 !important;
    padding: 8px !important;
    display: inline-block !important;
    width: 14% !important;
}

#page_prev_a:after {
    display: none !important;
}

#page_prev_txt {
    color: ${colors.text} !important;
    text-align: center !important;
    transform: translateY(3px) !important;
}

#page_next_a {
    color: ${colors.text} !important;
    height: 100% !important;
    padding: 8px !important;
    float: right !important;
    width: 14% !important;
}

#page_next_a:after {
    display: none !important;
}

#page_prev_a img {
    display: inline
!important;
}

#page_sem {
    height: 55px !important;
    margin-bottom: 20px !important;
    background-color: ${colors.primary} !important;
}

#page_sem_title {
    color: ${colors.text} !important;
    display: inline-block !important;
    width: 70% !important;
    margin-top: -24px !important;
    transform: translateY(-20px) !important;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2) !important;
}

body {
    background-color: rgb(244, 244, 244) !important;
}

#page_next_txt {
    color: ${colors.text} !important;
    text-align: center !important;
    transform: translateY(3px) !important;
}

#page_next_a img {
    display: inline !important;
}

.tab-content {
    min-height: 81vh !important;
    background-color: rgb(244, 244, 244) !important;
}

#page_tail {
    color: ${colors.text} !important;
    background-image: linear-gradient(to left, ${colors.secondary}, ${colors.primary}) !important;
    padding: 10px 100px !important;
    font-size: 14px !important;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2) !important;
}

h3 {
    color: #444 !important;
    display: block !important;
    margin: 0 auto !important;
    text-align: center !important;
    margin-bottom: 30px !important;
}

h3:after {
    content: "" !important;
    display: block !important;
    width: 220px !important;
    height: 2px !important;
    background-image: linear-gradient(to right, transparent 0, transparent 10%, ${colors.primary} 30%, ${colors.primary} 70%, transparent 90%) !important;
    margin: 0 auto !important;
    margin-top: 12px
!important;
}

.accordion {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05) !important;
}

.card {
    background-color: ${colors.text} !important;
    border: none !important;
}

.card-header:hover {
    border: none !important;
    outline: none !important;
    background-color: rgba(36, 80, 94, 0.08) !important;
}

.card-header {
    border: none !important;
    transition: all 0.1s !important;
    background-image: linear-gradient(to right, ${colors.secondary}, ${colors.primary}) !important;
    border-radious: 0 !important;
    color: ${colors.text} !important;
    font-weight: 500 !important;
    padding: 5px 10px !important;
    margin-bottom: 3px !important;
}

.card:nth-child(even) .card-header {
    background-color: ${colors.text} !important;
}

.card:nth-child(even) .card-header:hover {
    background-color: rgba(36, 80, 94, 0.08) !important;
}

.card-body {
    border: none !important;
    background-color: rgba(195, 218, 233, 0.2)
!important;
}

.collapse {
    border: none !important;
}

.collapse:hover {
    border: none !important;
}

.btn-link {
    color: ${colors.text} !important;
    font-weight: 400 !important;
    margin-left: 20px !important;
    position: relative !important;
}

.btn-link:after {
    content: "" !important;
    display: block !important;
    position: absolute !important;
    left: -10px !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    height: 5px !important;
    width: 5px !important;
    background-color: ${colors.text} !important;
    border-radius: 50% !important;
}

.btn-link img {
    display: none !important;
}

.modules_title {
    background-image: linear-gradient(to right, ${colors.secondary}, ${colors.primary}) !important;
    border-radious: 0 !important;
    color: ${colors.text} !important;
    font-weight: 400 !important;
    padding: 5px 10px !important;
    margin-bottom: 3px !important;
    margin-right: 20px
    
!important;
}

.modules_lbls li {
    color: ${colors.primary} !important;
    border: 2px solid ${colors.primary}!important;
    background-color: transparent !important;
    padding: 3px !important;
    text-align: center !important;
    margin-right: 10px !important;
    cursor: pointer !important;
    transition: all 0.2s !important;
}

.modules_lbls li a {
    color: ${colors.primary} !important;
    font-weight: 400 !important;
    text-transform: lowercase !important;
}

.modules_lbls li:hover {
    color: ${colors.text} !important;
    border: 2px solid ${colors.primary} !important;
    background-color: ${colors.primary} !important;
    padding: 3px !important;
    text-align: center !important;
    margin-right: 10px
!important;
}

.modules_lbls li:hover a {
    color: ${colors.text} !important;
    text-decoration: none !important;
}`;

//////////////////////////////////////////////////////////////////