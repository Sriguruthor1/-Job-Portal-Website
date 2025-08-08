// --- Data for categories and jobs ---
const categories = [
    { id: "technology", name: "Technology", icon: "fa-laptop-code", jobs: 124 },
    { id: "finance", name: "Finance", icon: "fa-chart-line", jobs: 86 },
    { id: "healthcare", name: "Healthcare", icon: "fa-heartbeat", jobs: 112 },
    { id: "education", name: "Education", icon: "fa-graduation-cap", jobs: 78 },
    { id: "design", name: "Design", icon: "fa-paint-brush", jobs: 54 },
    { id: "marketing", name: "Marketing", icon: "fa-shopping-cart", jobs: 95 },
];
const jobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechVision Inc.",
    category: "technology",
    location: "bangalore",
    salary: "₹18,00,000 - ₹22,00,000",
    currency: "INR",
    type: "Full-time",
    experience: "senior",
    description: "We're looking for an experienced frontend developer to join our growing team...",
    details: {
      posted: "2 days ago",
      responsibilities: [
        "Develop new user-facing features using React.js",
        "Build reusable components and front-end libraries",
        "Optimize applications for speed and scalability",
        "Collaborate with back-end developers and designers",
        "Ensure feasibility of UI/UX designs",
        "Implement automated testing",
        "Stay up-to-date with frontend technologies"
      ],
      requirements: [
        { title: "Experience", value: "5+ years in frontend development" },
        { title: "Education", value: "Bachelor's in CS or related field" },
        { title: "Tech Stack", value: "React, TypeScript, Redux" },
        { title: "Tools", value: "Git, Webpack, Jest" }
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Remote work flexibility",
        "Learning stipend",
        "Paid time off"
      ]
    }
  },
  {
    id: "2",
    title: "Chartered Accountant",
    company: "FinWise Consulting",
    category: "finance",
    location: "mumbai",
    salary: "₹10,00,000 - ₹15,00,000",
    currency: "INR",
    type: "Full-time",
    experience: "mid",
    description: "Looking for a qualified CA to handle audits, taxation, and financial planning.",
    details: {
      posted: "5 days ago",
      responsibilities: [
        "Manage client audits",
        "Prepare financial statements",
        "Tax compliance and planning",
        "Budgeting and forecasting"
      ],
      requirements: [
        { title: "Experience", value: "3+ years post-qualification" },
        { title: "Education", value: "CA qualified" },
        { title: "Skills", value: "Tally, MS Excel, Tax software" }
      ],
      benefits: [
        "Annual bonus",
        "Health coverage",
        "Paid leaves",
        "Professional training"
      ]
    }
  },
  {
    id: "3",
    title: "Graphic Designer",
    company: "PixelCraft Studios",
    category: "design",
    location: "pune",
    salary: "₹4,00,000 - ₹7,00,000",
    currency: "INR",
    type: "Full-time",
    experience: "mid",
    description: "Creative designer with a strong portfolio in branding and digital design.",
    details: {
      posted: "1 week ago",
      responsibilities: [
        "Design marketing materials",
        "Create visual assets for digital campaigns",
        "Collaborate with marketing and product teams",
        "Maintain brand consistency"
      ],
      requirements: [
        { title: "Experience", value: "2+ years in graphic design" },
        { title: "Tools", value: "Adobe Suite, Figma" },
        { title: "Education", value: "Bachelor's in Design or equivalent" }
      ],
      benefits: [
        "Work from home options",
        "Creative freedom",
        "Project bonuses"
      ]
    }
  },
  {
    id: "4",
    title: "Full Stack Developer",
    company: "CodeNation",
    category: "technology",
    location: "hyderabad",
    salary: "₹12,00,000 - ₹16,00,000",
    currency: "INR",
    type: "Full-time",
    experience: "mid",
    description: "Develop and maintain full stack web applications using Node.js and React.",
    details: {
      posted: "3 days ago",
      responsibilities: [
        "Write clean and efficient backend and frontend code",
        "Work with REST APIs and databases",
        "Participate in code reviews",
        "Work with DevOps tools for deployment"
      ],
      requirements: [
        { title: "Experience", value: "3+ years full stack development" },
        { title: "Tech Stack", value: "Node.js, React, MongoDB" },
        { title: "Tools", value: "Docker, Git, Jenkins" }
      ],
      benefits: [
        "Flexible timings",
        "Health insurance",
        "Annual learning budget"
      ]
    }
  },
  {
    id: "5",
    title: "Registered Nurse",
    company: "MediCare Hospital",
    category: "healthcare",
    location: "chennai",
    salary: "₹3,00,000 - ₹5,00,000",
    currency: "INR",
    type: "Full-time",
    experience: "entry",
    description: "Provide patient care, administer medications, and assist doctors in procedures.",
    details: {
      posted: "4 days ago",
      responsibilities: [
        "Monitor patient health",
        "Administer medication and treatment",
        "Maintain patient records",
        "Collaborate with medical staff"
      ],
      requirements: [
        { title: "Experience", value: "1+ years in hospital nursing" },
        { title: "Education", value: "B.Sc Nursing" },
        { title: "Skills", value: "Patient care, Medical documentation" }
      ],
      benefits: [
        "Night shift allowance",
        "Insurance coverage",
        "Cafeteria meals"
      ]
    }
  },
  {
    id: "6",
    title: "School Teacher - Mathematics",
    company: "Sunshine International School",
    category: "education",
    location: "delhi",
    salary: "₹5,00,000 - ₹8,00,000",
    currency: "INR",
    type: "Full-time",
    experience: "mid",
    description: "We are hiring passionate mathematics teachers for high school classes.",
    details: {
      posted: "6 days ago",
      responsibilities: [
        "Plan and deliver math lessons",
        "Prepare assignments and tests",
        "Track student progress",
        "Engage in parent-teacher meetings"
      ],
      requirements: [
        { title: "Experience", value: "3+ years teaching experience" },
        { title: "Education", value: "B.Ed with Mathematics specialization" }
      ],
      benefits: [
        "Housing allowance",
        "Staff training",
        "Annual trips"
      ]
    }
  },
  {
    id: "7",
    title: "UX Designer",
    company: "DesignDen",
    category: "design",
    location: "bangalore",
    salary: "₹8,00,000 - ₹12,00,000",
    currency: "INR",
    type: "Full-time",
    experience: "mid",
    description: "Design intuitive user experiences and wireframes for mobile and web apps.",
    details: {
      posted: "2 days ago",
      responsibilities: [
        "Conduct user research",
        "Design wireframes and mockups",
        "Collaborate with developers",
        "Improve user journeys"
      ],
      requirements: [
        { title: "Experience", value: "3+ years in UX design" },
        { title: "Tools", value: "Figma, Adobe XD, Sketch" }
      ],
      benefits: [
        "Remote work",
        "Gym membership",
        "Stock options"
      ]
    }
  },
  {
    id: "8",
    title: "Finance Analyst",
    company: "GrowCapital",
    category: "finance",
    location: "gurgaon",
    salary: "₹6,00,000 - ₹10,00,000",
    currency: "INR",
    type: "Full-time",
    experience: "entry",
    description: "Assist in financial modeling, planning, and analysis for investment portfolios.",
    details: {
      posted: "1 week ago",
      responsibilities: [
        "Create financial reports",
        "Analyze investment opportunities",
        "Support budgeting processes",
        "Monitor market trends"
      ],
      requirements: [
        { title: "Experience", value: "1-2 years in finance" },
        { title: "Education", value: "B.Com/MBA in Finance" },
        { title: "Skills", value: "Excel, PowerBI, SQL" }
      ],
      benefits: [
        "Performance incentives",
        "Annual bonus",
        "Mentorship"
      ]
    }
  },
  {
    id: "9",
    title: "Clinical Psychologist",
    company: "MindHeals Clinic",
    category: "healthcare",
    location: "kochi",
    salary: "₹5,00,000 - ₹9,00,000",
    currency: "INR",
    type: "Full-time",
    experience: "mid",
    description: "Provide mental health counseling and therapy to patients across age groups.",
    details: {
      posted: "5 days ago",
      responsibilities: [
        "Conduct psychological assessments",
        "Offer individual and group therapy",
        "Maintain patient records",
        "Collaborate with psychiatrists"
      ],
      requirements: [
        { title: "Experience", value: "3+ years clinical experience" },
        { title: "Education", value: "Master's in Psychology/Clinical Psychology" }
      ],
      benefits: [
        "Mental health training",
        "Flexible work hours",
        "In-house counseling support"
      ]
    }
  },
  {
    id: "10",
    title: "Assistant Professor - Computer Science",
    company: "IIT Madras",
    category: "education",
    location: "chennai",
    salary: "₹12,00,000 - ₹18,00,000",
    currency: "INR",
    type: "Full-time",
    experience: "senior",
    description: "Join as a faculty in the Computer Science department and contribute to research and teaching.",
    details: {
      posted: "3 days ago",
      responsibilities: [
        "Conduct lectures and tutorials",
        "Guide student research",
        "Publish research papers",
        "Attend academic events"
      ],
      requirements: [
        { title: "Experience", value: "5+ years teaching/research" },
        { title: "Education", value: "Ph.D. in Computer Science" }
      ],
      benefits: [
        "On-campus housing",
        "Research grants",
        "Sabbatical options"
      ]
    }
  }
];

