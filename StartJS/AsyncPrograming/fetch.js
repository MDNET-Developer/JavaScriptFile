function getTextFile()
{
fetch("example.txt")
.then(showFile=>showFile.text())
.then(reponse=> console.log(reponse))
.catch(errorMessage=> console.error(errorMessage))
}


function getJSONFile()
{
fetch("example.json")
.then(showFile=>showFile.json())
.then(reponse=> console.log(reponse))
.catch(errorMessage=> console.error(errorMessage))
}

getJSONFile();