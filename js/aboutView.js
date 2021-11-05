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

		html += `<img class="profilePicture" src="${model.Aboutpageview.Content[0].Title.profileImg}" alt="Profile picture">`;

		html += `<hr>`;

		html += `<p class="aboutDesc">${descInfo}</p>`;

		// EXPERIENCE SECTION
		html += `<hr>`;
		html += `<h2 class="subTitle">Experiences</h2>`;
		html += `<div class="expContainer">`;
		for (j = 0; j < newItem.Experience.length; j++) {
			let expList = newItem.Experience[j];
			html += `<p class="aboutList">${expList}</p>`;
		}
		html += `</div>`;

		// HOBBIES SECTION
		html += `<hr>`;
		html += `<h2 class="subTitle">Hobbies</h2>`;
		html += `<div class="hobbyContainer">`;
		for (j = 0; j < newItem.Hobbies.length; j++) {
			let hobbyList = newItem.Hobbies[j];
			html += `<p class="aboutList">${hobbyList}</p>`;
		}
		html += `</div>`;

		// TAGS
		html += `<hr>`;
		html += `<div class="aboutTagsContainer">`;
		for (j = 0; j < newItem.Tags.length; j++) {
			html += `<p class="homeItemTags" onmousedown="aboutTag(event, ${i}, ${j})">${tagsName[j].Tag}</p>`;
		}
		html += `</div>`;
		html += `<hr>`;

		html += `</div></div>`;
	}
	html += `</div>`;
	return html;
}
