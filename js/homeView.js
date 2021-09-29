function homeView() {
    let html = `<div class="homeContainer">`;
    let contentLoop = model.Homepageview.Content;
    for (i = 0; i < contentLoop.length; i++){
    const newItem = contentLoop[i].Title;
    const titleName = newItem.txt;
    const tagsName = newItem.Tags;
    const descInfo = newItem.Description;
    
    html += `
        <div class="homeItemContainer">
            <div class="homeItem">
            <h2 class="homeTitle">${titleName}</h2>
                <hr>`;
        for (j = 0; j < newItem.Tags.length; j++){
    html += `<div class="tagContainer">
                <p class="tags">${tagsName[j]}</p></div>`;
}                
    html += `<hr class="hrOrange">
                <p class="homePageDesc">${descInfo}</p>
            </div>
        </div>`;
    }
 html += `</div>`;
 return html;
}
