watermark
=========
jquery watermark plugin

A simple lightweight plugin for creating watermark on text input controls.
<br/>
<br/><span style='font-weight:bold; font-size:14pt'>Salient Feature:</span><br/>

1.	Most importantly it does not create a watermark on the control itself.<b> It creates and overlays another control over the original one.</b> This stops confusions during validations. If the text box is blank then you still validate for empty string rather that the <i>watermark text</i>.
2.	Only 1.2 kb in size.

<span style='font-weight:bold; font-size:14pt'>Installation</span>

Include script after the jQuery library (unless you are packaging scripts somehow else):<br/>
<span style='color:maroon; font-size:9pt'> &lt;script src="/path/to/jquery.watermark.js"&gt;&lt;/script&gt;</font>

<span style='font-weight:bold; font-size:14pt'>Usage</span>

Create watermark with default options:<br/>
<b>$(“#controlID”).watermark();</b>

Create watermark with custom options:<br/>
<b>$(“#controlID”).watermark({ color: '#999', bgcolor: 'red', text: 'From Date' });</b>
