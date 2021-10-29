function homeView() {
	let html = `<div class="homeContainer">`;
	let contentLoop = model.Homepageview.Content;
	for (i = 0; i < contentLoop.length; i++) {
		const newItem = contentLoop[i].Title;
		const titleName = newItem.txt;
		const tagsName = newItem.Tags;
		const descInfo = newItem.Description;
		const profileImg = contentLoop[i].Title.profileImg;

		html += `<div class="homeItemContainer">
            <div class="homeItem">
                <h2 class="homeTitle">${titleName}</h2>`;

		html += `<img class="profilePicture" src="/Images/profile.png" alt="Profile picture">`;

		// TAGS
		html += `<hr>`;
		html += `<div class="homeTagsContainer">`;
		for (j = 0; j < newItem.Tags.length; j++) {
			html += `<p class="homeItemTags" onmousedown="homeTag(event, ${i}, ${j})">${tagsName[j].Tag}</p>`;
		}
		html += `</div>`;
		html += `<hr>`;

		html += `<p class="homeDesc">${descInfo}</p>`;

		html += `</div></div>`;
	}
	html += `</div>`;
	return html;
}
