function generate() {
    var quotes = {
        "-Jamie Ford": '“The library is like a candy store where everything is free.”',
        "-Anthony Liccione":
            '“The more material we lose, the less we have. The less we have, the more we win.”',
        "-Aaron Lauritsen": '“True friends don\'t come with conditions.”'

    } //dictionary (key :value pair)

    var authors = Object.keys(quotes); // gives the names of all the authors mentioned under quotes as an array as it is a key of the dictionary

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;




}