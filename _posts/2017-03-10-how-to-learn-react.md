---
title: How To Learn React
date: 2017-03-10 23:21
subtitle: A post on some good resources to learn ReactJS!
categories: blog
thumb: https://www.syncano.io/blog/content/images/2016/02/reactjs.jpg
---
I always had trouble finding the best resources to learn new stuff. With the internet it is so hard to find the \"correct\" most up to date tutorial because of the vast amount of resources, and the newer, up to date tutorials usually being clouded over by the established tutorials and with a fast moving ecosystem like the one around JavaScript, the established tutorials might be out of date, and could possibly leave you hanging. So I figured, I would put the best tutorials that I used, that have the most accurate, up to date information!

Introducing...

# how to learn react

This article is intended for anyone who is new to React or just trying to learn newer features. Whether you are from other frameworks or a JavaScript beginner looking to learn a framework these resources will be of benefit to you! _This is not intended for a complete programming beginner, you should have some previous knowledge of JavaScript._ The list will go from top to bottom in an order of beginner to advanced, so whether you want to have a fresh start with React, or you just want to learn some newer features of beta releases or ES6, you are in the right place!

There are some tutorials in here that cover React/Redux aswell, I figured even though this was "Learn React", React and Redux tend to go hand in hand and either way knowledge of a state container and how they work and integrate is good to have when working with React whether you choose Flux, Redux, Mobx etc.
Lets get started...


## [ReactJS Fundamentals with Tyler McGinnis](https://online.reacttraining.com/p/reactjsfundamentals)

