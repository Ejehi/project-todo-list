export function task(title, project, description='', dueDate='', priority='') {
    return {
        title,
        project,
        description,
        dueDate,
        priority
    }
}

export function project(title) {
    return {
        title
    }
}

export let projects = [
    { title: 'Travel Prep' },
    { title: 'Tidy Kitchen' },
    { title: 'School Prep' }
];


export let tasks = [
    { 
        title: 'Pack my bags', 
        project: 'Travel Prep', 
        description: 'Pack clothes', 
        dueDate: '2026-03-31', 
        priority: 'high' 
    },

    { 
        title: 'Pack my passport', 
        project: 'Travel Prep', 
        description: 'Carry my passport', 
        dueDate: '2026-03-31', 
        priority: 'high' 
    },

    { 
        title: 'Do the dishes', 
        project: 'Tidy Kitchen', 
        description: 'Put dishes in the dishwasher', 
        dueDate: '2026-03-31', 
        priority: 'low' 
    }
];

export function updateTasks(newtasks) {
    tasks = newtasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function updateProjects(newprojects) {
    projects = newprojects;
    localStorage.setItem('projects', JSON.stringify(projects));
}