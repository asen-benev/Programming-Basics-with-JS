function petShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let finalAmount = dogFood * 2.50 + catFood * 4;
    console.log(`${finalAmount} lv.`);
}
petShop([5, 4]);
petShop([13, 9]);