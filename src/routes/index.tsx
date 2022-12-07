import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { FallIsComing } from "~/components/images";
import styles from "../css/home.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="container-small">
      <div class="hero">
        <div class="hero-text-group">
          <span class="hero-text big text-gradient">Knowledge</span>
          <span class="hero-text">The tree is just planted.</span>
          <span class="hero-text">
            Will grow day by day,{" "}
            <span class="text-gradient" style={{ fontWeight: 600 }}>
              Hopefully.
            </span>
          </span>
        </div>
        <div class="hero-img">
          {/* <div class="image-frame-vertical"></div>
          <div class="image-frame-horizontal"></div> */}
          <FallIsComing />
        </div>

        <div class="hero-info">
          <div class="info">
            <span class="key">Follower</span>
            <span class="value">10K</span>
          </div>
          <div class="info">
            <span class="key">Roadmap</span>
            <span class="value">5</span>
          </div>
          <div class="info">
            <span class="key">Article</span>
            <span class="value">12</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "TreeOfWeb | Welcome",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
