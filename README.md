# Quotes

#### Quotes is a web-application that simply hosts quotes from users.

 14/January/2019

# Francis Thande Karagu
#### The Quotes Program, Friday 14th January 2019
#### By **{Francis T Karagu}**


## Description

Quotes is a web-application that is designed in Angular js and TypeScript to host quotes from users. By default, it's populated by some variations of quotes that a visitor can view. A visitor has the ability to upVote (like) a quote and to downVote (dislike) a quote. A user has also the functionality to add his/her desired quotes and vote on them. A visitor also has the ability to delete any quote he/she has added and feels shouldn't belong.

Quotes is built entirely in Angular.js and TypeScript.

## Application link
Here is a live working link https://fkaragu.github.io/Quotes/

## Prerequisites

1.  You need to have git installed.You can install git using the following command in your terminal $ sudo apt install git-all -y
2.  Download and install Node(a server-side runtime environment for javascript) at <https://nodejs.org/en/download/package-manager/> (Links to an external site.)
3.  Download and install Angular(a platform that makes it easy to build applications) using the following command >$ npm install -g @angular/cli
4.  Download and install watchman(an application that watches and records files as they change.) using the following commands
    $ cd ~
    $ git clone <https://github.com/facebook/watchman.git>
    $ cd watchman/
    $ git checkout v4.7.0
    $ sudo apt-get install -y autoconf automake build-essential python-dev
    $ ./autogen.sh
    $ ./configure
    $ make
    $ sudo make install
    $ watchman --version
    $ echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches  && echo 999999 | sudo tee -a  /proc/sys/fs/inotify/max_queued_events && echo 999999 | sudo tee  -a /proc/sys/fs/inotify/max_user_instances && watchman  shutdown-server
5.  Install Typescript(Superset of JavaScript) and its transpiler with the following command $ npm install -g typescript && $ tsc -v -y

##Setup

1.  Use this command $ git clone <https://github.com/Fkaragu/Quotes> This will clone the projects repository into a local folder on your device.
2.  Open the files with an editor( preferably Atom. )
3.  Study the code. learn from it. Improve on it.

## Behavior Driven Development BDD
### Who is the target User?
* Anyone who wants to post quotes.

### Front-end/User Interface Logic Objectives
* By default the page will load four quotes and the writers of the quotes.
* The button Show Details is used for viewing likes / dislikes , accessing the delete quote button and the Author of the quote.
* The Author is the person who write the quote.
* Description is the section where the quote will be written.
* Completion is the date when the quote was published
* Add quote is the button used to post the quote.

### Back-end/Business logic Objectives
* upVote increament the assigned value for the given index
* downVote decreament the assigned value for the given index
* Delete quote remote the entire quote and its detail ie Writer
* Add Quote, Push or insert the detail captured on the form.


## Behaviour
| Behaviour                              | Input Example     | Output Example    |
|----               | :---:             |---: |
| The program should handle:    | When it receives:     | It should return  |                             
|:----:               | :---:             |:---: |
| Hide             | Button          | Invisible              |
| Show Detail          | Button click          | Toggle and show child details for the quote    |
| UpVote          | Button click          | Increament votes        |
| DownVote          | Button click          | Decreament votes        |
| Delete quote          | Button click          | Purge out the quote        |
| Add quote          | Button click          | Insert the quote        |

## Known Bugs

   NO bugs present.

## Technologies Used

1.  Angular
2.  TypeScript
3.  nodejs
4.  watchman
5.  Atom text editor


## Support and contact details
In case of any problems reach me through my email:fkaragu@gmail.com

### License
Copyright (c) {2019} **{Francis Thande Karagu}**
Permission is hereby granted, free of charge, to any person willing to obtain a copy of this program for personal use. However if the program will be used for commercial gain then a royalty fee will have to be paid to the author of the program.
