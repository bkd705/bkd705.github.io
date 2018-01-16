---
title: Design For Code
date: 2017-03-16 00:00:00 +0000
subtitle: The struggle with picking a name...
categories: blog
thumb: http://i.imgur.com/1l2856f.jpg
---
## I have always struggled really hard to choose names for side projects, especially when I really want to show them off.

I started building a side project recently, and the main goal of the side project was to try out some new technology, and to get a chance to collaborate with some other people. I had this idea for a site, where designers and developers could sign up, and could basically trade their skills. 

Are you a developer who needs a design done for your new web app? Well maybe this designer who needs his portfolio coded, will design it for you.

There are a few communities on Reddit and Facebook built around this idea, but since they are spread out, they can become inactive, and underused. To solve this, I am building a one stop shop for trading design for code, and vice versa.

The start of it was fun, as always, boilerplate with CRA, make a simple CRUD with MongoDB and Express. Well then a friend I met on Slack ([Learn Programming](http://learn-programming.club) - Amazing slack community) offered to join in, and he went ham on the back-end. Every task I assigned Zach was finished within a few hours, and now the back-end is pretty much fully completed, and even with a large portion of test coverage too. So here I am, left with the great task of building form after form after form, integrating a nice layout and half decent design to make the front-end work. 

I'm going to lay out the kind of, good, bad and ugly, I guess that is the best way to go about this.

### The Good

It is so fun working with other developers. Even just Zach and I have a lot of fun finding and fixing bugs, thinking of new features and how to implement them, it really is super exciting. The development of the back-end was really fun for both of us, even though he handled most of it. Zach decided to switch from my Sequelize setup to Knex and Bookshelf which have a lot better documentation and structure. It is nice for me because I get to see a bit more about back-end development in the eyes of a CompSci major where architecture and efficiency can be a big deal (maybe he doesn't see it that way, but he catches architecture problems quicker than I do). For the front-end, I picked some newer tech with React that I haven't used as much, mainly React-Saga being the big one. I really enjoy sagas and how they work and integrate with Redux. I found [Bulma.io](http://bulma.io) which is a great CSS framework and has made the layout process for the app, insanely easy!

### The Bad

__I hate React.__ Well, maybe I don't actually hate it, but I feel like I've been using it so much lately, that I just don't have the same excitement I used to have using it. I still love it, I love everything about React and how much using it has taught me. But sometimes I really just get annoyed, it could also be the repetition involved in using it all the time. Constantly writing the same TextField component for forms, making the same form over and over just changing the state and the fields. I think I really just hate forms. I honestly do love React, even if its reptetive, I just think its time to try something new to spread out a little bit.

### The Ugly

Front-end tests are hard to write. I've been trying to get myself into more of a TDD style of development lately, and pushing myself to write more tests for more coverage. However, writing tests for the front-end can be pretty complicated. I am most likely just unexperienced in it, which makes it good that I'm doing it I guess, but some of it just confuses me, like what do I test, what is silly to test, do I test utility functions, do I test container components, do I smoke test everything, do I test only UI for some components, how do I fake API requests for forms, how do I fake API responses for Redux and Sagas. I'll throw an update on here once I got it all figured out.

Welp, anyways, theres my big long talk about my cool new project. By the way, if anyone wants to join in on it, feel free to shoot me a tweet, message on linkedin, or join the slack chat posted somewhere in this wall of text! 