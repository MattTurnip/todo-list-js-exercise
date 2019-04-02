function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    },

    logDescription: function () {
      console.log(this.description);
    },

    markCompleted: function () {
      this.complete = true;
    }

  };
  return task
}


//driver code below
const task1 = newTask("Clean Cat Litter", "Remove the Poop and Pee");
const task2 = newTask("Do Laundry", "Use the Tide Pods if you haven't eaten all of them");
const tasks = [task1, task2];

task1.logState();
task1.logDescription();
task1.markCompleted();
task1.logState();
