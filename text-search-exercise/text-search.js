function changeToTextArea(){
    var paragraph = $('#text-to-search').text();
    $('#text-to-search-editable').text(paragraph);
    $('#text-to-search-editable').removeClass('not-displayed');
    $('#text-to-search').addClass('not-displayed');
}


function changeToParagraph(){
    var editableText = $('#text-to-search-editable');
    var txt = editableText.val();
    editableText.addClass('not-displayed');

    var paragraph = $('#text-to-search');
    paragraph.text(txt);
    paragraph.removeClass('not-displayed');
}


function showMatches(){
    var userInput = $('#text-input').val();

    if (userInput === '' ){
        clearMatches();
    }
    else{
        updateMatches(userInput);
    }
}


function clearMatches(){
    var paragraph = $('#text-to-search');
    paragraph.children('span').removeClass('highlighted');
    setMatchesFoundNumber(0);
}


function updateMatches(userInput){

    var matches = getMatches(userInput);

    if (empty(matches)){
        clearMatches();
    }
    else {
        setMatchesFoundNumber(matches.length);
        highlightMatches(matches);
    }
}


function setMatchesFoundNumber(num){
    $('#search-result').text('' + num);
}


function getMatches(userInput){

    var pattern = prepRegularExpression(userInput);

    var searchText = $('#text-to-search').text();

    return searchText.match(pattern);
}


function prepRegularExpression(userInput){
    userInput = escapeSpecialCharsForRegexUse(userInput);

    var caseModifier = getCaseModifier();

    return new RegExp(userInput, (caseModifier + 'g'));
}


function escapeSpecialCharsForRegexUse(txt){

    // To ignore the meaning of escaped special characters inside regex patterns,
    // Another 2 backslashes have to be added to their beginning, even
    // though they're already escaped:
    var escapedSpecialChars = [
        "\\\\", "\\\$", "\\\^", "\\\*", "\\\(", "\\\)", "\\\?",
        "\\\+", "\\\[", "\\\|", "\\\.", "\\\/"
    ];

    for (var i=0;  i < escapedSpecialChars.length;  ++i){
        txt = txt.replace(new RegExp(escapedSpecialChars[i],'g'),
            escapedSpecialChars[i]);
    }

    return txt;
}


function getCaseModifier(){
    var caseModifier = 'i';
    var caseSensitive = $('#case-sensitive-checkbox').prop('checked');
    if (caseSensitive) { caseModifier = ''; }
    return caseModifier;
}


/*
 Important Issue:
   Neither the 'innerHTML' or 'innerText' properties contain the exact
   same text that is displayed in the browser page.  For display, the
   browser removes any extra spaces so there is always just one space
   separating words and sentences.  But when you retrieve the value of
   'innerText', you get the text precisely as it's written in the HTML
   file: excessive spaces, tabs, line breaks, everything.
   This has caused unexpected behavior during testing of this
    app.  The solution is to either format the inner text
   in the file the same way as it's shown in the browser, or, wrap the
   text inside a <pre> element so that what you see is what you get.
   If you want the user to be able to modify the text that will
   eventually be searched, you should choose the latter.  Else, choose
   the former.  Of course this only applies to text-search matching
   applications.

    Other Issues:
        Converting innerHTML to innerText via a statement like:
        $('p').text( $('p').html() );
    will cause any special characters (such as '<' and '>' used in tags)
    to be displayed as HTML character entities ( such as '&lt;' and '&gt;' )
*/

function empty(matches){
    //for debugging:
    // $('#debug-text').text(innerText);
    return isNotArray(matches);
}


function isNotArray(param){
    return ( !Array.isArray(param) );
}


function highlightMatches(matches){

    var paragraph = $('#text-to-search');

    // Without this line you'll get redundant loop iterations:
    matches = uniqueItems(matches);

    var innerText =  textWithMatchesInsideSpanElements(matches);

    paragraph.html(innerText);

    paragraph.children('span').addClass('highlighted');

}


function textWithMatchesInsideSpanElements(matches){
    const OPENSPAN = '⚣⚣⚣';
    const CLOSESPAN = '⚤⚤⚤';

    for (var i=0, innerText = $('#text-to-search').text();
         i < matches.length;   ++i){
        var unescapedSearch = matches[i];
        var escapedSearch = escapeSpecialCharsForRegexUse(unescapedSearch);
        var regex = new RegExp(escapedSearch,'g');

        innerText = replaceInsideTagSubstitutions(innerText, regex,
            unescapedSearch, {open:OPENSPAN, close:CLOSESPAN});
        // <span> substitutions.  Important to protect the tags when doing searching/replacing.
    }

    innerText = replaceSubsWithTags(innerText,
        {open:OPENSPAN, close:CLOSESPAN}, {open:'<span>', close:'</span>'});

    return innerText;
}


function replaceInsideTagSubstitutions(txt, patternToReplace, txtThatGoesBetweenSubs, subs){
    return txt.replace(patternToReplace,
        subs.open + txtThatGoesBetweenSubs + subs.close);
}


function replaceSubsWithTags(txt, subs, tags){
    regex = new RegExp(subs.open,'g');
    txt = txt.replace(regex, tags.open);
    regex = new RegExp(subs.close,'g');
    txt = txt.replace(regex, tags.close);
    return txt;
}


function uniqueItems(arr){
    for (var i=0, newArr=[];  i<arr.length;  ++i){
        if (i===0) {
            newArr.push(arr[i]);
        }
        else if (newArr.indexOf( arr[i] ) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
