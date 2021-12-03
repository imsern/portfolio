function changeView(selectedPage) {
	model.currentPage = selectedPage;
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

// HOME PAGE TAG FUNCTION
function homeTag(e, i, j) {
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

//ABOUT PAGE TAG FUNCTION
function aboutTag(e, i, j) {
	let tags = model.Aboutpageview.Content[i].Title.Tags[j];

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

//CONTACT PAGE TAG FUNCTION
function contactTag(e, i, j) {
	let tags = model.Contactpageview.Content[i].Title.Tags[j];

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

// PORTFOLIO PAGE TAG FUNCTION

function portTag(e, i, j) {
	let tags = model.Portfolioview.Content[i].Title.tags[j];
	if (tags.linkedPage == '') {return}
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
