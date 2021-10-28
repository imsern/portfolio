function changeView(selectedPage) {
	model.currentPage = selectedPage;
	console.log(selectedPage);
	viewSelector();
}

function goToProject(e, value) {
	if (e.button === 1) {
		window.open(
			model.Portfolioview.Content[value].Title.ReferencePage,
			"_blank"
		);
	} else {
		window.location.href =
			model.Portfolioview.Content[value].Title.ReferencePage;
	}
}

function clickedTag(e, id, value) {
	if (e.button === 1) {
		window.open(
			model.Homepageview.Content[id].Title.Tags[value].linkedPage,
			"_blank"
		);
	} else {
		window.location.href =
			model.Homepageview.Content[id].Title.Tags[value].linkedPage;
	}
}

// https://www.linkedin.com/in/kristoffer-knutsen-9ab3ba1b4/
