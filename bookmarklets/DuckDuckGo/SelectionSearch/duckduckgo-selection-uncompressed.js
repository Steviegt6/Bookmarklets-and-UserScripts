javascript:(function() {
    function search(vard) {
        return vard.selection ? vard.selection.createRange().text : vard.getSelection()
    }
    selection = search(document);
    for (i = 0; i < frames.length && !selection; i++) s = search(frames[i].document);
    if (!selection || selection == '') selection = alert('You have not selected any text to search up! (DuckDuckGo)', '');
    open('https://www.duckduckgo.com/?q=' + (selection ? '' + encodeURIComponent(selection) : '')).focus();
})();