const locations = [
    {id:"new-york", name:"New York"},
    {id:"san-francisco", name:"San Francisco"},
    {id:"london", name:"London"},
    {id:"berlin", name:"Berlin"},
    {id:"tokyo", name:"Tokyo"},
    {id:"remote", name:"Remote"}
];
const experiences = [
    {id:"intern", name:"Intern"},
    {id:"entry", name:"Entry Level"},
    {id:"mid", name:"Mid Level"},
    {id:"senior", name:"Senior"},
    {id:"executive", name:"Executive"}
];
// --- Utility functions ---
function getSavedJobs() {
    return JSON.parse(localStorage.getItem('savedJobs') || "[]");
}
function setSavedJobs(arr) {
    localStorage.setItem('savedJobs', JSON.stringify(arr));
}
function setDarkMode(on) {
    document.body.classList.toggle('dark', on);
    localStorage.setItem('darkMode', String(on));
}
function getDarkMode() {
    return localStorage.getItem('darkMode') === "true";
}
// --- SPA navigation ---
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    let page = document.getElementById(pageId);
    if(page) { page.classList.add('active'); page.setAttribute("tabindex","-1"); page.focus(); }
    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
    let navs = document.querySelectorAll('.nav-links a');
    if(pageId==="home") navs[0].classList.add('active');
    else if(pageId==="job-listings") navs[1].classList.add('active');
    else if(pageId==="companies") navs[2].classList.add('active');
    else if(pageId==="resources") navs[3].classList.add('active');
    else if(pageId==="contact") navs[4].classList.add('active');
    window.scrollTo(0,0);
    if(pageId==="job-listings") renderJobGrid();
}
// --- Dynamic rendering ---
function renderCategories() {
    let el = document.getElementById('category-list');
    el.innerHTML = categories.map(cat =>
        `<div class="category-card" tabindex="0" aria-label="${cat.name}" onclick="filterByCategory('${cat.id}')">
            <div class="category-icon"><i class="fas ${cat.icon}"></i></div>
            <h3>${cat.name}</h3>
            <p>${cat.jobs} Jobs</p>
        </div>`
    ).join('');
}
function filterByCategory(catId) {
    showPage('job-listings');
    document.getElementById('filter-category').value = catId;
    renderJobGrid();
}
function renderJobFilters() {
    let el = document.getElementById('job-filters');
    el.innerHTML =
    `<div class="filter-group">
        <label for="filter-category">Category</label>
        <select id="filter-category" onchange="renderJobGrid()">
            <option value="">All Categories</option>
            ${categories.map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}
        </select>
    </div>
    <div class="filter-group">
        <label for="filter-location">Location</label>
        <select id="filter-location" onchange="renderJobGrid()">
            <option value="">All Locations</option>
            ${locations.map(l=>`<option value="${l.id}">${l.name}</option>`).join('')}
        </select>
    </div>
    <div class="filter-group">
        <label for="filter-experience">Experience Level</label>
        <select id="filter-experience" onchange="renderJobGrid()">
            <option value="">All Levels</option>
            ${experiences.map(e=>`<option value="${e.id}">${e.name}</option>`).join('')}
        </select>
    </div>
    <div class="filter-group">
        <label for="filter-search">Search</label>
        <input id="filter-search" type="text" placeholder="Job title or company" oninput="renderJobGrid()">
    </div>`;
}
function renderJobGrid() {
    let category = document.getElementById('filter-category').value;
    let location = document.getElementById('filter-location').value;
    let experience = document.getElementById('filter-experience').value;
    let search = document.getElementById('filter-search').value.toLowerCase();
    let savedJobs = getSavedJobs();
    let filtered = jobs.filter(j =>
        (!category || j.category===category) &&
        (!location || j.location===location) &&
        (!experience || j.experience===experience) &&
        (!search || j.title.toLowerCase().includes(search) || j.company.toLowerCase().includes(search))
    );
    let el = document.getElementById('job-grid');
    el.innerHTML = filtered.length ? filtered.map(j=>`
        <div class="job-card" tabindex="0" aria-label="${j.title} at ${j.company}" onclick="showJobDetails('${j.id}')">
            <div class="job-header">
                <h3 class="job-title">${j.title}</h3>
                <p class="job-company">${j.company}</p>
                <div class="job-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${getLocationName(j.location)}</span>
                    <span><i class="fas fa-money-bill-wave"></i> ${j.salary}</span>
                </div>
            </div>
            <div class="job-body">
                <p class="job-description">${j.description}</p>
            </div>
            <div class="job-footer">
                <span class="job-type">${j.type}</span>
                <button class="save-job${savedJobs.includes(j.id)?' saved':''}" aria-label="Save job" onclick="event.stopPropagation();toggleSaveJob('${j.id}',this)">
                    <i class="${savedJobs.includes(j.id)?'fas':'far'} fa-heart"></i>
                </button>
            </div>
        </div>
    `).join('') : `<p>No jobs found matching your criteria.</p>`;
}
function showJobDetails(jobId) {
    let job = jobs.find(j=>j.id===jobId);
    if(!job) return;
    showPage('job-details');
    let savedJobs = getSavedJobs();
    let el = document.getElementById('job-detail-container');
    el.innerHTML = `
    <div class="job-detail">
        <div class="job-detail-header">
            <h2>${job.title}</h2>
            <p class="job-company">${job.company}</p>
            <div class="job-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${getLocationName(job.location)}</span>
                <span><i class="fas fa-money-bill-wave"></i> ${job.salary}</span>
                <span><i class="fas fa-briefcase"></i> ${job.type}</span>
                <span><i class="fas fa-clock"></i> Posted ${job.details.posted}</span>
            </div>
            <div class="job-actions">
                <button class="btn btn-primary" onclick="alert('Application submitted!')">Apply Now</button>
                <button class="btn btn-outline save-job${savedJobs.includes(job.id)?' saved':''}" onclick="toggleSaveJob('${job.id}',this)">
                    <i class="${savedJobs.includes(job.id)?'fas':'far'} fa-heart"></i> Save Job
                </button>
            </div>
        </div>
        <div class="detail-section">
            <h3>Job Description</h3>
            <p>${job.description}</p>
        </div>
        <div class="detail-section">
            <h3>Key Responsibilities</h3>
            <ul>
                ${job.details.responsibilities.map(r=>`<li>${r}</li>`).join('')}
            </ul>
        </div>
        <div class="detail-section">
            <h3>Requirements</h3>
            <div class="requirements">
                ${job.details.requirements.map(q=>`<div class="requirement"><h4>${q.title}</h4><p>${q.value}</p></div>`).join('')}
            </div>
        </div>
        <div class="detail-section">
            <h3>Benefits</h3>
            <ul>
                ${job.details.benefits.map(b=>`<li>${b}</li>`).join('')}
            </ul>
        </div>
    </div>
    <div class="apply-form">
        <h2>Apply for this Position</h2>
        <form id="application-form">
            <div class="form-group">
                <label for="full-name">Full Name *</label>
                <input type="text" id="full-name" name="full-name" required>
                <div class="error" id="name-error">Please enter your full name</div>
            </div>
            <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" name="email" required>
                <div class="error" id="email-error">Please enter a valid email address</div>
            </div>
            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone">
            </div>
            <div class="form-group">
                <label for="resume">Resume *</label>
                <div class="file-input">
                    <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required>
                    <label for="resume"><i class="fas fa-upload"></i> Choose File</label>
                    <span class="file-name" id="file-name">No file chosen</span>
                    <div class="error" id="resume-error">Please upload a valid resume (PDF, DOC, DOCX)</div>
                </div>
            </div>
            <div class="form-group">
                <label for="cover-letter">Cover Letter</label>
                <textarea id="cover-letter" name="cover-letter" rows="5" placeholder="Why are you interested in this position?"></textarea>
            </div>
            <div class="form-group">
                <label for="linkedin">LinkedIn Profile</label>
                <input type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/yourname">
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Application</button>
        </form>
    </div>`;
    let resumeInput = document.getElementById('resume');
    if(resumeInput){
        resumeInput.onchange = function(){
            const fileName = document.getElementById('file-name');
            if(this.files.length > 0) {
                fileName.textContent = this.files[0].name;
                const file = this.files[0];
                const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                const maxSize = 2 * 1024 * 1024;
                if(!validTypes.includes(file.type)) {
                    document.getElementById('resume-error').textContent = 'Only PDF, DOC, and DOCX files are allowed';
                    document.getElementById('resume-error').style.display = 'block';
                    this.value = '';
                    fileName.textContent = 'No file chosen';
                } else if(file.size > maxSize) {
                    document.getElementById('resume-error').textContent = 'File size must be less than 2MB';
                    document.getElementById('resume-error').style.display = 'block';
                    this.value = '';
                    fileName.textContent = 'No file chosen';
                } else {
                    document.getElementById('resume-error').style.display = 'none';
                }
            } else {
                fileName.textContent = 'No file chosen';
            }
        }
    }
    let appForm = document.getElementById('application-form');
    if(appForm){
        appForm.onsubmit = function(e){
            e.preventDefault();
            let valid = true;
            const name = document.getElementById('full-name');
            if(!name.value.trim()) {
                document.getElementById('name-error').style.display = 'block'; valid=false;
            } else document.getElementById('name-error').style.display = 'none';
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email.value)) {
                document.getElementById('email-error').style.display = 'block'; valid=false;
            } else document.getElementById('email-error').style.display = 'none';
            const resume = document.getElementById('resume');
            if(resume.files.length === 0) {
                document.getElementById('resume-error').textContent = 'Please upload your resume';
                document.getElementById('resume-error').style.display = 'block'; valid=false;
            } else document.getElementById('resume-error').style.display = 'none';
            if(valid){
                alert('Application submitted successfully!');
                this.reset();
                document.getElementById('file-name').textContent = 'No file chosen';
            }
        }
    }
}
function toggleSaveJob(jobId, btn) {
    let savedJobs = getSavedJobs();
    if(savedJobs.includes(jobId)) {
        savedJobs = savedJobs.filter(id => id !== jobId);
    } else {
        savedJobs.push(jobId);
    }
    setSavedJobs(savedJobs);
    renderJobGrid();
    if(btn) btn.classList.toggle('saved');
}
function getLocationName(locId) {
    let l = locations.find(l=>l.id===locId); return l?l.name:locId;
}
function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(tabEl => tabEl.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
    if(tab === "login") {
        document.querySelector(`.auth-tab:nth-child(1)`).classList.add('active');
        document.getElementById('login-form').classList.add('active');
    } else if(tab === "register") {
        document.querySelector(`.auth-tab:nth-child(2)`).classList.add('active');
        document.getElementById('register-form').classList.add('active');
    } else if(tab === "admin") {
        document.querySelector(`.auth-tab:nth-child(3)`).classList.add('active');
        document.getElementById('admin-form').classList.add('active');
    }
}
// --- Main Initialization ---
document.addEventListener("DOMContentLoaded",function(){
    renderCategories();
    renderJobFilters();
    renderJobGrid();
    setDarkMode(getDarkMode());
    document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
        document.querySelector('.mobile-nav').classList.toggle('active');
    });
    document.querySelector('.dark-mode-toggle').addEventListener('click', function() {
        let on = !document.body.classList.contains('dark');
        setDarkMode(on);
    });
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;
        const email = document.getElementById('login-email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email.value)) {
            document.getElementById('login-email-error').style.display = 'block'; valid=false;
        } else document.getElementById('login-email-error').style.display = 'none';
        const password = document.getElementById('login-password');
        if(password.value.length < 6) {
            document.getElementById('login-password-error').style.display = 'block'; valid=false;
        } else document.getElementById('login-password-error').style.display = 'none';
        if(valid) {
            alert('Login successful!');
            showPage('home');
        }
    });
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;
        const name = document.getElementById('register-name');
        if(!name.value.trim()) {
            document.getElementById('register-name-error').style.display = 'block'; valid=false;
        } else document.getElementById('register-name-error').style.display = 'none';
        const email = document.getElementById('register-email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email.value)) {
            document.getElementById('register-email-error').style.display = 'block'; valid=false;
        } else document.getElementById('register-email-error').style.display = 'none';
        const password = document.getElementById('register-password');
        if(password.value.length < 8) {
            document.getElementById('register-password-error').textContent = 'Password must be at least 8 characters';
            document.getElementById('register-password-error').style.display = 'block'; valid=false;
        } else document.getElementById('register-password-error').style.display = 'none';
        const confirm = document.getElementById('register-confirm');
        if(password.value !== confirm.value) {
            document.getElementById('register-confirm-error').style.display = 'block'; valid=false;
        } else document.getElementById('register-confirm-error').style.display = 'none';
        if(document.getElementById('terms').checked===false){
            alert("Please accept Terms of Service & Privacy Policy."); valid=false;
        }
        if(valid) {
            alert('Account created successfully! ');
            showPage('home');
        }
    });
    document.getElementById('admin-form').addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;
        const username = document.getElementById('admin-username');
        const password = document.getElementById('admin-password');
        if(!username.value.trim()) {
            document.getElementById('admin-username-error').style.display = 'block'; valid=false;
        } else document.getElementById('admin-username-error').style.display = 'none';
        if(password.value.length < 6) {
            document.getElementById('admin-password-error').style.display = 'block'; valid=false;
        } else document.getElementById('admin-password-error').style.display = 'none';
        if(valid) {
            alert('Admin login successful! ');
            showPage('home');
        }
    });
});
document.addEventListener('keydown', function(e){
    if(e.key==='Enter'){
        let activePage = document.querySelector('.page.active');
        let focusEl = document.activeElement;
        if(activePage && focusEl.classList.contains('category-card')) {
            focusEl.click();
        }
        if(activePage && focusEl.classList.contains('job-card')) {
            focusEl.click();
        }
    }
});