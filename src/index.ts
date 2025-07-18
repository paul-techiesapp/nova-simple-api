import express from 'express';
import cors from 'cors';
import userRoutes from './modules/users/user.route';
import postRoutes from './modules/posts/post.routes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.get('/health', (req, res) => {
    res.json({ status: "ok" });
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT=${PORT}`);
})