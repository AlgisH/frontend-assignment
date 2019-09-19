<template>
    <div id="app">
        <TopBar />

        <div id="main-wrapper">
            <NavBar />

            <div id="container">
                <SideBar />

                <div id="main-view">
                    <router-view />
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
    import TopBar from 'Components/TopBar.vue'
    import SideBar from 'Components/SideBar.vue'
    import NavBar from 'Components/NavBar.vue'
    import Footer from 'Components/Footer.vue'

    export default {
        components: {
            TopBar,
            SideBar,
            NavBar,
            Footer,
        },
        created() {
        }
    }
</script>

<style lang="scss">
    @import 'Styles/variables';

    #main-wrapper {
        @include layoutBlock;
        height: calc(100% - #{$height-topbar} - #{$height-footer});
    }
    #container {
        display: flex;
        font-size: 14px;
    }
    #main-view {
        width: calc(100% - #{$width-sidebar} - #{$margin-sidebar} - 2em);
    }
</style>