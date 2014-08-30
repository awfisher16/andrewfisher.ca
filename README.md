Getting Started
===============

Running the project
-------------------

To run this project:

    cd /path/to/andrewfisher.ca
    bundle
    bundle exec middleman

To expliain what's happening:

  1. we need to be in the project directory to do anythign
  2. we want to ensure our dependencies are properly up-to-date
  3. THIS IS THE MAGIC SAUCE: this makes everything work

Your workflow
-------------

  1. Do some work
  1. `git diff` to see all of your changes
     - use the arrow keys to navigate the output
     - to exit type 'q'
  1. `git add .` add all the changes to be committed
     - you can instead do `git add ./path/to/file` to only commit particular changes
     - if it yells at you about `--all`, include it
  1. `git status` at anytime to see what's committed
  1. `git commit -m "what I did"` make a record (commit) of these changes
  1. `git push` publish these changes to github
     - perform this step at the end of the development stage

Usefule Resources
=================

[Bourbon](http://bourbon.io/) is the new framework being used. You'll want to check out [Neat](http://neat.bourbon.io/) for the rows and columns, and [Refills](http://refills.bourbon.io/) for examples of how to do various things. The base styles being applied everywhere come from [Bitters](http://bitters.bourbon.io/).
