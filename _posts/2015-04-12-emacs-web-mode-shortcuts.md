---
layout: post
title: EMACS web-mode 快捷键
---

web-mode.el是一个非常好用的HTML文档编辑工具。
HTML文档包括javascript, html, css。
由于快捷键太容易忘记了，在这备份一下。

<!--more-->

### [web-mode官网](http://www.web-mode.org)

### General
+ `M-;` comment / uncomment line(s)
+ `C-c C-f` toggle folding on a tag/block
+ `C-c C-i` indent entire buffer
+ `C-c C-m` mark and expand
+ `C-c C-s` insert snippet
+ `C-c C-w` toggle display of invalid whitespaces

___

### DOM
+ `C-c C-d a` replace apostrophes(替换撇号、省略号)
+ `C-c C-d d` show tag mismatch
+ `C-c C-d e` replace HTML entities
+ `C-c C-d n` normalize
+ `C-c C-d q` replace dumb quotes
+ `C-c C-d t` traverse dom tree
+ `C-c C-d x` xpath

___

### Block
+ `C-c C-b b` block beginning
+ `C-c C-b c` block close
+ `C-c C-b e` block end
+ `C-c C-b k` block kill
+ `C-c C-b n` next block
+ `C-c C-b p` previous block
+ `C-c C-b s` block select

___

### HTML element
+ `C-c C-e` / element close
+ `C-c C-e a` select element content
+ `C-c C-e b` element beginning
+ `C-c C-e c` element clone
+ `C-c C-e d` child element (down)
+ `C-c C-e e` element end
+ `C-c C-e f` toggle folding on children
+ `C-c C-e i` element insert
+ `C-c C-e k` element kill
+ `C-c C-e m` mute blanks between children
+ `C-c C-e n` next element
+ `C-c C-e p` previous element
+ `C-c C-e r` rename element
+ `C-c C-e s` select element
+ `C-c C-e t` transpose element
+ `C-c C-e u` parent element (up)
+ `C-c C-e v` element vanish
+ `C-c C-e w` wrap element

___

### HTML tag
+ `C-c C-t a` sort attributes
+ `C-c C-t b` tag beginning
+ `C-c C-t e` tag end
+ `C-c C-t m` fetch matching tag
+ `C-c C-t n` next tag
+ `C-c C-t p` previous tag
+ `C-c C-t s` select tag

___

### HTML attribute
+ `C-c C-a b` attribute beginning
+ `C-c C-a e` attribute end
+ `C-c C-a i` attribute insert
+ `C-c C-a k` attribute kill
+ `C-c C-a n` attribute next
+ `C-c C-a p` attribute previous
+ `C-c C-a s` attribute select
+ `C-c C-a t` attribute transpose

___
