<template>
<header>
    <div class="container">
        <div id="branding">
            <h1><img src="RailT.jpg"></h1>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li class="current"><a href="about-us.html">About Us</a></li>
                <li><a href="team.html">Our Team</a></li>
                <li><a href="sign-in.html">login</a></li>
            </ul>
                <button>
                  <p>  <a href="form.html">sign-up</a></p>
                </button>
        </nav>
    </div>
    
</header>
</template>

<script>
export default {
    
  name: 'HelloWorld',
  props: {
    msg: String
  
}
}
</script>
