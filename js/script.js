/***********************************************/
/* COPY PASTE   */
/* **********************************************/

function copyBegin() {
  var text = document.getElementById("code").innerText;
  navigator.clipboard.writeText(text);
  alert('copied');
}

function copyEnd() {
  var text = document.getElementById("css").innerText;
  navigator.clipboard.writeText(text);
  alert('copied');
}


$(function () {
 thisyear = new Date().getFullYear();
 $('#year').text(thisyear);
});
/***********************************************/
/* FAUX ABSOLUTE    */
/* **********************************************/


(function($){
var imgUrl, 
imgWidth, 
imgHeight,
bgFallbackColor, 
generateCode, 
generatePreview, 
generateCss,
imgLoad,
originalWidth,
originalHeight,
newWidth; 


 function update(){ 
    //general settings
    imgUrl = $('#imgUrl').val();
    imgWidth = $('#imgWidth').val(); 
    vmlImgWidth=Math.ceil($('#imgWidth').val()).toFixed(1)*0.75+'pt';
    vmlImgHeight=Math.ceil($('#imgHeight').val()).toFixed(1)*0.75+'pt';
    bgFallbackColor = $('#bgFallbackColor').val();
    imgHeight=$('#imgHeight').val();
    valign=$('#valign').val();
  
    
    generatePreview ='\n'
+'     <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:'+imgWidth+'px;">\n'
+'      <tr>\n'
+'          <td valign="'+valign+'" height="'+imgHeight+'" background="'+imgUrl+'" style="background-color:'+bgFallbackColor+';background-image:url(\''+imgUrl+'\');background-repeat:no-repeat;background-size: cover">\n'
+'            <!--[if gte mso 9]>\n'
+'            <v:image xmlns:v="urn:schemas-microsoft-com:vml"  style="width:'+vmlImgWidth+';height:'+vmlImgHeight+'" src="'+imgUrl+'" alt=""/>\n'
+'            <v:rect stroked="f" filled="t" style="width:'+vmlImgWidth+';height:'+vmlImgHeight+';position:relative;v-text-anchor:'+valign+'" alt="">\n'
+'              <v:fill color="'+bgFallbackColor+'" opacity="0%"/>\n'
+'              <v:textbox inset="0,0,0,0" style="mso-fit-shape-to-text:f">\n'
+'                <![endif]-->\n'
+'                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">\n'
+'                 <tr>\n'
+'                    <td>\n'
+'                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="width:100%">\n'
+'                        <tr>\n'
+'                          <td style="font-family: Arial, sans-serif; font-size:14px;color:#ffffff">\n'
+'                            <p style="margin:0">Lorem ipsum dolor sit amet</p>\n'
+'                          </td>\n'
+'                        </tr>\n'
+'                      </table>\n'
+'                    </td>\n'
+'                  </tr>\n'
+'                </table>\n'
+'                <!--[if gte mso 9]>\n'
+'                <p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office"> </o:p></p>\n'
+'              </v:textbox>\n'
+'            </v:rect>\n'
+'            <![endif]-->\n'
+'          </td>\n'
+'        </tr>\n'
+'        </table>\n'

    generateCode = '&lt;table role=&quot;presentation&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; style=&quot;max-width:'+imgWidth+'px;&quot;&gt;<br/>&lt;tr&gt;<br/>   &lt;td valign=&quot;'+valign+'&quot; height=&quot;'+imgHeight+'&quot; background=&quot;'+imgUrl+'&quot; style=&quot;background-color:'+bgFallbackColor+';background-image:url(\''+imgUrl+'\');background-repeat:no-repeat;background-size: cover&quot;&gt;<br/>     &lt;!--[if gte mso 9]&gt;<br/>     &lt;v:image xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot;  style=&quot;width:'+vmlImgWidth+';height:'+vmlImgHeight+'&quot; src=&quot;'+imgUrl+'&quot; alt=&quot;&quot;/&gt;<br/>     &lt;v:rect stroked=&quot;f&quot; filled=&quot;t&quot; style=&quot;width:'+vmlImgWidth+';height:'+vmlImgHeight+';position:relative;v-text-anchor:'+valign+'&quot; alt=&quot;&quot;&gt;<br/>       &lt;v:fill color=&quot;'+bgFallbackColor+'&quot; opacity=&quot;0%&quot;/&gt;<br/>       &lt;v:textbox inset=&quot;0,0,0,0&quot; style=&quot;mso-fit-shape-to-text:f&quot;&gt;<br/>         &lt;![endif]--&gt;<br/>         &lt;table align=&quot;center&quot; width=&quot;100%&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot;&gt;<br/>        &lt;!-------------YOUR CONTENT HERE--------------------------&gt;<br/>         &lt;/table&gt;<br/>         &lt;!--[if gte mso 9]&gt;<br/>         &lt;p style=&quot;margin:0;mso-hide:all&quot;&gt;&lt;o:p xmlns:o=&quot;urn:schemas-microsoft-com:office:office&quot;&gt; &lt;/o:p&gt;&lt;/p&gt;<br/>       &lt;/v:textbox&gt;<br/>     &lt;/v:rect&gt;<br/>     &lt;![endif]--&gt;<br/>   &lt;/td&gt;<br/> &lt;/tr&gt;<br/> &lt;/table&gt;' ;
    $('#preview').html(generatePreview);
    $('#code').html(generateCode);   

}update();
 $(document).ready(function(){
    imgLoad = $("<img/>");
    imgLoad.attr('src', imgUrl);
    imgLoad.on("load", function () {
    originalHeight = this.height;  
    originalWidth=this.width;
    update();
    });
})

$(document).on('change','#imgWidth',function(){
     originalWidth = imgLoad[0].width;
    originalHeight = imgLoad[0].height;
    originalHeight = (originalHeight / originalWidth) * $('#imgWidth').val();
    update();
});

$( "input:not('#imgWidth'), select" ).on('change',function() {
  update();
});

})(jQuery);
