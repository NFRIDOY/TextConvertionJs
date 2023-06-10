let textArea = document.getElementById("textArea");
function toUpper(){
    let text = textArea.value;
    // console.log(text);
    let upperText = text.toUpperCase();
    console.log(upperText);
    textArea.value = upperText;
}
function toFirstUpper() {
    let text = textArea.value;
    let output = "";
    let result = "";
    // console.log(text.length);
    let i = 0;
    while ( i < text.length) {
        const char = text[i];
        if(char == " "){
            // text[i+1] = text[i+1].toUpperCase();
            // output = output + " " + text[i+1].toUpperCase();
            // continue;
            // result = output.concat(text[i+1].toUpperCase());
            result = result + text.replace(text[i+1], text[i+1].toUpperCase())
            i=i+2;
            continue;
        }
        else {
            // output = output + text[i];
            // result = output.concat(text[i]);
        }
        i++;
    }
    console.log(result);
}