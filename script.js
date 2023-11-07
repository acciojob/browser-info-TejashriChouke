
        // Get the user agent string
        var userAgent = navigator.userAgent;

        // Detect the browser name and version
        var browserName;
        var version;

        if (userAgent.indexOf("Chrome") != -1) {
            // Chrome
            browserName = "Chrome";
            version = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
        } else if (userAgent.indexOf("Firefox") != -1) {
            // Firefox
            browserName = "Firefox";
            version = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
        } else if (userAgent.indexOf("Edge") != -1) {
            // Microsoft Edge
            browserName = "Microsoft Edge";
            version = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
        } else if (userAgent.indexOf("Safari") != -1 && userAgent.indexOf("Version") != -1) {
            // Safari
            browserName = "Safari";
            version = userAgent.match(/Version\/(\d+\.\d+)/)[1];
        } else {
            // Default to displaying the user agent string
            browserName = "Unknown";
            version = "N/A";
        }

        // Update the content of the browser-info div
        var browserInfoDiv = document.getElementById("browser-info");
        browserInfoDiv.textContent = "You are using " + browserName + " version " + version;