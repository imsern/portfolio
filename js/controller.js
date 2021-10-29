function changeView(selectedPage) {
	model.currentPage = selectedPage;
	console.log(selectedPage);
	viewSelector();
}

function goToProject(e, value) {
	const referencePage = model.Portfolioview.Content[value].Title.ReferencePage;
	if (e.button === 1) {
		window.open(referencePage, "_blank");
	} else {
		window.location.href = referencePage;
	}
}

function clickedTag(e, i, j) {
	let tags = model.Homepageview.Content[i].Title.Tags[j];

	if (tags.LocalPage) {
		changeView(tags.LocalPage);
		return;
	}
	if (e.button === 1) {
		window.open(tags.linkedPage, "_blank");
	} else {
		window.location.href = tags.linkedPage;
	}
}

// https://www.linkedin.com/in/kristoffer-knutsen-9ab3ba1b4/
