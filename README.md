## Infos
This portfolio is meant to be online at [guerriclebihan.com](https://www.guerriclebihan.com). The specificity of it is that it use the free tier of OVH, meaning it is entirely static and client-side website. All things that will be used are html, css and client-side js.

## Architecture
### Sites
 - guerriclebihan.com : the english website version, at the top right there's a link to go to the french version
 - guerriclebihan.fr : the french website version, at the top right there's a link to go to the english version

### Site construction
 - Headers will be simples contact links, and a classic "about me" section, and a dark/light them functionality
 - Main content will be a vignet list of my projects, certifications and accounts that can be filtered by job. Clicking on it blurs the screen, and shows a popup with more infor on it

## Adding new content
The design of the website has been made to make it easy to add vignettes. To do so, you can go to js/data.js<br>
From here, you can add or delete vigette. Each json object in the array is a single vignette. It follows the following structure :
```json
{
   "title": "<vignette title>",
   "type": "<a way to group vignettes>",
   "img": "<image stored in img folder>",
   "filters": ["<filter 1>", "<filter 2>"],
   "content": {
      "all": "<default popup html content>",
      "<filter1>": "<popup html content that will apear for filter 1 only (optional)>"
   },
   "links": "<define a link only if type is 'account' (this type do not need 'content' parameter)>"
}
```