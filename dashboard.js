document.addEventListener('DOMContentLoaded', function () {
    const jobs = [
        { title: 'Customer Experience Designer', department: 'Design', location: 'Copenhagen, DK', applicants: 8 },
        { title: 'Software Developer', department: 'Development', location: 'Copenhagen, DK', applicants: 3 },
        { title: 'Customer Experience Designer', department: 'Design', location: 'Copenhagen, DK', applicants: 8 },
        { title: 'Software Developer', department: 'Development', location: 'Copenhagen, DK', applicants: 3 }
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
