javascript: (function() {
    function search(vard) {
        return vard.selection ? vard.selection.createRange().text : vard.getSelection()
    }
    selection = search(document);
    selection = prompt('What would you like to search? (DuckDuckGo)', '');
    open('https://www.duckduckgo.com/?q=' + (selection ? '' + encodeURIComponent(selection) : '')).focus();
})();
