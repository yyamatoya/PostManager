<script>
import { ref } from 'vue';
import { getCurrentDateTime } from './helper/DateTimeHelper';
export default {
    setup() {
        const menus = ref([]);
        const currentDateTime = ref("");
        // menus.value = ['ユーザ管理', '投稿一覧', '通報一覧'];
        menus.value = [
            {
                title: 'HOME',
                to: '/'
            },
            {
                title: 'ユーザ管理',
                to: '/users'
            },
            {
                title: '投稿一覧',
                to: '/posts'
            },
            // {
            //     title: 'ログアウト',
            //     to: '/logout'
            // }
        ];
        currentDateTime.value = getCurrentDateTime();
        const timerId = setInterval(() => {
            const dateTime = getCurrentDateTime();
            currentDateTime.value = dateTime;
        }, 1000);
        return {
            menus,
            currentDateTime,
            timerId
        }
    },
    data() {
        return {
            isDrawerOpened: false
        };
    },
    computed: {
    },
    mounted() {
    },
    destroyed() {
        this.timerId.cancel();
    },
}
</script>


<template>
    <!-- <Drawer/> -->
    <v-app-bar app :elevation="2" color="blue" image="https://picsum.photos/1920/1080?random">
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>
        <!-- <v-app-bar-nav-icon @click="isDrawerOpened = !isDrawerOpened"></v-app-bar-nav-icon> -->
        <v-app-bar-title>投稿管理サイト</v-app-bar-title>
        <template v-slot:append>
            <!--  -->
            <v-btn :to="menu.to" v-for="(menu, index) in menus" :key="index">{{ menu.title }}</v-btn>
            <!-- <v-btn block>ユーザ管理</v-btn> -->
            <div class="text-right px-1">{{ currentDateTime }}</div>
        </template>
    </v-app-bar>
</template>

