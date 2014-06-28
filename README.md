watermark
=========
jquery watermark plugin

A simple lightweight plugin for creating watermark on text input controls.
Salient Feature:<br/>

1.	Most importantly it does not create a watermark on the control itself. It creates and overlays another control over the original one. 
a.	This will stop confusions during validations. If the text box is blank then you still validate for empty string rather that the “watermark text”.
2.	Only 1.2 kb in size.

<b>Installation</b>

Include script after the jQuery library (unless you are packaging scripts somehow else):
&lt;script src="/path/to/jquery.watermark.js"&gt;&lt;/script&gt;

Usage
Create watermark with default options:
$ (“#controlID”).watermark();

Create watermark with custom options:
$ (“#controlID”).watermark({ color: '#999', bgcolor: 'red', text: 'From Date' });
