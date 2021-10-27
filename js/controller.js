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
