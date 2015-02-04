<!DOCTYPE html>
<!-- saved from url=(0104)https://github.com/joymap/joymap_widget_sdk/blob/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js -->
<html lang="en" class=""><head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>joymap_widget_sdk/sdkUtils.js at 91c49c295fc4379d202d04db1567b0ee765cb6d1 · joymap/joymap_widget_sdk</title>
    <link rel="search" type="application/opensearchdescription+xml" href="https://github.com/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="https://github.com/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="https://github.com/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="https://github.com/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="https://github.com/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site"><meta content="summary" name="twitter:card"><meta content="joymap/joymap_widget_sdk" name="twitter:title"><meta content="Contribute to joymap_widget_sdk development by creating an account on GitHub." name="twitter:description"><meta content="https://avatars0.githubusercontent.com/u/3070759?v=3&amp;s=400" name="twitter:image:src">
<meta content="GitHub" property="og:site_name"><meta content="object" property="og:type"><meta content="https://avatars0.githubusercontent.com/u/3070759?v=3&amp;s=400" property="og:image"><meta content="joymap/joymap_widget_sdk" property="og:title"><meta content="https://github.com/joymap/joymap_widget_sdk" property="og:url"><meta content="Contribute to joymap_widget_sdk development by creating an account on GitHub." property="og:description">

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="https://github.com/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="https://github.com/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host"><meta content="collector-cdn.github.com" name="octolytics-script-host"><meta content="github" name="octolytics-app-id"><meta content="3AD31CB2:2029:A130E97:54D09C1B" name="octolytics-dimension-request_id"><meta content="1296232" name="octolytics-actor-id"><meta content="skdream" name="octolytics-actor-login"><meta content="471302112ce058258d695ce206c45f64d4d0fe34871b630a755bae42be035ad5" name="octolytics-actor-hash">
    
    <meta content="Rails, view, blob#show" name="analytics-event">

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param">
<meta content="3x9vEZGGmGCtU3DtaT7hCRc56syDrZLN3Xl33g/sVCI+F3CZUfuD/ABU9EO4LVn3OCPDJOA85XgA6FRjIZDyhA==" name="csrf-token">

    <link href="./filterXss_files/github-e3321d79480f0738576ff81cb2f3f717fdbb0bf35ea5938c30005a3349371133.css" media="all" rel="stylesheet" type="text/css">
    <link href="./filterXss_files/github2-6a66f68bf38641cc43f50402e8c57e8877e13f6772ebccbf99e988ca628e5ccd.css" media="all" rel="stylesheet" type="text/css">
    
    


    <meta http-equiv="x-pjax-version" content="ec9e27f39f1653a03c9697c87f9e4842">

      
  <meta name="description" content="Contribute to joymap_widget_sdk development by creating an account on GitHub.">
  <meta name="go-import" content="github.com/joymap/joymap_widget_sdk git https://github.com/joymap/joymap_widget_sdk.git">

  <meta content="3070759" name="octolytics-dimension-user_id"><meta content="joymap" name="octolytics-dimension-user_login"><meta content="15523089" name="octolytics-dimension-repository_id"><meta content="joymap/joymap_widget_sdk" name="octolytics-dimension-repository_nwo"><meta content="true" name="octolytics-dimension-repository_public"><meta content="false" name="octolytics-dimension-repository_is_fork"><meta content="15523089" name="octolytics-dimension-repository_network_root_id"><meta content="joymap/joymap_widget_sdk" name="octolytics-dimension-repository_network_root_nwo">
  <link href="https://github.com/joymap/joymap_widget_sdk/commits/91c49c295fc4379d202d04db1567b0ee765cb6d1.atom" rel="alternate" title="Recent Commits to joymap_widget_sdk:91c49c295fc4379d202d04db1567b0ee765cb6d1" type="application/atom+xml">

  <script type="text/javascript" async="" src="./filterXss_files/api.js"></script><style id="style-1-cropbar-clipper">/* Copyright 2014 Evernote Corporation. All rights reserved. */
.en-markup-crop-options {
    top: 18px !important;
    left: 50% !important;
    margin-left: -100px !important;
    width: 200px !important;
    border: 2px rgba(255,255,255,.38) solid !important;
    border-radius: 4px !important;
}

