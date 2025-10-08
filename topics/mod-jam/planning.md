# Planning

## Starting point

The initial idea:

> Frog eating flies and avoiding fireflies

## Experience design

The experience:

> The user controls a frog at the bottom of the screen, they can shoot out the frog's tongue and catch a fly which is moving on the screen. If the tongue hits the fly it gets eaten. If the frog eats a firefly, the user gets a strike. Three strikes and you're out!

## Breaking it down

Basic things to do:

- Start screen: start, instructions, and customize button
- Add a firefly // DONE
- Add a strike variable
- Fly moves in a small sine
- Flies and fireflies speed up over time
- Sky gets darker = Game gets harder
- Find different hats to add to the frog // DONE
- Add sound for flies
- Lose screen: try again button and fun facts about frogs


Questions:

- What's on the start screen?
    - Start button
    - Customize button (cowboy, beanie, bucket hat, traffic cone!)
    - Frog tongue comes up and clicks the button you want
- Does the firefly move differet than the fly?
    - Firefly moves faster than the fly, by 1?
    - Also in a sine wave
- Does the game get harder?
    - Sky gets darker by 1 for every 2 flies eaten
    - Fly and firefly move faster by 0.1 for every 2 flies eaten
- What happens if the user doesn't catch the fly?
    - 1 strike
    - 3 strikes and you're out
    - Each strike looks like the frog nail meme
    - You lose a strike if you eat 5 flies in a row
- What sound for the flies?
    - "Ow" when they're eaten, "HAHA" when they're not, Nelson Muntz style
- Each screen?
    - Start screen
    - Game itself
    - Game over screen has fun facts about frogs (find 5 facts)


- 5 facts:
    - The pumpkin toadlet is so small that their inner ear structure for balance does not allow them to jump properly. They tumble and land awkwardly instead (search it up!)
    - A frog's tongue is 3 times longer than its body
    - Frogs breathe through their skin in addition to lungs
    - The golden dart frog is the most poisonous frog in the world. One drop of its toxin can kill 10 full grown men
    - Some frogs push their eyeballs down their throats to push food down their digestive system


## The program starts to form....

What is there?

- The frog
    - Position and size
    - Position and size of tongue
    - What is the tongue doing?
- The fly
    - Position and the size
    - Velocity
- The firefly
    - Position and the size
    - Velocity

```
frog
    body
        x
        y
        size
    tongue
        x
        y
        size
        speed
        state

fly
    x
    y
    size
    speed
```
firefly
    x
    y
    size
    speed
```

What happens in this project?

- Start (setup)
    - Create a canvas
    
- Every frame (draw)
    - Draw the background
    - Move and draw the fly
        - Add the fly's speed to it's x
        - Draw a circle at the fly's position with its size (black)
    - Move and draw the firefly
        - Add the firefly's speed to it's x
        - Draw a circle at the firefly's position with its size (yellow)
    - Move and draw the frog
        - Move the frog to the mouse's x position
        - Draw a green circle at the frog's position with its size
    - Move and draw the tongue
        - Move the tongue
            - If the tongue isn't launched, just do nothing... don't draw it
            - If the tongue is launched, move it up (by its speed)
            - If the tongue is coming back, move it down (by its speed)
            - If the tongue hits the top, send it back down
            - If the tongue gets back to the frog, then stop it
        - Draw the tongue
            - Draw a line from the frog to the tongue position
            - Draw a circle at the end of the tongue
    - Check if the tongue hit the fly
        - Check if tongue circle and fly circle overlap
        - If they do, then reset the fly
        - If they don't.... nothing... just keep being a tongue

Events

- If the user clicks the mouse
    - If the tongue is still inside the frog's mouth
        - Launch the tongue

