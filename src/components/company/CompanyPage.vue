<template>
    <div id="company-page">
        <div class="company-header">
            <!-- LOGO -->
            <div class="company-logo">
                <img src="/public/companies/logo-small-microsoft.png" />
            </div>

            <!-- NAME & LOCATION -->
            <div class="company-info">
                <h1 class="no-margin-top">{{ name }}</h1>

                <div class="company-location">
                    <img src="/public/icons/location.png" />

                    {{ location }}
                </div>
            </div>
        </div>

        <div class="company-description">
            {{ about }} <a href="#">View More ...</a>
        </div>

        <div class="row">
            <div class="column column-half">
                <div class="block">
                    <div class="block-header">Activities</div>

                    <div v-for="(item, index) in activities" :key="index" class="activity-item">
                        <div class="activity-date">{{ item.date }}</div>

                        <div class="activity-icon">
                            <img :src="`/public/icons/${item.icon}`" />
                        </div>

                        <div class="activity-description" v-html="item.richtext"></div>
                    </div>
                </div>

            </div>
            <div class="column column-half">
                <div class="block">
                    <div class="block-header">Similar Companies</div>

                    <div v-for="(item, index) in similarCompanies" :key="index" class="companies-item">
                        <img :src="`/public/companies/${item.logo}`" />
                        {{ item.name }}
                    </div>
                </div>

                <div class="block">
                    <div class="block-header">Company Spend History</div>

                    <div class="company-spend-history">
                        PLACEHOLDER COMPONENT
                    </div>
                </div>

                <div class="block">
                    <div class="block-header">Company Spend History</div>

                    <div v-for="(item, index) in spendHistory" :key="index" class="company-spend-item">
                        <img :src="`/public/companies/${item.logo}`" />

                        <div class="company-spend-info">
                            <div class="company-spend-name">{{ item.name }}</div>

                            <div class="company-spend-description">{{ item.description }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState('companyPage', [
                'name',
                'location', 
                'about',

                'activities',
                'similarCompanies',
                'spendHistory',
            ])
        }
    }
</script>

<style lang="scss">
    @import 'Styles/variables';

    .company-header {
        display: flex;
        margin-bottom: 1.75em;
    }
    .company-logo {
        @include boxshadow(lighten($color-text-light, 10%));

        background-color: $color-white;
        width: 65px;
        height: 65px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1em;

        img {
            width: 32px;
            height: 32px;
        }
    }
    .company-info {
        h1 {
            font-weight: initial;
            font-size: 32px;
            margin-bottom: 0.25em;
        }
    }
    .company-location {
        font-size: 12px;
        color: $color-text-light;
        display: flex;
        align-items: center;

        img {
            margin-right: 0.5em;
        }
    }
    .company-description {
        color: $color-text;
        line-height: 1.75em;
        margin-bottom: 1.75em;
    }


    .row {
        display: flex;
    }
    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 1.5em;

        &:last-child {
            margin-right: 0;
        }

        &.column-half {
            width: calc(100% - 1.5em);
        }
    }

    .block {
        border: 1px solid $color-border;
        border-radius: 5px;
        background-color: $color-white;

    }
    .block-header {
        text-transform: uppercase;
        padding: 1em;
        font-size: 12px;
        border-bottom: 1px solid $color-border;
    }


    .activity-item {
        padding: 1em;
        display: flex;
        color: $color-text;
        line-height: 1.5em;
        border-bottom: 1px solid $color-border;

        &:last-child {
            border-bottom: none;
        }

        .activity-date {
            color: $color-text-light;
            width: 100px;
        }
        .activity-icon {
            margin-right: 0.5em;
        }
        .activity-description {
            font-size: 14px;
            max-width: 235px;
        }
        .activity-owner, .activity-action-info {
            color: $color-button;
            cursor: pointer;
        }
        .activity-victim {
            color: $color-text-light;
            text-decoration: line-through;
        }
    }

    .companies-item {
        padding: 0.5em 0.75em 0.25em;
        display: flex;
        align-items: center;
        color: $color-button;

        img {
            margin-right: 1em;
        }

        &:last-child {
            border-bottom: none;
        }
    }
    .company-spend-history {
        height: 150px;
    }
    .company-spend-item {
        padding: 0.5em 0.75em 0.25em;
        display: flex;

        img {
            margin-right: 1em;
        }

        .company-spend-info {
            padding-top: 0.25em;
            line-height: 1.5em;
        }
        .company-spend-name {
            color: $color-button;
        }
        .company-spend-description {
            color: $color-text;
        }
    }
</style>