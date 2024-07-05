<template>
  <div class="flex h-screen flex-col items-center justify-center p-4">
    <ColorMode />
    <div class="mx-auto flex w-full flex-col text-center md:w-2/3">
      <p
        class="text-6xl font-bold md:text-9xl"
        :class="{ 'font-sans': $colorMode.value === 'dark', 'patrick': $colorMode.value === 'light' }"
      >
        All-in-one<br>
        <span
          :class="{ 'bg-gradient-to-r from-teal-300 via-sky-600 to-cyan-300 bg-clip-text font-sans text-transparent': $colorMode.value === 'dark', 'patrick text-cyan-500': $colorMode.value === 'light' }"
        >
          Nuxt Boilerplate
        </span>
      </p>
      <p
        :class="{ 'inter mt-4 md:text-lg': $colorMode.value === 'dark', 'nunito mt-6 md:text-lg': $colorMode.value === 'light' }"
      >
        Nuxt Boilerplate is an
        <a
          href="https://github.com/lukajaa/nuxt-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold text-cyan-500 hover:text-cyan-600"
        >
          open source template
        </a>
        that includes everything you need to create a modern web application with
        <a
          href="https://nuxt.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold text-cyan-500 hover:text-cyan-600"
        >
          Nuxt.js
        </a>,
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold text-cyan-500 hover:text-cyan-600"
        >
          TailwindCSS
        </a>,
        <a
          href="https://pinia.vuejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold text-cyan-500 hover:text-cyan-600"
        >
          Pinia
        </a>,
        and
        <a
          href="https://vueuse.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold text-cyan-500 hover:text-cyan-600"
        >
          VueUse
        </a>.
      </p>
      <div class="mt-4 flex flex-row justify-center space-x-4">
        <UButton
          size="lg"
          label="Try it yourself here"
          icon="i-heroicons-arrow-right"
          to="https://github.com/lukajaa/nuxt-boilerplate"
          trailing
        />
      </div>
    </div>
    <div class="mx-auto mt-8 flex flex-col">
      <p
        class="md:text-lg"
        :class="{ inter: $colorMode.value === 'dark', nunito: $colorMode.value === 'light' }"
      >
        Created by
        <a
          href="https://www.lucaskchang.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="font-semibold text-cyan-500 hover:text-cyan-600"
          :class="{ 'font-sans': $colorMode.value === 'dark' }"
        >
          Lucas Chang
        </a>
      </p>
    </div>
  </div>
</template>
