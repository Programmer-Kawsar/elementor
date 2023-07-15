const moduleContent = document.querySelector(".module-main-content");
const moduleStyle = document.querySelector(".module-style");
const contentOption = document.querySelector(".content");

const styleOption = document.querySelector(".style");




contentOption.addEventListener("click", () => {
    moduleContent.classList.add("block");
    moduleStyle.classList.remove("block");
    
    
});
styleOption.addEventListener("click", () => {
    moduleStyle.classList.add("block");
    moduleContent.classList.add("none");
    moduleContent.classList.remove("block");
    
});


// triger-typography-icon

const trigerTypographyIcon = document.querySelector(".triger-typography-icon");
const trigerTypography = document.querySelector(".triger-typography");

trigerTypographyIcon.addEventListener("click", () => {
    trigerTypography.classList.toggle("block");
    
})

// custom font size change

const customFontSize = document.querySelector(".custom-font-size .font-size");
const mainbodyContent = document.querySelector(".main-body-content h1");
const numberChange = document.querySelector(".font-size-number")



// pick range and change text size
customFontSize.oninput = (e) => {
    let val = e.target.value;

   mainbodyContent.style.fontSize= `${val}px`
   

}

// input number change text size
numberChange.oninput = (e) => {
    let val = e.target.value;
   mainbodyContent.style.fontSize= `${val}px`
}

//color-change
const colorChange = document.querySelector(".color-change");
const backgroundcolorChange = document.querySelector(".background-color-change");

colorChange.oninput = (e) => {
    let val = e.target.value;
   mainbodyContent.style.color= `${val}`;
}

//background color change
backgroundcolorChange.oninput = (e) => {
    let val = e.target.value;
   mainbodyContent.style.backgroundColor= `${val}`;
}

// text change
const textarea = document.querySelector(".text-aria textarea");

textarea.oninput = (e) => {
    let val = e.target.value;
    mainbodyContent.innerHTML= `${val}`;
}

// font family chage

const clicktiger = document.querySelector(".click-tiger")
const trigerfontFamily = document.querySelector(".triger-fontfamily")

clicktiger.addEventListener("click", () => {
    
    trigerfontFamily.classList.toggle("block");
})


//change font family
const changefamily = document.querySelectorAll(".triger-fontfamily .family-div p");
changefamily.forEach((item) => {
  item.addEventListener("click", () => {
    const fontFamily = item.textContent;
    mainbodyContent.classList.remove("Belanosima", "Montserrat", "Raleway", "sans-serif", "sunto");
    mainbodyContent.classList.add(fontFamily);
  });
});
