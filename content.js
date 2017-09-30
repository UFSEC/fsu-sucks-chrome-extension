var generateMapping = function(){
  return {
    "fsu": ["fsu sucks!", "fsu < uf"],
    "seminoles": ["people who didn't get into UF", "semi-NULLS"],
    "florida state university": ["Florida State High School", "Florida State Community College"],
    "academics": ["\"academics\""],
    "research": ["research 😔"] // emoji is CMD + CTRL + SPACE
  };
}

var getWords = function(){
  return Object.keys(generateMapping());
}

var getReplacement = function(original){
  var mapping = generateMapping();
  var replacements = mapping[original];
  var index = Math.floor(Math.random() * (replacements.length));
  return replacements[index];
}

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    console.log(element.childNodes);
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        var nodeReplaced = false;

        if (node.nodeType === 3) {
          var text = node.nodeValue;

          var wordsToReplace = getWords();
          for (var k = 0; k < wordsToReplace.length; k++){
            var word = wordsToReplace[k];
            var replacement = getReplacement(word);
            var regex = new RegExp(word, "gi");

            // gi means global (all matches not just first) and case insensitive
            var replacedText = text.replace(regex, replacement);

            if (replacedText !== text && !nodeReplaced) {
              element.replaceChild(document.createTextNode(replacedText), node);
              nodeReplaced = true;
            }
          }
        }
    }
}
