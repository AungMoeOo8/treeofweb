import {
  $,
  component$,
  Signal,
  useClientEffect$,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "../../css/header.css?inline";

export const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="var(--color-font)"
    class="w-6 h-6"
  >
    <path
      d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
      fill="var(--color-font)"
    />
  </svg>
);

export const MoonIcon = () => (
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
);

export const MenuButton = () => (
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
);

export const CloseButton = () => (
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
);

export default component$(() => {
  useStylesScoped$(styles);

  const navlinksGroupRef = useSignal<HTMLElement>() as Signal<HTMLElement>;
  const colorMode = useSignal<string | null>() as Signal<string | null>;

  const openNavlinksGroup$ = $(() => {
    document.body.classList.add("overflow-hidden");
    navlinksGroupRef.value.classList.add("navlinks-group-open");
  });

  const closeNavlinksGroup$ = $(() => {
    document.body.classList.remove("overflow-hidden");
    navlinksGroupRef.value.classList.remove("navlinks-group-open");
  });

  const changeToDarkMode = $(() => {
    colorMode.value = "dark";
    document.body.classList.add("dark-mode");
    localStorage.setItem("color-mode", "dark");
  });

  const changeToLightMode = $(() => {
    colorMode.value = "light";
    document.body.classList.remove("dark-mode");
    localStorage.setItem("color-mode", "light");
  });

  const toggleColorMode$ = $(() => {
    if (colorMode.value === "light") {
      changeToDarkMode();
    } else {
      changeToLightMode();
    }
  });

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
          <div onClick$={closeNavlinksGroup$} class="navlinks-group-close-btn">
            <CloseButton />
          </div>
          {/*---------- close button end ---------*/}

          <Link href="/">
            <span class="navlink">Home</span>
          </Link>
          <Link href="/blog">
            <span class="navlink">Blog</span>
          </Link>
          <Link href="/">
            <span class="navlink">Scores</span>
          </Link>
          <Link href="/">
            <span class="navlink">Roadmap</span>
          </Link>

          {/*------------ color-mode button ------------*/}
          <div onClick$={toggleColorMode$} class="color-mode-btn">
            {colorMode.value == "light" ? <MoonIcon /> : <SunIcon />}
          </div>
          {/*------------ color-mode button end ------------*/}

          <img alt="rust" class="bg-logo rust" src="/assets/images/rust.webp" />
          <img
            alt="elixir"
            class="bg-logo elixir"
            src="/assets/images/elixir.webp"
          />
          <img
            alt="golang"
            class="bg-logo golang"
            src="/assets/images/golang.webp"
          />
          <img
            alt="nodejs"
            class="bg-logo nodejs"
            src="/assets/images/nodejs.webp"
          />
        </nav>

        {/*--------------- menu button ------------*/}
        <div onClick$={openNavlinksGroup$} class="menu">
          <MenuButton />
        </div>
        {/*--------------- menu button end ------------*/}
      </div>
    </header>
  );
});
