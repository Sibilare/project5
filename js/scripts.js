
  let lastPage='';
 

(function($){

 
  $(window).on('popstate', function () {
    window.location.replace(lastPage);
  });
  $('#show_me_another').on('click',function(event){
      event.preventDefault();
      lastPage = document.url;
      
      $.ajax({
               method: 'get',
               url:qod_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
               
      }).done(function (data){console.log(data);
  // const post = data.shift(),
  //   sourceSpan = $sourceSpan,
  //     quoteSource = post._qod_quote_source,
  //     quoteSourceUrl =post._qod_soure_url)
    });
  });

  $('#close-comments').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      method: 'post',
      url: qod_vars.rest_url + 'wp/v2/posts/' + qod_vars.post_id,
      data: {
        comment_status: 'closed'
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', qod_vars.wpapi_nonce);
      }
    }).done(function() {
      alert('Success! Comments are closed for this post.');
    });
  });
})(jQuery);
