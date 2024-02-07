<script>
import { ref, toRefs } from 'vue';
export default {
    props: {
        headers: Array,
        isLoading: Boolean,
        items: Array
    },
    setup(props) {
        const { headers, isLoading, items } = toRefs(props);
        const noDataText = ref("データがありません。");
        const loadingText = ref("読み込み中です...");
        const itemPerPageOptions = ref([1, 2, 5, 10, -1]);
        return {
            headers,
            isLoading, items, itemPerPageOptions,
            loadingText, noDataText
        }
    },
    data() {
        return {}
    },
    methods: {

    },
    async mounted() {
    }
}
</script>

<template>
    <v-data-table fixed-header height="200" hide-no-data :headers="headers" :items="items"
        :loading="isLoading" :loading-text="loadingText" :no-data-text="noDataText" />
</template>
