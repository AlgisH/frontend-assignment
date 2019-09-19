<template>
    <div class="input-control" :class="[{'has-error': error !== '' }, className]">
        <label v-if="label" :for="name">{{ label }}</label>
        <input v-model="input" 
            @keyup.enter="$emit('enter')" 
            @blur="blur()" 
            @focus="focus()"
            type="text" 
            :name="name" :id="name" :placeholder="placeholder" :disabled="disabled" />
        <div class="input-error-message">
            <div>{{ error }}</div>
        </div>
    </div>
</template>

<script>    
    export default {
        props: {
            className: { type: String, default: 'text' },
            type: { type: String, default: 'text' },
			label: { type: String, required: false },
			id: { type: String, required: false },
			name: { type: String, required: false },
			placeholder: { type: String, required: false },
			validate: { type: String, required: false },
            validateAs: { type: String, required: false },
			value: { required: true },
            disabled: { type: Boolean, default: false },
            
            currency: { type: String, default: '$' },
        },
        data() {
            return {
                isDisplay: true,
                error: '',
                regexNegative: /^-/g,
                regexFullRange: /^(-?\d+)(( - )|( -$)|( $))?(-?\d+)?$/g,
            }
        },
        computed: {
            input: {
                get() {
                    if (!this.value)
                        return

                    // HIDE ERROR IF NUMERIC WARNING
                    if (this.regexFullRange.test(this.value))
                        this.error = ''

                    return this.isDisplay
                        ? this.formatRange()
                        : this.value.toString()
                },
                set(val) {
                    this.error = ''
                    // CHECK FOR NEGATIVE
                    if (this.regexNegative.test(val)) {
                        this.error = 'Company spend must be positive.'
                        return this.$emit('input', parseInt(val))
                    }

                    if (!this.regexFullRange.test(val))
                        this.error = 'Company available spend should have the format XXXXXX - XXXXXX'

                    return this.$emit('input', val)
                }
            },
        },
        methods: {
            blur() {
                this.isDisplay = true
            },
            focus() {
                this.isDisplay = false
            },
            formatRange() {
                const split = this.value.toString().split(' - ').map(item => parseInt(item).toFixed(0) )

// CHECK IF CORRECT RANGE
                if (split.length !== 2) {
                    this.error = 'Invalid spend range.'
                    return
                }

                // CHECK IF RANGE IS POSITIVE
                if (parseInt(split[0]) >= parseInt(split[1])) {
                    this.error = 'Maximum value of range cannot be lower than the initial.'
                    // return
                }

                return `$${split[0].replace(/-?(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")} - $${split[1].replace(/-?(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")}`
            }
        }
    }
</script>