<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>

    <body id="{{$currentPage}}" class="body">
        <div class=" me-container clearfix abs-wrapper h100">

            <div id="_SocialApp_Component" data-premium="{{$premium_user_type or ''}}">
            <!-- component rendered here -->
            </div>

        </div>
        <!-- page analytics -->
    </body>
</html>


