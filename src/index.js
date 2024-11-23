document
  .getElementById("inputForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const userInput = document.getElementById("mainInput").value.trim();

    let AnswersDiv = "";

    const inputNumber = parseFloat(userInput);
    const isArrayInputed = userInput.includes(",");

    if (!isNaN(inputNumber) && userInput !== "" && !isArrayInputed) {
      // Task 1 Check If it's a number and greater than 7, print "Hello"
      if (inputNumber > 7) {
        AnswersDiv = "Hello";
      }
    }

    // Task 2 Check if the input is the name "John"
    else if (userInput === "John") {
      AnswersDiv = "Hello, John";
    }
    // If the name is not "John", print "There is no such name"
    else if (userInput !== "" && !isArrayInputed) {
      AnswersDiv = "There is no such name";
    }

    // Task 3: Check if the input is a comma-separated array of numbers and divided by 3
    else if (isArrayInputed) {
      const numArray = userInput
        .split(",")
        .map((item) => parseFloat(item.trim()))
        .filter((num) => !isNaN(num));

      const multiplesOfThree = numArray.filter((num) => num % 3 === 0);
      if (multiplesOfThree.length > 0) {
        AnswersDiv = `Multiples of 3: [${multiplesOfThree.join(", ")}]`;
      } else {
        AnswersDiv = "No multiples of 3 found in the array.";
      }
    } else {
      // Default case if no valid input type is detected
      AnswersDiv =
        'Invalid input. Please enter a number, "John", or a numeric array.';
    }

    document.getElementById("AnswersDiv").textContent = AnswersDiv;
  });
