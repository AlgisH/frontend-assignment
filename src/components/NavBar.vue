<template>
    <div id="navigation">
        <router-link :to="{ name: 'Home' }" tag="span" >
            <div>Home</div> 
        </router-link>
        
        <span class="separator">/</span>
        
        <router-link :to="{ name: currentRoute }" tag="span" >
            <div>{{ currentRouteName }}</div> 
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nameMap: {
                    Home: 'Home',
                    CompanyData: 'Company Data',
                    CompanyTable: 'Company Table', 
                    CompanyPage: 'Company Page',
                }
            }
        },
        computed: {
            currentRoute() {
                return this.$route.name
            },
            currentRouteName() {
                return this.nameMap[this.currentRoute]
            }
        },
    }
</script>

<style lang="scss">
    @import 'Styles/variables';

    #navigation {
        padding: 1.75em 0;
        color: $color-text-light;
        display: flex;
        font-size: 14px;

        .separator {
            margin: 0 1em;
        }

        >span {
            cursor: pointer;
        }
    }

</style>