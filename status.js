window.onload = async function () {
  try {
    await fetch("https://kvm.deutscher775.de", {
      signal: AbortSignal.timeout(5000),
    }).then(async (response) => {
      if (response) {
        document.getElementById("server1-status").innerHTML = "Online";
        document.querySelector("#item-icon-server1").src =
          "./assets/status-up.svg";
        document.querySelector("#item-icon-server1").style =
          "filter: invert(57%) sepia(43%) saturate(1352%) hue-rotate(80deg) brightness(119%) contrast(119%);";
      } else {
        console.error("API is offline");
        document.getElementById("api-status").innerHTML = "Offline";
        document.querySelector("#item-icon-server1").src =
          "./assets/status-failed.svg";
        document.querySelector("#item-icon-server1").style =
          "filter: invert(20%) sepia(100%) saturate(7499%) hue-rotate(354deg) brightness(102%) contrast(102%);";
      }
    });
  } catch (error) {
    document.getElementById("server1-status").innerHTML = "Offline";
  }

  try {
    await fetch("https://kvm2.deutscher775.de", { signal: AbortSignal.timeout(5000) }).then(async (response) => {
      if (response) {
        document.getElementById("server2-status").innerHTML = "Online";
        document.querySelector("#item-icon-server2").src = "./assets/status-up.svg";
        document.querySelector("#item-icon-server2").style = "filter: invert(57%) sepia(43%) saturate(1352%) hue-rotate(80deg) brightness(119%) contrast(119%);";
      } else {
        document.getElementById("api-status").innerHTML = "Offline";
        document.querySelector("#item-icon-server2").src = "./assets/status-failed.svg";
        document.querySelector("#item-icon-server2").style = "filter: invert(20%) sepia(100%) saturate(7499%) hue-rotate(354deg) brightness(102%) contrast(102%);";
      }
    });
  }
  catch (error) {
    document.getElementById("server2-status").innerHTML = "Offline";
    document.querySelector("#item-icon-server2").src = "./assets/status-failed.svg";
    document.querySelector("#item-icon-server2").style = "filter: invert(20%) sepia(100%) saturate(7499%) hue-rotate(354deg) brightness(102%) contrast(102%);";
  }


  try {
    await fetch("https://status.astroid.cc/monitor", {
      signal: AbortSignal.timeout(5000),
    }).then(async (response) => {
      const filter_green =
        "filter: invert(57%) sepia(43%) saturate(1352%) hue-rotate(80deg) brightness(119%) contrast(119%);";
      const filter_red =
        "filter: invert(20%) sepia(100%) saturate(7499%) hue-rotate(354deg) brightness(102%) contrast(102%);";
      const filter_yellow =
        "filter: invert(100%) sepia(130%) saturate(8000%) hue-rotate(364deg) brightness(102%) contrast(122%);";

      response_json = await response.json();
      if (response.ok) {
        var api_status = response_json.api.status;
        var database_status = response_json.database.status;
        var discord_status = response_json.discord.status;
        var guilded_status = response_json.guilded.status;
        var discord_beta_status = response_json["discord-beta"].status;
        var guilded_beta_status = response_json["guilded-beta"].status;
        var revolt_beta_status = response_json["revolt-beta"].status;
        var nerimity_beta_status = response_json["nerimity-beta"].status;

        if (api_status == "up") {
          document.getElementById("api-status").innerHTML = "Online";
          document.querySelector("#item-icon-api").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-api").style = filter_green;
        } else if (api_status == "degr") {
          document.getElementById("api-status").innerHTML = "Degraded";
          document.querySelector("#item-icon-api").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-api").style = filter_yellow;
        } else if (api_status == "mtn") {
          document.getElementById("api-status").innerHTML = "Maintenance";
          document.querySelector("#item-icon-api").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-api").style = filter_yellow;
        } else {
          document.getElementById("api-status").innerHTML = "Offline";
          document.querySelector("#item-icon-api").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-api").style = filter_red;
        }

        if (database_status == "up") {
          document.getElementById("database-status").innerHTML = "Online";
          document.querySelector("#item-icon-database").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-database").style = filter_green;
        } else if (database_status == "degr") {
          document.getElementById("database-status").innerHTML = "Degraded";
          document.querySelector("#item-icon-database").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-database").style = filter_yellow;
        } else if (database_status == "mtn") {
          document.getElementById("database-status").innerHTML = "Maintenance";
          document.querySelector("#item-icon-database").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-database").style = filter_yellow;
        } else {
          document.getElementById("database-status").innerHTML = "Offline";
          document.querySelector("#item-icon-database").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-database").style = filter_red;
        }

        if (discord_status == "up") {
          document.getElementById("discord-status").innerHTML = "Online";
          document.querySelector("#item-icon-discord").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-discord").style = filter_green;
        } else if (discord_status == "degr") {
          document.getElementById("discord-status").innerHTML = "Degraded";
          document.querySelector("#item-icon-discord").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-discord").style = filter_yellow;
        } else if (discord_status == "mtn") {
          document.getElementById("discord-status").innerHTML = "Maintenance";
          document.querySelector("#item-icon-discord").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-discord").style = filter_yellow;
        } else {
          document.getElementById("discord-status").innerHTML = "Offline";
          document.querySelector("#item-icon-discord").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-discord").style = filter_red;
        }

        if (guilded_status == "up") {
          document.getElementById("guilded-status").innerHTML = "Online";
          document.querySelector("#item-icon-guilded").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-guilded").style = filter_green;
        } else if (guilded_status == "degr") {
          document.getElementById("guilded-status").innerHTML = "Degraded";
          document.querySelector("#item-icon-guilded").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-guilded").style = filter_yellow;
        } else if (guilded_status == "mtn") {
          document.getElementById("guilded-status").innerHTML = "Maintenance";
          document.querySelector("#item-icon-guilded").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-guilded").style = filter_yellow;
        } else {
          document.getElementById("guilded-status").innerHTML = "Offline";
          document.querySelector("#item-icon-guilded").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-guilded").style = filter_red;
        }

        if (discord_beta_status == "up") {
          document.getElementById("discord-beta-status").innerHTML = "Online";
          document.querySelector("#item-icon-discord-beta").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-discord-beta").style =
            filter_green;
        } else if (discord_beta_status == "degr") {
          document.getElementById("discord-beta-status").innerHTML = "Degraded";
          document.querySelector("#item-icon-discord-beta").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-discord-beta").style =
            filter_yellow;
        } else if (discord_beta_status == "mtn") {
          document.getElementById("discord-beta-status").innerHTML =
            "Maintenance";
          document.querySelector("#item-icon-discord-beta").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-discord-beta").style =
            filter_yellow;
        } else {
          document.getElementById("discord-beta-status").innerHTML = "Offline";
          document.querySelector("#item-icon-discord-beta").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-discord-beta").style = filter_red;
        }

        if (guilded_beta_status == "up") {
          document.getElementById("guilded-beta-status").innerHTML = "Online";
          document.querySelector("#item-icon-guilded-beta").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-guilded-beta").style =
            filter_green;
        } else if (guilded_beta_status == "degr") {
          document.getElementById("guilded-beta-status").innerHTML = "Degraded";
          document.querySelector("#item-icon-guilded-beta").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-guilded-beta").style =
            filter_yellow;
        } else if (guilded_beta_status == "mtn") {
          document.getElementById("guilded-beta-status").innerHTML =
            "Maintenance";
          document.querySelector("#item-icon-guilded-beta").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-guilded-beta").style =
            filter_yellow;
        } else {
          document.getElementById("guilded-beta-status").innerHTML = "Offline";
          document.querySelector("#item-icon-guilded-beta").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-guilded-beta").style = filter_red;
        }

        if (revolt_beta_status == "up") {
          document.getElementById("revolt-beta-status").innerHTML = "Online";
          document.querySelector("#item-icon-revolt-beta").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-revolt-beta").style = filter_green;
        } else if (revolt_beta_status == "degr") {
          document.getElementById("revolt-beta-status").innerHTML = "Degraded";
          document.querySelector("#item-icon-revolt-beta").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-revolt-beta").style =
            filter_yellow;
        } else if (revolt_beta_status == "mtn") {
          document.getElementById("revolt-beta-status").innerHTML =
            "Maintenance";
          document.querySelector("#item-icon-revolt-beta").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-revolt-beta").style =
            filter_yellow;
        } else {
          document.getElementById("revolt-beta-status").innerHTML = "Offline";
          document.querySelector("#item-icon-revolt-beta").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-revolt-beta").style = filter_red;
        }

        if (nerimity_beta_status == "up") {
          document.getElementById("nerimity-beta-status").innerHTML = "Online";
          document.querySelector("#item-icon-nerimity-beta").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-nerimity-beta").style =
            filter_green;
        } else if (nerimity_beta_status == "degr") {
          document.getElementById("nerimity-beta-status").innerHTML =
            "Degraded";
          document.querySelector("#item-icon-nerimity-beta").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-nerimity-beta").style =
            filter_yellow;
        } else if (nerimity_beta_status == "mtn") {
          document.getElementById("nerimity-beta-status").innerHTML =
            "Maintenance";
          document.querySelector("#item-icon-nerimity-beta").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-nerimity-beta").style =
            filter_yellow;
        } else {
          document.getElementById("nerimity-beta-status").innerHTML = "Offline";
          document.querySelector("#item-icon-nerimity-beta").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-nerimity-beta").style = filter_red;
        }
      } else {
        document.getElementById("api-status").innerHTML = "Offline";
        document.querySelector("#item-icon-api").src =
          "./assets/status-failed.svg";
        document.querySelector("#item-icon-api").style = filter_red;

        document.getElementById("discord-status").innerHTML = "Unknown";
        document.querySelector("#item-icon-discord").src =
          "./assets/status-healthline.svg";
        document.querySelector("#item-icon-discord").style = filter_red;

        document.getElementById("guilded-status").innerHTML = "Unknown";
        document.querySelector("#item-icon-guilded").src =
          "./assets/status-healthline.svg";
        document.querySelector("#item-icon-guilded").style = filter_red;

        document.getElementById("discord-beta-status").innerHTML = "Unknown";
        document.querySelector("#item-icon-discord-beta").src =
          "./assets/status-healthline.svg";
        document.querySelector("#item-icon-discord-beta").style = filter_red;

        document.getElementById("guilded-beta-status").innerHTML = "Unknown";
        document.querySelector("#item-icon-guilded-beta").src =
          "./assets/status-healthline.svg";
        document.querySelector("#item-icon-guilded-beta").style = filter_red;

        document.getElementById("revolt-beta-status").innerHTML = "Unknown";
        document.querySelector("#item-icon-revolt-beta").src =
          "./assets/status-healthline.svg";
        document.querySelector("#item-icon-revolt-beta").style = filter_red;

        document.getElementById("nerimity-beta-status").innerHTML = "Unknown";
        document.querySelector("#item-icon-nerimity-beta").src =
          "./assets/status-healthline.svg";
        document.querySelector("#item-icon-nerimity-beta").style = filter_red;
      }

      var status_array = [];
      status_array.push(response_json.discord.status);
      status_array.push(response_json.guilded.status);
      status_array.push(response_json["discord-beta"].status);
      status_array.push(response_json["guilded-beta"].status);
      status_array.push(response_json["revolt-beta"].status);
      status_array.push(response_json["nerimity-beta"].status);

      if (status_array.includes("down")) {
        if (status_array.filter((status) => status === "down").length >= 3) {
          document.getElementById("operational").innerHTML = "Major Outage";
          document.getElementById("op-icon").style = filter_red;
          document.getElementById("op-icon").src = "./assets/status-failed.svg";
        } else {
          document.getElementById("operational").innerHTML = "Partial Outage";
          document.getElementById("op-icon").style = filter_yellow;
          document.getElementById("op-icon").src = "./assets/status-alert.svg";
        }
      } else if (status_array.includes("degr" || "")) {
        document.getElementById("operational").innerHTML =
          "Degraded Performance";
        document.getElementById("op-icon").style = filter_yellow;
        document.getElementById("op-icon").src = "./assets/status-alert.svg";
      } else if (status_array.includes("mtn")) {
        document.getElementById("operational").innerHTML =
          "Maintenance in progress";
        document.getElementById("op-icon").style = filter_yellow;
        document.getElementById("op-icon").src =
          "./assets/status-update-maintenance.svg";
      } else {
        document.getElementById("operational").innerHTML =
          "All Systems operational";
        document.getElementById("op-icon").style = filter_green;
        document.getElementById("op-icon").src = "./assets/status-up.svg";
      }

      var api_incident = response_json.api.incident;
      var database_incident = response_json.database.incident;
      var discord_incident = response_json.discord.incident;
      var guilded_incident = response_json.guilded.incident;
      var discord_beta_incident = response_json["discord-beta"].incident;
      var guilded_beta_incident = response_json["guilded-beta"].incident;
      var revolt_beta_incident = response_json["revolt-beta"].incident;
      var nerimity_beta_incident = response_json["nerimity-beta"].incident;

      if (api_incident != null) {
        document.getElementById("status-bar-api").innerHTML = api_incident;
      }

      if (database_incident != null) {
        document.getElementById("status-bar-database").innerHTML =
          database_incident;
      }

      if (discord_incident != null) {
        document.getElementById("status-bar-discord").innerHTML =
          discord_incident;
      }

      if (guilded_incident != null) {
        document.getElementById("status-bar-guilded").innerHTML =
          guilded_incident;
      }

      if (discord_beta_incident != null) {
        document.getElementById("status-bar-discord-beta").innerHTML =
          discord_beta_incident;
      }

      if (guilded_beta_incident != null) {
        document.getElementById("status-bar-guilded-beta").innerHTML =
          guilded_beta_incident;
      }

      if (revolt_beta_incident != null) {
        document.getElementById("status-bar-revolt-beta").innerHTML =
          revolt_beta_incident;
      }

      if (nerimity_beta_incident != null) {
        document.getElementById("status-bar-nerimity-beta").innerHTML =
          nerimity_beta_incident;
      }
    });
  } catch (error) {
    const filter_red =
      "filter: invert(20%) sepia(100%) saturate(7499%) hue-rotate(354deg) brightness(102%) contrast(102%);";
    const filter_green =
      "filter: invert(57%) sepia(43%) saturate(1352%) hue-rotate(80deg) brightness(119%) contrast(119%);";
    document.getElementById("api-status").innerHTML = "Offline";
    document.querySelector("#item-icon-api").src = "./assets/status-failed.svg";
    document.querySelector("#item-icon-api").style = filter_red;

    document.getElementById("database-status").innerHTML = "Fallback call";

    await fetch("https://surrealdb.deutscher775.de", {
      signal: AbortSignal.timeout(10000),
    })
      .then(async (response) => {
        console.log(response.status);
        if (response.ok) {
          document.getElementById("database-status").innerHTML = "Online";
          document.querySelector("#item-icon-database").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-database").style = filter_green;
        } else {
          document.getElementById("database-status").innerHTML = "Offline";
          document.querySelector("#item-icon-database").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-database").style = filter_red;
        }
      })
      .catch((error) => {
        console.log(error);
        document.getElementById("database-status").innerHTML = "Offline";
        document.querySelector("#item-icon-database").src =
          "./assets/status-failed.svg";
        document.querySelector("#item-icon-database").style = filter_red;
      });

    document.getElementById("discord-status").innerHTML = "Unknown";
    document.querySelector("#item-icon-discord").src =
      "./assets/status-healthline.svg";

    document.getElementById("guilded-status").innerHTML = "Unknown";
    document.querySelector("#item-icon-guilded").src =
      "./assets/status-healthline.svg";

    document.getElementById("discord-beta-status").innerHTML = "Unknown";
    document.querySelector("#item-icon-discord-beta").src =
      "./assets/status-healthline.svg";

    document.getElementById("guilded-beta-status").innerHTML = "Unknown";
    document.querySelector("#item-icon-guilded-beta").src =
      "./assets/status-healthline.svg";

    document.getElementById("revolt-beta-status").innerHTML = "Unknown";
    document.querySelector("#item-icon-revolt-beta").src =
      "./assets/status-healthline.svg";

    document.getElementById("nerimity-beta-status").innerHTML = "Unknown";
    document.querySelector("#item-icon-nerimity-beta").src =
      "./assets/status-healthline.svg";

    document.getElementById("operational").innerHTML = "Major Outage";	
    document.getElementById("op-icon").src = "./assets/status-failed.svg";
    document.getElementById("op-icon").style = filter_red;
  }

  var interval_secs = 30;
  setInterval(await checkStatus, interval_secs * 1000);
};

