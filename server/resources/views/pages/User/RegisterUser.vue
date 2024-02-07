<script>
import { ref } from 'vue';
import userRepository from "../../../js/repositories/user";

export default {
    name: "RegisterUser",
    setup() {
        const isRegistering = ref(false);
        return {
            isRegistering,
        }
    },
    data() {
        return {
            name: '',
            mailAddress: '',
            password: '',
            rules: {
                name: [
                    (v) => !!v || "名前は必須です",

                ],
                mailAddress: [
                    (v) => !!v || "メールアドレスは必須です"
                ],
                password: [
                    (password) => !!password || "パスワードは必須です",
                    (password) => password?.length == 6 || "パスワードは6桁で入力してください"
                ]
            },
        }
    },
    methods: {
        async register() {
            if (this.$refs?.form?.validate()) {
                this.isRegistering = true;
                await userRepository.index()
                    .then(({ data }) => null)
                    .catch()
                    .finally(() => {
                        this.isRegistering = false;
                    })
            }
        }
    },
    async mounted() {
    }
}
</script>

<template>
    <v-container>
        <!-- <p>以下の情報を入力してください。</p> -->
        <v-card>
            <v-container>
                <v-form ref="form" fast-fail @submit.prevent
                :disabled="isRegistering"
                @submit="register()">
                    <!-- 名前 -->
                    <v-row>
                        <v-col cols="3" class="d-flex justify-center align-center">名前</v-col>
                        <v-col cols="9">
                            <v-text-field :rules="rules.name" density="comfortable" v-model="name" />
                        </v-col>
                    </v-row>
                    <!-- メールアドレス -->
                    <v-row>
                        <v-col cols="3" class="d-flex justify-center align-center">メールアドレス</v-col>
                        <v-col cols="9">
                            <v-text-field :rules="rules.mailAddress" density="comfortable" v-model="mailAddress" />
                        </v-col>
                    </v-row>
                    <!-- パスワード -->
                    <v-row>
                        <v-col cols="3" class="d-flex justify-center align-center">パスワード</v-col>
                        <v-col cols="9">
                            <v-text-field counter="6" :rules="rules.password" density="comfortable" v-model="password" />
                        </v-col>
                    </v-row>
                    <!-- 登録ボタン -->
                    <v-row>
                        <v-col class="d-flex justify-center align-center">
                            <v-btn
                            :loading="isRegistering"
                            type="submit" class="m-2" block rounded size="large" color="primary" text="登録する" />
                        </v-col>
                    </v-row>
                </v-form>
            </v-container>
        </v-card>
    </v-container>
</template>
