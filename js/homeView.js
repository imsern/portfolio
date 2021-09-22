function homeView() {
    let html = `<div class="homePageContainer">`;
    let contentLoop = model.Homepageview.Content;
    for (i = 0; i < contentLoop.length; i++){
    const newItem = contentLoop[i].Title;
    const titleName = newItem.txt;
    const tagsName = newItem.Tags;
    const descInfo = newItem.Description;
    
    html += `
        <div class="HomePageItem">
            <h2 class="homePageTitle">${titleName}</h2>
                <hr>`;
        for (j = 0; j < newItem.Tags.length; j++){
    html += `<p class="itemTags">${tagsName[j]}</p>`;
}                
    html += `<hr class="hrOrange"><p class="homePageDesc">${descInfo}</p>
        </div>`;
    }
 html += `</div>`;
 return html;
}
