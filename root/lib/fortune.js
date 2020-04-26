var fortunes = [
    "사랑",
    "우정",
    "희망",
    "건강",
    "행복"
];

exports.getFortune = function () {
    var i = Math.floor(Math.random() * fortunes.length)
    return fortunes[i]
};