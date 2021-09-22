function aboutView(){
  let html = `<div class="aboutPageContainer">`;
  let contentLoop = model.Aboutpageview.Content;
  for (i = 0; i < contentLoop.length; i++){
  const newItem = contentLoop[i].Title;
  const titleName = newItem.txt;
  const tagsName = newItem.Tags;
  const descInfo = newItem.Description;
  
  html += `
      <div class="aboutPageItem">
          <h2 class="aboutPageTitle">${titleName}</h2>
              <hr>`;
      for (j = 0; j < newItem.Tags.length; j++){
  html += `<p class="aboutitemTags">${tagsName[j]}</p>`;
}                
  html += `<hr class="hrOrange"><p class="aboutPageDesc">${descInfo}</p>
      </div>`;
  }
html += `</div>`;
return html;
}