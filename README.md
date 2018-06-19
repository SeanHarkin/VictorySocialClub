# Web + Mobile System Design DIGF-6039-001
## Collaborative Coding Project
#### Finlay Braithwaite, Sean Harkin, Qian Yang
### Rationale
For this project we worked with Victory Social Club, a collaborative design community in Toronto, Canada (victorysocialclub.com). We endeavoured to create a web presence that both showcased the work community and their work. The website is directed both at potential clients  as well as potential community members. Extrinsically, as a student group we've used this project to develop our web development technique through the creation of a modular group portfolio site.

### Design Considerations

Victory Social Club has a strong coterie of designers in its community. We wanted to reflect this by creating a strong but simple visual opening. Qian created an SVG sigil that welcomes users to the site. It's simple enough that clicking it is the only apparent option. Users are then transported to the home page where they can learn more about VSC.

Front and centre we wanted to establish what VSC is about. We didn't want the manifesto buried in an about section, we wanted to have this information established near the launch of the site and be unavoidable.

Victory Social Club is the fusion of people in a physical space, so we wanted to showcase both elements to the audience. From the about page, we created buttons pointing towards either people or places. Clicking the small crest at the bottom right returns the user to the home page.

Each person and place is represented by text and image that highlights their work. In a future iteration, these static images will be replaced by video. The text and overlaid visual elements use a common colour, selected manually to compliment the background image while allowing for adequate contrast between text and background.

Throughout the site, we wanted to highlight VSC's logo. In the home page, the SVG logo is visible in its entirety. When the user dives deeper into the site, this is reflected by an enlarging logo, revealing the finer details of its design. Movement throughout the site is suggested by the animated rotation and movement of the logo.

### Technical Implementation

As the community has an ever-evolving roster of creative professionals, we endeavoured to create a site that would allow for the easy addition and removal of people and places.

To fulfill this requirement of modularity, we removed delegated elements of the content and layout of the site from the html and CSS into a JSON file. In creating people and places arrays within the JSON, we scripted the site to respond to the length of these arrays. With this, the number of people or places can be changed easily in the JSON alone.



```
function memberCALC(pageIndex) {let memberCALC = Math.abs(pageIndex % VSC["Victory Social Club"][0].members.length); i = memberCALC; return i;}
```
*Number of members pulled from length of member array from JSON.*

```
$("p").text(VSC["Victory Social Club"][0].members[memberCALC(pageIndex)].p);
```
*Text is set from VSC JSON.*

```
$(".left").text(VSC["Victory Social Club"][0].members[memberCALC(pageIndex + 1)].h1);
$(".right").text(VSC["Victory Social Club"][0].members[memberCALC(pageIndex - 1)].h1);
```
*Left and right buttons are contextual using the CALC modulus functions.*

The JSON contains text elements for each person and place as well as layout and colour information for elements on the page. For example, each record in the JSON specifies where the background logo should be positioned as well as its colour.

```
$(".nav, .content").css({"background-color": mainColor + mainBgOpacityHex});
```
*Concatenating colour with opacity*

Using HEX colours we were able to append opacity values to the end of the string, allowing us to reference a single colour with different opacities for different elements.

Animations in the main site were all accomplished with CSS transition parameters.

### Assignment Requirements

Fulfilling the requirement of the assignment we used:
* jQuery
  * Useful in selecting elements in the DOM and changing their CSS or other parameters. Vanilla ES6 could do the trick as well, and this will be investigated in a future iteration. jQuery allowed for our JSON approach to automate the dynamic nature of our site.
  *  [jquery.com](jquery.com)
* Google Fonts
  * Fonts play a large role in our overall design. We spent a fair amount of time exploring fonts before landing on *Karla* as our final choice. In trying to keep the desing as clean as possible, we only ended up using the single font in our final submission.
  * [fonts.google.com](fonts.google.com)
* Google Analytics
  * The success of this site will be measured with quantity and quality of the connections made. Using Google Analytics, we can measure many metrics about our audience and use that information to build a better site. The current implementation of analytics in our site is currently quite basic, but we endavour to add more functionality in a future iteration.
  * [google.com/analytics](google.com/analytics)
