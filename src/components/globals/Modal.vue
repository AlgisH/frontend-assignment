<template>
    <div v-if="show" @click.self="close()" class="modal-overlay">
        <div class="modal-container">
            <div class="modal-header">
                {{ header }}

                <img @click="close()" src="/public/icons/close.png" />
            </div>

            <div class="modal-body">
                <slot name="body" />
            </div>

            <div class="modal-actions">
                <slot name="actions" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            header: { type: String, default: 'Modal head' },
        },
        data() {
            return {
                show: false,
            }
        },
        methods: {
            open() {
                this.show = true
            },
            close() {
                this.show = false
            }
        }   
    }
</script>

<style lang="scss">
    @import 'Styles/variables';

    .modal-overlay {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: $color-modal-overlay;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-container {
        @include boxshadow($color-modal-overlay);
        background-color: $color-white;
        width: 600px;
        height: 280px;
        padding: 25px;
        border: 1px solid $color-border;
        border-radius: 5px;
        display: flex;
       flex-direction: column;
    }
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-transform: uppercase;
        color: $color-text-light;
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 1.5em;
    
        img {
            cursor: pointer;
        }
    }
    .modal-actions {
        margin-top: auto;
        display: flex;
        justify-content: flex-end;
    }
</style>