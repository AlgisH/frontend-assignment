<template>
	<div class="input-control" :class="{'has-error': errors.has(name)}">
		<!-- TEXT -->
		<template v-if="isText">
			<label v-if="label" :for="name">{{ label }}</label>
			<input v-model="input" 
                @keyup.enter="$emit('enter')" 
                @blur="$emit('blur')" 
                @focus="$emit('focus')"
                v-validate="validate" :data-vv-as="validateAs" :type="type" :name="name" :id="name" :placeholder="placeholder" :disabled="disabled" />
			<div class="input-error-message">
				<div v-for="(error, index) in errors.collect(name)" :key="index">{{ error }}</div>
			</div>
		</template>
		
        <!-- NUMBER -->
		<template v-if="isNumber">
			<label v-if="label" :for="name">{{ label }}</label>
			<input v-model="input" 
                @keyup.enter="$emit('enter')" 
                @blur="$emit('blur')" 
                @focus="$emit('focus')"
                v-validate="validate" :data-vv-as="validateAs" :type="type" :name="name" :id="name" :placeholder="placeholder" :disabled="disabled" />
			<div class="input-error-message">
				<div v-for="(error, index) in errors.collect(name)" :key="index">{{ error }}</div>
			</div>
		</template>

		<!-- TEXTAREA -->
		<template v-if="isTextarea">
			<label v-if="label" :for="name">{{ label }}</label>
			<textarea v-model="input" 
                @blur="$emit('blur')" 
                @focus="$emit('focus')"
                v-validate="validate" :data-vv-as="validateAs" :name="name" :id="name" :placeholder="placeholder" :style="{'height': `${height}px`}" :disabled="disabled" />
			<div class="input-error-message">
				<div v-for="(error, index) in errors.collect(name)" :key="index">{{ error }}</div>
			</div>
		</template>
	</div>
</template>

<script>
	export default {
		inject: ['$validator'],
		props: {
			type: { type: String, default: 'text' },
			label: { type: String, required: false },
			id: { type: String, required: false },
			name: { type: String, required: false },
			placeholder: { type: String, required: false },
			validate: { type: String, required: false },
            validateAs: { type: String, required: false },

			height: { type: [String, Number], default: 100 },

			value: { required: true },

			disabled: { type: Boolean, default: false },
		},
		data() {
			return {
				input: this.value,
			}
		},
		computed: {
			isText() {
				return this.type === 'text' || this.type === 'password'
			},
			isNumber() {
				return this.type === 'number'
			},
			isTextarea() {
				return this.type === 'textarea'
			},
		},
		watch: {
			value(val) {
				this.input = val
			},
			input(val) {
				this.$emit('input', val)
			},
		},
		created() {
			this.input = this.value
		}
	}
</script>

<style lang="scss">
	@import 'Styles/variables';

    .form {
        .input-control {
            display: flex;
            flex-direction: column;
            margin: 1em 0;
        }
        label {
            text-transform: uppercase;
            color: $color-text-light;
            margin-bottom: 0.5em;
            font-size: 12px;
        }
        input, textarea {
            @include boxshadow($color-border);

            font-family: $font-main;
            padding: 0.75em;
            border: 1px solid $color-border;
            border-radius: 5px;
            color: $color-text;

            &:focus {
                outline: none;
            }
            &::placeholder { 
                color: $color-text-placeholder;
                // opacity: 0.8; 
            }
        }
    }

	// .form, .form-2 {
	// 	.input-control {
	// 		display: flex;
	// 		flex-direction: column;			
	// 	}
		
	// 	input, select, textarea {
	// 		border: 1px solid $color-border;
	// 		// width: 95%;
	// 		padding: 0.25em;
	// 	}
	// }

	// .form {
	// 	.input-control {
	// 		margin-bottom: 1em;
	// 	}
	// 	label {
	// 		margin-bottom: 0;
	// 		font-weight: bold;
	// 		color: $grey;
	// 	}
	// 	input {
	// 		width: 100%;
	// 		font-size: 1.25rem;
	// 		padding: 0.25em 0.5em;
	// 		border: 1px solid $grey-border;
	// 		border-radius: 5px;
	// 		outline: none;
	// 		transition: all 0.3s;
	// 		background: $white;

	// 		&::placeholder {
	// 			color: $grey-light;
	// 			font-size: 1rem;
	// 		}
	// 		&:focus {
	// 			border-color: $grey;
	// 		}
	// 	}
	// 	select {
	// 		width: 100%;
	// 		height: 42px;
	// 		font-size: 1.25rem;
	// 		padding: 0 0.5em;
	// 		border: 1px solid $grey-border;
	// 		border-radius: 5px;
	// 		outline: none;
	// 		transition: all 0.3s;
	// 		background: $white;

	// 		&::placeholder {
	// 			color: $grey-light;
	// 			font-size: 1rem;
	// 		}
	// 		&:focus {
	// 			border-color: $grey;
	// 		}
	// 	}
	// }

	// .form-2 {
	// 	.input-control {
	// 		margin-bottom: 2em;
	// 	}
	// 	label {
	// 		width: 100%;
	// 		text-align: left;
	// 		color: $grey;
	// 		font-weight: bold;
	// 	}

	// 	input {
	// 		width: 100%;
	// 		font-size: 1.25rem;
	// 		padding: 0.25em 0;
	// 		border: none;
	// 		border-bottom: 1px solid $border;
	// 		outline: none;
	// 		transition: all 0.3s;
	// 		background: $white;

	// 		&::placeholder {
	// 			color: $grey-light;
	// 			font-size: 1rem;
	// 		}
	// 		&:focus {
	// 			margin-bottom: -1px;
	// 			border-bottom: 2px solid $blue-light;
	// 		}
	// 	}

	// 	textarea {
	// 		margin-top: 0.5em;
	// 		border: 1px solid $border;
	// 		border-radius: 5px;
	// 		font-family: Arial, sans-serif;
	// 		font-size: 1.25rem;
	// 		background: $white;

	// 		&::placeholder {
	// 			color: $grey-light;
	// 			font-size: 1rem;
	// 		}
	// 	}

	// 	.image-upload {
	// 		margin-top: 0.25em;
	// 	}

	// 	select {
	// 		margin-top: 0.25em;
	// 		height: 34px;
	// 		padding: 5px 0;
	// 		border: 1px solid $border;
	// 		border-radius: 5px;
	// 		font-family: Arial, sans-serif;
	// 		font-size: 1.25rem;
	// 		background: $white;
	// 	}
		
	// }

	// ERROR
	.has-error {
        label {
            color: $color-error;
        }
		input, textarea, .image-upload {
			border-color: $color-error;
		}

		.input-error-message {
			display: block;
		}
	}
	.input-error-message {
		display: none;
		margin-top: 0.25em;
		text-align: left;
		color: $color-error;
		font-size: 0.75rem;
	}
</style>