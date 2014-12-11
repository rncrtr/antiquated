#Antiquated Inspector
###Inspect CSS in older browsers

###What? Why?
I do a lot of IE8 development. For some reason, there don't seem to be decent inspector tools out there (that I have found anyway). Because of this, I decided to create something that would help me day to day. If it helps you too, peachy. If not, peachless. Either way, I use this even in Chrome because it is faster to hold SHIFT than to right-click Inspect or remember the keyboard shortcut. Hopefully you are as lazy as I am. It is what makes a programmer good. Not wanting to do extra work when there is a computer to do it for us.

##Getting Started

Include the antiquated.js in your page, preferrably in the head tags. Feel free to copy the code below into your page.
NOTE: Antiquated requires jQuery 1.2.6+. If jQuery isn't present in your page, it will include it for you automatically.

```
<head>

...
	<script type="text/javascript" src="path/to/antiquated.js"></script>
...

</head>
```

##Usage

Hold down SHIFT, and mouseover an element you want to inspect. You'll see the very blue inspector show up near your mouse. You can let go of SHIFT, and the inspector will sit there patiently like a good dog so you can copy a selector or ponder deeper with furrowed brow what you've learned. Works well in IE8 and 9. And modern browsers like Chrome. Enjoy...hopefully.

##Changing that horrible color...
Some people will not appreciate my insane love for #0094FF (cerulean blue). If so, you can go into the antiquated.js file and change the hex code if you like. No harm no foul. Don't expect the Smurfs to like you anymore.

##Improvements
If I have overlooked something obvious, or should add something less obvious, and you think of it, by all means, let me know! You can email me at ryan at antiquated.in, or simply submit a pull request with your ideas. Thanks! 