async function checkStatus() {
  console.log("Checking status...");
  
  try {
    await fetch("https://kvm.deutscher775.de", {
      signal: AbortSignal.timeout(5000),
    }).then(async (response) => {
      if (response) {
        document.getElementById("server1-status").innerHTML = "Online";
        document.querySelector("#item-icon-server1").src =
          "./assets/status-up.svg";
        document.querySelector("#item-icon-server1").style =
          "filter: invert(57%) sepia(43%) saturate(1352%) hue-rotate(80deg) brightness(119%) contrast(119%);";
      } else {
        console.error("API is offline");
        document.getElementById("api-status").innerHTML = "Offline";
        document.querySelector("#item-icon-server1").src =
          "./assets/status-failed.svg";
        document.querySelector("#item-icon-server1").style =
          "filter: invert(20%) sepia(100%) saturate(7499%) hue-rotate(354deg) brightness(102%) contrast(102%);";
      }
    });
  } catch (error) {
    document.getElementById("server1-status").innerHTML = "Offline";
  }

  try {
    await fetch("https://kvm2.deutscher775.de", { signal: AbortSignal.timeout(5000) }).then(async (response) => {
      if (response) {
        document.getElementById("server2-status").innerHTML = "Online";
        document.querySelector("#item-icon-server2").src = "./assets/status-up.svg";
        document.querySelector("#item-icon-server2").style = "filter: invert(57%) sepia(43%) saturate(1352%) hue-rotate(80deg) brightness(119%) contrast(119%);";
      } else {
        document.getElementById("api-status").innerHTML = "Offline";
        document.querySelector("#item-icon-server2").src = "./assets/status-failed.svg";
        document.querySelector("#item-icon-server2").style = "filter: invert(20%) sepia(100%) saturate(7499%) hue-rotate(354deg) brightness(102%) contrast(102%);";
      }
    });
  }
  catch (error) {
    document.getElementById("server2-status").innerHTML = "Offline";
    document.querySelector("#item-icon-server2").src = "./assets/status-failed.svg";
    document.querySelector("#item-icon-server2").style = "filter: invert(20%) sepia(100%) saturate(7499%) hue-rotate(354deg) brightness(102%) contrast(102%);";
  }


  try {
    await fetch("https://status.astroid.cc/monitor", {
      signal: AbortSignal.timeout(5000),
    }).then(async (response) => {
      const filter_green =
        "filter: invert(57%) sepia(43%) saturate(1352%) hue-rotate(80deg) brightness(119%) contrast(119%);";
      const filter_red =
        "filter: invert(20%) sepia(100%) saturate(7499%) hue-rotate(354deg) brightness(102%) contrast(102%);";
      const filter_yellow =
        "filter: invert(100%) sepia(130%) saturate(8000%) hue-rotate(364deg) brightness(102%) contrast(122%);";

      response_json = await response.json();
      if (response.ok) {
        var api_status = response_json.api.status;
        var database_status = response_json.database.status;
        var discord_status = response_json.discord.status;
        var guilded_status = response_json.guilded.status;
        var discord_beta_status = response_json["discord-beta"].status;
        var guilded_beta_status = response_json["guilded-beta"].status;
        var revolt_beta_status = response_json["revolt-beta"].status;
        var nerimity_beta_status = response_json["nerimity-beta"].status;

        if (api_status == "up") {
          document.getElementById("api-status").innerHTML = "Online";
          document.querySelector("#item-icon-api").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-api").style = filter_green;
        } else if (api_status == "degr") {
          document.getElementById("api-status").innerHTML = "Degraded";
          document.querySelector("#item-icon-api").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-api").style = filter_yellow;
        } else if (api_status == "mtn") {
          document.getElementById("api-status").innerHTML = "Maintenance";
          document.querySelector("#item-icon-api").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-api").style = filter_yellow;
        } else {
          document.getElementById("api-status").innerHTML = "Offline";
          document.querySelector("#item-icon-api").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-api").style = filter_red;
        }

        if (database_status == "up") {
          document.getElementById("database-status").innerHTML = "Online";
          document.querySelector("#item-icon-database").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-database").style = filter_green;
        } else if (database_status == "degr") {
          document.getElementById("database-status").innerHTML = "Degraded";
          document.querySelector("#item-icon-database").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-database").style = filter_yellow;
        } else if (database_status == "mtn") {
          document.getElementById("database-status").innerHTML = "Maintenance";
          document.querySelector("#item-icon-database").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-database").style = filter_yellow;
        } else {
          document.getElementById("database-status").innerHTML = "Offline";
          document.querySelector("#item-icon-database").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-database").style = filter_red;
        }

        if (discord_status == "up") {
          document.getElementById("discord-status").innerHTML = "Online";
          document.querySelector("#item-icon-discord").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-discord").style = filter_green;
        } else if (discord_status == "degr") {
          document.getElementById("discord-status").innerHTML = "Degraded";
          document.querySelector("#item-icon-discord").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-discord").style = filter_yellow;
        } else if (discord_status == "mtn") {
          document.getElementById("discord-status").innerHTML = "Maintenance";
          document.querySelector("#item-icon-discord").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-discord").style = filter_yellow;
        } else {
          document.getElementById("discord-status").innerHTML = "Offline";
          document.querySelector("#item-icon-discord").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-discord").style = filter_red;
        }

        if (guilded_status == "up") {
          document.getElementById("guilded-status").innerHTML = "Online";
          document.querySelector("#item-icon-guilded").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-guilded").style = filter_green;
        } else if (guilded_status == "degr") {
          document.getElementById("guilded-status").innerHTML = "Degraded";
          document.querySelector("#item-icon-guilded").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-guilded").style = filter_yellow;
        } else if (guilded_status == "mtn") {
          document.getElementById("guilded-status").innerHTML = "Maintenance";
          document.querySelector("#item-icon-guilded").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-guilded").style = filter_yellow;
        } else {
          document.getElementById("guilded-status").innerHTML = "Offline";
          document.querySelector("#item-icon-guilded").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-guilded").style = filter_red;
        }

        if (discord_beta_status == "up") {
          document.getElementById("discord-beta-status").innerHTML = "Online";
          document.querySelector("#item-icon-discord-beta").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-discord-beta").style =
            filter_green;
        } else if (discord_beta_status == "degr") {
          document.getElementById("discord-beta-status").innerHTML = "Degraded";
          document.querySelector("#item-icon-discord-beta").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-discord-beta").style =
            filter_yellow;
        } else if (discord_beta_status == "mtn") {
          document.getElementById("discord-beta-status").innerHTML =
            "Maintenance";
          document.querySelector("#item-icon-discord-beta").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-discord-beta").style =
            filter_yellow;
        } else {
          document.getElementById("discord-beta-status").innerHTML = "Offline";
          document.querySelector("#item-icon-discord-beta").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-discord-beta").style = filter_red;
        }

        if (guilded_beta_status == "up") {
          document.getElementById("guilded-beta-status").innerHTML = "Online";
          document.querySelector("#item-icon-guilded-beta").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-guilded-beta").style =
            filter_green;
        } else if (guilded_beta_status == "degr") {
          document.getElementById("guilded-beta-status").innerHTML = "Degraded";
          document.querySelector("#item-icon-guilded-beta").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-guilded-beta").style =
            filter_yellow;
        } else if (guilded_beta_status == "mtn") {
          document.getElementById("guilded-beta-status").innerHTML =
            "Maintenance";
          document.querySelector("#item-icon-guilded-beta").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-guilded-beta").style =
            filter_yellow;
        } else {
          document.getElementById("guilded-beta-status").innerHTML = "Offline";
          document.querySelector("#item-icon-guilded-beta").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-guilded-beta").style = filter_red;
        }

        if (revolt_beta_status == "up") {
          document.getElementById("revolt-beta-status").innerHTML = "Online";
          document.querySelector("#item-icon-revolt-beta").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-revolt-beta").style = filter_green;
        } else if (revolt_beta_status == "degr") {
          document.getElementById("revolt-beta-status").innerHTML = "Degraded";
          document.querySelector("#item-icon-revolt-beta").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-revolt-beta").style =
            filter_yellow;
        } else if (revolt_beta_status == "mtn") {
          document.getElementById("revolt-beta-status").innerHTML =
            "Maintenance";
          document.querySelector("#item-icon-revolt-beta").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-revolt-beta").style =
            filter_yellow;
        } else {
          document.getElementById("revolt-beta-status").innerHTML = "Offline";
          document.querySelector("#item-icon-revolt-beta").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-revolt-beta").style = filter_red;
        }

        if (nerimity_beta_status == "up") {
          document.getElementById("nerimity-beta-status").innerHTML = "Online";
          document.querySelector("#item-icon-nerimity-beta").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-nerimity-beta").style =
            filter_green;
        } else if (nerimity_beta_status == "degr") {
          document.getElementById("nerimity-beta-status").innerHTML =
            "Degraded";
          document.querySelector("#item-icon-nerimity-beta").src =
            "./assets/status-alert.svg";
          document.querySelector("#item-icon-nerimity-beta").style =
            filter_yellow;
        } else if (nerimity_beta_status == "mtn") {
          document.getElementById("nerimity-beta-status").innerHTML =
            "Maintenance";
          document.querySelector("#item-icon-nerimity-beta").src =
            "./assets/status-update-maintenance.svg";
          document.querySelector("#item-icon-nerimity-beta").style =
            filter_yellow;
        } else {
          document.getElementById("nerimity-beta-status").innerHTML = "Offline";
          document.querySelector("#item-icon-nerimity-beta").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-nerimity-beta").style = filter_red;
        }
      } else {
        document.getElementById("api-status").innerHTML = "Offline";
        document.querySelector("#item-icon-api").src =
          "./assets/status-failed.svg";
        document.querySelector("#item-icon-api").style = filter_red;

        document.getElementById("discord-status").innerHTML = "Unknown";
        document.querySelector("#item-icon-discord").src =
          "./assets/status-healthline.svg";
        document.querySelector("#item-icon-discord").style = filter_red;

        document.getElementById("guilded-status").innerHTML = "Unknown";
        document.querySelector("#item-icon-guilded").src =
          "./assets/status-healthline.svg";
        document.querySelector("#item-icon-guilded").style = filter_red;

        document.getElementById("discord-beta-status").innerHTML = "Unknown";
        document.querySelector("#item-icon-discord-beta").src =
          "./assets/status-healthline.svg";
        document.querySelector("#item-icon-discord-beta").style = filter_red;

        document.getElementById("guilded-beta-status").innerHTML = "Unknown";
        document.querySelector("#item-icon-guilded-beta").src =
          "./assets/status-healthline.svg";
        document.querySelector("#item-icon-guilded-beta").style = filter_red;

        document.getElementById("revolt-beta-status").innerHTML = "Unknown";
        document.querySelector("#item-icon-revolt-beta").src =
          "./assets/status-healthline.svg";
        document.querySelector("#item-icon-revolt-beta").style = filter_red;

        document.getElementById("nerimity-beta-status").innerHTML = "Unknown";
        document.querySelector("#item-icon-nerimity-beta").src =
          "./assets/status-healthline.svg";
        document.querySelector("#item-icon-nerimity-beta").style = filter_red;
      }

      var status_array = [];
      status_array.push(response_json.discord.status);
      status_array.push(response_json.guilded.status);
      status_array.push(response_json["discord-beta"].status);
      status_array.push(response_json["guilded-beta"].status);
      status_array.push(response_json["revolt-beta"].status);
      status_array.push(response_json["nerimity-beta"].status);

      if (status_array.includes("down")) {
        if (status_array.filter((status) => status === "down").length >= 3) {
          document.getElementById("operational").innerHTML = "Major Outage";
          document.getElementById("op-icon").style = filter_red;
          document.getElementById("op-icon").src = "./assets/status-failed.svg";
        } else {
          document.getElementById("operational").innerHTML = "Partial Outage";
          document.getElementById("op-icon").style = filter_yellow;
          document.getElementById("op-icon").src = "./assets/status-alert.svg";
        }
      } else if (status_array.includes("degr" || "")) {
        document.getElementById("operational").innerHTML =
          "Degraded Performance";
        document.getElementById("op-icon").style = filter_yellow;
        document.getElementById("op-icon").src = "./assets/status-alert.svg";
      } else if (status_array.includes("mtn")) {
        document.getElementById("operational").innerHTML =
          "Maintenance in progress";
        document.getElementById("op-icon").style = filter_yellow;
        document.getElementById("op-icon").src =
          "./assets/status-update-maintenance.svg";
      } else {
        document.getElementById("operational").innerHTML =
          "All Systems operational";
        document.getElementById("op-icon").style = filter_green;
        document.getElementById("op-icon").src = "./assets/status-up.svg";
      }

      var api_incident = response_json.api.incident;
      var database_incident = response_json.database.incident;
      var discord_incident = response_json.discord.incident;
      var guilded_incident = response_json.guilded.incident;
      var discord_beta_incident = response_json["discord-beta"].incident;
      var guilded_beta_incident = response_json["guilded-beta"].incident;
      var revolt_beta_incident = response_json["revolt-beta"].incident;
      var nerimity_beta_incident = response_json["nerimity-beta"].incident;

      if (api_incident != null) {
        document.getElementById("status-bar-api").innerHTML = api_incident;
      }

      if (database_incident != null) {
        document.getElementById("status-bar-database").innerHTML =
          database_incident;
      }

      if (discord_incident != null) {
        document.getElementById("status-bar-discord").innerHTML =
          discord_incident;
      }

      if (guilded_incident != null) {
        document.getElementById("status-bar-guilded").innerHTML =
          guilded_incident;
      }

      if (discord_beta_incident != null) {
        document.getElementById("status-bar-discord-beta").innerHTML =
          discord_beta_incident;
      }

      if (guilded_beta_incident != null) {
        document.getElementById("status-bar-guilded-beta").innerHTML =
          guilded_beta_incident;
      }

      if (revolt_beta_incident != null) {
        document.getElementById("status-bar-revolt-beta").innerHTML =
          revolt_beta_incident;
      }

      if (nerimity_beta_incident != null) {
        document.getElementById("status-bar-nerimity-beta").innerHTML =
          nerimity_beta_incident;
      }
    });
  } catch (error) {
    const filter_red =
      "filter: invert(20%) sepia(100%) saturate(7499%) hue-rotate(354deg) brightness(102%) contrast(102%);";
    const filter_green =
      "filter: invert(57%) sepia(43%) saturate(1352%) hue-rotate(80deg) brightness(119%) contrast(119%);";
    document.getElementById("api-status").innerHTML = "Offline";
    document.querySelector("#item-icon-api").src = "./assets/status-failed.svg";
    document.querySelector("#item-icon-api").style = filter_red;

    document.getElementById("database-status").innerHTML = "Fallback call";

    await fetch("https://surrealdb.deutscher775.de", {
      signal: AbortSignal.timeout(10000),
    })
      .then(async (response) => {
        console.log(response.status);
        if (response.ok) {
          document.getElementById("database-status").innerHTML = "Online";
          document.querySelector("#item-icon-database").src =
            "./assets/status-up.svg";
          document.querySelector("#item-icon-database").style = filter_green;
        } else {
          document.getElementById("database-status").innerHTML = "Offline";
          document.querySelector("#item-icon-database").src =
            "./assets/status-failed.svg";
          document.querySelector("#item-icon-database").style = filter_red;
        }
      })
      .catch((error) => {
        console.log(error);
        document.getElementById("database-status").innerHTML = "Offline";
        document.querySelector("#item-icon-database").src =
          "./assets/status-failed.svg";
        document.querySelector("#item-icon-database").style = filter_red;
      });

    document.getElementById("discord-status").innerHTML = "Unknown";
    document.querySelector("#item-icon-discord").src =
      "./assets/status-healthline.svg";

    document.getElementById("guilded-status").innerHTML = "Unknown";
    document.querySelector("#item-icon-guilded").src =
      "./assets/status-healthline.svg";

    document.getElementById("discord-beta-status").innerHTML = "Unknown";
    document.querySelector("#item-icon-discord-beta").src =
      "./assets/status-healthline.svg";

    document.getElementById("guilded-beta-status").innerHTML = "Unknown";
    document.querySelector("#item-icon-guilded-beta").src =
      "./assets/status-healthline.svg";

    document.getElementById("revolt-beta-status").innerHTML = "Unknown";
    document.querySelector("#item-icon-revolt-beta").src =
      "./assets/status-healthline.svg";

    document.getElementById("nerimity-beta-status").innerHTML = "Unknown";
    document.querySelector("#item-icon-nerimity-beta").src =
      "./assets/status-healthline.svg";

    document.getElementById("operational").innerHTML = "Major Outage";	
    document.getElementById("op-icon").src = "./assets/status-failed.svg";
    document.getElementById("op-icon").style = filter_red;
  }


}
