function changeView(selectedPage){
    model.currentPage = selectedPage;
    console.log(selectedPage);
    viewSelector();
}