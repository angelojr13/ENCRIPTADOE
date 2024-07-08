function updateText() {
    const input = document.getElementById("inputText").value;
    const mode = document.querySelector('input[name="mode"]:checked').value;
    let output;

    if (mode === "encrypt") {
        output = input.replace(/e/g, "enter")
                      .replace(/i/g, "imes")
                      .replace(/a/g, "ai")
                      .replace(/o/g, "ober")
                      .replace(/u/g, "ufat");
    } else {
        output = input.replace(/enter/g, "e")
                      .replace(/imes/g, "i")
                      .replace(/ai/g, "a")
                      .replace(/ober/g, "o")
                      .replace(/ufat/g, "u");
    }

    document.getElementById("outputText").value = output;
}

function copyText() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
