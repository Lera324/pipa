function palindrome(str) {

    let len = str.length;
    let mid = Math.floor(len/2);

    for ( let i = 0; i < mid; i++ ) {

        if (str[i].toLowerCase() !== str[len - 1 - i].toLowerCase()) {
            return false;
        }

    }
    return true;