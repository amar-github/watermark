watermark
=========
jquery watermark plugin

A simple lightweight plugin for creating watermark on text input controls. 

<h1>Salient Feature:</h1>

1.	Most importantly it does not create a watermark on the control itself. <b>It creates and overlays another control over the original one.</b> This stops confusions during validations. If the text box is blank then you still validate for empty string rather that the watermark text.<br/>
2.	Only 1.2 kb in size.

<h1>Installation</h1>

Include script after the jQuery library (unless you are packaging scripts somehow else):

<pre><script src="/path/to/jquery.watermark.js"></script></pre>

<h1>Usage</h1>

<b>Please make sure that you use “id” for the control you want to watermark</b>

Create watermark with default options:<br/>
$(“#controlID”).watermark();
<br/>
Create watermark with custom options:<br/>
$(“#controlID”).watermark({ color: '#999', bgcolor: 'red', text: 'From Date' });
