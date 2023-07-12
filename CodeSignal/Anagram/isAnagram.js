// ===================NEW SOLUTION==========================
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let sCount = s[0].charCodeAt(0);
    let tCount = t[0].charCodeAt(0);

    for (let i = 1; i < s.length; i++) {
        sCount *= s[i].charCodeAt(0);
        tCount *= t[i].charCodeAt(0);
    }

    return sCount === tCount;
}
