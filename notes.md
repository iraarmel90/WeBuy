### Useful information about the website
Temporary website's name: https://iraarmel90.github.io/WeBuy/

## Whatsapp code to insert in the Webpage

Syntax: https://wa.me/<PHONE_NUMBER>?text=<PRE-FILLED_MESSAGE>
- The "PHONE_NUMBER" should not have "+" sign and not space
- The "PRE_FILED_MESSAGE" is optional and contain a pre-defined message to be sent by the use to "PHONE_NUMBER". Each group of word have to be separed buy " %20 ".
  In the following example, the "PHONE_NUMBER" is "25761234567" and the "PRE_FILLED_MESSAGE" is "Hello I would like" more information
  e.g: <a href="https://wa.me/25761234567?text=Hello%20I%20would%20like%20more%20information" target="_blank">
  Chat with us on WhatsApp
</a>

## To give a link to an image to refer to it by to user/client to the seller

Here is the 3 steps to follow:
1. Give an ID to the image
   As ID is unique in the whole website, you will assign an ID to each picture that you will use use to create
   e.g: <img id="productImage" src="images/product.jpg" alt="Our Product">
2. Add the ID to the website page link as an extension:
   e.g: <a href="https://brst-company.com/index.html#productImage">
  Share this image
    </a>
     In the above example, the image is located in the website "www.brst-company.com" under the page "index.html". Notice that there is a hashtag before mentioning the id name. When clicking on the link, the user or the seller will be directed to the webpage and automatically scrolled to the location of the image
3. Make an image clickable
   To achieve that, we will have to put the <img> tag inside <a> tag
   <a href="https://brst-company.com/index.html#productImage">
  <img id="productImage" src="images/product.jpg" alt="Our Product">
    </a>

## To give a Whatsapp link to an image on HTML with a pre-defined text and a link to that image

e.g: 
<a href="https://wa.me/25761234567?text=Hello%20check%20out%20this%20image:%20https://brst-company.com/index.html#productImage" target="_blank">
  Share on WhatsApp
</a>

## How to receive information filled in Contact HTML form

Normally, you need to set up a server using PHP, nodejs or python. But it is also possible to avoid managing a server and use Googe form