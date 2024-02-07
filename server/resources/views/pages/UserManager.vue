<script>
import { ref } from 'vue';
import RegisterUser from './User/RegisterUser.vue';
import SearchUser from './User/SearchUser.vue';
export default {
    setup() {
        const activeButtonIndex = ref(1);
        const menus = ref([{
            name: '検索',
            title: 'ユーザ検索',
            icon: 'mdi-magnify',
            color: 'primary',
            description: 'ユーザ検索するページ',
            component: SearchUser,
        },
        {
            name: '登録',
            title: 'ユーザ登録',
            icon: 'mdi-application-edit-outline',
            color: 'secondary',
            description: '',
            component: RegisterUser,
        },
        {
            name: '削除',
            title: 'ユーザ削除',
            icon: 'mdi-delete',
            color: 'error',
            description: '',
            component: null
        },
        ]);
        return {
            activeButtonIndex,
            menus,
        };
    },
    computed: {
    },
    methods: {
        isActive(index) {
            return this.activeButtonIndex === index;
        },
        active(index) {
            this.activeButtonIndex = index;
        },
    },
    mounted() {
    },
    components: { RegisterUser, SearchUser }
}
</script>

<template>
    <!-- QuickStart -->
    <div class="d-flex justify-space-evenly py-3 my-1">
        <v-btn rounded :color="isActive(index) ? item.color ?? undefined : undefined" v-for="(item, index) in menus"
            :key="index" @click="active(index)" width="200" height="50" elevation="4">
            <template v-slot:prepend>
                <v-icon :icon="item.icon" />
            </template>
            <strong>{{ item.name }}</strong>
        </v-btn>
    </div>
    <v-divider />
    <!-- contents -->
    <v-container fluid>
        <!-- ユーザ検索 -->
        <div v-for="(item, index) in menus" v-show="index === activeButtonIndex" :key="index">
            <v-toolbar density="compact">
                <v-toolbar-title class="my-3"><strong>{{ item.title }}</strong></v-toolbar-title>
            </v-toolbar>
            <!-- <v-banner :text="item.description" :stacked="false" /> -->
            <SearchUser v-if="activeButtonIndex === 0" />
            <RegisterUser v-if="activeButtonIndex === 1" />
            <RegisterUser v-if="activeButtonIndex === 2" />
        </div>
        <!-- <div v-show="activeButtonIndex == 0">
            <v-toolbar density="compact">
                <v-toolbar-title class="my-3"><strong>ユーザ検索</strong></v-toolbar-title>
            </v-toolbar>
            <v-banner :text="description" :stacked="false" />
            <SearchUser />
        </div>
        <div v-show="activeButtonIndex == 1">
            <v-toolbar density="compact">
                <v-toolbar-title class="my-3"><strong>ユーザ登録</strong></v-toolbar-title>
            </v-toolbar>
            <v-banner :text="description" :stacked="false" />
            <RegisterUser />
        </div>  -->

    </v-container>
</template>


<style scoped>
activeBtnClass {
    color: blue;
}
</style>
