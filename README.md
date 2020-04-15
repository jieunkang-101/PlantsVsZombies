# Plants Vs Zombies 

#### Roll Playing Game written with functional JavaScript, 15 April 2020
 
#### By **_Jieun Kang, Kristina Hengster Tintor, Steph Podolak_**

## Description


## Setup/Installation Requirements

1. Open Terminal and go to the Desktop directory `("cd desktop")`.
2. Clone this repository to your local machine `("git clone PlantsVsZombies")`.
3. Once the directory is clonded to your local machine, go to the root directory of this project `("cd PlantsVsZombies")`.
4. Type  `("npm install")` to add the correct Node modules and download necessary dependencies to the project.
5. Type `("npm run build")` to create _dist_ folder with `bundle.js` file using webpack.
6. Open cloned directory in Visual Studio Code or preferred text editor `("code .")`.
7. Open `index.html` in _dist_ folder in a preferred browser to view the project. (Google Chrome is recommended)


## Behavior Driven Development Specifications

| Behavior(Spec)  | Input | Output  |
| :---------------- | :-----: | :-----: |
| Garden player starts game with garden | start | { sunflowers: 10, potatoes: 10, beanThrowers: 10} |
| Garden player chooses action to attact zombies: 1) Grow Sunflowers 2) Lay Potatoes 3) Throw Beans | 3) Throw Beans | { sunflowers: 10, potatoes: 10, beanThrowers: 9 } <br> { zombies: 9, zombieAttack: false } |
| Garden player can grow their plants: 1) Add sunflower 2) Add potatoes 3) Add beanRhrower | 1) Add sunflower | { sunflowers: 11, potatoes: 10, beanThrowers: 9} |
| Zombie player starts game with zombies | start | { zombies: 10, zombieAttack: flase } |
| Zombie player chosses action to attack plants: 1) Sunflowers 2) Potatoes 3) Beans | 1) Sunflower | { sunflowers: 9, potatoes: 10, beanThrowers: 9} <br>{ zombies: 9, zombieAttack: true } |
| Zombie player can add their zombies | Add zombie | { zombies: 9, zombieAttack: true } |



## Technologies Used
* Javascript
* Node.js
* webpack

### License

*This webpage is licensed under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license*

Copyright (c) 2020 **_Jieun Kang, Kristina Hengster Tintor, Steph Podolak_**
