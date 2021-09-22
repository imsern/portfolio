function contactView(){
  let html = `<div class="contactPageContainer">`;
  let contentLoop = model.Contactpageview.Content;
  for (i = 0; i < contentLoop.length; i++){
  const newItem = contentLoop[i].Title;
  const titleName = newItem.txt;
  const tagsName = newItem.Tags;
  const descInfo = newItem.Description;
  
  html += `
      <div class="contactPageItem">
          <h2 class="contactPageTitle">${titleName}</h2>
              <hr>`;
      for (j = 0; j < newItem.Tags.length; j++){
  html += `<p class="contactitemTags">${tagsName[j]}</p>`;
}                
  html += `<hr class="hrOrange"><p class="contactPageDesc">${descInfo}</p>
      </div>`;
  }
html += `</div>`;
return html;
}