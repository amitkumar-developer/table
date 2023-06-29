import React from "react";

function Original(props){
    const data = props.data;
    const Keys = Object.keys(data[0]);
    /*
    { data.forEach((row, i) => {
                        console.log(row);
                        return (
                            <div>{row}</div>
                        )
                    }) }
                    
                    */
    return (
        <div className="row">
            <h2 className="my-3 bg-danger-subtle py-3 text-center">Original</h2>
            <table class="table">
                <thead>
                    <tr>{Keys.map((key, i) => (<th>{key}</th>))}</tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default Original;