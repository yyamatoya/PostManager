<script>
export default {
    name: "Drawer",
    components: {
        // VNavigationDrawer,
        // VListItemContent,
    },
    props: {
        value: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
    <v-navigation-drawer absolute>
        <!-- -->
        <v-container fluid>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Application
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        subtext
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-container>
    </v-navigation-drawer>
</template>
