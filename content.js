
var colors = {
    primary: '#2D787C',
    secondary: '#548BB0',
    primaryLight: 'rgb(52, 132, 136)',
    bg: '',
    text: '#fff'
}


chrome.storage.sync.get('colorPrimary', function(data) {
    colors.primary = data.colorPrimary;
});

chrome.storage.sync.get('colorSecondary', function(data) {
    colors.secondary = data.colorSecondary;
});

chrome.storage.sync.get('colorText', function(data) {
    colors.text = data.colorText;

    var style = document.createElement('style');
    style.type = 'text/css';


    let additionalStyles = null;
    let currentUrl = window.location.toString();

    console.log('in content')
    if (currentUrl === 'https://studia3.elka.pw.edu.pl/pl/20L/-/login/') {
        console.log('login page')
        additionalStyles = `
            h2 + div {
                display: flex !important;
                padding: 0 80px !important;
                justify-content: space-around !important;
                margin-top: 20px !important;
            }

            h2 + div > div {
                padding: 15px !important;
                
                height: 400px !important;
                background-color: white !important;
                box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08) !important;
                text-align: center !important;
                color: ${colors.primary} !important;
                font-weight: 500 !important;
                font-size: 22px !important;
                text-transform: uppercase !important;
                transition: transform 0.2s;
            }

            h2 + div > div:hover {
                transform: scale(1.08);
            }

            h2 + div > div img {
                border: none !important;
            }

            h2 + div > div div {
                margin-top: 20px;
                font-size: 16px;
                color: #333;
                font-weight: 300 !important;
                text-transform: none !important;
            }

            h2 + div > div br:after {
                content: "";
                display: block;
                height: 20px;
                
            }

            h2 + div > div a {
                text-decoration: none;
                color: #333;
                margin-top: 20px;
            }

            h2 + div > div:last-child {
                display: none !important;
            }

            h1 {
                color: ${colors.text} !important;
                text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1) !important;
                font-weight: 500 !important;
                padding: 20px 50px !important;
                font-size: 32px !important;
                background-image: linear-gradient(to right, ${colors.secondary}, ${colors.primary}) !important;
            }

            h1 br {
                display: none !important;
            }

            h2 {
                font-weight: 500 !important;
                font-size: 28px !important;
            }

            h2:after {
                content: "" !important;
                display: block !important;
                width: 220px !important;
                height: 2px !important;
                background-image: linear-gradient(to right, transparent 0, transparent 10%, ${colors.primary} 30%, ${colors.primary} 70%, transparent 90%) !important;
                margin: 0 auto !important;
                margin-top: 12px
            !important;
            }

        `;
    } else if (currentUrl === 'https://studia3.elka.pw.edu.pl/pl/20L/-/login-ldap' || 
               currentUrl === 'https://studia3.elka.pw.edu.pl/pl/19Z/-/login-ldap' ||
               currentUrl === 'https://studia3.elka.pw.edu.pl/pl/21Z/-/login-ldap') {
        additionalStyles = `
            h1 {
                color: ${colors.text} !important;
                text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1) !important;
                font-weight: 500 !important;
                padding: 20px 50px !important;
                font-size: 32px !important;
                background-image: linear-gradient(to right, ${colors.secondary}, ${colors.primary}) !important;
            }

            h2 {
                font-weight: 500 !important;
                font-size: 28px !important;
            }

            h2:after {
                content: "" !important;
                display: block !important;
                width: 220px !important;
                height: 2px !important;
                background-image: linear-gradient(to right, transparent 0, transparent 10%, ${colors.primary} 30%, ${colors.primary} 70%, transparent 90%) !important;
                margin: 0 auto !important;
                margin-top: 12px !important;
            }

            form {
                display: block !important;
                text-align: center !important;
                width: 50% !important;
                margin: 30px auto 80px auto !important;
                font-size: 20px !important;
            }

            form table {
                display: inline-block !important;
                font-size: 20px !important;
            }

            form table th {
                padding-right: 15px !important;
            }

            form table input {
                padding: 5px 15px !important;
                font-size: 18px !important;
                margin-top: 10px !important;
            }
        `
    } else if (currentUrl === 'https://studia3.elka.pw.edu.pl/PL/20L/-/start/' ||
                currentUrl === 'https://studia3.elka.pw.edu.pl/' ||
                currentUrl === 'https://studia3.elka.pw.edu.pl/PL/20L/' ||
                currentUrl === 'https://studia3.elka.pw.edu.pl/EN/20L/') {
        additionalStyles = `
            #p_head {
                background-image: none !important;
                background-color: ${colors.secondary} !important;
                height: auto !important;
            }

            #p_head_but {
                float: none;
                display: flex;
                justify-content: space-between;
                flex-direction: row-reverse;
                width: auto !important;
                padding: 5px 100px;
                align-items: center;
            }

            

            #p_head_but a:hover {
                background-color: transparent;
                display: block;
            }

            #p_head_but img {
                transition: transform 0.2s;
            }

            #p_head_but img:hover {
                transform: scale(1.3);
            }

            #p_head_but div:first-child {
            
            }

            #p_head_but div:last-child {
            
            }

            .p_flag_on {
                height: 26px !important;
                width: auto !important;
                margin: 10px 15px !important;
                transform: scale(1.2);

            }

            .p_flag_off {
                height: 26px !important;
                width: auto !important;
                margin: 10px 15px !important;
            }

            #p_head_lbl {
                display: none !important;
            }

            #p_head_s3 {
                display: none !important;
            }

            h2 {
                display: block !important;
                text-align: center !important;
                color: ${colors.text} !important;
                background-color: ${colors.primary} !important;
                padding: 20px 100px !important;
                text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1) !important;
                margin: 0 !important;
            }

            .list-group-item-primary {
                background-color: ${colors.secondary};
                color: ${colors.text};
            }
        `
    }

    style.innerHTML = styles(colors, additionalStyles);

    document.getElementsByTagName('head')[0].appendChild(style)
    // conent

});

/////////////////////////////////////////
/////////// STYLES //////////////////////
/////////////////////////////////////////

const styles = (colors, additionalStyles = null) => `

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

h1, h2, h3 {
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
}

${additionalStyles}

`;

//////////////////////////////////////////////////////////