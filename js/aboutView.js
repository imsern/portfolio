function aboutView() {
	let html = `<div class="aboutContainer">`;
	let contentLoop = model.Aboutpageview.Content;
	for (i = 0; i < contentLoop.length; i++) {
		const newItem = contentLoop[i].Title;
		const titleName = newItem.txt;
		const tagsName = newItem.Tags;
		const descInfo = newItem.Description;

		html += `
        <div class="aboutItemContainer">
            <div class="aboutItem">
                <h2 class="aboutTitle">${titleName}</h2>
                <img class="profilePicture" src="https://raw.githubusercontent.com/imsern/portfolio/main/profile.png" alt="Profile picture">
                    <hr>
                    <div class="aboutTagsContainer">`;
		for (j = 0; j < newItem.Tags.length; j++) {
			html += `<p class="aboutItemTags">${tagsName[j]}</p>
                `;
		}
		html += `</div><hr><p class="aboutDesc">${descInfo}</p>
        </div></div>`;
	}
	html += `</div>`;
	return html;
}
