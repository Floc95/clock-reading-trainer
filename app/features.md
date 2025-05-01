# Features

- [X] Clock component with all display options
- [] Add visible aid (colored delta between minutes and hours in orange)
- [] Game mode
    - [X] Rounds system (user selects how many (10, 15, 20))
    - [X] Win / fail indicator
    - [X] Timer
    - [] Score screen with total time, avg time per round, total wins, new best score visual
    - [] Save history in localStorage per mode/difficulty (highest score etc.)
- [] 4 difficulties mode
  - [X] Beginner (all visible)
  - [X] Intermediate (no numbers, no minutes indicator)
  - [X] Advanced (no numbers, no minutes indicator, no hour indicator)
  - [X] Expert (no numbers, no minutes indicator, no hour indicator, no clock border)
- [] Learn page with cheatsheet (12, 3, 6, 9)
- [] About (why and goal)
- [X] Show preview of clock in game setup
- [] When starting a game, backdrop + countdown from 3,2,1 then animate clock (set clock to 0 then actual time)

# To fix / improve
- [X] Disable input when user validate
- [] Mobile optimized
- [X] Animations (when success, when fail, animation of clock hands)
- [] Create type for game difficulty string option
- [X] Replace GameManager container with UCard (https://ui.nuxt.com/components/card)
- [] Animation on score board, show lines one after the other
- [] Redesign score board, it's lame
- [] Explain difficuly level in game setup (i icon on the right of difficulty level ?)
- [] Animation between steps (setup, play, score), fade-out fade-in ?
- [] Redesign to look like GoalUI.png
  - Deactivate Tailwind dark mode
  - Fonts ideas:
    - https://fonts.google.com/specimen/Chewy?preview.text=Tic%20Tac%20Clock&preview.size=52&categoryFilters=Feeling:%2FExpressive%2FPlayful
    - https://fonts.google.com/specimen/Jua?preview.text=Tic%20Tac%20Clock%20&preview.size=52&categoryFilters=Feeling:%2FExpressive%2FPlayful

# Useless futur ideas
- [] Achievements (shown as left screen: https://dribbble.com/shots/21972659-Soccer-Live-Scores-App-EallaShot) - Find funnier names, maybe that unlock hidden clock skins ?
  - First game
  - Tens game
  - Fiftiest game
  - Hundred game
  - Perfect game
  - Perfect under 2min (10 rounds)
  - Perfect under 1min (10 rounds)
  - Perfect under 30sec (10 rounds)
  - All wrong answers
  - Game for more than 10min
- [] Clock skins