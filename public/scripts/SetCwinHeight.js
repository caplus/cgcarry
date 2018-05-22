function SetCwinHeight()
{
var iframeid=document.getElementById("content"); //iframe id
  if (document.getElementById)
  {
   if (iframeid && !window.opera)
   {
    if (iframeid.contentDocument &&
iframeid.contentDocument.body.offsetHeight)
     {
         //ff
       iframeid.height=0; // 加了就解決了
       iframeid.height = iframeid.contentDocument.body.offsetHeight;
     }else (iframeid.Document && iframeid.Document.body.scrollHeight)
     {
         //ie
       iframeid.height = iframeid.Document.body.scrollHeight;
      }
    }
   }
}// JavaScript Document