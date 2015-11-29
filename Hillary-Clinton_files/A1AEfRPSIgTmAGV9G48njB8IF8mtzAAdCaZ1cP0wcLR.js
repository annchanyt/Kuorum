window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
        appId      : '226641644202506',                        // App ID from the app dashboard
//        appId      : '361147123984843',                        // App ID from the app dashboard
        channelUrl : 'http://kuorum.org', // Channel file for x-domain comms
        status     : true,                                 // Check Facebook Login status
        xfbml      : true                                  // Look for social plugins on the page
    });

    // Additional initialization code such as adding Event Listeners goes here

};

// Load the SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/es_ES/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
$(function (){
    $("body").on("click","a.social-share.facebook",function(e){
        e.preventDefault();
        window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600')
//        var facebookDataId = $(this).attr("data-facebookDataId")
//        shareLaw(facebookDataId)
    })
});

//var facebookData={}
//function shareLaw(facebookDataId){
//    var data =facebookData[facebookDataId]
//    console.log(data)
//    FB.ui(
//        {
//            method: 'feed',
//            name: data.name,
//            caption: data.caption,
//            description: data.description,
//            link: data.link,
//            picture: data.picture
//        },
//        function(response) {
//            if (response && response.post_id) {
//                display.success('Se ha publicado correctamente en tu muro');
//            } else {
//                display.warn('Hubo algun problema, vuelva a intentarlo');
//            }
//        }
//    );
//}



$(function (){
    $('body').on('click', 'a.social-share.twitter', function(e) {
        e.preventDefault()
        var width  = 575,
            height = 400,
            left   = ($(window).width()  - width)  / 2,
            top    = ($(window).height() - height) / 2,
            url    = this.href,
            opts   = 'status=1' +
                ',width='  + width  +
                ',height=' + height +
                ',top='    + top    +
                ',left='   + left +
                ',data-lang="es"'+
                ',data-related="anywhere:The Javascript API,Kuorum:The official account"';

        window.open(url, 'twitter', opts);
    });
});



$(function (){
    $('body').on('click','a.social-share.google',function(e) {
        e.preventDefault();
        var width  = 600,
            height = 600,
            left   = ($(window).width()  - width)  / 2,
            top    = ($(window).height() - height) / 2,
            url    = this.href,
            opts   = 'status=1' +
                'menubar=no,toolbar=no,resizable=yes,scrollbars=yes'+
                ',width='  + width  +
                ',height=' + height +
                ',top='    + top    +
                ',left='   + left +
                ',data-lang="es"'+
                ',data-related="anywhere:The Javascript API,Kuorum:The official account"';

        window.open(url, 'twitter', opts);
    });
});

