var _gh_ribbons = ['https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png','https://s3.amazonaws.com/github/ribbons/forkme_left_green_007200.png', 'https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png', 'https://s3.amazonaws.com/github/ribbons/forkme_left_orange_ff7600.png', 'https://s3.amazonaws.com/github/ribbons/forkme_left_gray_6d6d6d.png', 'https://s3.amazonaws.com/github/ribbons/forkme_left_white_ffffff.png', 'https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png', 'https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png', 'https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png', 'https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png', 'https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png', 'https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png'];
  
  
jQuery(
  function()
  {  
    if(_gh_ribbons[[%label_choice%]].search('left') < 0)
        jQuery('body').prepend('<a href="https://github.com/[%github_login%]/[%github_project%]"><img style="position: absolute; top: 0; right: 0; border: 0;" src="'+_gh_ribbons[[%label_choice%]]+'" alt="Fork me on GitHub"></a>');
    else
        jQuery('body').prepend('<a href="https://github.com/[%github_login%]/[%github_project%]"><img style="position: absolute; top: 0; left: 0; border: 0;" src="'+_gh_ribbons[[%label_choice%]]+'" alt="Fork me on GitHub"></a>');
                                                                                                                                           
  }
);
