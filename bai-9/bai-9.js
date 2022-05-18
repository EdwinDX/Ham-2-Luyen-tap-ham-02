function insertItToArray() {
    let value = document.getElementById('inputString').value.toString();
    let size = arr.length;
    arr[size]=value;
    document.getElementById('inputString').value = '';
    document.getElementById('show').innerHTML=arr;
}
function isItInArray() {
    let inputString = document.getElementById('inputStringNeed').value.toString();
    let count = 0;
    for (let i=0;i<arr.length;i++) {
        if (inputString===arr[i]) {
            count++;
        }
    }
    if (count===0) {
        return -1;
    }
    else {
        return count;
    }
}