.en-markup-crop-options div div:first-of-type {
    margin-left: 0px !important;
}
</style><meta name="selected-link" value="repo_source" data-pjax-transient="true"></head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="https://github.com/joymap/joymap_widget_sdk/blob/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="https://github.com/joymap/joymap_widget_sdk/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/joymap/joymap_widget_sdk/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"></div>
  <input type="text" class="js-site-search-field is-clearable" data-hotkey="s" name="q" placeholder="Search" data-global-scope-placeholder="Search GitHub" data-repo-scope-placeholder="Search" tabindex="1" autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="https://github.com/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://github.com/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com/" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="https://github.com/skdream" data-ga-click="Header, go to profile, text:username">
      <img alt="skdream" class="avatar" data-user="1296232" height="20" src="./filterXss_files/1296232" width="20">
      <span class="css-truncate">
        <span class="css-truncate-target">skdream</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="https://github.com/joymap/joymap_widget_sdk/blob/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="https://github.com/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="https://github.com/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="joymap/joymap_widget_sdk">This repository</span>
    </li>
      <li>
        <a href="https://github.com/joymap/joymap_widget_sdk/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="https://github.com/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="https://github.com/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="https://github.com/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="P0cNk93QKVwiduVgNjMhcii4qNEZdzqPTDe/GU8YxN+8ze3a4hxvcpcjuwxMYPOgSTq/1BlUmT6fYUEfZ9gTFA=="></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope="" itemtype="http://schema.org/WebPage">
    <div id="js-flash-container"><div id="pjax-flash">
  
</div></div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="https://github.com/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="2n7uV8xwvKD6cOQkXDdXsy5bk3z+gWXd14pVOFsiffu86RIT9WSHASjjonTryW5abmq0BBEiohcFTobO2xfTWw=="></div>  <input id="repository_id" name="repository_id" type="hidden" value="15523089">

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="https://github.com/joymap/joymap_widget_sdk/watchers">
        5
      </a>
      <a href="https://github.com/joymap/joymap_widget_sdk/subscription" class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included">
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed">
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore">
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="https://github.com/joymap/joymap_widget_sdk/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="gISLgkOozWHtJK1v15H+tFbG4wdeJbcYmRSs9aG4NxU0XdKAVnhwXBLKBgxEkBsDNDMp1hzz35CPazAQ1WMDpg=="></div>
      <button class="minibutton with-count js-toggler-target star-button" aria-label="Unstar this repository" title="Unstar joymap/joymap_widget_sdk">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="https://github.com/joymap/joymap_widget_sdk/stargazers">
          0
        </a>
</form>
    <form accept-charset="UTF-8" action="https://github.com/joymap/joymap_widget_sdk/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="TAgSGqssvVYPswowAl3qDdNtYjZYRrnNezouXRIEZ8JfSv8EScmj0MiymD0BsVrRy0V+PZmEpdJH2iz3744Xqw=="></div>
      <button class="minibutton with-count js-toggler-target star-button" aria-label="Star this repository" title="Star joymap/joymap_widget_sdk">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="https://github.com/joymap/joymap_widget_sdk/stargazers">
          0
        </a>
</form>  </div>

  </li>


        <li>
          <a href="https://github.com/joymap/joymap_widget_sdk/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of joymap/joymap_widget_sdk to your account" aria-label="Fork your own copy of joymap/joymap_widget_sdk to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="https://github.com/joymap/joymap_widget_sdk/network" class="social-count">1</a>
        </li>

