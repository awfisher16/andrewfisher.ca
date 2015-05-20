Getting Started
===============

Running the project
-------------------

To run this project:

    cd /path/to/andrewfisher.ca
    bundle exec middleman

`ctrl+c` to exit `middleman`

To expliain what's happening:

  1. we need to be in the project directory to do anythign
  2. we want to ensure our dependencies are properly up-to-date
  3. THIS IS THE MAGIC SAUCE: this makes everything work

Your workflow
-------------

  1. Do some work
  2. `git diff` to see all of your changes
     - use the arrow keys to navigate the output
     - to exit type 'q'
  3. `bundle exec middleman build` creates the build folder which hosting references
  4. `git add --all .` add all the changes to be committed
     - you can instead do `git add ./path/to/file` to only commit particular changes
     - if it yells at you about `--all`, include it
  5. `git status` at anytime to see what's committed
  6. `git commit -m "what I did"` make a record (commit) of these changes
  7. `git push` publish these changes to github
     - perform this step at the end of the development stage
  8. `git deploy live master` publish changes to server

Usefule Resources
=================

[Bourbon](http://bourbon.io/) is the new framework being used. You'll want to check out [Neat](http://neat.bourbon.io/) for the rows and columns, and [Refills](http://refills.bourbon.io/) for examples of how to do various things. The base styles being applied everywhere come from [Bitters](http://bitters.bourbon.io/).
git commit

Updates
-------

1) on a phone's screen the whole page turns into a very very long vertical page, has a TLDR effect for viewers that would pick on it.

2) request a resume: not sure what the goal is, to get in contact or to provide a tailored resume?

3) Add some form of a visual representation of key words or terms which someone can glance and understand you in < 10 seconds when first visiting your page. Think of this as the "elevator pitch" where the full page is the "business meeting". This visual element needs to convince a decision making person to want to read more about you in <10 seconds, ie to spend more time on your site. The industry experience menu is a good way of doing this, but have another that doesn't hide (since they can scroll) and instead emphasizes your core 4 career interests

4) I expected that when I click on the 5 industry experience menu options that it would lead to a personal description or summary of what you did

5) Is “Concrete Inspection and Testing” your most important industry experience? Just from how it loads at some sizes, it comes across as the more important than the other four

