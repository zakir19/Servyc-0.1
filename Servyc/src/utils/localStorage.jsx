const employees = [
    {
      "Id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Complete project report",
          "description": "Prepare and submit the final report for the client project.",
          "date": "2025-01-12",
          "category": "Work",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Team meeting",
          "description": "Participate in the weekly team meeting to discuss progress.",
          "date": "2025-01-13",
          "category": "Meeting",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update database records",
          "description": "Verify and update customer details in the database.",
          "date": "2025-01-14",
          "category": "Database",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "Id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Design logo",
          "description": "Create a new logo for the company branding project.",
          "date": "2025-01-10",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Client feedback",
          "description": "Incorporate feedback from the client into the presentation.",
          "date": "2025-01-11",
          "category": "Client Work",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix bug #245",
          "description": "Resolve the reported issue with the payment gateway.",
          "date": "2025-01-09",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Prepare training slides",
          "description": "Create slides for the upcoming employee training session.",
          "date": "2025-01-15",
          "category": "Training",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "Id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Inventory check",
          "description": "Conduct an inventory check for office supplies.",
          "date": "2025-01-12",
          "category": "Logistics",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Write blog post",
          "description": "Draft a blog post for the company website.",
          "date": "2025-01-11",
          "category": "Content",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Code review",
          "description": "Review the code submitted by the junior developers.",
          "date": "2025-01-10",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "Id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Organize event",
          "description": "Plan and organize the annual company event.",
          "date": "2025-01-20",
          "category": "Event Management",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Prepare budget report",
          "description": "Compile and present the Q4 budget report.",
          "date": "2025-01-10",
          "category": "Finance",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Update website",
          "description": "Make updates to the About Us page on the website.",
          "date": "2025-01-12",
          "category": "Web Development",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "Id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Data backup",
          "description": "Ensure all data is backed up securely.",
          "date": "2025-01-08",
          "category": "IT",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Customer support",
          "description": "Handle support tickets for the new product launch.",
          "date": "2025-01-09",
          "category": "Support",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Weekly newsletter",
          "description": "Draft and send out the weekly newsletter.",
          "date": "2025-01-14",
          "category": "Marketing",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "System maintenance",
          "description": "Perform maintenance on company servers.",
          "date": "2025-01-15",
          "category": "IT",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "Id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));

}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    
    return {employees,admin}

}