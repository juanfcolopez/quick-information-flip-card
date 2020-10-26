# Quick-information-flip-card
--- 

Hi!, maybe you need a card for show information in your website and you don't know how do it. If this is the reason why you are here, you found a card that you can use in two simple steps and put image, title and description along with a flip animation.

This card use tha web-component idea, Do you know what is it? if you don't know it you can learn about it in this [link](https://www.webcomponents.org/introduction). But in simple words it is html that you can use by placing only a custom tag.

# How does this work?
This custom tag contain a lot information about the custom element. In this case is the card. This tag contain the template for the card and has default information, but it can be modified with a few simple steps.

# Before start
- Need a index.html
- Copy both folder of this repository in your work folder.
- Now 60% of the work is done. Easy right?

# Steps
- Open your index.html and paste this line:
```
 <script src="js/flipcard.js"></script>
```
# Now 70% is done. Wow this is too fast right?

- Copy and paste this tag. This contain all magic.
```
 <flip-card></flip-card>
```
# Now F5.
# AMAZING. You already have your card. 

Now is necessary change the information, but how do you do it?

This tag contain 4 different parameters.
- name-object
- back-title
- body
- image

# name-object
This is the main title in the front. If you want change it, you need to do this:
```
 <flip-card name-object="Your Title"></flip-card>
```
and it's done.

# back-title
This is the main title in the back. If you want change it, you need to do this:
```
<flip-card back-title="Example back title"></flip-card>
```
# body
This is the body in the back, here you can add a description for example. And for customize you need to do this:
```
<flip-card body="This is a text for the custom body in this card example."></flip-card>
```      

# image
You can change the image and you can use a url or a path of a image in your project. If you want change it, you need to do this:
```
<flip-card image="/images/purple_bg.png" ></flip-card>
```
or
```
<flip-card image="url" ></flip-card>
```
# And obviously you can change all at the same time:

```
<flip-card name-object="Custom title" back-title="Custom Back title" 
    image="/images/purple_bg.png" body="Hello again! This is a new content for this body, and you can see that is so easy use it."></flip-card>
 ```   
 # And finally you can add any number of cards, these will be added to the side because they are configured with an inline-block and are responsive.
 
 ## you can see the index.html of this repository and see all the changes described in this file.
 # Enjoy them.