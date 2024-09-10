window.onload = async function() {
    await getIncidents();



}


async function getIncidents() {
    await fetch("https://status.astroid.cc/monitor/incidents")
    .then(response => response.json())
    .then(data => {
        var incidents = [];
        data.forEach(incident => {
            incidents.push(incident);
        });
        localStorage.setItem("incidents", JSON.stringify(incidents));

        var incidents = JSON.parse(localStorage.getItem("incidents"));
        var incidents = incidents.reverse();
        var incidentsContainer = document.getElementById("incidents-div");
        incidents.forEach(incident => {
            var incidentDiv = document.createElement("div");
            incidentDiv.id = `incident-${incident.id.replace("incidents:", "")}`;
            incidentDiv.className = "incident";
            var incidentTitle = document.createElement("h2");
            incidentTitle.className = "incident-title";
            incidentTitle.id = `incident-${incident.id.replace("incidents:", "")}-title`;
            incidentTitle.innerHTML = incident.title;
            var incidentDescription = document.createElement("div");
            incidentDescription.className = "incident-description";
            incidentDescription.id = `incident-${incident.id.replace("incidents:", "")}-description`;
            incidentDescription.innerHTML = incident.description;
            var incidentInfoDiv = document.createElement("div");
            incidentInfoDiv.className = "incident-info";
            incidentInfoDiv.id = `incident-${incident.id.replace("incidents:", "")}-info`;
            var incidentAffectedServices = document.createElement("div")
            incidentAffectedServices.className = "affected-services";
            incidentAffectedServices.id = `incident-${incident.id.replace("incidents:", "")}-services`;
            incidentAffectedServices.innerHTML = `<b>Affected Services:</b>`;
            var servicesLi = document.createElement("div");
            servicesLi.className = "affected-services-list";
            servicesLi.id = `incident-${incident.id.replace("incidents:", "")}-services-list`
            incident.services.forEach(service => {
                var serviceLi = document.createElement("p");
                serviceLi.className = "affected-service";
                serviceLi.innerHTML = service.replace("-", " ");
                serviceLi.innerHTML = serviceLi.innerHTML.charAt(0).toUpperCase() + serviceLi.innerHTML.slice(1);
                servicesLi.appendChild(serviceLi);
            });
            incidentAffectedServices.appendChild(servicesLi);
            var incidentStart = document.createElement("div");
            incidentStart.className = "incident-start";
            incidentStart.id = `incident-${incident.id.replace("incidents:", "")}-start`;
            incidentStart.innerHTML = `<b>Started at:</b`;
            var incidentStartP = document.createElement("p");
            incidentStartP.innerHTML = incident.startedAt.replace(" ", "<br>") + " UTC";
            incidentStartP.className = "incident-start-time";
            incidentStartP.id = `incident-${incident.id.replace("incidents:", "")}-start`;
            incidentStart.appendChild(incidentStartP);

            var incidentEnd = document.createElement("div");
            incidentEnd.className = "incident-end";
            incidentEnd.id = `incident-${incident.id.replace("incidents:", "")}-end`;
            incidentEnd.innerHTML = `<b>Ended at:</b`;
            var incidentEndP = document.createElement("p");
            incidentEndP.innerHTML = incident.endedAt?.replace(" ", "<br>") + " UTC";
            incidentEndP.className = "incident-end-time";
            incidentEndP.id = `incident-${incident.id.replace("incidents:", "")}-end`;
            incidentEnd.appendChild(incidentEndP);

            var incidentStatus = document.createElement("div");
            incidentStatus.className = "incident-status-text";
            incidentStatus.id = `incident-${incident.id.replace("incidents:", "")}-status`;
            incidentStatus.innerHTML = `<b>Status:</b`;
            var incidentStatusP = document.createElement("p");
            if (incident.status == "resolved") {
                incidentStatusP.innerHTML = "Resolved";
                incidentDiv.classList.add("resolved");
            } else if (incident.status == "monitoring") {
                incidentStatusP.innerHTML = "Monitoring";
                incidentDiv.classList.add("monitoring");
            } else if (incident.status == "investigating") {
                incidentStatusP.innerHTML = "Investigating";
                incidentDiv.classList.add("investigating");
            } else {
                incidentStatusP.innerHTML = "Identified";
                incidentDiv.classList.add("identified");
            }
            incidentStatusP.className = "incidents-status-text";
            incidentStatus.appendChild(incidentStatusP)




            incidentStart.appendChild(incidentStartP);
            incidentDiv.appendChild(incidentTitle);
            incidentDiv.appendChild(incidentDescription);
            incidentDiv.appendChild(incidentInfoDiv)
            incidentInfoDiv.appendChild(incidentAffectedServices);
            if (incident.startedAt) {
                incidentInfoDiv.appendChild(incidentStart)
            }
            if (incident.endedAt) {
            incidentInfoDiv.appendChild(incidentEnd)
            }
            incidentInfoDiv.appendChild(incidentStatus)

            incidentsContainer.appendChild(incidentDiv);
        });
    })

}