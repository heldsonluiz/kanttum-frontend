<template>
  <div class="container">
    <loading v-show="this.loading"></loading>
    <div class="avatar">
      <img src="./../assets/chico.jpg" alt="">
    </div>
    <div class="name">
      <p>Como você avalia a participação do mentor <b>Geovane Rodrigues</b> durante o ciclo de
        formação que você participou?</p>
    </div>
    <div class="estrela">
      <star-rating v-model="rating" :show-rating=false :rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]">
      </star-rating>
    </div>
    <div class="comentario">
      <label for="comentario">
        Deixe seu comentário
      </label>
      <textarea name="comentario" v-model="message"></textarea>
      <div class="comentario__detalhes">
        <div class="comentario__detalhes--error">
          <span v-show="this.message.length < 4">
            A mensagem deve possuir no mínimo 4 e no máximo 1000 caracteres
          </span>
        </div>
        <div class="comentario__detalhes--count">{{this.message.length}} / 1000</div>
      </div>
      <button class="button" @click="submit()">Avaliar mentor e finalizar ciclo de formação</button>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'
import StarRating from 'vue-star-rating'
import Loading from '@/components/Loading'

export default {
  name: 'avaliacao',
  components: {
    Loading,
    StarRating
  },

  data () {
    return {
      message: '',
      rating: null,
      loading: false
    }
  },

  watch: {
    rating () {
      this.setRating(this.rating)
    },

    message () {
      setTimeout(() => {
        this.setMessage(this.message)
      }, 1500)
    }
  },

  methods: {
    ...mapActions([
      'setRating',
      'setMessage',
      'setSubmitStatus'
    ]),

    ...mapGetters([
      'getRating',
      'getMessage',
      'getSubmitStatus'
    ]),

    submit () {
      this.$v.$touch()

      this.loading = true

      if (this.$v.$invalid) {
        window.alert('A mensagem deve possuir no mínimo 4 e no máximo 1000 caracteres')
        this.loading = false
      } else {
        const params = {
          fields: {
            user_name: { stringValue: 'Heldson Luiz da Silva' },
            comment: { stringValue: this.getMessage() },
            value: { integerValue: this.getRating() }
          }
        }
        this.axios.post('https://firestore.googleapis.com/v1beta1/projects/teste-dev-api/databases/(default)/documents/rates', params)
          .then(response => {
            this.loading = false
            return response.data.fields
          })
          .then(avaliation => {
            this.setRating(avaliation.value.integerValue)
            this.setMessage(avaliation.value.stringValue)
            setTimeout(window.alert('Avaliação enviada com sucesso'), 1000)
          })
          .catch(e => {
            this.loading = false
            const error = e.response.data.error
            console.log(error.status, error.message)
            window.alert('Ocorreu um erro ao enviar a sua avaliação')
          })
      }
    }
  },

  validations: {
    message: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  align-content start
  background-color #ffffff
  border-radius 4px
  box-shadow 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2)
  display flex
  flex-wrap wrap
  height 585px
  justify-content center
  margin 20px auto
  padding 20px
  width 640px

.avatar
  height 96px
  width 96px
  >img
    border-radius 50%
    width 100%

.name
  color #616161
  font-size 16px
  font-weight 500
  line-height 1.25
  margin 13px
  text-align center

.estrela
  margin 13px

.comentario
  border solid 1px #eeeeee
  border-radius 4px
  margin 13px 0
  padding 20px
  width 100%

  &__detalhes
    display flex
    font-size 12px
    justify-content space-between

    &--count
      color #bdbdbd
      text-align right

    &--error
      color red

  label
    color #9e9e9e
    display block
    font-size 13px
    font-weight bold
    padding-bottom 20px
    text-transform uppercase

  textarea
    border solid 1px #eeeeee
    border-radius 4px
    color #757575
    font-family 'Varela Round', sans-serif
    font-size 16px
    font-weight 500
    height 110px
    letter-spacing 0px
    line-height 1.38
    width 100%

.button
  background-color #00af7e
  border none
  border-radius 3px
  color #ffffff
  cursor pointer
  display block
  font-size 14px
  font-weight bold
  line-height 1.43
  margin-top 26px
  padding 13px
  text-align center
  text-transform uppercase
  width 100%
</style>
