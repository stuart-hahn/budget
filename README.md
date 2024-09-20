# Simple Budget App

A minimalist budgeting app built with React, designed to help users track their expenses against a fixed budget. This app focuses on essential functionality without any unnecessary complexities.

## Features

- Set a fixed budget and track remaining funds.
- Add and view expenses with a simple form.
- Automatically updates the remaining budget based on expenses.

## Tech Stack

- **React**: Frontend framework used for building the user interface.
- **JavaScript**: Language used for logic and functionality.
- **CSS**: Basic styling for components.

## Getting Started

Follow these steps to get the app running on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed. You can check if they are installed by running:

```bash
node -v
npm -v
```

If not, download and install Node.js and npm from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/stuart-hahn/simple-budget-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd simple-budget-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the app:

   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to see the app in action.

## Usage

1. Set your budget by editing the default value in `App.js`.
2. Use the "Add Expense" form to enter the name and amount of your expenses.
3. The app will display the list of expenses and update the remaining budget dynamically.

## Project Structure

- `src/`
  - `components/`: Contains all the main components of the app.
    - `Budget.js`: Displays the total and remaining budget.
    - `Expense.js`: Displays individual expenses.
    - `ExpenseList.js`: Lists all the expenses.
    - `AddExpenseForm.js`: A form to add new expenses.
  - `App.js`: Main application file that combines all components.
  - `index.js`: Entry point for React.

## Future Improvements

- Ability to edit and delete expenses.
- Option to set a new budget dynamically.
- Add categories for expenses.
- Improve styling and add themes.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the simplicity of budgeting apps like YNAB (You Need A Budget).
- Thanks to the React community for their excellent documentation and support.

---

Happy budgeting!
