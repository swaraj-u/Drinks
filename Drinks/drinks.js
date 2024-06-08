const drink1=document.getElementById("drink1");
const drink2=document.getElementById("drink2");
const drink3=document.getElementById("drink3");
const drink4=document.getElementById("drink4");
const drink5=document.getElementById("drink5");
const drink6=document.getElementById("drink6");


fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
     random(data,0,drink1);
     random(data,1,drink2);
     random(data,2,drink3);
     random(data,3,drink4);
     random(data,4,drink5);
     random(data,5,drink6);
})
.catch(err => {
    console.log(err);
});

const random=(data,number,drink)=>{
    const href= data.drinks[number].strDrinkThumb;
    const img = document.createElement("img");
    img.setAttribute('src', href);
    drink.appendChild(img);
    img.classList.add("image");
    const div = document.createElement("div");
    drink.appendChild(div);
    div.classList.add("flex");
    const name=data.drinks[number].strDrink;
    const glass=data.drinks[number].strGlass;
    const ing1=data.drinks[number].strIngredient1;
    const ing2=data.drinks[number].strIngredient2;
    const ing3=data.drinks[number].strIngredient3;
    let ing4, ing5, ing6, ing7;
    if(data.drinks[number].strIngredient4 !== null)
     {ing4=data.drinks[number].strIngredient4;}
    if(data.drinks[number].strIngredient5 !== null)
     {ing5=data.drinks[number].strIngredient5;}
    if(data.drinks[number].strIngredient6 !== null)
     {ing6=data.drinks[number].strIngredient6;}
    if(data.drinks[number].strIngredient7 !== null)
     {ing7=data.drinks[number].strIngredient7;}
    const inst=data.drinks[number].strInstructions;
    const mea1=data.drinks[number].strMeasure1;
    const mea2=data.drinks[number].strMeasure2;
    const mea3=data.drinks[number].strMeasure3;
    let mea4,mea5,mea6,mea7;
    if(data.drinks[number].strMeasure4 !== null)
     mea4=data.drinks[number].strMeasure4;
    if(data.drinks[number].strMeasure5 !== null)
     mea5=data.drinks[number].strMeasure5;
    if(data.drinks[number].strMeasure6 !== null)
     mea6=data.drinks[number].strMeasure6;
    if(data.drinks[number].strMeasure7 !== null)
     mea7=data.drinks[number].strMeasure7;
    
    div.innerHTML += 
    `<p><b>${name}</b>, </p>
    <p>Serve in ${glass}, </p>`;
   
    const para=document.createElement("para");
    div.appendChild(para);

    para.innerHTML='';
    para.innerHTML+= `<strong>Ingredients:</strong> ${ing1}(${mea1}), ${ing2}(${mea2}), ${ing3}(${mea3}), `;

    if(ing4!==undefined && mea4!==undefined)
        {para.innerHTML +=`<span>${ing4}(${mea4}), </span>`;}
    else if(ing4!==undefined && mea4===undefined)
        {para.innerHTML +=`<span>${ing4}, </span>`;}
    if(ing5!==undefined && mea5!==undefined)
        para.innerHTML +=`<span>${ing5}(${mea5}), </span>`;
    else if(ing5!==undefined && mea5===undefined)
        para.innerHTML +=`<span>${ing5}, </span>`;
    if(ing6!==undefined && mea6!==undefined)
        para.innerHTML +=`<span>${ing6}(${mea6}), </span>`;
    else if(ing6!==undefined && mea6===undefined)
        para.innerHTML +=`<span>${ing6}, </span>`;
    if(ing7!==undefined && mea7!==undefined)
        para.innerHTML +=`<span>${ing7}(${mea7}), </span>`;
    else if(ing7!==undefined && mea7===undefined)
        para.innerHTML +=`<span>${ing7}, </span>`;

    div.innerHTML +=`<p><strong>Instructions:</strong> ${inst}</p>`
}


