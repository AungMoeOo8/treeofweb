import {
  component$,
  Signal,
  useClientEffect$,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const navlinksGroupRef = useSignal<HTMLElement>() as Signal<HTMLElement>;
  const colorMode = useSignal<string | null>() as Signal<string | null>;

  function toDarkMode() {
    colorMode.value = "dark";
    document.body.classList.add("dark-mode");
  }

  function toLightMode() {
    colorMode.value = "light";
    document.body.classList.remove("dark-mode");
  }

  function toggleColorMode() {
    if (colorMode.value === "light") {
      toDarkMode();
    } else {
      toLightMode();
    }
  }

  useClientEffect$(() => {
    colorMode.value = localStorage.getItem("color-mode");
    if (colorMode.value == null) {
      localStorage.setItem("color-mode", "light");
    } else if (colorMode.value === "light") {
      document.body.classList.remove("dark-mode");
    } else if (colorMode.value === "dark") {
      document.body.classList.add("dark-mode");
    }
  });

  return (
    <header>
      <div class="navbar container">
        <Link href="/">
          <span class="logo">TreeOfWeb</span>
        </Link>

        <nav ref={navlinksGroupRef} class="navlinks-group">
          {/*--------- close button ----------*/}
          <div
            onClick$={() =>
              navlinksGroupRef.value.classList.remove("navlinks-group-open")
            }
            class="navlinks-group-close-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="var(--color-font)"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="var(--color-font)"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
                fill="current-color"
              />
            </svg>
          </div>
          {/*---------- close button end ---------*/}

          <Link href="/">
            <span class="navlink">Home</span>
          </Link>
          <Link href="/">
            <span class="navlink">Blog</span>
          </Link>
          <Link href="/">
            <span class="navlink">Scores</span>
          </Link>
          <Link href="/">
            <span class="navlink">Roadmap</span>
          </Link>

          {/*------------ color-mode button ------------*/}
          <div
            onClick$={() => {
              if (colorMode.value === "light") {
                colorMode.value = "dark";
                document.body.classList.add("dark-mode");
                localStorage.setItem("color-mode", "dark");
              } else {
                colorMode.value = "light";
                document.body.classList.remove("dark-mode");
                localStorage.setItem("color-mode", "light");
              }
            }}
            class="color-mode-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="var(--color-font)"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clip-rule="evenodd"
                fill="var(--color-font)"
              />
            </svg>
          </div>
          {/*------------ color-mode button end ------------*/}
        </nav>

        <div
          onClick$={() =>
            navlinksGroupRef.value.classList.add("navlinks-group-open")
          }
          class="menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z"
              fill="var(--color-font)"
            />
          </svg>
        </div>
      </div>
    </header>
  );
});
