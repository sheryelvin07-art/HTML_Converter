function convertMarkdown()
{
    const input = document.getElementById("markdown-input");
    if(!input)
    {
        return "";
    }
    let textMarkup = input.value;
    textMarkup = textMarkup
        .replace(/^# (.*$)/gim, "<h1>$1</h1>")
        .replace(/^## (.*$)/gim, "<h2>$1</h2>")
        .replace(/^### (.*$)/gim, "<h3>$1</h3>")
        .replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>");

    textMarkup = textMarkup
        .replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>")
        .replace(/(\*|_)(.*?)\1/g, "<em>$2</em>")
        .replace(/!\[(.*?)\]\((.*?)\)/g, "<img alt='$1' src='$2'>")
        .replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2'>$1</a>");

    return textMarkup.trim();
};

const inputField = document.getElementById("markdown-input");
const outputField = document.getElementById("html-output");
const previewField = document.getElementById("preview");

function update()
{
    const convertedHTML = convertMarkdown();
    if (outputField) {
        outputField.textContent = convertedHTML;
    }

    if (previewField) {
        previewField.innerHTML = convertedHTML;
    }
}

update();

if(inputField)
{
    inputField.addEventListener("input",update)
};