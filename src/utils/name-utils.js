function lowercaseFirst(s) {
    return `${s.charAt(0).toLowerCase()}${s.substring(1)}`;
}

function uppercaseFirst(s) {
    return `${s.charAt(0).toUpperCase()}${s.substring(1)}`;
}

function joinTokens(components) {
    var name = components.map(uppercaseFirst).join("");
    return lowercaseFirst(name);
}

function parseTokens(str) {
    var tokenizer = /\d+|[a-z]+|[A-Z]+(?![a-z])|[A-Z][a-z]+/g;

    var matchResult = str.match(tokenizer);
    if (!matchResult) {
        return ["invalid", "name"];
    }

    return matchResult.map((token) => token.toLowerCase());
}

export function generateName(name) {
    return joinTokens(parseTokens(name));
}
