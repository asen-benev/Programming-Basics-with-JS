function suppliesForSchool(input) {
    let packetsOfChemicals = Number(input[0]);
    let markerPacks = Number(input[1]);
    let boardCleaner = Number(input[2]);
    let percentageReduction = Number(input[3]);

    let priceOfChemicals = packetsOfChemicals * 5.80;
    let priceOfTags = markerPacks * 7.20;
    let priceOfThePreparation = boardCleaner * 1.20;
    let priceForAllMaterials = priceOfChemicals + priceOfTags + priceOfThePreparation;
    let discountedPrice = priceForAllMaterials - (priceForAllMaterials * percentageReduction / 100);
    
    console.log(discountedPrice);
}
suppliesForSchool([2, 3, 4, 25]);
suppliesForSchool([4, 2, 5, 13]);