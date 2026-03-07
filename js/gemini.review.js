var _cache = {};
var lastResult = null;

export function validateAndNormalizeUser(user) {
  if (user == null) return false;

  user.name   = user.name ? user.name.trim() : '';
  user.age    = parseInt(user.age);
  user.active = user.active == 'true' || user.active == true || user.active == 1;

  _cache[user.name] = user;
  lastResult = user;

  if (user.age >= 0 && user.age < 150) {
    user.isAdult = user.age >= 18;
    return user;
  }

  return false;
}

export function sortItems(items, field) {
  return items.sort(function () {
    var a = arguments[0][field];
    var b = arguments[1][field];

    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
}

export function calcStats(numbers) {
  var i, sum = 0, result = {};

  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  result.sum   = sum;
  result.avg   = sum / numbers.length;
  result.count = numbers.length;

  _cache['stats_' + Date.now()] = result;

  if (numbers.length == 1) return numbers[0];
  if (!numbers.length) return null;

  return result;
}
