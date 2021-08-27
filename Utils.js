class Utils {
  static SwapKeysAndValues(json) {
    var ret = {};
    for (var key in json) {
      ret[json[key]] = key;
    }
    return ret;
  }

  static SetCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }

  static IsJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  static Truncate(str, n) {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
  };

  static NumberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  static Sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  static Clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
  };

  static IsHexColor(hex) {
    return typeof hex === 'string'
      && hex.length === 6
      && !isNaN(Number('0x' + hex))
  }

  static ValidateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  static ValidateURL(url) {
    try {
      let newUrl = new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  }

  static GetAppCookies = (cookie) => {
    if (!cookie) return {}
    const rawCookies = cookie.split('; ');

    const parsedCookies = {};
    rawCookies.forEach(rawCookie => {
      const parsedCookie = rawCookie.split('=');
      parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });
    return parsedCookies;
  };
}

module.exports = Utils;