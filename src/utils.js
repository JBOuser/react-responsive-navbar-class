export default function capitalizeName(name){
    var word = `${name}`;
    return `${word[0].toLocaleUpperCase()+word.substring(1,word.length)}`
}

function capitalizeLine(line){
    var words = line.split(" ");
    return words.map((word) => {
        return capitalizeName(word)
    }).join(" ")
}

export {capitalizeLine};