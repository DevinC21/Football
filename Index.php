<?php
require_once 'config.php';

// Handle review submission
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit_review'])) {
    $name = sanitize_input($_POST['reviewer-name']);
    $rating = intval($_POST['reviewer-rating']);
    $review_text = sanitize_input($_POST['review-content']);
    
    if (insert_review($connection, $name, $rating, $review_text)) {
        header('Location: index.php?review=success');
        exit();
    }
}

// Fetch data
$featured_kits_result = get_featured_kits($connection);
$reviews_result = get_recent_reviews($connection);
$leagues_result = get_leagues($connection);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SoccerXclusive - Premium Football Kits</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="Styles.css">
</head>
<body>
    <header>
        <div class="logo-container">
            <h1>Soccer<span>Xclusive</span></h1>
        </div>
        <nav>
            <div class="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <ul class="nav-menu">
                <li class="active"><a href="index.php">Home</a></li>
                <li><a href="kits.php">Kits</a></li>
                <li><a href="customer-service.php">Customer Service</a></li>
            </ul>
        </nav>
    </header>

    <section id="home" class="hero">
        <div class="hero-content">
            <h2>Exclusive Football Kits</h2>
            <p>Premium quality jerseys from clubs around the world</p>
            <a href="kits.php" class="btn">Shop Now</a>
        </div>
    </section>

    <section id="featured" class="featured-kits">
        <h2>Featured Kits</h2>
        <div class="kit-container">
            <?php while ($kit = mysqli_fetch_assoc($featured_kits_result)): ?>
                <div class="kit-card">
                    <div class="kit-image">
                        <img src="<?php echo htmlspecialchars($kit['image_url']); ?>" alt="<?php echo htmlspecialchars($kit['name']); ?>">
                    </div>
                    <div class="kit-info">
                        <h3><?php echo htmlspecialchars($kit['club_name']); ?></h3>
                        <p><?php echo htmlspecialchars($kit['season']); ?> Kit</p>
                        <span class="price">£<?php echo number_format($kit['price'], 2); ?></span>
                        <button class="add-to-cart" data-kit-id="<?php echo $kit['id']; ?>">Add to Cart</button>
                    </div>
                </div>
            <?php endwhile; ?>
        </div>
    </section>

    <!-- Rest of the HTML remains the same as in the previous version -->
    <!-- ... (keep the rest of the HTML content) ... -->

    <script src="Script.js"></script>
</body>
</html>

<?php
// Close the database connection
mysqli_close($connection);
?>