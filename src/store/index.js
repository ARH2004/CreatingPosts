import {createStore} from "vuex";
import {postModule} from "@/store/PostModule";

export default createStore({
    state: {
      isAuth: false,
    },
    modules: {
        post: postModule
    }
})