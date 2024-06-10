#! /user/bin/env node

import chalk from "chalk";

function countdownTimer(duration: number) {
    const timer = setInterval(() => {
        const minutes = Math.floor(duration / 60);
        let seconds: number | string = duration % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        process.stdout.write(`\r${chalk.blue(minutes.toString())}:${chalk.green(seconds.toString())}`);

        duration--;

        if (duration < 0) {
            clearInterval(timer);
            console.log(chalk.red("\nTimer ended!"));
        }
    }, 1000);
}

// Example: 1 minutes countdown
const minutes = 1;
const seconds = minutes * 60;
countdownTimer(seconds);

