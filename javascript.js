


let bagQuanty = 0;
let shoesQuanty = 0;

document.querySelector(".add-bag").addEventListener("click", () =>{
    if(bagQuanty <= 9){
    bagQuanty= bagQuanty + 1;
    document.querySelector(".bag").innerHTML=bagQuanty;
}});

document.querySelector(".remove-bag").addEventListener("click", () =>{
    if(bagQuanty>=1){
    bagQuanty= bagQuanty - 1;
    document.querySelector(".bag").innerHTML=bagQuanty;
}});   



document.querySelector(".add-shoes").addEventListener("click", () =>{
    if(shoesQuanty<=9){
    shoesQuanty= shoesQuanty + 1;
    document.querySelector(".leviShoes").innerHTML=shoesQuanty;
}});
    
document.querySelector(".remove-shoes").addEventListener("click", () =>{
    if(shoesQuanty>=1){
    shoesQuanty= shoesQuanty - 1;
    document.querySelector(".leviShoes").innerHTML=shoesQuanty;
}});    