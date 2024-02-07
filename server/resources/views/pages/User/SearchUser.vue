<script>
import { reactive, ref } from 'vue';
import UserTable from '../../components/UserTable.vue';
import moment from 'moment';
export default {
    name: 'SearchUser',
    components: { UserTable },
    setup() {
        const headers = reactive([
            { title: '名前', value: 'name' },
            {
                title: '最終ログイン日時', value: 'lastLoggedInAt'
            },

        ]);
        const items = ref([]);
        const isLoading = ref(false);
        return { headers, items, isLoading }
    },
    methods: {
        async index() {
            this.isLoading = true;
            this.items = [];
            // load UserData
            setTimeout(() => {
                const items = Array(100).fill(null).map((_, i) => {
                    return {
                        name: `African Elephant${Number(i)}`,
                        lastLoggedInAt: moment().fromNow()
                    }
                }
                );
                this.items = items;
                this.isLoading = false;
            }, 1000);
        },
    }
}
</script>

<template>
    <v-container fluid>
        <v-form fast-fail @submit.prevent @submit="index">
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
                        検索条件
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-container fluid>
                            <v-text-field v-model="firstName" label="First name" :rules="firstNameRules" />
                            <v-text-field v-model="lastName" label="Last name" :rules="lastNameRules" />
                        </v-container>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-btn type="submit" block color="secondary" class="mt-2" :loading="isLoading" :disabled="isLoading">
                <v-icon>mdi-magnify</v-icon>
                検索</v-btn>
        </v-form>
    </v-container>
    <UserTable :headers="headers" :items="items" :is-loading="isLoading" />
</template>
