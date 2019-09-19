<template>
    <div id="topbar">
        <!-- LOGO -->
        <div class="topbar-logo">
            <img src="/public/logo-small.png" 
                @click="goHome()" />
        </div>

        <!-- SEARCH -->
        <div class="topbar-search-action">
            <div class="company-search">
                <img src="/public/icons/search.png" />
                
                <input id="company-search" name="company-search" type="text" placeholder="Search Companies"/>
            </div>

            <span class="or-divider">OR</span>

            <div class="button-new-smartlist">
                New Smartlist
            </div>
        </div>

        <!-- MENU ITEMS -->
        <div class="topbar-menu-items">
            <div v-for="(item, index) in menuItems" :key="index" class="menu-item">
                {{ item }}
                <img src="/public/icons/arrow-down.png" />
            </div>
        </div>

        <!-- USER MENU -->
        <div class="topbar-user-menu">
            <img src="/public/companies/logo-small-chrome-2.png" />

            <img src="/public/users/user-small.png" />

            <img src="/public/icons/arrow-down.png" />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuItems: [
                    'Propspect',
                    'Alert',
                    'Learn',
                ]
            }
        },
        methods: {
            goHome() {
                if (this.$route.name !== 'CompanyData')
                    this.$router.push({ name: 'CompanyData' })
            }
        }   
    }
</script>

<style lang="scss" scoped>
    @import 'Styles/variables';

    #topbar {
        height: $height-topbar;
        background-color: $color-primary;
        color: $color-white;
        padding: 0 50px;
        display: flex;
        align-items: center;
        font-size: 12px;
        min-width: fit-content;
    }
    // LOGO
    .topbar-logo {
        margin-right: 2.5em;

        img {
            width: 45px;
            height: 45px;
        }
    }

    // SEARCH ACTION
    .topbar-search-action {
        display: flex;
    }
    .company-search {
        display: flex;
        align-items: center;
        width: 330px;
        background-color: $color-primary-darker;
        border-radius: 5px;
        // padding: 0 1em;

        input {
            color: $color-white;
            width: calc(100% - 32px);
            background: none;   
            border: none;

            &:focus {
                outline: none;
            }
            &::placeholder { 
                color: $color-white;
                opacity: 0.8; 
            }
        }
    }
    .or-divider {
        margin: 0 1em;
        display: flex;
        align-items: center;
    }
    .button-new-smartlist {
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
        text-transform: uppercase;
        background-color: $color-button;
        padding: 1em 2em;
        border-radius: 5px;
        transition: background-color 0.3s;

        &:hover {
            background-color: darken($color-button, 5%);
        }
    }
    // MENU ITEMS
    .topbar-menu-items {
        display: flex;
        text-transform: uppercase;
        margin-left: 2em;
    }
    .menu-item {
        display: flex;
        align-items: center;
        margin: 0 1em;
    }


    // USER MENU
    .topbar-user-menu {
        margin-left: auto;
        white-space: nowrap;

        img {
            width: 35px;
            height: 35px;

            &:first-child {
                margin-right: 0.75em;
            }
        }
    }

    img {
        cursor: pointer;
    }
    
</style>