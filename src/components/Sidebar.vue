<template>
    <div id="sidebar">
        <router-link v-for="(item, index) in menuItems" :key="index" :to="{ name: item.route }" tag="div" class="sidebar-menu-item">
            {{ item.label }}
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuItems: [
                    {
                        label: 'Company Data',
                        route: 'CompanyData',
                    },
                    {
                        label: 'Company Table',
                        route: 'CompanyTable',
                    },
                    {
                        label: 'Company Page',
                        route: 'CompanyPage',
                    },
                ]
            }
        },
    }
</script>

<style lang="scss">
    @import 'Styles/variables';

    #sidebar {
        width: $width-sidebar;
        height: fit-content;
        border: 1px solid $color-border;
        border-radius: 5px;
        margin-right: $margin-sidebar;
    
        .sidebar-menu-item {
            cursor: pointer;
            text-transform: uppercase;
            padding: 1.5em 2em;
            font-weight: bold;
            color: $color-menu-text;
            border-bottom: 1px solid $color-border;

            &:last-child {
                border-bottom: none;
            }
            &.router-link-active {
                color: $color-text;
                border-left: 3px solid $color-menu-item-active;
                padding-left: calc(2em - 3px);
            }
        }
    }
</style>