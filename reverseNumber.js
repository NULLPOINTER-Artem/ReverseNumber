console.log(reverseNumber(182));

/**
 * Переворачивает число наоборот.
 * Например: reverseNumber(182); // 281
 * @param {number} number введенное число пользователем
 * @returns {number} перевернутое число
 */
function reverseNumber(number) {
    number += '';
    temp = '';

    for (let i = number.length - 1; i >= 0; i--) {
        temp += number.charAt(i);
    }   

    if (isNaN(+temp)) {
        return -1;
    } 

    return +temp;
}