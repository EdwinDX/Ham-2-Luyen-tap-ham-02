function insertNumToArray() {
    let value = +document.getElementById('inputNum').value;
    let size = arr.length;
    arr[size]=value;
    document.getElementById('inputNum').value = '';
    document.getElementById('show').innerHTML=arr;
}
function reserve() {
    arr.reverse();
    document.getElementById('show1').innerHTML=arr;
}