import { Post } from "./post.interface";

let posts: Post[] = [
    {
        id: 1,
        content: "Amazing hike at sunrise! 🌅 #hiking #nature",
        userId: 1,
        thumbnail: "https://picsum.photos/150/150?random=1"
    },
    {
        id: 2,
        content: "Homemade pasta success! 🍝 #cooking #homemade",
        userId: 2,
        thumbnail: "https://picsum.photos/150/150?random=2"
    },
    {
        id: 3,
        content: "Coffee shop productivity ☕ #coffee #work",
        userId: 1,
        thumbnail: "https://picsum.photos/150/150?random=3"
    },
    {
        id: 4,
        content: "Finished great book! 📚 #reading #books",
        userId: 2,
        thumbnail: "https://picsum.photos/150/150?random=4"
    },
    {
        id: 5,
        content: "Beach day with friends! 🏖️ #beach #friends",
        userId: 1,
        thumbnail: "https://picsum.photos/150/150?random=5"
    },
    {
        id: 6,
        content: "Late night coding win! 💻 #coding #dev",
        userId: 2,
        thumbnail: "https://picsum.photos/150/150?random=6"
    },
    {
        id: 7,
        content: "Farmers market haul! 🍓 #local #fresh",
        userId: 1,
        thumbnail: "https://picsum.photos/150/150?random=7"
    },
    {
        id: 8,
        content: "LOTR marathon Sunday! 🎬 #movies #lotr",
        userId: 2,
        thumbnail: "https://picsum.photos/150/150?random=8"
    },
    {
        id: 9,
        content: "New guitar day! 🎸 #guitar #music",
        userId: 1,
        thumbnail: "https://picsum.photos/150/150?random=9"
    },
    {
        id: 10,
        content: "Homemade cookies! 🍪 #baking #cookies",
        userId: 2,
        thumbnail: "https://picsum.photos/150/150?random=10"
    }
];

export const getPosts = () => posts;
export const setPosts = (newPosts: Post[]) => {
    posts = newPosts;
}