import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Code2, 
  FileText, 
  Hash, 
  Type, 
  Image, 
  Table, 
  List, 
  Link, 
  Mail, 
  Layout, 
  Palette, 
  Settings, 
  Volume2, 
  Monitor,
  Brackets,
  Tags,
  AlignLeft,
  Globe
} from 'lucide-react';

const HTMLNotesWebsite = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'HTML Overview', icon: Globe },
    { id: 'basic-tags', title: 'Basic Tags', icon: Tags },
    { id: 'elements', title: 'Elements', icon: Brackets },
    { id: 'attributes', title: 'Attributes', icon: Hash },
    { id: 'formatting', title: 'Text Formatting', icon: Type },
    { id: 'phrase-tags', title: 'Phrase Tags', icon: AlignLeft },
    { id: 'meta-tags', title: 'Meta Tags', icon: FileText },
    { id: 'comments', title: 'Comments', icon: Code2 },
    { id: 'images', title: 'Images', icon: Image },
    { id: 'tables', title: 'Tables', icon: Table },
    { id: 'lists', title: 'Lists', icon: List },
    { id: 'links', title: 'Text Links', icon: Link },
    { id: 'image-links', title: 'Image Links', icon: Image },
    { id: 'email-links', title: 'Email Links', icon: Mail },
    { id: 'frames', title: 'Frames', icon: Layout },
    { id: 'iframes', title: 'IFrames', icon: Monitor },
    { id: 'blocks', title: 'Blocks', icon: Layout },
    { id: 'backgrounds', title: 'Backgrounds', icon: Palette },
    { id: 'colors', title: 'Colors', icon: Palette },
    { id: 'fonts', title: 'Fonts', icon: Type },
    { id: 'forms', title: 'Forms', icon: Settings },
    { id: 'multimedia', title: 'Multimedia', icon: Volume2 },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="text-center py-8">
              <h1 className="text-4xl font-bold mb-4 text-primary">HTML</h1>
              <h2 className="text-2xl text-muted-foreground mb-6">HyperText Markup Language</h2>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                A comprehensive guide to web development fundamentals
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  About HTML
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  HTML stands for Hyper Text Markup Language, which is the most widely used language on Web to develop web pages.
                </p>
                <p>
                  HTML was created by Berners-Lee in late 1991 but "HTML 2.0" was the first standard HTML specification which was published in 1995. HTML 4.01 was a major version of HTML and it was published in late 1999. Though HTML 4.01 version is widely used but currently we are having HTML-5 version which is an extension to HTML 4.01, and this version was published in 2012.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Basic HTML Document Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>HTML Tags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>HTML tags are keywords surrounded by angle brackets like &lt;tagname&gt;</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>HTML tags normally come in pairs like &lt;p&gt; and &lt;/p&gt;</li>
                  <li>The first tag is the start tag, the second tag is the end tag</li>
                  <li>The end tag is written like the start tag, but with a forward slash before the tag name</li>
                  <li>Some tags are self-closing like &lt;br /&gt; and &lt;img /&gt;</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The &lt;!DOCTYPE&gt; Declaration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The &lt;!DOCTYPE&gt; declaration represents the document type, and helps browsers to display web pages correctly. 
                  It must only appear once, at the top of the page (before any HTML tags). The &lt;!DOCTYPE&gt; declaration is not case sensitive.
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <code>&lt;!DOCTYPE html&gt;</code>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'basic-tags':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Basic HTML Tags</h2>

            <Card>
              <CardHeader>
                <CardTitle>Heading Tags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>HTML offers six levels of headings. &lt;h1&gt; is the most important heading, &lt;h6&gt; is the least important.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Paragraph Tag</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The &lt;p&gt; tag offers a way to structure your text into different paragraphs.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>This is a paragraph of text.</p>
<p>This is another paragraph of text.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Line Break Tag</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Use the &lt;br /&gt; tag to force a line break within a text flow.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>This is line one.<br />This is line two.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Centering Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>You can use &lt;center&gt; tag to center content (deprecated, use CSS instead):</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<center>
    <p>This text is centered.</p>
