# CarPark2025 Technical Debt

This document tracks known technical debt in the CarPark2025 project. Use this as a reference to identify areas that require improvement, prioritization, or refactoring.

## :bookmark: Labels

- :heavy_plus_sign: Would be nice to have
- :warning: Should fix when time
- :x: Must fix as soon as possible
- :white_check_mark: done

# pomodoro 1

- we started with the assumption of no exception!
  TODO: add guardians and exceptions
- yourCar as a constant isn't tested. Is it OK? ⏭️
- 💣 NOTE! the find your car is assuming only 1 floor!
- #8 can be extract into an atomic behavior: isMyCarParkedThere

# pomodoro 2

- the carparck constructor is not keeping the layout as a memory. The functions need to get it as argument.
  TODO: what we wanna do?

- 📝 check the describe of the atomic behaviors.

# pomodoro 3

- look for a possible method of Array to not use for loop in findMyCarFloor

# Pomodoro 4

- indexOf returns undefined but we are not controlling it
