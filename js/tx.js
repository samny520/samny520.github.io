   /* 鼠标特效 */ 
    var a_idx = 0; 
    var b_idx = 0; 
    /*   文字和颜色数组 */
    var a = new Array("清水", "Samny", "我爱你","小哥哥","小姐姐","大神","太帅了！","NB","英俊","潇洒","可爱" ); 
    var b = new Array("#FF0000","#FF7F00"," #FFFF00","#00FF00","#00FFFF","#0000FF","#8B00FF","#FF0000","#FF7F00"," #FFFF00","#00FF00","#00FFFF","#0000FF","#8B00FF");
    jQuery(document).ready(function($) { 
        $("body").click(function(e) { 
           
            var $i = $("<span/>").text(a[a_idx]); 
              a_idx=parseInt(11*Math.random()); //文字随机数
              b_idx=parseInt(10*Math.random()); //颜色随机数
            var x = e.pageX, 
            y = e.pageY; 
            $i.css({ 
                "z-index": 999, 
                "font-size":"1.3em",            //字体大小
                "top": y - 20, 
                "left": x, 
                "position": "absolute", 
                "font-weight": "bold", 
                "color": b[b_idx] 
            }); 
            $("body").append($i); 
            $i.animate({ 
                "top": y - 180, 
                "opacity": 0 
            }, 
            1500, 
            function() { 
                $i.remove(); 
            }); 
        }); 
    }); 