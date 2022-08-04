<script setup>
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { /* BellIcon, */ MenuIcon, XIcon } from "@heroicons/vue/outline";
/* import { SearchIcon } from "@heroicons/vue/solid"; */

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Profile", href: "#", current: false },
  { name: "Resources", href: "#", current: false },
  { name: "Company Directory", href: "#", current: false },
  { name: "Openings", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
</script>

<template>
  <div class="min-h-full">
    <Popover as="header" class="pb-32 bg-indigo-600" v-slot="{ open }">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="relative py-5 flex items-center justify-between">
          <div class="flex items-center h-8">
            <div
              class="absolute left-0 flex-shrink-0 lg:static max-w-[70%] lg:max-w-none"
            >
              <a href="#">
                <span class="sr-only">Workflow</span>
                <!-- <img
                  class="h-8 w-auto lg:hidden"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                  alt="Workflow"
                /> -->
                <img
                  class="h-8 w-auto"
                  src="~/assets/img/workflow-logo-indigo-300-mark-white-text.svg"
                  alt="Workflow"
                />
              </a>
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-indigo-700 text-white'
                    : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                  'rounded-md py-2 px-3 text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >
                {{ item.name }}
              </a>
            </div>
          </div>

          <!-- Search -->
          <!-- <div
            class="flex-1 min-w-0 px-12 lg:pl-12 lg:pr-0 flex flex-row justify-end"
          >
            <div class="max-w-xs w-full mx-auto lg:m-0">
              <label for="desktop-search" class="sr-only">Search</label>
              <div class="relative text-white focus-within:text-gray-600">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
                >
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="desktop-search"
                  class="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-white focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </div>
          </div> -->

          <!-- Menu button -->
          <div class="absolute right-0 flex-shrink-0 lg:hidden">
            <!-- Mobile menu button -->
            <PopoverButton
              class="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <div class="hidden lg:block lg:ml-4">
            <div class="flex items-center">
              <!-- <button
                type="button"
                class="bg-indigo-600 flex-shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
              >
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button> -->

              <!-- Profile dropdown -->
              <Menu as="div" class="ml-3 relative flex-shrink-0">
                <div>
                  <MenuButton
                    class="bg-indigo-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="rounded-full h-8 w-8"
                      :src="user.imageUrl"
                      alt=""
                    />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem
                      v-for="item in userNavigation"
                      :key="item.name"
                      v-slot="{ active }"
                    >
                      <a
                        :href="item.href"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block py-2 px-4 text-sm text-gray-700',
                        ]"
                      >
                        {{ item.name }}
                      </a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>

        <header class="pt-4 pb-8 lg:pt-8 lg:pb-10">
          <h1 class="text-3xl font-bold text-white">Dashboard</h1>
        </header>
      </div>

      <TransitionRoot as="template" :show="open">
        <div class="lg:hidden">
          <TransitionChild
            as="template"
            enter="duration-150 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-150 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <PopoverOverlay class="z-20 fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <TransitionChild
            as="template"
            enter="duration-150 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <PopoverPanel
              focus
              class="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
            >
              <div
                class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200"
              >
                <div class="pt-3 pb-5">
                  <div class="flex items-center justify-between px-4">
                    <div>
                      <img
                        class="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div class="-mr-2">
                      <PopoverButton
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <span class="sr-only">Close menu</span>
                        <XIcon class="h-6 w-6" aria-hidden="true" />
                      </PopoverButton>
                    </div>
                  </div>
                  <div class="mt-3 px-2 space-y-1">
                    <a
                      href="#"
                      class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                      >Home</a
                    >
                    <a
                      href="#"
                      class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                      >Profile</a
                    >
                    <a
                      href="#"
                      class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                      >Resources</a
                    >
                    <a
                      href="#"
                      class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                      >Company Directory</a
                    >
                    <a
                      href="#"
                      class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                      >Openings</a
                    >
                  </div>
                </div>
                <div class="pt-4 pb-2">
                  <div class="flex items-center px-5">
                    <div class="flex-shrink-0">
                      <img
                        class="h-10 w-10 rounded-full"
                        :src="user.imageUrl"
                        alt=""
                      />
                    </div>
                    <div class="ml-3 min-w-0 flex-1">
                      <div class="text-base font-medium text-gray-800 truncate">
                        {{ user.name }}
                      </div>
                      <div class="text-sm font-medium text-gray-500 truncate">
                        {{ user.email }}
                      </div>
                    </div>
                    <!-- <button
                      type="button"
                      class="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span class="sr-only">View notifications</span>
                      <BellIcon class="h-6 w-6" aria-hidden="true" />
                    </button> -->
                  </div>
                  <div class="mt-3 px-2 space-y-1">
                    <a
                      v-for="item in userNavigation"
                      :key="item.name"
                      :href="item.href"
                      class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                      >{{ item.name }}</a
                    >
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </TransitionChild>
        </div>
      </TransitionRoot>
    </Popover>

    <main class="-mt-32">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <!-- Replace with your content -->
        <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <div class="h-96 border-4 border-dashed border-gray-200 rounded-lg" />
        </div>
        <!-- /End replace -->
      </div>
    </main>

    <!-- <footer>
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div class="py-8 text-sm text-gray-500 text-center sm:text-left">
          <span class="block sm:inline">&copy; 2021 Tailwind Labs Inc.</span>
          <span class="block sm:inline">All rights reserved.</span>
        </div>
      </div>
    </footer> -->
  </div>
</template>
