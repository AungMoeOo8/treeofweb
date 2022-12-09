import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import styles from "../../css/blog.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="container">
      <div class="blog">
        <div class="blog-text-group">
          <p>Here, awesome articles</p>
        </div>

        <div class="blog-list">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
            <div class="article">
              <img class="article-image" src="/assets/images/rust.webp" />
              <span class="article-title">Memory Management</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "TreeOfWeb | Blog",
};
