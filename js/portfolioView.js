function portfolioView() {
	let html = `<div class="portfolioContainer">`;
	let contentLoop = model.Portfolioview.Content;
	for (i = 0; i < contentLoop.length; i++) {
		const newItem = contentLoop[i].Title;
		const titleName = newItem.txt;
		const descInfo = newItem.Description;
		console.log(newItem.ReferencePage);
		html += `
        <div class="portfolioItemContainer">
            <div class="portfolioItem" >
                <h2 class="portfolioTitle" onmousedown="goToProject(event, ${i})">${titleName}</h2>
                    <hr>
                    <div class="portfolioTagsContainer">`;
		for (j = 0; j < model.Portfolioview.Content[i].Title.tags.length; j++) {
			html += `<p class="portfolioItemTags" onmousedown="portTag(event, ${i}, ${j})">${newItem.tags[j].Tag}</p>
                `;
		}
		html += `</div><hr><p class="portfolioDesc">${descInfo}</p>
        </div></div>`;
	}
	html += `</div>`;
	return html;
}