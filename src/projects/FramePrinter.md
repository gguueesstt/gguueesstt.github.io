---
layout: page.njk
title: DIY frame by frame 16mm printer
image: /imgs/IMG_4528copy.jpg
description: For printing digital moving images files onto film (and soundtrack)
tags: projects
order: 4
permalink: /frameprinter/
---


I've been experimenting with exposing digital moving image files to film frame by frame, using my phone and an enlarger lens. It has been a real pain to get this close to working, but it'll be worth it as it lets you print exposures into the soundtrack area! It also means, with some careful calibration, you can get rid of the 24hz frameline pulse. Although I haven't quite managed this yet as you can see from the film strip pictures towards the end of this page. 

![Enlarger setup](/imgs/IMG_4528copy.jpg)

Above is an image of the setup, although this one is using an older Touch Designer patch (which is resolution-limited in the free version).  
Below is a newer pure data patch, that is free to use and share. You can find it here: [https://github.com/gguueesstt/Frame-printer/](https://github.com/gguueesstt/Frame-printer/)

![PdPatch](/imgs/PD_Screenshot.png)

<div style="display: flex; gap: 10px; justify-content: center; align-items: center;">
  <img src="/imgs/enlarger3site.jpg" alt="Image 1" width="200">
  <img src="/imgs/enlarger4site.jpg" alt="Image 2" width="200">
  <img src="/imgs/enlarger6site.jpg" alt="Image 3" width="200">
</div>

I am still figuring out the best way of shifting the film frame by frame. One day I will build a stepper motor transport mechanism, but for now, I am using an old piece of 16mm film equipment that I inherited from Hogge ([nachleben film lab](https://www.nachleben.org.uk/)) when me and a friend moved into his studio. This piece of metal is really useful, as it uncovers the gate with a little room but not too much (which saves me from too much fogging). It also uncovers a few perfs, allowing me to shift the frames along with my perf grabber (A knob glued to a PCB, with a 1 pin header soldered to it). 
This chance piece of film transport has inspired some plans for future lasercut hand > driven transports, which I'm working on at the moment. Ideally I would be 3D printing enclosed daylight reel holders, so that the only light that reaches the film is on the currently bared frame. But I'm a little way off from that. 

<div style="display: flex; gap: 10px; justify-content: center; align-items: center;">
  <img src="/imgs/IMG_4544copy.jpeg" alt="Image 1" width="400">
  <img src="/imgs/IMG_4547copy.jpeg" alt="Image 2" width="400">
</div>

<div style="display: flex; gap: 10px; justify-content: center; align-items: center;">
  <img src="/imgs/IMG_4550copy.jpeg" alt="Image 1" width="400">
  <img src="/imgs/IMG_4551copy.jpg" alt="Image 2" width="400">
</div>

The bottom two images are test strips from the [EXCITER](gguueesstt.github.io/projects/exciter/) series, made from scans of moirée patterns from [this book](https://www.goodreads.com/book/show/2446119.Optical_Designs_in_Motion_with_Moire_Overlays)
