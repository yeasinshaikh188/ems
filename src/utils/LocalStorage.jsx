const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Complete Project Report",
          "description": "Prepare the quarterly project report for submission.",
          "date": "2025-01-25",
          "category": "Report",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix Bug #142",
          "description": "Resolve the issue in the login functionality.",
          "date": "2025-01-22",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Attend Team Meeting",
          "description": "Participate in the weekly team sync-up meeting.",
          "date": "2025-01-23",
          "category": "Meeting",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Design Landing Page",
          "description": "Create a mockup for the new marketing landing page.",
          "date": "2025-01-26",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Test Payment Gateway",
          "description": "Ensure the payment gateway integration works seamlessly.",
          "date": "2025-01-21",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Update Documentation",
          "description": "Revise API documentation with new endpoints.",
          "date": "2025-01-24",
          "category": "Documentation",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Conduct User Interviews",
          "description": "Schedule and conduct interviews with beta users.",
          "date": "2025-01-27",
          "category": "Research",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Organize Code Review",
          "description": "Host a code review session for the new feature.",
          "date": "2025-01-22",
          "category": "Code Review",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Optimize Database",
          "description": "Analyze and improve database query performance.",
          "date": "2025-01-20",
          "category": "Database",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Write Blog Post",
          "description": "Create content for the company blog about recent achievements.",
          "date": "2025-01-28",
          "category": "Content",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];
  
  

 const admin = [
    {
        "admin": {
          "id": 1,
          "name": "Admin User",
          "email": "admin@example.com",
          "password": "123",
          "role": "superadmin"
        }
      }
      
 ]


 export const setLocalStorage = () =>{
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin)); 
 }

 export const getLocalsStorage = () =>{
    const employees = JSON.parse(localStorage.getItem("employees")); 
    console.log(employees);
    const admin = JSON.parse(localStorage.getItem("admin"));
    console.log(admin); 
 }


// export const setLocalStorage = () =>{
//     localStorage.setItem("employees", JSON.stringify(employees));
//     localStorage.setItem("admin", JSON.stringify(admin)); 
// }


// export const getLocalsStorage = () =>{
//     const employees = JSON.parse(localStorage.getItem("employees")); 
//     console.log(employees); 
//     const admin = JSON.parse(localStorage.getItem("admin")); 
//     console.log(admin); 
// }