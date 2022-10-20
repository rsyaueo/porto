<template>
    <header>
        <div class="ataskiri">
        <h1>PORTOFOLIO</h1>
        <h3>Risya Aulia</h3>
        </div>
        
        <nav>
            <ul>
                <li><RouterLink class="link" :to="{name : 'home'}">Home</RouterLink></li>
                <li><RouterLink class="link" :to="{name : 'contac'}">Contact</RouterLink></li>
                <li><RouterLink class="link" :to="{name : 'test'}">Test</RouterLink></li>
                <li><RouterLink class="link" :to="{name : 'project'}">Project</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>

<style >
header {
    font-family: 'Quicksand', sans-serif;
 }
.ataskiri{
   padding: 30px;
   background-color: #CDF0EA;
   color: black;
   justify-content: space-between;
   display: flex;
} 
nav {
   background-color: #94D0CC;
   padding: 5px;
   position: sticky;
   top: 0;
   text-align: center;
   display: flex;
    gap: 1rem;
}
 


nav a {
        font-size: 20px;
        font-weight: 700;
        text-decoration: none;
        color: white;
      }
     
      nav a:hover {
        font-weight: bold;
        color: #f3b4b4;
      }
     
      nav li {
        display: inline;
        list-style-type: none;
        margin-right: 20px;
      }
</style>