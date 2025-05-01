function popup() {
    let text = "Browser Information:\n" +
    "----------------------\n" +
    "Code Name: " + navigator.appCodeName + "\n" +
    "Name: " + navigator.appName + "\n" +
    "Version: " + navigator.appVersion + "\n" +
    "Cookies: " + (navigator.cookieEnabled ? "Enabled" : "Disabled") + "\n" +
    "Language: " + navigator.language + "\n" +
    "Online: " + (navigator.onLine ? "Yes" : "No") + "\n" +
    "Platform: " + navigator.platform + "\n" +
    "User Agent: " + navigator.userAgent;


    alert(text);
}