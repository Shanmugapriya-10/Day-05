//1.Create your own resume data in JSON format.

let shanResume =
{
    "basics":
        { "name": "Shanmugapriya Raja", 
          "email": "Shanmugapriyaraja1997@gamil.com", 
          "phone": 8682050869, 
          "degree": "B.E", 
          "location": { 
            "address": "No:58, first new street, lakshmipuram, chrompet", 
            "postalCode": 600044, 
            "city": "Chennai", 
            "state": "Tamilnadu", 
            "country": "India" 
        }, "profiles": [
            { 
                "website": "", "github": "" 
            }] 
        }, 
        "work": 
        [
            { 
                "company": "AVA SOFTWARE ltd.", 
                "position": "Software Developer", 
                "startDate": "2021-02-01", 
                "currentDate": "2024-02-05", 
                "summary": "I've involved in projects where we used Nodejs, Reachjs and Javascript as a key language", 
            },
        ], 
            "education": 
            [
                { 
                    "institution": "Sri Ramanujar Engineering College", 
                    "department": "ECE", 
                    "studyType": "fulltime", 
                    "batch start year": 2014, 
                    "batch end year": 2018, 
                    "gpa": 7.8, 
                }
            ], 
                    "skills": [
                        { 
                            "name": "javascript", 
                            "level": "beginer", 
                            "project": ["Enterprise application developer"] 
                        }, 
                        { 
                            "name": "Nodejs", 
                            "level": "Intermediate", 
                            "project": ["Internal product related to logistics"] 
                        }
                    ], 
                            "languages": [
                                { 
                                    "language": "Tamil,English", 
                                }
                            ], 
                            "interests": [
                                { 
                                    "name": "Designing, learning new technology from the basics and coding", 
                                }
                            ]
}

console.log(shanResume);