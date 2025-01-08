# Pomodoro Technique - :notebook: Notes from the journey 🍅 by 🍅

## :bookmark: Labels

- ✅ : done
- 🚧 : WIP
- ⛌ : ERROR
- ❒ : TODO

## 🍅 Pomodoro 1

🎯 GOAL:
ℹ️ KISS - Keep it simple, stupid --- fo ahead as much as possible.

🎬 Test 1: _Empty carpark 1 floor_ ✅
one floor - no car 🚗, all empty
input: [[0,0,0,0,0]]
result: []

🎬 Test 2: _One car into a 1 floor carpark_ ✅
one floor - 1 car 🚗, on the Exit
input: [[0,0,0,0,2]]
result: [R0]

## 🍅 Pomodoro 2

🛠️ Refactor:

1. extract isMyCarParkedThere ✅

💡 keep an eye about the atomic behavior whereIsParkedMyCar? >>> need to slice

🎬 Test 3.a: _where is my car buddy?_ ✅
one floor - 1 car 🚗, somewhere
input: [[2,0,0,0,0]]
result: 4
tag 🏷️: findMyCarOnThisFloor

🎬 Test 3.b: _One car into a 1 floor carpark in a dark corner_ ✅
one floor - 1 car 🚗, on the Exit
input: [[2,0,0,0,0]]
result: [R4]

🎬 Test 4: _2 floors, car on exit 1 floor_
input: [[1,0,0,0,0], 
        [0,0,0,0,2]]
result: [R0]

🔎 which floor ???
🎬 Test 4.a: _which floor is parked my car_
input: [[0,0,0,0,2]]
result: 0

🎬 Test 4.b: _which floor is parked my car II_
input: [[1,0,0,0,0],
        [0,0,0,0,2]]
result: 0

🎬 Test 4.c: _which floor is parked my car III_
input: [[0,0,0,1,2],
        [0,0,0,0,0]]
result: 1

Test 5: _2 floors, car on exit 2 floor, starcase_
input: [[0,0,0,2,1],
        [0,0,0,0,0]]
result: ['R1', 'D1', 'R0']

NEXT: we need to move on the LEFT
