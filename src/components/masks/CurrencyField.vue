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
            }
        },
        computed: {
            input: {
                get() {
                    if (!this.value)
                        return

                    // HIDE ERROR IF NUMERIC WARNING
                    if ((/^\d+$/).test(this.value))
                        this.error = ''
console.log(this.value)
console.log(this.value.toFixed(0))
                    return this.isDisplay
                        ? `${this.currency} ${this.value.toFixed(0).replace(/-?(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")}`
                        : this.value.toString()
                },
                set(val) {
                    this.error = ''

                    // CHECK FOR NON-NUMERIC
                    if (!(/^-?\d+$/).test(val)) {
                        this.error = 'Company spend must be a number.'
                        return this.$emit('input', parseInt(val.replace(/[^\d\.]/g, "")) || 0)
                    }

                    // CHECK FOR NEGATIVE
                    if (this.regexNegative.test(val)) {
                        this.error = 'Company spend must be positive.'
                        return this.$emit('input', parseInt(val))
                    }

                    return this.$emit('input', parseInt(val))
                }
            },
        },
        methods: {
            blur() {
                this.isDisplay = true
            },
            focus() {
                this.isDisplay = false
            }
        }
    }
</script>