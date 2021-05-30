import Form from "./Form";

const Create = () => {
    const fetchMethod = (data) => fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <Form fetchMethod={fetchMethod} blogState={{}} action={"Delete"}/>
        </div>
    );
}

export default Create;