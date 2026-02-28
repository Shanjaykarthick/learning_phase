import React from "react";

const Table = () =>{
    
        function change() {
            
            console.log(Table)
        }
    return(
        <>
        <div className="table"> 
        <table>
            <thead>
                <tr>
                    <th>property</th>
                    <th>state</th>
                    <th>props</th>
                </tr>
            </thead>
            </table>
            </div>
            </>
    )
}
export default Table;