<template>
    <div>
        <div class="stars big-stars"></div>
        <div class="stars small-stars"></div>
        <header>
            <nav class="navbar">
                <div class="nav-left">
                    <img src="../../assets/imgs/logo.png" alt="Logo du site" class="logo" />
                    <h1 class="site-title">
                        <a href="/public">Nyx's Imperium</a>
                    </h1>
                </div>
                <div class="nav-right">
                    <ul class="nav-links" :class="{ active: menuActive }">
                        <li>
                            <a href="/wiki"><i class="fa-solid fa-book-open"></i> Wiki</a>
                        </li>
                        <li>
                            <a href="/discord" target="_blank"><i class="fa-brands fa-discord"></i> Discord</a>
                        </li>
                        <li v-if="isConnected">
                            <a href="/abstract/web_logout"><i class="fa-solid fa-right-from-bracket"></i>
                                Déconnexion</a>
                        </li>
                        <li v-else>
                            <a href="/dashboard"><i class="fa-solid fa-user"></i> Mon compte</a>
                        </li>
                    </ul>
                </div>
                <div class="hamburger" id="hamburger" @click="toggleMenu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </header>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const menuActive = ref(false);

const toggleMenu = () => {
    menuActive.value = !menuActive.value;
};

const isConnected = ref(false);


</script>

<style scoped>
@import "@/assets/css/elements/header.css";
</style>
