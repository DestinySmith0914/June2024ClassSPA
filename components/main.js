import html from "html-literal";
import * as views from "../views";

export default state => html`
  ${views[state.view](state)}
`;

//   <!-- <section id="jumbotron">
//     <h2>SavvyCoders JavaScript Fullstack Bootcamp</h2>
//     <a href="index.html">"Call to Action" "Button"</a>
//   </section>
// `; -->
