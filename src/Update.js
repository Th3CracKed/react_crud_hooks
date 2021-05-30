import Form from "./Form";
import { useParams } from 'react-router-dom';
import useFetch from "./useFetch";

const Update = () => {
    const { id } = useParams();
    const fetchMethod = (data) => fetch('http://localhost:8000/blogs/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const { data: blogState, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div className="update">
            <h2>Update Blog</h2>
            {error && <div>{error} </div>}
            { isPending && <div>Loading...</div>}
            { !isPending && <Form fetchMethod={fetchMethod} blogState={blogState} action={"Update"}/>}
        </div>
    );
}

export default Update;