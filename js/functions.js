/** Проверяет длину строки по заданным параметрам
 * @param {string} string - проверяемая строка
 * @param {number} maxLength - максимальная допустимая длина
 * @returns {boolean} - true, если длина строки не превышает максимум
 */
export const checkLength = (string = '', maxLength = 1) => {
  if (typeof string !== 'string') {
    return false;
  }

  return string.length <= maxLength;
};

/**Проверяет, является ли слово палиндромом
* @param {string} string - проверяемая строка
* @returns {boolean} - true, если является
*/
export const isPalindrome = (string = '') => {
  if (typeof string !== 'string') {
    return false;
  }

  const normString = string.replaceAll(' ','').toLowerCase();
  for (let i = 0; i < Math.floor(normString.length / 2); i++) {
    if (normString[i] !== normString[normString.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

/**Извлекает цифры из строки и возвращает их в виде целого положительного числа
* @param {string|number} input - проверяемая строка
* @returns {number} - возвращенное число
*/
export const getNumbers = (input = '') => {
  const string = String(input || '');
  const digitsOnly = string.replace(/\D/g, '');
  return digitsOnly ? parseInt(digitsOnly, 10) : 0;
};

const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

export const isMeetingInWorkday = (startWork, endWork, startMeeting, duration) => {
  const startWorkMinutes = timeToMinutes(startWork);
  const endWorkMinutes = timeToMinutes(endWork);
  const startMeetingMinutes = timeToMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + duration;
  return startMeetingMinutes >= startWorkMinutes && endMeetingMinutes <= endWorkMinutes;
};
