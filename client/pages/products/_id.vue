<template>
  <div>
    Заголовок : {{ this.item.title }} <br>
    Картинка :
    <img :src="this.item.imageUrl" alt="" />
    <br>
    Описание1 : {{ this.item.description }} <br>
    Описание2 : {{ this.item.price }}<br>
    Количество : {{ this.item.amount }}<br>
    Категория : {{ this.item.category }}<br>
    <input type="text" v-model="model.description"/>
    <input type="text"  v-model="model.title"/>
    <button @click="Createcomments">добавить коммент</button>
    <Comment
      v-for="(comment, key) in comments"
      :key="key"
      :title="comment.title"
      :description="comment.description"
    />
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import MevnHeader from "../../components/layouts/Header.vue";
import Comment from "../../components/Comment.vue";
export default {
  name: "App",
   layout: 'unauthorized',
  components: {
    MevnHeader,
    Comment,
  },
  data: () => ({
    model: {
      title: "155",
      description: "155",
    },
  }),
  async mounted() {
    await this.fetchItem(this.$route.params.id);
    await this.fetchComments();
    console.log(this.item);
    console.log(this.comments);
    console.log(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      fetchItem: `products/fetchOne`,
      fetchComments: `comments/fetchAll`,
      createComment: `comments/create`,
      async Createcomments() {
        await this.createComment(this.model);
            await this.fetchComments();
          console.log(this.comments);
      },
    }),
  },
  computed: {
    ...mapGetters({
      item: `products/item`,
      comments: `comments/items`,
    }),
  },
};
</script>
