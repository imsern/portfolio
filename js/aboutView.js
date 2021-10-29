function aboutView() {
	let html = `<div class="aboutContainer">`;
	let contentLoop = model.Aboutpageview.Content;
	for (i = 0; i < contentLoop.length; i++) {
		const newItem = contentLoop[i].Title;
		const titleName = newItem.txt;
		const tagsName = newItem.Tags;
		const descInfo = newItem.Description;
		const profileImg = contentLoop[i].Title.profileImg;

		html += `<div class="aboutItemContainer">
            <div class="aboutItem">
                <h2 class="aboutTitle">${titleName}</h2>`;

		html += `<img class="profilePicture" src="${profileImg}" alt="Profile picture">`;

		html += `<hr>`;

		html += `<p class="aboutDesc">${descInfo}</p>`;

		html += `<hr>`;
		html += `<h2 class="subTitle">Experiences</h2><hr>`;
		html += `<div class="expContainer">`;
		for (y = 0; y < newItem.Experience.length; y++) {
			let expList = newItem.Experience[y];
			html += `<p class="aboutList">${expList}</p>`;
		}
		html += `</div>`;

		html += `<hr>`;
		html += `<div class="aboutTagsContainer">`;
		for (j = 0; j < newItem.Tags.length; j++) {
			html += `<p class="homeItemTags" onmousedown="clickedTag(event, ${i}, ${j})">${tagsName[j].Tag}</p>`;
		}
		html += `</div>`;
		html += `<hr>`;

		html += `</div></div>`;
	}
	html += `</div>`;
	return html;
}
