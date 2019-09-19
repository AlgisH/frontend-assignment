<template>
    <div id="company-data">
        <p class="no-margin-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius mi vel felis maximus, vel tempor sapien tincidunt. Vivamus quam enim</p>
        
        <form @prevent.submit="" class="form">
            <Field class="half"
                v-model="name"
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
                v-model="spend"
                :type="'number'"
                :label="'Company Spend'"
                :id="'companySpend'"
                :name="'companySpend'"
                :placeholder="'e.g. $150,000'"
                :currency="'$'"
            />

            <CurrencyRangeField 
                :className="'half'"
                v-model="spendAvailable"
                :type="'number'"
                :label="'Company Spend Availability'"
                :id="'companySpendAvailability'"
                :name="'companySpendAvailability'"
                :placeholder="'e.g. $150,000 - $330,000'"
                :currency="'$'"
            />

            <Field class="full"
                v-model="notes"
                :type="'textarea'"
                :label="'Notes'"
                :id="'notes'"
                :name="'notes'"
                :height="150"
                :placeholder="'e.g. Good Tech Company'"
                :validate="'required'"
                :validateAs="'Company name'"
            />
        </form>
    </div>
</template>

<script>
    import CurrencyField from 'Components/masks/CurrencyField.vue'
    import CurrencyRangeField from 'Components/masks/CurrencyRangeField.vue'

    export default {
        components: {
            CurrencyField,
            CurrencyRangeField,
        },
        data() {
            return {
                name: '',
                spend: '',
                spendAvailable: '',
                notes: ''
            }
        }
    }
</script>

<style lang="scss">
    @import 'Styles/variables';

    #company-data {
        border: 1px solid $color-border;
        border-radius: 5px;
        padding: 1.5em

        
    }
</style>