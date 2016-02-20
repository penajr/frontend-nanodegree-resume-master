var bio = {
    name: 'Armando Pena',
    role: 'Front-End Developer',
    contacts: {
        mobile: '(408) 315-6955',
        email: 'Penajr8@gmail.com',
        github: 'Penajr8',
        
        location: 'San Jose, CA',
    },
    welcomeMessage: 'Welcome',
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'Git/GitHub', 'IT: Security+', 'Bilingual: English/Spanish'],
    biopic: 'https://avatars2.githubusercontent.com/u/16826703?v=3&s=460',

    display: function() {
        // name & role
        $('#header').prepend(HTMLheaderRole.replace("%data%", bio.role));
        $('#header').prepend(HTMLheaderName.replace("%data%", bio.name));

        // contact info
        $('#topContacts, #footerContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $('#topContacts, #footerContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
        $('#topContacts, #footerContacts').append(HTMLgithub.replace("%data%", bio.contacts.github));
       
        $('#topContacts, #footerContacts').append(HTMLlocation.replace("%data%", bio.contacts.location));

        // biopic & welcome message
        $('#header').append(HTMLbioPic.replace("%data%", bio.biopic));
        $('#header').append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

        // loop through skills
        $('#header').append(HTMLskillsStart);
        for (var i=0; i<bio.skills.length; i++){
            $('#skills').append(HTMLskills.replace("%data%",bio.skills[i]));
        }
    }
};




// WORK -----------------------------------------------

var work = {
    jobs: [
        {
            employer: 'Flair Svcs',
            title: 'Service and Sales Manager',
            location: 'Santa clara, CA',
            dates: 'November 2012 - Present',
            description: 'Responsible to answer quickly to all customer requests and ensuring that all staff members make sound ' +
            'decisions based on customer satisfaction. Also Lead new business development for ' +
            'assigned region. Travel to customer sites to present company services and '+
            'benefits (inside & outside sales). Oversee development of contracts and account start-up.'
        },
        {
            employer: 'Bank of America',
            title: 'Senior Personal Banker',
            location: 'San Jose, CA',
            dates: 'October 2006 - November 2012',
            description: 'Highly trained and experienced Personal Banker with expertise in financial services including, '+
            'loans, ' +
            'lines of credit, ' +
            'and asset assessment. Leverage knowledge of financial products and services to appraise client needs and provide effective solutions, ' +
            'cross - selling to maximize account growth. Identifying areas for improvement, ' +
            'and motivating team to high levels of customer service and sales. Ensure corporate standard compliance, conducting meetings to communicate policies, procedures and best practices.'


        },
        {
            employer: 'Hertz Local Edition',
            title: 'Assistant Branch Manager',
            location: 'Mountain View, CA',
            dates: 'February 2001 - February 2012',
            description: 'Provided branch leadership with sales, ' +
            'marketing, ' +
            'staffing, ' +
            'account maintenance, '+
            'and customer service. ' +
            'Communicated with insurance adjusters to set up replacement rentals for their customers. Followed up on leads with '+
            'potential customers. Worked closely with service writers to ensure direct billing requirements. Maintained account '+
            'relationships with dealerships and body / service shops. Monitored daily business reporting and cash flow for audit '+
            'purposes. Reported to District Manager on staffing or customer issues. Led weekly meetings to coach management trainees and review performance.'

        }
        
    ],

    display: function() {
        for (var i=0; i<work.jobs.length; i++){
            // job information
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(HTMLworkEmployer.replace("%data%",work.jobs[i].employer));
            $('.work-entry:last').append(HTMLworkTitle.replace("%data%",work.jobs[i].title));
            $('.work-entry:last').append(HTMLworkLocation.replace("%data%",work.jobs[i].location));
            $('.work-entry:last').append(HTMLworkDescription.replace("%data%",work.jobs[i].description));
        }
    }
};


// PROJECTS -----------------------------------------------

var projects = {
    projects: [
        {
            title: 'Build a portfolio site',
            
            description: 'Provided with a design mockup as a PDF-file I replicated that design in HTML and CSS. I developed a responsive website that displays images, descriptions and links to each of the portfolio projects I did and would continue to complete throughout the course of the Front-End Web Developer Nanodegree.',
            images: ['http://placekitten.com/1250/350']

        }
    ],

    display: function() {
        for (var i=0; i<projects.projects.length; i++){
            // project information
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
            
            $('.project-entry:last').append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));

            // project images
            for (var j=0; j<projects.projects[i].images.length; j++){
                $('.project-entry:last').append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
            }
        }

    }
};


// EDUCATION -----------------------------------------------

var education = {
    schools: [{
        name: 'San Jose State University',
        location: 'San Jose, CA',
        degree: 'B.S.',
        majors: ['Business Administration- (Management)'],
       
      
        url: 'http://www.sjsu.edu'
    },

    {
        name: 'Unitek',
        location: 'Fremont, CA',
        degree: 'I.T.',
        majors: ['Security+'],

        url: 'http://www.unitekeducationit.com'
    

        

        }],

    onlineCourses:[{
        title: 'Front-End Web Developer Nanodegree',
        school: 'Udacity',
        
        url: 'https://www.udacity.com/me'
    }],

    display: function() {
        for (var i=0; i<education.schools.length; i++){
            // school information
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree));
            $('.education-entry:last').append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
            $('.education-entry:last').append(HTMLschoolLocation.replace("%data%", education.schools[i].location));

            
            
        }

        // online course information
        $('#education').append(HTMLonlineClasses);
        for (i=0; i<education.onlineCourses.length; i++){
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
            $('.education-entry:last').append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].date));
            $('.education-entry:last').append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
        }
    }
};



// INITIALIZATION -----------------------------------------------

var resume = {
    init: function(){
        // display sections
        bio.display();
        work.display();
        projects.display();
        education.display();

        // display maps
        $('#mapDiv').append(googleMap);
        initializeMap();
    }
};


resume.init();
