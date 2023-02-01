<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input v-model="searchQuery" placeholder="Поиск..." v-focus />
        <div class="app__btns">
            <my-button @click="showDialog">Добавить пост</my-button>
            <my-select v-model="selectedSort" :options="sortOptions" />
        </div>
        <my-dialog v-model:show="dialogVisble" @click="hideDialog">
            <!-- Кусок, который создает посты -->
            <!--  -->
            <PostFrom @create="createPost"></PostFrom>
        </my-dialog>
        <!-- Кусок, который отрисовывает список постов -->
        <PostList @remove="removePost" :posts="sortedAndSearch" v-if="!isPOstLoading"></PostList>
        <h3 v-else>Идет загрузка...</h3>
        <div v-intersection="loadMorePosts" ref="observer" class="observer"></div>
    </div>
</template>
<script>
import PostList from '@/components/PostList.vue'
import PostFrom from '@/components/PostForm.vue'
import MySelect from '@/components/UI/MySelect.vue'
import MyInput from '@/components/UI/MyInput.vue'
import axios from 'axios'
import MyDialog from '@/components/UI/MyDialog.vue'
import MyButton from '@/components/UI/MyButton.vue'
export default {
    components: {
        PostList,
        PostFrom,
        MySelect,
        MyInput,
        MyDialog,
        MyButton,
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
            sortOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По содержимому' },
            ]
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
            this.dialogVisble = false
        },
        removePost(post) {
            this.posts = this.posts.filter(el => el.id !== post.id)
        },
        hideDialog() {
            this.$emit('update:show', false)
        },
        showDialog() {
            this.dialogVisble = true
        },
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = response.data;
            } catch (e) {
                alert('Ошибка')
            } finally {
                this.isPostsLoading = false;
            }
        },
        async loadMorePosts() {
            try {
                this.page += 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                alert('Ошибка')
            }
        },
    },
    mounted() {
        this.fetchPosts()
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting && this.page < this.totalPages) {
                this.loadMorePosts()
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    },
    computed: {
        sortedPost() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        sortedAndSearch() {
            return this.sortedPost.filter(post => post.title.toUpperCase().includes(this.searchQuery.toUpperCase()))
        }
    },
    watch: {
    }
}
</script>
<style lang="scss">
form {
    display: flex;
    flex-direction: column;
}


.cont {
    padding: 20px 0px;
}

.app__btns {
    display: flex;
    justify-content: space-between;
}

.observer {
    padding-top: 15px;
}
</style>