</ul>

        <h1 itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="https://github.com/joymap" class="url fn" itemprop="url" rel="author"><span itemprop="title">joymap</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="https://github.com/joymap/joymap_widget_sdk" class="js-current-repository" data-pjax="#js-repo-pjax-container">joymap_widget_sdk</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="./filterXss_files/octocat-spinner-32.gif" width="16">
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders" role="navigation" data-pjax="#js-repo-pjax-container" data-issue-count-url="/joymap/joymap_widget_sdk/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="https://github.com/joymap/joymap_widget_sdk" aria-label="Code" class="js-selected-navigation-item sunken-menu-item selected" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /joymap/joymap_widget_sdk">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="./filterXss_files/octocat-spinner-32.gif" width="16">
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="https://github.com/joymap/joymap_widget_sdk/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /joymap/joymap_widget_sdk/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="counter">0</span>

          <img alt="" class="mini-loader" height="16" src="./filterXss_files/octocat-spinner-32.gif" width="16">
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="https://github.com/joymap/joymap_widget_sdk/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /joymap/joymap_widget_sdk/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="counter">0</span>

          <img alt="" class="mini-loader" height="16" src="./filterXss_files/octocat-spinner-32.gif" width="16">
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="https://github.com/joymap/joymap_widget_sdk/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /joymap/joymap_widget_sdk/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="./filterXss_files/octocat-spinner-32.gif" width="16">
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="https://github.com/joymap/joymap_widget_sdk/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /joymap/joymap_widget_sdk/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="./filterXss_files/octocat-spinner-32.gif" width="16">
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="https://github.com/joymap/joymap_widget_sdk/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /joymap/joymap_widget_sdk/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="./filterXss_files/octocat-spinner-32.gif" width="16">
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open" data-protocol-type="http" data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target" value="https://github.com/joymap/joymap_widget_sdk.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url " data-protocol-type="ssh" data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target" value="git@github.com:joymap/joymap_widget_sdk.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url " data-protocol-type="subversion" data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target" value="https://github.com/joymap/joymap_widget_sdk" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="https://github.com/joymap/joymap_widget_sdk/blob/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="https://github.com/joymap/joymap_widget_sdk/blob/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="https://github.com/joymap/joymap_widget_sdk/blob/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/joymap/joymap_widget_sdk" class="minibutton sidebar-button" title="Save joymap/joymap_widget_sdk to your computer and use it in GitHub Desktop." aria-label="Save joymap/joymap_widget_sdk to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="https://github.com/joymap/joymap_widget_sdk/archive/91c49c295fc4379d202d04db1567b0ee765cb6d1.zip" class="minibutton sidebar-button" aria-label="Download the contents of joymap/joymap_widget_sdk as a zip file" title="Download the contents of joymap/joymap_widget_sdk as a zip file" rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container="">
          

<a href="./filterXss_files/filterXss.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:cce81c685e4db76aaba9ce8d61278569 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w" data-master-branch="master" data-ref="" title="" role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>tree:</i>
    <span class="js-select-button css-truncate-target">91c49c295f</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax="" aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="https://github.com/joymap/joymap_widget_sdk/blob/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="https://github.com/joymap/joymap_widget_sdk/blob/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/joymap/joymap_widget_sdk/blob/master/bl/sdkUtils.js" data-name="master" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="https://github.com/joymap/joymap_widget_sdk/find/91c49c295fc4379d202d04db1567b0ee765cb6d1" class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s" data-pjax="" data-hotkey="t" aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="https://github.com/joymap/joymap_widget_sdk/tree/91c49c295fc4379d202d04db1567b0ee765cb6d1" class="" data-branch="91c49c295fc4379d202d04db1567b0ee765cb6d1" data-direction="back" data-pjax="true" itemscope="url" rel="nofollow"><span itemprop="title">joymap_widget_sdk</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="https://github.com/joymap/joymap_widget_sdk/tree/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl" class="" data-branch="91c49c295fc4379d202d04db1567b0ee765cb6d1" data-direction="back" data-pjax="true" itemscope="url" rel="nofollow"><span itemprop="title">bl</span></a></span><span class="separator">/</span><strong class="final-path">sdkUtils.js</strong>
  </div>
