!function(a){function b(a,b){return(m?b.originalEvent.touches[0]:b)["page"+a.toUpperCase()]}function c(b,c,d){var g=a.Event(c,t);a.event.trigger(g,{originalEvent:b},b.target),g.isDefaultPrevented()&&b.preventDefault(),d&&(a.event.remove(r,p+"."+q,e),a.event.remove(r,o+"."+q,f))}function d(d){var k=d.timeStamp||+new Date;i!=k&&(i=k,s.x=t.x=b("x",d),s.y=t.y=b("y",d),s.time=k,s.target=d.target,t.orientation=null,g=!1,h=!1,j=setTimeout(function(){h=!0,c(d,"press")},a.Finger.pressDuration),a.event.add(r,p+"."+q,e),a.event.add(r,o+"."+q,f),u.preventDefault&&d.preventDefault())}function e(d){return t.x=b("x",d),t.y=b("y",d),t.dx=t.x-s.x,t.dy=t.y-s.y,t.adx=Math.abs(t.dx),t.ady=Math.abs(t.dy),(g=t.adx>u.motionThreshold||t.ady>u.motionThreshold)?(clearTimeout(j),t.orientation||(t.adx>t.ady?(t.orientation="horizontal",t.direction=t.dx>0?1:-1):(t.orientation="vertical",t.direction=t.dy>0?1:-1)),d.target!==s.target?(d.target=s.target,void f.call(this,a.Event(o+"."+q,d))):void c(d,"drag")):void 0}function f(a){var b,d=a.timeStamp||+new Date,e=d-s.time;if(clearTimeout(j),a.target===s.target){if(g||h)e<u.flickDuration&&c(a,"flick"),t.end=!0,b="drag";else{var f=k===a.target&&d-l<u.doubleTapInterval;b=f?"doubletap":"tap",k=f?null:s.target,l=d}c(a,b,!0)}}var g,h,i,j,k,l,m="ontouchstart"in window,n=m?"touchstart":"mousedown",o=m?"touchend touchcancel":"mouseup mouseleave",p=m?"touchmove":"mousemove",q="finger",r=a("html")[0],s={},t={},u=a.Finger={pressDuration:300,doubleTapInterval:300,flickDuration:150,motionThreshold:5};a.event.add(r,n+"."+q,d)}(jQuery),function(a){var b=function(){var b=this,c=0,d=!1,e=0,f=0,g=!1;b.settings={block_text:!0,inner_width:!1,theme:"light",flick_animation:"transition-slide",auto_flick:!0,auto_flick_delay:10,dot_navigation:!0,dot_alignment:"center",arrows:!0},b.init=function(f,h){b.settings=a.extend(b.settings,h),d=f,d.addClass("flickerplate"),d.find("ul:first").addClass("flicks"),d.find("li:first").addClass("first-flick"),d.attr("data-flick-position",c);var i=d.data("flick-animation");i&&i.length>0?("transform-slide"==i?b.settings.flick_animation="transform-slide":"transition-slide"==i?b.settings.flick_animation="transition-slide":"jquery-slide"==i?b.settings.flick_animation="jquery-slide":"scroller-slide"==i&&(b.settings.flick_animation="scroller-slide"),d.addClass("animate-"+i)):d.addClass("animate-"+b.settings.flick_animation);var j=d.data("theme"),k=d.find(".first-flick").data("theme");j&&j.length>0?(b.settings.theme=j,d.addClass(k&&k.length>0?"flicker-theme-"+k:"flicker-theme-"+j)):d.addClass("flicker-theme-"+b.settings.theme);var l=d.data("block-text");if(void 0!=l&&0==l&&(b.settings.block_text=!1),d.find("li").each(function(){e++,a(this).wrapInner('<div class="flick-inner"><div class="flick-content"></div></div>'),$flick_block_text=a(this).data("block-text"),void 0!=$flick_block_text?1==$flick_block_text&&(a(this).find(".flick-title").wrapInner('<span class="flick-block-text"></span>'),a(this).find(".flick-sub-text").wrapInner('<span class="flick-block-text"></span>')):1==b.settings.block_text&&(a(this).find(".flick-title").wrapInner('<span class="flick-block-text"></span>'),a(this).find(".flick-sub-text").wrapInner('<span class="flick-block-text"></span>'));var c=a(this).data("background");c&&c.length>0&&a(this).css("background-image","url("+c+")"),$flick_theme=a(this).data("theme"),$flick_theme&&$flick_theme.length>0&&a(this).addClass("flick-theme-"+$flick_theme)}),"scroller-slide"!=b.settings.flick_animation){$data_arrow_navigation=d.data("arrows"),void 0!=$data_arrow_navigation?0!=$data_arrow_navigation&&b.create_arrow_navigation():1==b.settings.arrows&&b.create_arrow_navigation(),$data_dot_navigation=d.data("dot-navigation"),$data_dot_alignment=d.data("dot-alignment");var m=b.settings.dot_alignment;void 0!=$data_dot_alignment&&("left"==$data_dot_alignment?m="left":"right"==$data_dot_alignment&&(m="right")),void 0!=$data_dot_navigation?0!=$data_dot_navigation&&b.create_dot_navigation(m):1==b.settings.dot_navigation&&b.create_dot_navigation(m),$flick_delay=1e3*b.settings.auto_flick_delay,$data_auto_flick=d.data("auto-flick"),$data_auto_flick_delay=d.data("auto-flick-delay"),$data_auto_flick_delay&&($flick_delay=1e3*$data_auto_flick_delay),void 0!=$data_auto_flick&&(b.settings.auto_flick=0!=$data_auto_flick?!0:!1),b.auto_flick_start(),b.flick_flicker(),"jquery-slide"!=b.settings.flick_animation&&d.find("ul.flicks").bind("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",function(){g=!1})}},b.flick_flicker=function(){Modernizr.touch&&d.on("drag",function(a){0==g&&"horizontal"==a.orientation&&(a.preventDefault(),1==a.direction?(c--,0>c?c=0:(g=!0,b.move_flicker(c))):(c++,c==e?c=e-1:(g=!0,b.move_flicker(c))))})},b.create_arrow_navigation=function(){$arrow_nav_html='<div class="arrow-navigation left"><div class="arrow"></div></div>',$arrow_nav_html+='<div class="arrow-navigation right"><div class="arrow"></div></div>',d.prepend($arrow_nav_html),a(".arrow-navigation").mouseover(function(){0==a(this).hasClass("hover")&&a(this).addClass("hover")}),a(".arrow-navigation").mouseout(function(){1==a(this).hasClass("hover")&&a(this).removeClass("hover")}),a(".arrow-navigation").on("click",function(){a(this).hasClass("right")?(c++,c==e&&(c=0)):(c--,0>c&&(c=e-1)),b.move_flicker(c)})},b.create_dot_navigation=function(c){for($dot_nav_html='<div class="dot-navigation '+c+'"><ul>';e>f;)f++,$dot_nav_html+=1==f?'<li><div class="dot active"></div></li>':'<li><div class="dot"></div></li>';$dot_nav_html+="</ul></div>",d.prepend($dot_nav_html),d.find(".dot-navigation li").on("click",function(){b.move_flicker(a(this).index())})},b.auto_flick_start=function(){1==b.settings.auto_flick&&(b.flicker_auto=setInterval(b.auto_flick,$flick_delay))},b.auto_flick=function(){c++,c==e&&(c=0),b.move_flicker(c)},b.auto_flick_stop=function(){b.flicker_auto=clearInterval(b.flicker_auto)},b.auto_flick_reset=function(){b.auto_flick_stop(),b.auto_flick_start()},b.move_flicker=function(a){c=a,"transform-slide"==b.settings.flick_animation?d.find("ul.flicks").attr({style:"-webkit-transform:translate3d(-"+c+"%, 0, 0);-o-transform:translate3d(-"+c+"%, 0, 0);-moz-transform:translate3d(-"+c+"%, 0, 0);transform:translate3d(-"+c+"%, 0, 0)"}):"transition-slide"==b.settings.flick_animation?d.find("ul.flicks").attr({style:"left:-"+c+"00%;"}):"jquery-slide"==b.settings.flick_animation&&d.find("ul.flicks").animate({left:"-"+c+"00%"},function(){g=!1}),$crt_flick=d.find("ul.flicks li:eq("+c+")"),d.removeClass("flicker-theme-light").removeClass("flicker-theme-dark"),d.addClass($crt_flick.hasClass("flick-theme-dark")?"flicker-theme-dark":$crt_flick.hasClass("flick-theme-light")?"flicker-theme-light":"flicker-theme-"+b.settings.theme),d.find(".dot-navigation .dot.active").removeClass("active"),d.find(".dot:eq("+c+")").addClass("active"),d.attr("data-flick-position",c),b.auto_flick_reset()}};a.fn.flicker=function(c){var d=this.length;return this.each(function(e){var f=a(this),g="flickerplate"+(d>1?"-"+ ++e:""),h=(new b).init(f,c);f.data(g,h).data("key",g)})}}(jQuery);