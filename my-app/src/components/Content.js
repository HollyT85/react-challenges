import React from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from posts.json

function Content() {

    return (
    <div>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
            <p>Content Goes Here</p>
        </div>
    </div>
    )
}

export default Content