![ReactJS Fundamentals thumbnail](https://d6xfpzo6h49n1.cloudfront.net/pRZzfb6H_zSdVmf-z7AfmlQ8IPM=/fit-in/705x0/https://d2vvqscadf4c1f.cloudfront.net/Ua3WUzOkTYN9c7CelZXA_reactjs-fundamentals.png)

I mean it is right in the title... The best way to learn something new, is to go step by step through the fundamentals of React. Off the bat you learn about JavaScript data manipulation which is heavily used in React then you dive into the React development environment. The course takes you through every single basic necessity of React development such as React's component lifecycle, stateless components, container vs presentational components and even a bit on how to use Axios for asynchronous API calls.

I really enjoy this course and it is one of the two courses I suggest to people who are completely new to React. The one thing I am not a fan of in this course, is the fact that it is not taught using newer ES6 classes which can make it a bit complicated when switching over from ```React.createClass({})``` to ES6 classes. Other than that, the course is very well explained and every little detail is covered thoroughly. The mix between videos, text and actual coding is very nice because you don't feel like you are just copying some code from a video. The fact that he also dives into some more basic JavaScript data manipulation is also very nice because if you don't know JavaScript that well, dealing with maps, reduce, slice and splice can all get kind of confusing sometimes.

## [React Rapid Course with LearnCode.academy](https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)

![React Rapid Course thumbnail](https://i.ytimg.com/vi/MhkGQAoc7bc/maxresdefault.jpg)

This course by LearnCode.academy is a really great introduction course to React. The course starts off with the super basics of setting up a \"Hello World\" application with the beginnings of setting up webpack and babel, and it goes all the way through state, react-router, and composition. Midway through the series you start to be introduced to flux and flux stores, how to make asynchronous requests with flux and how to handle memory leaks.

This is a really great introduction course to React, every concept is really well explained and demonstrated. This playlist is a great way to learn React as you are learning best practices and ES6 code right from the start aswell as proper folder structure (which really is a big deal). I learned React using the ```<script></script>``` tags in the HTML document with ```React.createClass({})``` and it really mad it a bit more complicated to switch over to the ES6 standard. The best way to learn something is always to learn it the way it is currently used in production, and that is why this is usually the first course I recommend people to learn when learning React.

## [Learn Redux with Wes Bos](https://www.youtube.com/playlist?list=PLu8EoSxDXHP5uyzEWxdlr9WQTJJIzr6jy)

![Learn Redux thumbnail](https://i.ytimg.com/vi/sAzh8t1H0p4/maxresdefault.jpg)

Wes is known to be a very good teacher and has plenty of courses whether paid or free. This course is labelled as a Redux course, and in some spots labelled as Advanced, but it is more a middle ground. In the 20 part video series you go from the basics of setting up a webpack environment to learning about how to think in components, then you jump right into Redux, and how stores work. Wes explains stores, reducers, state, dispatch, dev tools and many other essential React/Redux concepts very well and it is a very easy to follow series. In the end you build a Instagram style application called \"Reduxstagram\", fancy right?

I really enjoyed this course becaused it helped me solidify my knowledge of Redux as everything is VERY well explained and Wes goes through each concept thouroughly and slow enough that you can figure out whats going on, but you don't feel like you're in a class lecture. Now you may be thinking, oh well that was quite a jump from React basics to full on application building and learning Redux. Well really its not that bad. If you follow both series above and grasp all the concepts of them, maybe follow them a second or third time through, you will have built full on applications with React, and there is a lot of repetition through all of them which will help nail in the React knowledge. Repetition is the best way to learn in my opinion, and through all of these, you will pick up new concepts here and there, but a lot of it will be building the same foundation over and over, which really is the hardest part about React.

## [React Essentials with Rem Zolotykh](https://www.youtube.com/watch?v=nSGZEQa5C_c)

![React Essentials thumbnail](http://remzolotykh.net/content/images/2016/11/00-thumbnail-1.png)

Rem has a lot of experience building web applications, if you look through his video history he has been making screencasts and teaching for a few years now. This series is a newer series of his but it is going to be great and the first video shows it. This series will be going more in depth about the little things that might have been skimmed over if the previous videos linked here, which is going to definitely help. The best part about this series is the fact that Rem always uses the most recent ES6 syntax, as well as the most recent React modules to make sure you are always up to date on your knowledge.

Rem has been my go to for learning more advanced or newer React/Redux concepts. His videos can be a bit quick, and you will probably have to pause and reverse a bit to grasp the concepts, but I can't explain well enough how good the knowledge you gain is, and how good the videos are. The rest of this post will most likely be his videos, and I swear I have no partnership (but maybe we should ;)), his videos are just that great and I think you just have to watch them for yourself.

## [Crud with Redux with Rem Zolotykh](https://www.youtube.com/watch?v=h1ivekTEC2M)

![Crud with Redux thumbnail](http://remzolotykh.net/content/images/2016/11/thumbnail.png)

The Crud with Redux series with Rem is another great series using the latest features of the latest releases of React, aswell as the most up to date ES6 syntax. Rem follows very nice standards and always codes with best practices. This series you will build a games listing application ontop of React and Redux, and you also dive into a little bit of Node, Express and MongoDB action for building a backend API (he keeps it super simple though, so don't be scared if you haven't build APIs before). You will also cover asynchronous actions with Redux and state management. See the repetition?

Again, Rem is one of my favorite \"internet teachers\" and his videos have helped me so much. I am not even going to explain why this series and why he is great, because you can read the second paragraph of React Essentials and it will basically explain the same thing. But one thing I will add, if you are inexperienced with building APIs, but you want to sort of dive into it, or even just get a base knowledge of integrating an API with your React app, this is the place to do it!

## [Developing with React and Redux with Rem Zolokytkh](https://www.youtube.com/watch?v=5oiXG9f6GO0&t=4s)

![Developing with React and Redux thumbnail](https://i.ytimg.com/vi/5oiXG9f6GO0/maxresdefault.jpg)

This series is a large series, and it covers a lot of information VERY fast. In this series Rem takes you from the basics of setting up the React dev environment, and you finish of with a full application with user registration, login, authentication and the beginnings of creating teams for a tournement style application. The course covers everything you need to know about React, Redux and even the backend using Node, Express and PostgresQL to build a full stack application.

This really is the big bad final boss. This series is big, fast and covers a lot of information, this is definitely a series you will watch more than once. (Here we go again) Rem is an amazing teacher and covers all the information well, the only problem with this series is he does it VERY fast. If you have watched all the series, and built all the applications up to here, you are ready for this course I promise. This is the series that taught me a LOT of what I know about React, Redux and back-end API construction, and following this series has given me the knowledge and confidence to teach others React, and go out and get paid to build React applications.

### That's it really...

This article did kind of make a jump midway through, I understand that some people will be thinking, \"Hey man, you said this was beginner to advanced, but you kind of just skipped the middle?\" The way I think of it, how do you really define the middle? What is the middle going to be, I mean after the first two series, you have ALL the basis of React fundamentals including some Flux concepts and you've built two applications with React, what else do you really need? After that you get into Redux, and then you build from there, you will finish these series with 4 React applications fully built, including 2 that are built ontop of your own custom made APIs. After that you are 100% ready to go and create more and more applications and you will have the basis of React knowledge to go out and find some more resources that benefit you.

Some people may have more video series that they think should have been on this list or whatever else, again, this is just the list of videos that I followed to learn React (in backwards order actually, I learn things a bit weird) and these are also the videos that I send to friends when they want to invest some time into learning React. If you have a genuine issue with one of the videos, or really really want a video up here, leave it in the comments and it may be added to the list.

Also, this is the only text document I have ever written that was more than 1500 words, we will finish this off with a solid 1920 words!

If you enjoyed this article feel free to share it using the buttons below, and follow me on [twitter](https://twitter.com/bkd705) to keep up to date with the latest posts!