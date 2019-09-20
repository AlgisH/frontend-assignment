<template>
    <div id="company-data">
        <p class="no-margin-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius mi vel felis maximus, vel tempor sapien tincidunt. Vivamus quam enim</p>
        
        <form @prevent.submit="" class="form">
            <Field class="half"
                :value="name"
                @input="SET_NAME"
                :type="'text'"
                :label="'Company Name'"
                :id="'companyName'"
                :name="'companyName'"
                :placeholder="'e.g. Your Company Name'"
                :validate="'required'"
                :validateAs="'Company name'"
            />

            <CurrencyField 
                :className="'half'"
                :value="spend"
                @input="SET_SPEND"
                :type="'number'"
                :label="'Company Spend'"
                :id="'companySpend'"
                :name="'companySpend'"
                :placeholder="'e.g. $150,000'"
                :currency="'$'"
            />

            <CurrencyRangeField 
                :className="'half'"
                :value="spendAvailable"
                @input="SET_SPEND_AVAILABLE"
                :type="'number'"
                :label="'Company Spend Availability'"
                :id="'companySpendAvailability'"
                :name="'companySpendAvailability'"
                :placeholder="'e.g. $150,000 - $330,000'"
                :currency="'$'"
            />

            <div class="input-control">
                <label>Notes</label>
                <div @click="openModal()" class="block-notes">
                    {{ notes }}
                </div>
            </div>
        </form>

        <Modal ref="modalNotes" :header="'Additional Notes'" class="form">
            <Field class="full"
                slot="body"
                v-model="notesTemp"
                :type="'textarea'"
                :id="'notes'"
                :name="'notes'"
                :height="150"
                :placeholder="'e.g. Good Tech Company'"
                :validate="'required'"
                :validateAs="'Company name'"
            />

            <div @click="saveNotes()" slot="actions" class="button-save">Save</div>
        </Modal>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    import CurrencyField from 'Components/masks/CurrencyField.vue'
    import CurrencyRangeField from 'Components/masks/CurrencyRangeField.vue'

    export default {
        components: {
            CurrencyField,
            CurrencyRangeField,
        },
        data() {
            return {
                notesTemp: '',
            }
        },
        computed: {
            ...mapState('companyData', [
                'name',
                'spend', 
                'spendAvailable',
                'notes'
            ])  
        },
        methods: {
            ...mapMutations('companyData', [
                'SET_NAME',
                'SET_SPEND',
                'SET_SPEND_AVAILABLE',
                'SET_NOTES',
            ]),
            openModal() {
                this.$refs.modalNotes.open()
            },
            saveNotes() {
                this.SET_NOTES(this.notesTemp)
                this.$refs.modalNotes.close()
            }
        },
    }
</script>

<style lang="scss">
    @import 'Styles/variables';

    #company-data {
        border: 1px solid $color-border;
        border-radius: 5px;
        padding: 1.5em;

        .block-notes {
            @include boxshadow($color-border);

            cursor: pointer;
            width: calc(100% - 1.5em);
            height: 150px;
            padding: 0.75em;
            border: 1px solid $color-border;
            border-radius: 5px;
            color: $color-text;
        }
        .button-save {
            cursor: pointer;
            user-select: none;
            white-space: nowrap;
            text-transform: uppercase;
            background-color: $color-button;
            padding: 0.5em 2em;
            border-radius: 5px;
            transition: background-color 0.3s;
            color: $color-white;

            &:hover {
                background-color: darken($color-button, 5%);
            }
        }
    }
</style>