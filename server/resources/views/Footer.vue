
<script>
export default {
    name: "Footer"
}
</script>
<template>
    <v-footer app class="bg-blue-lighten-4 pt-2">
        <v-row justify="center" dense>
            <v-col class="text-center mt-1" cols="12">
                {{ new Date().getFullYear() }} — <strong>Yuji Yamatoya</strong>
                <!-- {{ new Date().getFullYear() }} — <strong>Yuji Yamatoya</strong> — <strong>{{ import.meta.env.VITE_APP_VERSION || ''}}</strong> -->
            </v-col>
        </v-row>
    </v-footer>
</template>
