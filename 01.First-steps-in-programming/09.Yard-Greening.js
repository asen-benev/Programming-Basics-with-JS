function yardGreening(input) {
    let greening = Number(input[0]);
    let costOfLandscaping = greening * 7.61;
    let discount = 0.18 * costOfLandscaping;
    let finalPrice = costOfLandscaping - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening([550]);
yardGreening([150]);