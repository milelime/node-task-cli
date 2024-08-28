# node-task-cli
An error-prone task CLI POC

## Project URL
https://roadmap.sh/projects/task-tracker

### Usage
#### Adding a new task
node task-cli.js add "Buy groceries"
#### Output: Task added successfully (ID: 1)

#### Updating and deleting tasks
node task-cli.js update 1 "Buy groceries and cook dinner"
node task-cli.js delete 1

#### Marking a task as in progress or done
node task-cli.js mark-in-progress 1
node task-cli.js mark-done 1

#### Listing all tasks
node task-cli.js list

#### Listing tasks by status
node task-cli.js done
node task-cli.js todo
node task-cli.js in-progress

!ONLY WORKS ONCE YOU SPECIFY A DIRECTORY AND CREATE AN EMPTY FILE WITH {} AS ITS CONTENT
