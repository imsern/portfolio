function viewSelector(){
    let html = navBar();
    const app = document.getElementById('app');

    switch (model.currentPage) {
        case 'Home':
            html += homeView();
            break;
        
        case 'Portfolio':
            html += portfolioView();
            break;

        case 'About':
            html += aboutView();
            break;

        case 'Contact':
            html += contactView();
            break;

        default:
            html = noPageFound();
    }

    app.innerHTML = html;
}

function navBar(){
    let html = `
    <header>
     <h1 class="logo">kikIT</h1>
        <div class="headerContainer">
            <button class="navBar" onclick="changeView('Home')">Home</button>
            <button class="navBar" onclick="changeView('Portfolio')">Portfolio</button>
            <button class="navBar" onclick="changeView('About')">About</button>
            <button class="navBar" onclick="changeView('Contact')">Contact</button>
        </div>
    </header>
    `; 

    return html;
}

function noPageFound(){
    let html = `
    404! Page not found!`;

    return html;
}

