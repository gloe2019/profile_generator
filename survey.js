const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const storedAnswers = [];

rl.question("What's your name? ", (answer) => {
  // TODO: Log the answer in a database
  storedAnswers.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    // TODO: Log the answer in a database
    storedAnswers.push(answer);
    //console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question("What do you listen to while doing that? ", (answer) => {
      storedAnswers.push(answer);
      rl.question(
        "Which meal is your favorite? (eg: dinner, breakfast) ",
        (answer) => {
          storedAnswers.push(answer);
          rl.question(
            "What's your favorite thing to eat for that meal? ",
            (answer) => {
              storedAnswers.push(answer);
              rl.question(
                "What sport is your absolute favorite? ",
                (answer) => {
                  storedAnswers.push(answer);
                  rl.question("what is your superpower? ", (answer) => {
                    storedAnswers.push(answer);
                    rl.close();
                    console.log(
                      `${storedAnswers[0]} loves listening to ${storedAnswers[2]} while ${storedAnswers[1]}, enjoying ${storedAnswers[4]} for ${storedAnswers[3]}, watching live ${storedAnswers[5]}, and is the best at ${storedAnswers[6]}`
                    );
                  });
                }
              );
            }
          );
        }
      );
    });
  });
});