</center>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Horizontal Lines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The &lt;hr&gt; tag creates a horizontal line from the current position to the right margin.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>This is paragraph one.</p>
<hr />
<p>This is paragraph two.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preserve Formatting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The &lt;pre&gt; tag preserves the exact formatting of the source text:</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<pre>
function testFunction( strText ){
    alert (strText)
}
</pre>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nonbreaking Spaces</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Use &amp;nbsp; to insert nonbreaking spaces that prevent text from breaking across lines:</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>An example of this technique appears in the movie 
"12&nbsp;Angry&nbsp;Men."</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'elements':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">HTML Elements</h2>

            <Card>
              <CardHeader>
                <CardTitle>What is an HTML Element?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>An HTML element is defined by a starting tag. If the element contains other content, it ends with a closing tag.</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-2">Start Tag</th>
                        <th className="border border-border p-2">Content</th>
                        <th className="border border-border p-2">End Tag</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-2">&lt;p&gt;</td>
                        <td className="border border-border p-2">This is paragraph content.</td>
                        <td className="border border-border p-2">&lt;/p&gt;</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">&lt;h1&gt;</td>
                        <td className="border border-border p-2">This is heading content.</td>
                        <td className="border border-border p-2">&lt;/h1&gt;</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">&lt;div&gt;</td>
                        <td className="border border-border p-2">This is division content.</td>
                        <td className="border border-border p-2">&lt;/div&gt;</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">&lt;br /&gt;</td>
                        <td className="border border-border p-2"></td>
                        <td className="border border-border p-2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>There are some HTML elements which don't need to be closed, such as &lt;img.../&gt;, &lt;hr /&gt; and &lt;br /&gt; elements. These are known as void elements.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>HTML Tag vs. Element</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>An HTML element is defined by a starting tag. If the element contains other content, it ends with a closing tag.</p>
                <p>For example, &lt;p&gt; is starting tag of a paragraph and &lt;/p&gt; is closing tag of the same paragraph but &lt;p&gt;This is paragraph&lt;/p&gt; is a paragraph element.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nested HTML Elements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>It is very much allowed to keep one HTML element inside another HTML element:</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<!DOCTYPE html>
<html>
<head>
    <title>Nested Elements Example</title>
</head>
<body>
    <h1>This is <i>italic</i> heading</h1>
    <p>This is <u>underlined</u> paragraph</p>
