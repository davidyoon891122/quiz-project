import React from "react";

export function Progress({ page, maxPage }) {
    return (
        <>
            <div>
             {page}/{maxPage}
            </div>
            <div className="progress">
                <div className="gauge"></div>
            </div>
        </>
    )
}