</div>



  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="spout" class="avatar" data-user="971370" height="24" src="./filterXss_files/971370" width="24">
        <span class="author"><a href="https://github.com/DoubleSpout" rel="contributor">DoubleSpout</a></span>
        <time datetime="2013-12-30T08:53:12Z" is="relative-time" title="2013年12月30日 GMT+8下午4:53">on 30 Dec 2013</time>
        <div class="commit-title">
            <a href="https://github.com/joymap/joymap_widget_sdk/commit/9c0c9b4dd6e3c6925248d0c30b64cc59171f59a9" class="message" data-pjax="true" title="pub">pub</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="https://github.com/joymap/joymap_widget_sdk/blob/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="spout" data-user="971370" height="24" src="./filterXss_files/971370" width="24">
            <a href="https://github.com/DoubleSpout">DoubleSpout</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>9 lines (9 sloc)</span>
          <span class="meta-divider"></span>
        <span>0.236 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="https://github.com/joymap/joymap_widget_sdk/raw/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js" class="minibutton " id="raw-url">Raw</a>
            <a href="https://github.com/joymap/joymap_widget_sdk/blame/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="https://github.com/joymap/joymap_widget_sdk/commits/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->


            <a class="octicon-button disabled tooltipped tooltipped-w" href="https://github.com/joymap/joymap_widget_sdk/blob/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js#" aria-label="You must be on a branch to make or propose changes to this file"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger disabled tooltipped tooltipped-w" href="https://github.com/joymap/joymap_widget_sdk/blob/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js#" aria-label="You must be on a branch to make or propose changes to this file">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tbody><tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-s">var</span> <span class="pl-en">filterXss</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">html</span>){</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line">  <span class="pl-k">return</span> <span class="pl-s3">String</span>(html)</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line">    .<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&amp;(?!<span class="pl-c1">\w</span><span class="pl-k">+</span>;)<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">'</span>&amp;amp;<span class="pl-pds">'</span></span>)</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">    .<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&lt;<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">'</span>&amp;lt;<span class="pl-pds">'</span></span>)</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line">    .<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&gt;<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">'</span>&amp;gt;<span class="pl-pds">'</span></span>)</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">    .<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>"<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">'</span>&amp;quot;<span class="pl-pds">'</span></span>)</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">    .<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>'<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">'</span>&amp;#039;<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-sv">exports</span>.filterXss <span class="pl-k">=</span> filterXss;</td>
      </tr>
</tbody></table>

  </div>

  </div>
</div>

<a href="https://github.com/joymap/joymap_widget_sdk/blob/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line…" autofocus="">
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com/">API</a></li>
      <li><a href="http://training.github.com/">Training</a></li>
      <li><a href="http://shop.github.com/">Shop</a></li>
      <li><a href="https://github.com/blog">Blog</a></li>
      <li><a href="https://github.com/about">About</a></li>

    </ul>

    <a href="https://github.com/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>© 2015 <span title="0.05644s from github-fe123-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
        <li><a href="https://github.com/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="https://github.com/joymap/joymap_widget_sdk/blob/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="https://github.com/joymap/joymap_widget_sdk/blob/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w" aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="https://github.com/joymap/joymap_widget_sdk/blob/91c49c295fc4379d202d04db1567b0ee765cb6d1/bl/sdkUtils.js#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="./filterXss_files/frameworks-af95b05cb14b7a29b0457c26b4a1d24151f4a47842c8e74bd556622f347b9d3d.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="./filterXss_files/github-48e1b4f1ba19a995fb5b6503c23c059ae885b47f760a1ee39ea676b991de5046.js" type="text/javascript"></script>
      
      
  


<div id="global-zeroclipboard-html-bridge" class="global-zeroclipboard-container" style="position: absolute; left: 0px; top: -9999px; width: 1px; height: 1px; z-index: 999999999;"><object id="global-zeroclipboard-flash-bridge" name="global-zeroclipboard-flash-bridge" width="100%" height="100%" type="application/x-shockwave-flash" data="https://assets-cdn.github.com/flash/ZeroClipboard.v2.1.6.swf"><param name="allowScriptAccess" value="always"><param name="allowNetworking" value="all"><param name="menu" value="false"><param name="wmode" value="transparent"><param name="flashvars" value="trustedOrigins=github.com%2C%2F%2Fgithub.com%2Chttps%3A%2F%2Fgithub.com&amp;swfObjectId=global-zeroclipboard-flash-bridge"></object></div>    <div class="facebox" id="facebox" style="display:none;">       <div class="facebox-popup">         <div class="facebox-content">         </div>         <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">           <span class="octicon octicon-remove-close"></span>         </button>       </div>     </div><div id="chrome_websiteIP" class="chrome_websiteIP_right">192.30.252.128</div></body></html>