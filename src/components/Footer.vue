<template>
    <div id="footer">
        <div class="footer-content">
            <div class="footer-row">
                <div class="footer-row-item">
                    <span v-for="(item, index) in menuItems" :key="index" class="footer-menu-item">{{ item }}</span>
                </div>
                
                <div class="footer-row-item">
                    <span v-for="(item, index) in menuItemsSecondary" :key="index" class="footer-menu-item">{{ item }}</span>
                </div>
            </div>

            <div class="footer-row">
                <div class="footer-row-item">
                    <span class="copyright">
                        &copy; Copyright 2017, Intricately, Inc. All Rights Reserved.
                    </span>
                </div>
                
                <div class="footer-row-item">
                    <img v-for="(item, index) in socialMedia" :key="index" :src="`/public/social/${item}`" class="social-icon" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuItems: [
                    'Pricing',
                    'Blog',
                    'Webinars',
                    'Events',
                    'Help Center',
                ],
                menuItemsSecondary: [
                    'Terms and Conditions',
                    'Privacy Policy',
                ],
                socialMedia: [
                    'linkedin.png',
                    'facebook.png',
                    'twitter.png',
                ],
            }
        },
    }
</script>

<style lang="scss">
    @import 'Styles/variables';

    #footer {
        background-color: $color-footer;
        height: $height-footer;
        margin-top: auto;
        display: flex;
        justify-content: center;
        font-size: 0.75em;
        color: $color-menu-text;

        .footer-content {
            @include layoutBlock;
        }
        .footer-row {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &:first-child {
                margin-bottom: 1.75em;
            }
        }

        .footer-menu-item {
            padding-left: 0.75em;
            padding-right: 0.75em;
            border-left: 1px solid $color-border;
            cursor: pointer;

            &:first-child {
                padding-left: 0;
                // padding-right: 0;
                border-left: none;
            }
            &:last-child {
                padding-right: 0;
            }
        }
        .copyright {
            color: $color-text-light;
        }
        .social-icon {
            width: 25px;
            height: 25px;
            margin-left: 1em;

            &:first-child {
                margin-left: 0;
            }
        }
    }

</style>