</body>
</html>`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'attributes':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">HTML Attributes</h2>

            <Card>
              <CardHeader>
                <CardTitle>Introduction to Attributes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>HTML tags can have attributes, which are extra bits of information. An attribute is used to define the characteristics of an HTML element and is placed inside the element's opening tag.</p>
                <p>All attributes are made up of two parts: a <strong>name</strong> and a <strong>value</strong>:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>The <strong>name</strong> is the property you want to set</li>
                  <li>The <strong>value</strong> is what you want the value of the property to be set and always put within quotations</li>
                </ul>
                
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p align="left">This is left aligned</p>
<p align="center">This is center aligned</p>
<p align="right">This is right aligned</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Core Attributes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The four core attributes that can be used on the majority of HTML elements are:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Id</strong> - Uniquely identifies an element</li>
                  <li><strong>Title</strong> - Provides additional information about the element</li>
                  <li><strong>Class</strong> - Associates an element with a style sheet</li>
                  <li><strong>Style</strong> - Allows inline CSS styling</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The Id Attribute</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The id attribute can be used to uniquely identify any element within an HTML page. There are two primary reasons to use an id attribute:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>If an element carries an id attribute as a unique identifier, it is possible to identify just that element and its content</li>
                  <li>If you have two elements of the same name within a Web page, you can use the id attribute to distinguish between elements</li>
                </ul>
                
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p id="html">This para explains what is HTML</p>
<p id="css">This para explains what is CSS</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The Title Attribute</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The title attribute gives a suggested title for the element. The behavior of this attribute will depend upon the element that carries it, although it is often displayed as a tooltip when cursor comes over the element.</p>
                
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<h3 title="Hello HTML!">Titled Heading Tag Example</h3>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The Class Attribute</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The class attribute is used to associate an element with a style sheet, and specifies the class of element. The value may also be a space-separated list of class names:</p>
                
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`class="className1 className2 className3"`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The Style Attribute</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The style attribute allows you to specify Cascading Style Sheet (CSS) rules within the element:</p>
                
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p style="font-family:arial; color:#FF0000;">Some text...</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Internationalization Attributes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">The dir Attribute</h4>
                <p>The dir attribute allows you to indicate to the browser about the direction in which the text should flow:</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border mt-2 mb-4">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-2">Value</th>
                        <th className="border border-border p-2">Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-2">ltr</td>
                        <td className="border border-border p-2">Left to right (the default value)</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">rtl</td>
                        <td className="border border-border p-2">Right to left (for languages such as Hebrew or Arabic)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="font-semibold">The lang Attribute</h4>
                <p>The lang attribute allows you to indicate the main language used in a document. The values are ISO-639 standard two-character language codes.</p>

                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<html lang="en">
    <!-- This page is using English Language -->
</html>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Generic Attributes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-2">Attribute</th>
                        <th className="border border-border p-2">Options</th>
                        <th className="border border-border p-2">Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-2">align</td>
                        <td className="border border-border p-2">right, left, center</td>
                        <td className="border border-border p-2">Horizontally aligns tags</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">valign</td>
                        <td className="border border-border p-2">top, middle, bottom</td>
                        <td className="border border-border p-2">Vertically aligns tags within an HTML element</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">bgcolor</td>
                        <td className="border border-border p-2">numeric, hexidecimal, RGB values</td>
                        <td className="border border-border p-2">Places a background color behind an element</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">background</td>
                        <td className="border border-border p-2">URL</td>
                        <td className="border border-border p-2">Places a background image behind an element</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">width</td>
                        <td className="border border-border p-2">Numeric Value</td>
                        <td className="border border-border p-2">Specifies the width of tables, images, or table cells</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2">height</td>
                        <td className="border border-border p-2">Numeric Value</td>
                        <td className="border border-border p-2">Specifies the height of tables, images, or table cells</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'formatting':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">HTML Text Formatting</h2>

            <Card>
              <CardHeader>
                <CardTitle>Bold Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Anything that appears within &lt;b&gt;...&lt;/b&gt; element, is displayed in bold:</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>The following word uses a <b>bold</b> typeface.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Italic Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Anything that appears within &lt;i&gt;...&lt;/i&gt; element is displayed in italicized:</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>The following word uses a <i>italicized</i> typeface.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Underlined Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Anything that appears within &lt;u&gt;...&lt;/u&gt; element, is displayed with underline:</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>The following word uses a <u>underlined</u> typeface.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Strike Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Anything that appears within &lt;strike&gt;...&lt;/strike&gt; element is displayed with strikethrough:</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>The following word uses a <strike>strikethrough</strike> typeface.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monospaced Font</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The content of a &lt;tt&gt;...&lt;/tt&gt; element is written in monospaced font. In a monospaced font, each letter has the same width.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>The following word uses a <tt>monospaced</tt> typeface.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Superscript Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The content of a &lt;sup&gt;...&lt;/sup&gt; element is written in superscript; displayed half a character's height above the other characters.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>The following word uses a <sup>superscript</sup> typeface.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subscript Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The content of a &lt;sub&gt;...&lt;/sub&gt; element is written in subscript; displayed half a character's height beneath the other characters.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>The following word uses a <sub>subscript</sub> typeface.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inserted Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Anything that appears within &lt;ins&gt;...&lt;/ins&gt; element is displayed as inserted text.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>I want to drink <del>cola</del> <ins>wine</ins></p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Deleted Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Anything that appears within &lt;del&gt;...&lt;/del&gt; element, is displayed as deleted text.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>I want to drink <del>cola</del> <ins>wine</ins></p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Larger Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The content of the &lt;big&gt;...&lt;/big&gt; element is displayed one font size larger than the rest of the text.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>The following word uses a <big>big</big> typeface.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Smaller Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The content of the &lt;small&gt;...&lt;/small&gt; element is displayed one font size smaller than the rest of the text.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>The following word uses a <small>small</small> typeface.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grouping Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The &lt;div&gt; and &lt;span&gt; tags are used to group HTML elements:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>&lt;div&gt;</strong> - Defines a division or section (block-level)</li>
                  <li><strong>&lt;span&gt;</strong> - Defines a section in a document (inline)</li>
                </ul>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<div>This is a block-level grouping</div>
<p>This text contains <span>inline grouping</span> within it.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'phrase-tags':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">HTML Phrase Tags</h2>

            <Card>
              <CardHeader>
                <CardTitle>Emphasized Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Anything that appears within &lt;em&gt;...&lt;/em&gt; element is displayed as emphasized text.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>The following word uses a <em>emphasized</em> typeface.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Marked Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Anything that appears with-in &lt;mark&gt;...&lt;/mark&gt; element, is displayed as marked with yellow ink.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>The following word has been <mark>marked</mark></p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Strong Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Anything that appears within &lt;strong&gt;...&lt;/strong&gt; element is displayed as important text.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>The following word uses a <strong>strong</strong> typeface.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Text Abbreviation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>You can abbreviate a text by putting it in opening &lt;abbr&gt; and closing &lt;/abbr&gt; tags.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>My best friend's name is  <abbr title="Abhishek">Abhy</abbr>.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Acronym Element</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The &lt;acronym&gt; element allows you to indicate that the text between &lt;acronym&gt; and &lt;/acronym&gt; tags is an acronym.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>This chapter covers marking up text in <acronym>XHTML</acronym>.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Text Direction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The &lt;bdo&gt; element stands for Bi-Directional Override and it is used to override the current text direction.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>This text will go left to right.</p>
<p><bdo dir="rtl">This text will go right to left.</bdo></p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Special Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The &lt;dfn&gt; element allows you to specify that you are introducing a special term.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>The <dfn>World Wide Web</dfn> is only a part of the Internet.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quoting Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The &lt;blockquote&gt; element is used to contain text which is quoted from another source.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<blockquote>
Everything you need to know about web development.
</blockquote>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Short Quotations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The &lt;q&gt; element is used for shorter quotes that sit within a paragraph.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>Amit is in Spain, <q>I think I am wrong</q>.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Text Citations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The &lt;cite&gt; element is used to indicate where a citation from another source is cited.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>Information in this page is taken from <cite>Web Reference Guide</cite></p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Computer Code</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The &lt;code&gt; element is used to indicate computer code.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>Regular text. <code>This is code.</code> Regular text.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Keyboard Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The &lt;kbd&gt; element is used when you are talking about computers, to indicate text that should be entered by the user.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>Regular text. <kbd>This is inside kbd element</kbd> Regular text.</p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Programming Variables</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The &lt;var&gt; element is used to indicate an instance of a variable or program argument.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p><var>computer</var> = <var>mobile</var> + <var>internet</var></p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Program Output</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The &lt;samp&gt; element is used to indicate sample output from a script or program.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<p>Result produced by the program is <samp>Hello World!</samp></p>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Address Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The &lt;address&gt; element is used to contain an address.</p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
{`<address>
388A, Road No 22, Jubilee Hills -  Hyderabad
</address>`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return <div className="text-center py-20">Select a section from the sidebar to view content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary">HTML Learning Center</h1>
              <p className="text-muted-foreground">Complete HTML Reference & Guide</p>
            </div>
            <Button 
              variant="cyber" 
              className="hidden md:flex"
              onClick={() => window.location.reload()}
            >
              <Code2 className="w-4 h-4 mr-2" />
              HTML
            </Button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="sticky top-[73px] h-[calc(100vh-73px)] w-80 border-r border-border bg-muted/20">
          <ScrollArea className="h-full">
            <div className="p-4">
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-left text-sm rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      {section.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          </ScrollArea>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <ScrollArea className="h-[calc(100vh-73px)]">
            <div className="max-w-4xl mx-auto p-6">
              {renderContent()}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default HTMLNotesWebsite;