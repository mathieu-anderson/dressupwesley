/*function getImageTag() {
    var imageURLs = [
        "images/S01E01.jpg",
        "images/S01E02.jpg",
        "images/S01E03.jpg",
        "images/S01E06.jpg",
        "images/S01E07.jpg",
        "images/S01E08.jpg",
        "images/S01E09.jpg",
        "images/S01E10.jpg",
        "images/S01E10_2.jpg",
        "images/S01E13.jpg",
        "images/S01E14.jpg",
        "images/S01E15.jpg",
        "images/S01E17.jpg",
        "images/S01E18.jpg",
        "images/S01E19.jpg",
        "images/S01E22.jpg",
        "images/S01E23.jpg",
        "images/S02E01.jpg"
    ];
    var img = '<img src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" alt=\"Dress up, Wesley!"/>';
    return img;
}*/

var randomIndexSelector = function(imageFilesLength) {
    "use strict";
    return Math.floor(Math.random() * (imageFilesLength));
};

var randomImage = function() {
    "use strict";
    var imageFiles = [
            "images/S01E01.jpg",
            "images/S01E02.jpg",
            "images/S01E03.jpg",
            "images/S01E06.jpg",
            "images/S01E07.jpg",
            "images/S01E08.jpg",
            "images/S01E09.jpg",
            "images/S01E10.jpg",
            "images/S01E10_2.jpg",
            "images/S01E13.jpg",
            "images/S01E14.jpg",
            "images/S01E15.jpg",
            "images/S01E17.jpg",
            "images/S01E18.jpg",
            "images/S01E19.jpg",
            "images/S01E22.jpg",
            "images/S01E23.jpg",
            "images/S02E01.jpg"
        ],
    randomImageFilesIndex = randomIndexSelector(imageFiles.length),
    randomImageTag = document.getElementById("randomImageTag");
    randomImageTag.src = imageFiles[randomImageFilesIndex];
};
