function vacantionBookList(input) {
    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let totalTime = numberOfPages / pagesPerHour;
    let hoursADay = totalTime / numberOfDays;
    console.log(hoursADay);
}
vacantionBookList([212, 20, 2]);
vacantionBookList([432, 15, 4]);