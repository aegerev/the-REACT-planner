import React, {Button, useState} from "react";

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        event.preventDefault();
    }

    function expand(){
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
            {isExpanded && (
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder= "Title"
                    />
            )}

            <textarea 
                name="content"
                onClick={expand}
                onChange={note.content}
                placeholder="Start Writing Here."
                row={isExpanded ? 4 : 1}
            />

            <Button onClick={submitNote}>+</Button>
            </form>
        </div>
    )
}

export default CreateArea;