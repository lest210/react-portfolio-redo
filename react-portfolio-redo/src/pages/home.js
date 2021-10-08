import React from 'react';

class Home extends React.Component{
    render(){
        return(
        <div>
            <header>
         <span class="span-background title"> 
            <h1>Lester Calderon</h1>
            </span>
            <nav>
                <ul class="nav-effects"> 
                <li>
                    
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#contact-me">Contact Me</a>
                </li>
                <li> 
                     
                </li>
            </ul>
            </nav>
            </header>

            <section class="hero">
            <div class="hero-subtitle">           
                <span class="span-background opacity">Portfolio</span>
            </div>
             </section>

    
            <article> 
            <div id="about-me" class="about-me-wrapper"> 
            <div class="about-me-grid-container"> 
                <div class="about-me-item about-me-title"> 
                    <p> About me </p>
                </div>
                <div class="about-me-item p1">
                    <p>I enrolled in this bootcamp to be able to do a career change and be able to spend more time with my family. I have always loved web development and want to continue to do it at a professional level.</p>
                </div>
                <div class="about-me-item p2">
                    <p>I am currently a Paint contractor. My work consist of talking to customer, planning, and executing work as a team.</p>
                </div>  
            </div>
            </div> 
            </article>

    
            <article>
            <div id="work" class="work-wrapper"> 
            <div class="work-grid-container"> 
                <div class="work-item work-title"> 
                    <p> Work </p>
                </div>
                <div onclick={()=> window.open("https://lest210.github.io/code-refactor/")} alt="Image Displaying the Horiseon landing Page" title="Horiseon landing Page" style={{cursor: 'pointer'}} target="_blank"  class="work-item-project challenge-1-refactor">
                    <span class="span-background"> 
                        <h3>Horiseon Services</h3>
                        <span class="lower-text">HTML/CSS</span> 
                    </span>
                </div>
                
                <div onclick={()=> window.open("https://lest210.github.io/run-buddy/")} alt="Image Displaying the RUN BUDDY landing Page" title="RUN BUDDY landing page" style={{cursor: 'pointer'}}  class="work-item-project run-buddy">
                    <span class="span-background">
                        <h3>Run Buddy</h3>
                        <span class="lower-text">HTML/CSS</span>
                    </span>
                </div>
                <div onclick={()=> window.open("https://lest210.github.io/pw-generator/")} alt="Image Displaying the Password Generator landing Page" title="Password Generator landing page" style={{cursor: 'pointer'}} class="work-item-project password-generator">
                    <span class="span-background">
                        <h3>Password Generator</h3>
                        <span class="lower-text">CSS/Javascript</span>
                    </span>
                </div>
                <div onclick={()=> window.open("https://lest210.github.io/Javascript-quiz/")} alt="Image Displaying the Javascript Code Quiz landing Page" title="Javascript Quiz landing page" style={{cursor: 'pointer'}} class="work-item-project javascript-quiz">
                    <span class="span-background">
                        <h3>Javascript Quiz</h3>
                        <span class="lower-text">Javascript/CSS/LocalStorage</span>
                    </span>
                </div>
                <div onclick={()=> window.open("https://lest210.github.io/work-day-scheduler/")} alt="Image Displaying the Web Api Code Quiz landing Page" title="Web Api Code Quiz landing page" style={{cursor: 'pointer'}} class="work-item-project work-day-scheduler">
                    <span class="span-background">
                        <h3>Work Day Scheduler</h3>
                        <span class="lower-text">Dynamic Javascript/Bootstrap</span>
                    </span>
                </div>
                <div onclick={()=> window.open("https://twyllblackleaf.github.io/live-music-search/")} alt="Image Displaying the Project01 landing Page" title="Project01 landing page" style={{cursor: 'pointer'}} class="work-item-project project01">
                    <span class="span-background">
                        <h3>Project01</h3>
                        <span class="lower-text">HTML/CSS/Javascript</span>
                    </span>
                </div>

                


                <div class="work-item-project ghost-item">
                    <span class="span-background">
                        <h3>Coming soon!</h3>
                        <span class="lower-text">TBD</span>
                    </span>
                </div>
            </div>
         </div>
            </article>


            <footer>
            <div id="contact-me" class="footer-wrapper"> 
            <div class="footer-container"> 
                
                <div class="footer-grid-item contact-me"> 
                    Contact Me
                </div>
                <div class="footer-grid-item phone">
                    <a href="tel:555-555-5555" class="nav-effects">555-555-5555</a>
                </div>
                <div class="footer-grid-item email"> 
                    <a href="mailto:lest210@gmail.com">lest210@gmail.com</a>
                </div>
                <div class="footer-grid-item git-hub"> 
                    <a href="https://github.com/lest210/" >GitHub</a>
                </div>
            </div>
            </div>
            </footer>
 
            
             
              
       
             
    
      
    </div>
        );
             };
};

export default Home;