// Create an object to store the goals for the day
const dailyGoals = {
    goals: [
      "Monday: Dentist @ 8am ",
      "Tuesday: Attend team meeting @7am",
      "Wednesday: Go for a 30-minute walk in the AM",
      "Thursday: Read 20 pages of a book before bed"
    ],
    
    // Keep track of the current goal to display
    currentGoalIndex: 0,
  
    // Method to get the next goal
    getNextGoal: function() {
      // If there are still goals left to show, return the next goal
      if (this.currentGoalIndex < this.goals.length) {
        return this.goals[this.currentGoalIndex++];
      } else {
        // If all goals have been shown, reset the index
        this.currentGoalIndex = 0;
        return "No more goals for today!";
      }
    }
  };
  
  // Function to display the next goal
  function displayGoal() {
    const goalList = document.getElementById('goalList');
    goalList.innerHTML = ''; // Clear previous goal
  
    // Get the next goal using the method from the object
    const goal = dailyGoals.getNextGoal();
  
    // Create a list item for the current goal
    const listItem = document.createElement('li');
    listItem.textContent = goal;
    goalList.appendChild(listItem);
  }
  
  // Event listener for button click
  document.getElementById('goalButton').addEventListener('click', displayGoal);
  