import React, { useState } from "react";
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

function Editor({ displayName, language, value, onChange }) {

    function handleChange(editor, data, value) {
        onChange(value);
    }
    const [open, setopen] = useState(true);

    return (
        <div className={`editor-container ${open ? '' : ' collapsed'}`}>
            <div className="editor-title">
                {displayName}

                <button
                    type="button"
                    className="expand-collapse-button"
                    onClick={() =>
                        setopen(prevopen => !prevopen)}>
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>

            </div>

            {/* onBeforeChange === onChange */}
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                // options are from the code-mirror library
                options={{
                    lineWrapper: true,
                    lint: true,
                    mode: { language },
                    theme: 'material',
                    lineNumbers: true
                }}
            />

        </div>
    )
}

export default Editor;