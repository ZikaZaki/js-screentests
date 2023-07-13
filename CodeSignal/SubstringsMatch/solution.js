function isMatch(pattern, source) {
    const vowels = ["a", "e", "i", "o", "u", "y"];
    
    for (let i = 0; i < pattern.length; i++) {
        if (Number(pattern[i]) === 0 && !vowels.includes(source[i])) {
             return false; 
        } else if(Number(pattern[i]) === 1 && vowels.includes(source[i])) {
            return false;
        } else { continue; }
    }
    
    return true;
}

function solution(pattern, source) {
    let matches = 0;
    
    for (let i = 0; i <= source.length - pattern.length; i++) {
        matches += isMatch(pattern, source.split("").splice(i, pattern.length)) ? 1 : 0;
        // console.log(` Substring:${source.split("").splice(i, pattern.length)} isMatch: ${isMatch(pattern, source.split("").splice(i, pattern.length))}`);
    }
    
    return matches;
}
