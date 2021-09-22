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
        <div class="headerContainer">
            <p class="navBtn homeBtn" onclick="changeView('Home')">Home</p>
            <p class="navBtn projectBtn" onclick="changeView('Portfolio')">
            Portfolio</p>
            <p class="navBtn aboutBtn" onclick="changeView('About')">About</p>
            <p class="navBtn contactBtn" onclick="changeView('Contact')">Contact</p>
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

