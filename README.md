# bresenham-line-plotter
Plots lines on a pixelated grid using Bresenham's line algorithm. Written in p5.js!

------

Created by aythoren 6/12/2023

-----

You can run this project at...
https://openprocessing.org/sketch/1953338
or
https://replit.com/@GargonDoid/Bresenham-Line-Plotter?v=1

-----

Thanks to jeffrythompson.org for collision detection (point-rectangle)

Thanks to mattbatwings for his YouTube video on a multi-line renderer in Minecraft, great explanation!
https://www.youtube.com/watch?v=vfPGuUDuwmo
https://imgur.com/a/2uT7LaV



CHANGELOG!

-----

V1.3
6/14/2023

I lied about V1.2 being the last update. Hopefully this one is.

The janky ui scaling system was really bugging me, so I'm here laying in bed and my brain is all like, 
"just use like a proportion or ratio or whatever it's called" but then it's like
"nah that's too much work and you have to add so many multiplication signs" but THEN
"Awwww but the current system is so bad, just make the proportion/ratio thing's variable name really short!"

So here I am.

Using my windowWidth and windowHeight as a default, I now find your wW and wH and do some division to find out
what I should multiply the UI scaling by.

The scaling system works pretty well aside from the fact that you have to multiply EVERYTHING by the x and y ui
scale factors. I also had to be careful because some things were already scaled (for example: the centered text
uses windowWidth/2 for it's x coordinate, which is already centered, but some of the numbers I hard-coded to
make some y-coordinates better needed to be adjusted.)

Since the canvas size now wasn't perfectly divisble by the default square size, I kind of killed two birds with 
one stone and rounded the canvas size to the nearest square so that none are cut off. Much cleaner! This was 
also going to be an issue if anyone went into the code and made their own square size and saw how bad the graph
line system was lol. Now I look like a good dev!

Conclusion?
It's good enough.

-----

V1.2
6/13/2023

Finished up V1.1

Added different grid presets for different screen resolutions because I'm hoping that people will see this
and not everybody has a big monitor soo
I just hope they don't try to look at this on mobile ;-;

Any small bugfixes before another main update will just be added to 1.2 and this update log
It is likely that this is the last update sooo yeah

But I'll hand this over to some friends and watch as they inevitably uncover a bunch of bugs...
I'll see you then!

-----

V1.1
6/13/2023

Polished up the base program along with a few very cool additions!

Several optimizations all around...
-Clicking on the grid no longer goes through the WHOLE grid and sees if the mouse is on top of any square, 
now it uses the mouse's position to calculate wich square it is on. Much more efficient!
-When plotting the lines, they aren't recalculated EVERY click. Points that have been accounted for will be marked. (This
system went through a few revisions to make it fully compatible with the new plotting modes)

The p5 buttons are ugly and I didn't feel like figuring out how to use/format them, so point/rectangle
collision detection it is! This also make for a kind of janky drawing system but that's ok :)

Clear button clears the grid of all points and lines (as the name implies!)
-Makes use of the function that changes the state of a square, also hid a bug that would prevent certain squares from
turning on, but that was just an inconsistency created because i forgot to reset a variable in grid.clear()

Mode button!!! This was so satisfying when all 3 modes FINALLY worked together. All mode was already in place, but it wasn't
great for making designs. Last mode makes it so that the point created automatilcally links with the last one created, and the now
2nd to last point is shut off from making any more lines. Pairs mode is similar, but both points are prevented from forming links
so that they are only part of one pair.

I did encounter an issue where going back to "all" mode would link the points created while in other modes, but that was fixed by
adding the "shut off" feature mentioned above.

There are a few more slight issues that I will fix, but after that I think I'm going to wrap things up.
I don't really know what inspired me to create this, but now I'm kind of surprised that I was able to follow through with it!
I'll try to think of more fun little projects to do over the summer...

-----

V1.0
6/12/2023

Project finished, did not expect this to only take one day

Click on the grid for lines, the lines join all of the points. Pretty nifty.

Going to polish it up and add a few features
Optimization is also very, very needed if I want larger displays to be reasonable

