import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Form = ({ fetchMethod, blogState: { title: titleState, body: bodyState, author: authorState }, action }) => {
    const [title, setTitle] = useState(titleState || '');
    const [body, setBody] = useState(bodyState || '');
    const [author, setAuthor] = useState(authorState || 'Mario');
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog = { title, body, author };
        fetchMethod(blog)
            .then(() => {
                console.log('new blog added');
                setIsPending(false);
                history.push('/');
            });
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Blog title</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Blog body</label>
            <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            <label>Blog Author</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                <option value="Mario">Mario</option>
                <option value="Yoshi">Yoshi</option>
            </select>
            {!isPending && <button>{action} Blog</button>}
            {isPending && <button disabled>Adding Blog...</button>}
        </form>
    );
}

export default Form;