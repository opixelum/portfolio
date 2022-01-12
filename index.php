<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="All about my experience">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="CSS/style.css">
    <title>Anto's portfolio</title>
  </head>

  <body>
    <main>
      <h1>Hi! I'm Anto, computer science student</h1>    

      <div id="about-me">
        <h2>About me</h2>
        <p>Since I was a kid, I've always been passionate about IT, video games,
        high-tech and more, but my what I'm keen on is programming ! I really
        like to code a lot, it's like having a super power. My current goal is
        to work as a developer and learn everyday by being working with
        experienced programmers.</p>
      </div>
      
      <div id="professional-experience">
        <h2>My professional experience</h2>
        <ul>
          <li>
            <h3>9th grade internship</h3>
            <p>FNAC Limoges | February 2018</p>
          </li>
        </ul>
      </div>

      <div id="diplomas">
        <h2>My diplomas</h2>
        <ul>
          <li>
            <h3>Diplôme National du Brevet des collèges</h3>
            <p>Mention Très bien | 2017-2018</p>
          </li>
          <li>
            <h3>Diplôme du baccalauréat</h3>
            <p>Mention Très bien | 2018 - 2021</p>
          </li>
        </ul>
      </div>

      <div id="skills">
        <h2>My skills</h2>
        <p>Here are what I've learnt and what I use. Those are ordered from the
        most mastered to the least.</p>
          
        <ul>
          <?php 
              // All my skills oreder from most mastered to least
              $skills = ['C', "Python", "HTML", "CSS", "PHP", "JavaScript"]; 

              // Print each skill in <li> tags
              foreach ($skills as $key => $skill)
              {
                  echo "<li><h3>$skill</h3></li>";
              }
          ?>
        </ul>
      </div>

      <div id="contact">
        <h2>Contact me</h2>
        <form id="contact-form" accept-charset="UTF-8" action="send_message.php"
        method="POST">
          <label for="name">Name* (first/last names or company)</label><br>
          <input required type="text" id="name" name="name"
          placeholder="John Doe"><br><br>

          <label for="email">Email address*</label><br>
          <input required type="email" id="email" name="email"
          placeholder="john.doe@email.com"><br><br>

          <label for="phone">Phone number</label><br>
          <input type="tel" id="phone" name="phone"
          placeholder="06 12 34 56 78"><br><br>

          <label for="message">Your message*</label><br>
          <textarea required id="message" name="message"
          placeholder="Type your message here."></textarea><br><br>

          <input type="submit" id="send-btn" placeholder="Send message">

          <p>*: required field</p>
        </form>
      </div>
    </main>
    
    <?php 
        // Footer
        include("Includes/footer.php"); 
    ?>
  </body>
</html>
