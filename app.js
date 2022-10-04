const buttons = document.querySelectorAll(".btn");
const content = document.querySelector(".content");

const fontSizeUp = document.querySelector('.fontsizeup');
const fontSizeDown = document.querySelector('.fontsizedown');

const fontsizespan = document.querySelector('.fontsizespan');

// editor

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        let command = e.target.getAttribute('data');

        if (command === "createLink" || command === "InsertImage") {
            let url = prompt("Link: ");
            document.execCommand(command, false, url)
        } else {
            document.execCommand(command, false, null);
        }
    })
}

let font = "";
let fontsize = 18;

function updateFont() {
    let selectFont = document.querySelector('#select-font');
    font = selectFont.options[selectFont.selectedIndex].value;

    content.style = 'font-family:' + font + ";";
}

updateFont();

function updateColorFont() {
    let selectColorFont = document.querySelector('#color-font');
    color = selectColorFont.options[selectColorFont.selectedIndex].value;

    content.style = 'color:' + color + ";";
}

updateColorFont();

function updateFontsSizeSpan() {
    fontsizespan.innerHTML = "";
    fontsizespan.innerHTML = fontsize + "px";
}

updateFontsSizeSpan();

fontSizeUp.addEventListener('click', () => {
    fontsize++;
    content.style = "font-size:" + fontsize + "px;";
    updateFontsSizeSpan();
})

fontSizeDown.addEventListener('click', () => {
    fontsize--;
    content.style = "font-size:" + fontsize + "px;";
    updateFontsSizeSpan();
})

//download

//save on account