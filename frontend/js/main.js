document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("submit")
    .addEventListener("click", async function (event) {
      event.preventDefault();
      const resumeValue = document.getElementById("resume").value;
      const jobDescriptionValue = document.getElementById("job-description").value;

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resume: resumeValue, jobDescription: jobDescriptionValue }),
      });
      
      const json = await response.json();
      document.getElementById("output-text").textContent = json.data;
    });
});
