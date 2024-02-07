<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
export default {
    components: {
        Header,
        Footer,
    }
}
</script>

<template>
    <v-app>
        <Header />
        <v-main>
            <router-view />
        </v-main>
        <Footer />

    </v-app>
</template>
