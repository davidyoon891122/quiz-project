import React from "react";
import "./Progress.css"
export function Progress({ page, maxPage }) {
    return (
        <div className="progress">
            <div className="page">
                {page - 1}/{maxPage}
            </div>
            <div className="gauge">
                <span className="fill" style={{width: `${page / maxPage * 100}%`}}></span>
            </div>
        </div>
    )
}