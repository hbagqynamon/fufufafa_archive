# fufufafa_archive
#### I have saved all posts by fufufafa at kaskus forum (https://www.kaskus.co.id/@fufufafa/) into JSON file.
## Sample:
```
{
      "href": "/post/51f198751ed719ea22000004/?ref=profile&med=post",
      "ref": "51f198751ed719ea22000004",
      "date": "26-07-2013 04:28",
      "threadTitle": "&#1769; &#1758;&#1758; &#1769; Anthology Forum Musik (Share your YM, FB, FS, dll) &#1769; &#1758;&#1758; &#1769;",
      "comment": "Prime ID: Raka Gnarly (lupa password, gak bisa log in) Nama: Raka Twitter: @rkgbrn",
      "fullComment": "Prime ID: Raka Gnarly (lupa password, gak bisa log in)  Nama: Raka  Twitter: @rkgbrn  ",
      "dateJS": "2013-07-25T21:28:00.000Z",
      "url": "https://www.kaskus.co.id/show_post/51f198751ed719ea22000004"
}
```
## Properties:
#### - href: path to the thread and automatically scroll to post, it can be prefixed with https://www.kaskus.co.id to access it
#### - ref: hash reference to the post, some posts doesn't have hash reference, it replaced with ???[date the post]
#### - date: date of the post in UTC+07:00 timezone
#### - threadTitle: title of the thread
#### - comment: post by fufufafa, it's not including full post because it's retrieved from fufufafa profile page
#### - fullComment: full post by fufufufa. Some posts maybe have been deleted, I added information '---deleted---' into fullComment field.
#### - dateJS: date with JSON format
#### - url: full url to individual post (if it was not deleted)
## Note:
#### Some posts may have quote from other user, I put [Quote: ........ ] for the quote from other user. So it was not actually written by fufufafa.
###
### Thank you
