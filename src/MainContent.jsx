import React from "react";

export default function MainContent() {
    return (<main>

        <figure id="img-div">
          <img id="image" src="https://s2.r29static.com/bin/entry/6bc/x,80/2152911/image.jpg" display="block"/>
          <figcaption id="img-caption">Neo effortlessly stopping a wall of bullets</figcaption>
        </figure>
        <figure id="tribute-info"> Neo, played by Keanu Reeves, is the protagonist of the 1999 film The Matrix. He starts as Thomas Anderson, a computer programmer living a double life as a hacker under the alias "Neo." Dissatisfied with the mundane reality of his life, he is drawn into a mysterious world by the enigmatic Morpheus. Neo learns that the reality he knows is a simulated construct created by an advanced AI system to subdue humanity, while their bodies are used as an energy source. As he delves deeper, Neo grapples with profound philosophical questions about reality, free will, and his destiny, ultimately becoming a central figure in the resistance against the oppressive artificial intelligence.</figure>
        <a href="https://matrix.fandom.com/wiki/Neo" id="tribute-link" target="_blank">Read more about Neo here</a>
    </main>)

}