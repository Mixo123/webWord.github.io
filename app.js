const buttons = document.querySelectorAll(".btn");
const content = document.querySelector(".content");

const fontSizeUp = document.querySelector('.fontsizeup');
const fontSizeDown = document.querySelector('.fontsizedown');
const fontsizespan = document.querySelector('.fontsizespan');

const loadBtn = document.getElementById('loadbtn');
const saveBtn = document.getElementById('Savebtn');
const saveAsBtn = document.getElementById('SaveAsbtn');

const main = () => {
    //editor

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


    //save btn
    let fileHandle;

    async function button() {
        [fileHandle] = await window.showOpenFilePicker();
        let fileData = await fileHandle.getFile();
        let text = await fileData.text();
        textarea.innerHTML = text;
    }

    async function save() {
        let stream = await fileHandle.createWritable();
        await stream.write(textarea.innerHTML);
        await stream.close();
    }

    async function saveAs() {
        fileHandle = await window.showSaveFilePicker();
        save();
    }

    loadBtn.addEventListener('click', () => {
        button();
    })

    saveBtn.addEventListener('click', () => {
        save();
    })

    saveAsBtn.addEventListener('click', () => {
        saveAs();
    })

};

document.addEventListener('DOMContentLoaded', main)