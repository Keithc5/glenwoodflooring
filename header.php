<?php
$current_page = basename($_SERVER['PHP_SELF']);
$menu_items = [
    'index.php' => 'Home',
    'about' => 'About',
    'our_work.php' => 'Our Work',
    'sanding.php' => 'Sanding',
    'staining.php' => 'Staining',
    'floor-finishing.php' => 'Finishing',
    'specialised-flooring.php' => 'Specialised',
    'gallery.php' => 'Gallery',
    'pricing.php' => 'Pricing',
    'contact_us.php' => 'Contact Us'
];
?>


<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
    <title>Glenwood Timber Flooring | Wooden Floors | Floor Restoration</title>
    <link rel="icon" href="image/favicon.ico" type="image/x-icon">
    <meta name="Keywords" content="Wooden Floor. Wooden Floor Sales. Floor restoration. Floor fitting." />
    <meta name="Description" content="Wooden Floor Sales &amp; Restoration. Wooden Floor Fitting," />
    <meta name="google-site-verification" content="X4RrsNTgxi-zJ6JSc43qr_p3dLuY7ok9HEbfL8pOlSU" />
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <link rel="stylesheet" href="css/skin.css" type="text/css" />
    <link rel="stylesheet" href="css/nivo-slider.css" type="text/css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <script src="js/jquery.nivo.slider.pack.js" type="text/javascript"></script>
    <script src="js/jquery.jcarousel.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('#procarousel').jcarousel({
                scroll: 1,
                auto: 2,
                wrap: 'circular'
            });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('#mycarousel').jcarousel({
                scroll: 1,
                auto: 2,
                wrap: 'circular'
            });
        });
    </script>
    <script type="text/javascript">
        $(window).load(function() {
            $('#slider').nivoSlider({
                effect: 'random',
                slices: 15,
                boxCols: 8,
                boxRows: 4,
                animSpeed: 2000,
                pauseTime: 5000,
                startSlide: 0,
                directionNav: true,
                controlNav: false,
                controlNavThumbs: false,
                pauseOnHover: true,
                manualAdvance: false,
                prevText: 'Prev',
                nextText: 'Next',
                randomStart: false,
                beforeChange: function() {},
                afterChange: function() {},
                slideshowEnd: function() {},
                lastSlide: function() {},
                afterLoad: function() {}
            });
        });
    </script>

	<!-- Start Google Analytics -->
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src='https://www.google-analytics.com/analytics.js';
		m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-399393-68', 'glenwoodflooring.ie');
		ga('send', 'pageview');
	</script>
	<!-- End Google Analytics -->
</head>

<div class="header_wrapper">
    <div class="top_header">
        <div class="logo">
            <a href="index.php">
                <img src="image/logo.png" width="262" height="76" alt="Glenwood Logo">
            </a>
        </div>
        <div class="header_info">
            <div class="quote">We bring up your old floors like new</div>
            <div class="mobile">086 0683004</div>
            <div class="email">info@glenwoodflooring.ie</div>
        </div>
        <br clear="all">
    </div>


    <div class="main_nav">
        <div class="nav-holder">
            <ul>
                <?php foreach ($menu_items as $file => $title): ?>
                    <li>
                        <a href="<?php echo $file; ?>"
                        class="<?php echo ($current_page === $file) ? 'active' : ''; ?>"
                        title="<?php echo htmlspecialchars($title); ?>">
                            <?php echo htmlspecialchars($title); ?>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
    <div class="menu_shadow"></div>
</div>