<script>
import userRepository from "../../js/repositories/user";
import { ref } from "vue";

export default {
    setup(){
        const isLoading = ref(false);
        return {
            isLoading
        }
    },
    data() {
        return {
            message: "",
        }
    },
    methods: {
        async getTestData() {
            this.isLoading = true;
            this.message = await userRepository.index();
            console.log(this.message);
            this.isLoading = false;
        }
    },
    mounted() {
    }
}

</script>

<template>
    <v-btn elevation="2" @click="getTestData" :loading="isLoading">テスト</v-btn>
    <p>{{ message }}</p>
</template>


