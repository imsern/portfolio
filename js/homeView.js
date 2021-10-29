function homeView() {
	let html = `<div class="homeContainer">`;
	let contentLoop = model.Homepageview.Content;
	for (i = 0; i < contentLoop.length; i++) {
		const newItem = contentLoop[i].Title;
		const titleName = newItem.txt;
		const tagsName = newItem.Tags;
		const descInfo = newItem.Description;

		html += `
        <div class="homeItemContainer">
            <div class="homeItem">
                <h2 class="homeTitle">${titleName}</h2>
                <img class="profilePicture" src="https://raw.githubusercontent.com/imsern/portfolio/main/profile.png" alt="Profile picture">
                    <hr>
                    <div class="homeTagsContainer">`;
		for (j = 0; j < newItem.Tags.length; j++) {
			html += `<p class="homeItemTags" onmousedown="clickedTag(event, ${i}, ${j})">${tagsName[j].Tag}</p>
                `;
		}
		html += `</div><hr><p class="homeDesc">${descInfo}</p>
        </div></div>`;
	}
	html += `</div>`;
	return html;
}
