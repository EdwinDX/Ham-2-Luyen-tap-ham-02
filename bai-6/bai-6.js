function isPositiveInteger(num) {
    if (Number.isInteger(num)) {
        if (num>0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}