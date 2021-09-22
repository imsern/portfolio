function portfolioView() {
  let html = `<div class="portfolioPageContainer">`;
  let contentLoop = model.Portfolioview.Content;
  for (i = 0; i < contentLoop.length; i++){
  const newItem = contentLoop[i].Title;
  const titleName = newItem.txt;
  const tagsName = newItem.tags;
  const descInfo = newItem.Description;
  
  html += `
      <div class="portfolioPageItem">
          <h2 class="homePageTitle">${titleName}</h2>
              <hr>`;
      for (j = 0; j < newItem.tags.length; j++){
  html += `<p class="itemTags">${tagsName[j]}</p>`;
}                
  html += `<p class="portfolioPageDesc">${descInfo}</p>
      </div>`;
  }
html += `</div>`;
return html;
}
