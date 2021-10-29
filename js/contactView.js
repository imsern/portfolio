function contactView() {
	let html = `<div class="contactContainer">`;
	let contentLoop = model.Contactpageview.Content;
	for (i = 0; i < contentLoop.length; i++) {
		const newItem = contentLoop[i].Title;
		const titleName = newItem.txt;
		const tagsName = newItem.Tags;
		const descInfo = newItem.Description;
		const profileImg = contentLoop[i].Title.profileImg;

		html += `<div class="contactItemContainer">
            <div class="contactItem">
                <h2 class="contactTitle">${titleName}</h2>`;

		html += `<hr>`;

		html += `<p class="contactDesc">${descInfo}</p>`;

		// TAGS
		html += `<hr>`;
		html += `<div class="contactTagsContainer">`;
		for (j = 0; j < newItem.Tags.length; j++) {
			html += `<p class="contactItemTags" onmousedown="contactTag(event, ${i}, ${j})">${tagsName[j].Tag}</p>`;
		}
		html += `</div>`;
		html += `<hr>`;

		html += `</div></div>`;
	}
	html += `</div>`;
	return html;
}
