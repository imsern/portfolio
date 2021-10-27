function portfolioView() {
	let html = `<div class="portfolioContainer">`;
	let contentLoop = model.Portfolioview.Content;
	for (i = 0; i < contentLoop.length; i++) {
		const newItem = contentLoop[i].Title;
		const titleName = newItem.txt;
		const tagsName = newItem.tags;
		const descInfo = newItem.Description;
		console.log(newItem.ReferencePage);
		html += `
        <div class="portfolioItemContainer">
            <div class="portfolioItem" >
                <h2 class="portfolioTitle">${titleName}</h2>
                <img class="projectPicture" onmousedown="goToProject(event, ${i})" src="https://raw.githubusercontent.com/imsern/portfolio/main/Logo.png" alt="Project picture">
                    <hr>
                    <div class="portfolioTagsContainer">`;
		for (j = 0; j < newItem.tags.length; j++) {
			html += `<p class="portfolioItemTags">${tagsName[j]}</p>
                `;
		}
		html += `</div><hr><p class="portfolioDesc">${descInfo}</p>
        </div></div>`;
	}
	html += `</div>`;
	return html;
}
