document.addEventListener('DOMContentLoaded', function () {
    const jobs = [
        { title: 'Hack India', department: 'Web 3', location: 'Einstein Block', applicants: 500 },
        { title: 'Open Source', department: 'OS', location: 'Tesla Block', applicants: 100},
        { title: 'Ai Unveiled', department: 'Ai', location: 'Exploretrium', applicants: 400},
        { title: 'Game Development', department: 'Game Dev', location: 'Turing Block', applicants:300}
    ];

    const jobList = document.getElementById('job-list');
    
    jobs.forEach(job => {
        const jobItem = document.createElement('li');
        jobItem.innerHTML = `
            <span>${job.title} (${job.department})</span>
            <span>${job.location}</span>
            <span>${job.applicants} applicants</span>
        `;
        jobList.appendChild(jobItem);
   });
});