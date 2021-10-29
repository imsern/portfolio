function contactView() {
	let html = `<div class="contactContainer">`;
	let contentLoop = model.Contactpageview.Content;
	for (i = 0; i < contentLoop.length; i++) {
		const newItem = contentLoop[i].Title;
		const titleName = newItem.txt;
		const tagsName = newItem.Tags;
		const descInfo = newItem.Description;

		html += `
        <div class="contactItemContainer">
            <div class="contactItem">
                <h2 class="contactTitle">${titleName}</h2>
                <img class="profilePicture" src="https://raw.githubusercontent.com/imsern/portfolio/main/Logo.png" alt="Profile picture">
                    <hr>
                    <div class="contactTagsContainer">`;
		for (j = 0; j < newItem.Tags.length; j++) {
			html += `<p class="contactItemTags">${tagsName[j]}</p>
                `;
		}
		html += `</div><hr><p class="contactDesc">${descInfo}</p>
        </div></div>`;
	}
	html += `</div>`;
	return html;
}
