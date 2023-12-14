import { createRouter, createWebHistory } from "vue-router";
// ページ一覧
import Home from "../../views/pages/home.vue";
import Notfound from "../../views/pages/notfound.vue";
import UserManager from "../../views/pages/UserManager.vue";
import PostManager from "../../views/pages/PostManager.vue";

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", name: "HOME", component: Home },
        { path: "/users", name: "ユーザ管理", component: UserManager },
        { path: "/posts", name: "投稿管理", component: PostManager },
        // どれにもマッチしなかった場合
        { path: "/:pathMatch(.*)*", name: "Not Found", component: Notfound },
    ],
});
