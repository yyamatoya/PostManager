<script>
import axios from "axios";
import userRepository from "../../js/repositories/user";

export default {
    data() {
        return {
            message: "",
            loading: false,
        }
    },
    methods: {
        async getTestData() {
            this.loading = true;
            this.message = await userRepository.index();
            console.log(this.message);
            this.loading = false;
        }
    },
    mounted() {
    }
}

</script>

<template>
    <v-btn elevation="2" @click="getTestData" :loading="loading">テスト</v-btn>
    <p>{{ message }}</p>
</template>


